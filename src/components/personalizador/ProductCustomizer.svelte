<script lang="ts">
  import { onMount } from "svelte";
  import ThreeViewer from "../diseno/ThreeViewer.svelte";

  // Import texture assets
  import texture1 from "../../assets/SlideImages/elemento 3d.jpg";
  import texture2 from "../../assets/SlideImages/Florero.jpg";
  import texture3 from "../../assets/SlideImages/shellby.png";

  // Import 3D models as URLs
  import coffeeCupModelUrl from "../../assets/coffee-cup-model.fbx?url";
  import tshirtModelUrl from "../../assets/tshirt.glb?url";

  let mounted = false;
  
  // Product options
  const products = [
    { id: "taza", name: "Taza Premium (Porcelana)", modelType: "fbx" as const, modelUrl: coffeeCupModelUrl, basePrice: 85, icon: "☕" },
    { id: "playera", name: "Playera Corporativa (Algodón)", modelType: "gltf" as const, modelUrl: tshirtModelUrl, basePrice: 165, icon: "👕" },
    { id: "termo", name: "Termo Deportivo (Acero Inox)", modelType: "cylinder" as const, modelUrl: null, basePrice: 135, icon: "🥤" },
    { id: "lapicero", name: "Bolígrafo / Lapicero Corporativo", modelType: "cylinder" as const, modelUrl: null, basePrice: 15, icon: "🖊️" },
    { id: "frazada", name: "Frazada Confort (Frazada/Cylinder)", modelType: "sphere" as const, modelUrl: null, basePrice: 280, icon: "🛌" },
    { id: "cuadro", name: "Cuadro Canvas Personalizado", modelType: "cube" as const, modelUrl: null, basePrice: 195, icon: "🖼️" },
    { id: "libreta", name: "Libreta / Papelería Institucional", modelType: "cube" as const, modelUrl: null, basePrice: 55, icon: "📓" }
  ];

  let selectedProductId = "taza";
  $: selectedProduct = products.find(p => p.id === selectedProductId) || products[0];

  // Base colors
  const colorPresets = [
    { name: "Blanco Mate", hex: "#ffffff" },
    { name: "Negro Obsidiana", hex: "#18181b" },
    { name: "Azul Cobalto", hex: "#1d4ed8" },
    { name: "Rosa Chicle", hex: "#ec4899" },
    { name: "Verde Esmeralda", hex: "#059669" },
    { name: "Rojo Escarlata", hex: "#dc2626" }
  ];
  let selectedColor = "#ffffff";

  // Textures
  const texturePresets = [
    { name: "Flores Rosas", url: texture2.src },
    { name: "Arte Abstracto", url: texture1.src },
    { name: "Patrón Shelby", url: texture3.src }
  ];
  let activeTextureUrl: string | null = null;
  let customTextureName = "";

  // Custom design file upload
  let fileInput: HTMLInputElement;
  function handleFileUpload(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      customTextureName = file.name;
      // Revoke old object URL if it exists to prevent memory leaks
      if (activeTextureUrl && activeTextureUrl.startsWith("blob:")) {
        URL.revokeObjectURL(activeTextureUrl);
      }
      activeTextureUrl = URL.createObjectURL(file);
    }
  }

  function removeTexture() {
    if (activeTextureUrl && activeTextureUrl.startsWith("blob:")) {
      URL.revokeObjectURL(activeTextureUrl);
    }
    activeTextureUrl = null;
    customTextureName = "";
    if (fileInput) fileInput.value = "";
    resetTextureTransform();
  }

  // Texture transform controls
  let texOffsetX = 0;
  let texOffsetY = 0;
  let texScale = 1;
  let texRotation = 0;

  function resetTextureTransform() {
    texOffsetX = 0;
    texOffsetY = 0;
    texScale = 1;
    texRotation = 0;
  }

  // Technique selection
  const techniques = [
    { id: "sublimacion", name: "Sublimación", desc: "Impresión por calor de alta definición", icon: "🔥" },
    { id: "dtf", name: "DTF (Direct to Film)", desc: "Transfer digital flexible sobre cualquier superficie", icon: "🎞️" },
    { id: "uv", name: "Impresión UV", desc: "Tinta UV curada por luz, relieve y textura", icon: "💎" }
  ];
  let selectedTechnique = "sublimacion";

  // 3D Viewer interaction controls
  let autoRotate = true;
  let cameraPreset: "free" | "front" | "back" = "free";

  function setView(preset: "free" | "front" | "back") {
    cameraPreset = preset;
    if (preset !== "free") {
      autoRotate = false;
    }
  }

  // User location
  let userLocation = "";

  // Cotizador state
  let quantity = 50;
  
  // Calculate discount percentage
  $: discountPercent = quantity >= 500 ? 25 : quantity >= 200 ? 15 : quantity >= 50 ? 5 : 0;
  $: pricePerUnit = selectedProduct.basePrice;
  $: subtotal = pricePerUnit * quantity;
  $: discountAmount = Math.round(subtotal * (discountPercent / 100));
  $: total = subtotal - discountAmount;

  // Format currency helper
  function formatMoney(amount: number) {
    return amount.toLocaleString("es-MX", { style: "currency", currency: "MXN", minimumFractionDigits: 0 });
  }

  // Prefilled WhatsApp message
  $: selectedTechName = techniques.find(t => t.id === selectedTechnique)?.name || selectedTechnique;
  $: waMessage = encodeURIComponent(
    `Hola Insano Network, me interesa cotizar una orden personalizada de:\n` +
    `- Producto: *${selectedProduct.name}*\n` +
    `- Cantidad: *${quantity} unidades*\n` +
    `- Color base: *${selectedColor}*\n` +
    `- Técnica: *${selectedTechName}*\n` +
    `- Diseño: *${activeTextureUrl ? (customTextureName || "Textura personalizada aplicada") : "Color base sin logotipo"}*\n` +
    `- Cotización estimada: *${formatMoney(total)} MXN* (${discountPercent}% de descuento aplicado).\n` +
    (userLocation ? `- Ubicación de entrega: *${userLocation}*\n` : "") +
    `¿Me podrían dar detalles para el envío y facturación?`
  );

  onMount(() => {
    mounted = true;
  });
</script>

<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
  <!-- LEFT: Configuration Panel -->
  <div class="lg:col-span-5 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
    
    <!-- Step 1: Select Product -->
    <div class="space-y-3">
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest">1. Selecciona el Artículo</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2.5">
        {#each products as prod}
          <button
            type="button"
            class="flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-left transition-all {selectedProductId === prod.id ? 'border-blue-600 bg-blue-500/10 text-white' : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700 hover:text-white'}"
            on:click={() => { selectedProductId = prod.id; removeTexture(); }}
          >
            <span class="text-xl">{prod.icon}</span>
            <div class="min-w-0">
              <p class="text-xs font-bold truncate">{prod.name}</p>
              <p class="text-[10px] text-[#ffd600] font-semibold">Desde {formatMoney(prod.basePrice)} c/u</p>
            </div>
          </button>
        {/each}
      </div>
    </div>

    <!-- Step 2: Base Color -->
    <div class="space-y-3">
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest">2. Color del Material</h3>
      <div class="flex flex-wrap gap-2.5">
        {#each colorPresets as col}
          <button
            type="button"
            class="w-8 h-8 rounded-full border-2 transition-all relative {selectedColor === col.hex ? 'border-white scale-110 shadow-lg ring-2 ring-blue-500' : 'border-slate-800 hover:scale-105'}"
            style="background-color: {col.hex}"
            title={col.name}
            on:click={() => selectedColor = col.hex}
          >
            {#if selectedColor === col.hex}
              <span class="absolute inset-0 flex items-center justify-center text-[10px] {col.hex === '#ffffff' ? 'text-black' : 'text-white'}">✓</span>
            {/if}
          </button>
        {/each}
      </div>
    </div>

    <!-- Step 3: Technique -->
    <div class="space-y-3">
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest">3. Técnica de Aplicación</h3>
      <div class="grid grid-cols-1 gap-2">
        {#each techniques as tech}
          <button
            type="button"
            class="flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-left transition-all {selectedTechnique === tech.id ? 'border-indigo-500 bg-indigo-500/10 text-white' : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700 hover:text-white'}"
            on:click={() => selectedTechnique = tech.id}
          >
            <span class="text-lg">{tech.icon}</span>
            <div class="min-w-0">
              <p class="text-xs font-bold">{tech.name}</p>
              <p class="text-[10px] text-slate-500">{tech.desc}</p>
            </div>
            {#if selectedTechnique === tech.id}
              <span class="ml-auto text-indigo-400 text-xs">✓</span>
            {/if}
          </button>
        {/each}
      </div>
    </div>

    <!-- Step 4: Logo / Design Upload -->
    <div class="space-y-3">
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest">4. Añadir Logo o Estampado</h3>
      
      <!-- Preset Designs -->
      <div class="space-y-2">
        <span class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Diseños Preestablecidos:</span>
        <div class="flex gap-3 overflow-x-auto pb-1">
          <button
            type="button"
            class="w-14 h-14 rounded-xl border-2 overflow-hidden bg-slate-950 flex items-center justify-center shrink-0 transition-all {activeTextureUrl === null ? 'border-blue-500 scale-105 shadow' : 'border-slate-800 hover:border-slate-700'}"
            on:click={removeTexture}
          >
            <span class="text-[9px] font-bold text-slate-500">Ninguno</span>
          </button>

          {#each texturePresets as tex}
            <button
              type="button"
              class="w-14 h-14 rounded-xl border-2 overflow-hidden shrink-0 transition-all {activeTextureUrl === tex.url ? 'border-blue-500 scale-105 shadow' : 'border-slate-800 hover:border-slate-700'}"
              on:click={() => { activeTextureUrl = tex.url; customTextureName = tex.name; }}
            >
              <img src={tex.url} alt={tex.name} class="w-full h-full object-cover" />
            </button>
          {/each}
        </div>
      </div>

      <!-- Upload Custom Design -->
      <div class="pt-2 border-t border-slate-800/60 space-y-2">
        <span class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Sube tu propio Diseño (PNG/JPG):</span>
        <div class="flex items-center gap-3">
          <label class="text-xs bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-350 px-4 py-2.5 rounded-xl cursor-pointer font-bold transition-all shadow-sm">
            📁 Cargar Archivo de Diseño
            <input type="file" accept="image/*" class="hidden" bind:this={fileInput} on:change={handleFileUpload} />
          </label>
          {#if customTextureName}
            <button 
              type="button" 
              class="text-[10px] text-rose-400 hover:text-rose-300 font-bold transition-all hover:underline"
              on:click={removeTexture}
            >
              Quitar ({customTextureName.substring(0, 15)}...)
            </button>
          {:else}
            <span class="text-[10px] text-slate-600 italic">Formatos: PNG transparente recomendado</span>
          {/if}
        </div>
      </div>
    </div>

    <!-- Step 5: Calculator -->
    <div class="pt-5 border-t border-slate-800/80 space-y-4">
      <div class="flex justify-between items-center">
        <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest">5. Cantidad & Cotización</h3>
        <span class="px-2 py-0.5 text-[9px] font-extrabold bg-[#ffd600]/10 border border-[#ffd600]/20 text-[#ffd600] rounded">
          {discountPercent > 0 ? `${discountPercent}% Descuento` : "Precio Base"}
        </span>
      </div>

      <!-- Slider input -->
      <div class="space-y-1">
        <div class="flex justify-between text-xs text-slate-450 font-bold">
          <span>Unidades a Producir:</span>
          <span class="text-white font-extrabold text-sm">{quantity} pz</span>
        </div>
        <input 
          type="range" 
          min="1" 
          max="1000" 
          step="5" 
          bind:value={quantity} 
          class="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div class="flex justify-between text-[9px] text-slate-500 font-semibold uppercase tracking-wider">
          <span>Min: 1 pz</span>
          <span>50 pz (-5%)</span>
          <span>200 pz (-15%)</span>
          <span>500+ pz (-25%)</span>
        </div>
      </div>

      <!-- Calculations Card -->
      <div class="bg-slate-950 border border-slate-850 rounded-2xl p-4 space-y-2 shadow-inner text-xs">
        <div class="flex justify-between text-slate-400">
          <span>Costo Unitario Base:</span>
          <span>{formatMoney(pricePerUnit)} MXN</span>
        </div>
        <div class="flex justify-between text-slate-400">
          <span>Subtotal:</span>
          <span>{formatMoney(subtotal)} MXN</span>
        </div>
        {#if discountAmount > 0}
          <div class="flex justify-between text-emerald-400">
            <span>Descuento por Volumen ({discountPercent}%):</span>
            <span>-{formatMoney(discountAmount)} MXN</span>
          </div>
        {/if}
        <div class="border-t border-slate-850 pt-2 flex justify-between items-center text-sm font-extrabold text-white">
          <span>Total Estimado:</span>
          <span class="text-[#ffd600] text-base">{formatMoney(total)} MXN</span>
        </div>
      </div>

      <!-- WhatsApp Submit -->
      <a
        href="https://wa.me/525516849340?text={waMessage}"
        target="_blank"
        class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-655/20 active:scale-[0.98] text-sm"
      >
        <span>💬 Solicitar Cotización de Volumen</span>
      </a>
    </div>

    <!-- Step 6: Location -->
    <div class="pt-5 border-t border-slate-800/80 space-y-3">
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest">6. Ubicación de Entrega</h3>
      <div class="space-y-2">
        <div class="relative">
          <span class="absolute left-3 top-1/2 -translate-y-1/2 text-sm">📍</span>
          <input
            type="text"
            placeholder="Ingresa tu dirección o ciudad de entrega..."
            bind:value={userLocation}
            class="w-full bg-slate-950 border border-slate-800 text-white text-xs rounded-xl py-3 pl-9 pr-4 placeholder-slate-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
          />
        </div>
        {#if userLocation.length > 3}
          <div class="rounded-xl overflow-hidden border border-slate-800 shadow-lg">
            <iframe
              title="Mapa de ubicación"
              width="100%"
              height="200"
              style="border:0;"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q={encodeURIComponent(userLocation)}&output=embed"
            ></iframe>
          </div>
        {:else}
          <p class="text-[9px] text-slate-600 italic">Escribe tu ubicación para visualizar el mapa y calcular envío.</p>
        {/if}
      </div>
    </div>

  </div>

  <!-- RIGHT: Interactive 3D Canvas -->
  <div class="lg:col-span-7 flex flex-col gap-4 sticky top-28 w-full">
    <div class="h-[550px] bg-slate-950 rounded-[30px] border border-slate-850 relative p-4 flex flex-col justify-between shadow-2xl">
      <!-- Glow effect -->
      <div class="absolute inset-0 rounded-[30px] bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none z-0"></div>

      <!-- Canvas Header Overlay -->
      <div class="relative z-10 flex justify-between items-center">
        <div>
          <span class="text-[9px] px-2.5 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold uppercase tracking-wider rounded-full">
            Simulador 3D en Vivo
          </span>
          <h4 class="text-white font-bold text-sm font-outfit mt-1">{selectedProduct.name}</h4>
        </div>
        <div class="flex gap-1.5">
          <button
            type="button"
            class="text-[10px] py-1.5 px-2.5 rounded-lg border font-bold transition-all flex items-center gap-1 {cameraPreset === 'front' ? 'bg-blue-600/20 border-blue-500/40 text-blue-300' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'}"
            on:click={() => setView('front')}
          >
            👁️ Frontal
          </button>
          <button
            type="button"
            class="text-[10px] py-1.5 px-2.5 rounded-lg border font-bold transition-all flex items-center gap-1 {cameraPreset === 'back' ? 'bg-blue-600/20 border-blue-500/40 text-blue-300' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'}"
            on:click={() => setView('back')}
          >
            🔄 Trasera
          </button>
          <button
            type="button"
            class="text-[10px] py-1.5 px-2.5 rounded-lg border font-bold transition-all flex items-center gap-1 {autoRotate ? 'bg-emerald-600/20 border-emerald-500/40 text-emerald-300' : 'bg-amber-600/20 border-amber-500/40 text-amber-300'}"
            on:click={() => { autoRotate = !autoRotate; if (autoRotate) cameraPreset = 'free'; }}
          >
            {autoRotate ? '⏸ Detener' : '▶ Girar'}
          </button>
        </div>
      </div>

      <!-- Svelte Three.js Viewer -->
      <div class="flex-1 w-full h-full relative z-10 flex items-center justify-center">
        {#if mounted}
          {#key selectedProductId}
            <ThreeViewer
              modelType={selectedProduct.modelType}
              modelUrl={selectedProduct.modelUrl}
              modelColor={selectedColor}
              textureUrl={activeTextureUrl}
              textureOffsetX={texOffsetX}
              textureOffsetY={texOffsetY}
              textureScale={texScale}
              textureRotation={texRotation}
              {autoRotate}
              {cameraPreset}
            />
          {/key}
        {:else}
          <div class="text-slate-500 text-xs italic">Cargando simulador 3D...</div>
        {/if}
      </div>

      <!-- Instruction Footer Overlay -->
      <div class="relative z-10 text-center bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 p-2.5 rounded-xl text-[10px] text-slate-400 flex items-center justify-center gap-2">
        <span>🖱️</span>
        <span>Arrastra para girar • Rueda para hacer zoom • Sube tu logo a la izquierda para estamparlo</span>
      </div>
    </div>

    <!-- Texture Position Editor (only visible when a texture/logo is applied) -->
    {#if activeTextureUrl}
      <div class="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-5 shadow-xl">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center gap-2">
            <span class="text-sm">🎯</span>
            <h3 class="text-xs font-bold text-slate-300 uppercase tracking-widest">Editor de Posición del Logo</h3>
          </div>
          <button
            type="button"
            class="text-[10px] bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-400 hover:text-white font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1"
            on:click={resetTextureTransform}
          >
            ↺ Restablecer
          </button>
        </div>

        <div class="grid grid-cols-2 gap-x-6 gap-y-4">
          <!-- Offset X -->
          <div class="space-y-1.5">
            <div class="flex justify-between items-center">
              <label class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Posición X</label>
              <span class="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">{texOffsetX.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="-1"
              max="1"
              step="0.01"
              bind:value={texOffsetX}
              class="w-full h-1 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          <!-- Offset Y -->
          <div class="space-y-1.5">
            <div class="flex justify-between items-center">
              <label class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Posición Y</label>
              <span class="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">{texOffsetY.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="-1"
              max="1"
              step="0.01"
              bind:value={texOffsetY}
              class="w-full h-1 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          <!-- Scale / Zoom -->
          <div class="space-y-1.5">
            <div class="flex justify-between items-center">
              <label class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Zoom del Logo</label>
              <span class="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded">×{texScale.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="5"
              step="0.05"
              bind:value={texScale}
              class="w-full h-1 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          <!-- Rotation -->
          <div class="space-y-1.5">
            <div class="flex justify-between items-center">
              <label class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Rotación</label>
              <span class="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded">{Math.round(texRotation * (180 / Math.PI))}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="{2 * Math.PI}"
              step="0.01"
              bind:value={texRotation}
              class="w-full h-1 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>

        <p class="text-[9px] text-slate-600 mt-3 text-center italic">
          Ajusta la posición, tamaño y ángulo del logo sobre la superficie del producto.
        </p>
      </div>
    {/if}
  </div>
</div>
