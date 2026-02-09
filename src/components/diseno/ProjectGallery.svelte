<script lang="ts">
  import { onMount } from "svelte";
  import ThreeViewer from "./ThreeViewer.svelte";

  // Import texture assets
  import texture1 from "../../assets/SlideImages/elemento 3d.jpg";
  import texture2 from "../../assets/SlideImages/Florero.jpg";
  import texture3 from "../../assets/SlideImages/shellby.png";

  // Import 3D models as URLs
  import coffeeCupModelUrl from "../../assets/coffee-cup-model.fbx?url";
  import tshirtModelUrl from "../../assets/tshirt.glb?url";

  let mounted = false;
  let activeTab = 0;
  let currentTexture: string | null = null; // State for selected texture

  const projects = [
    {
      id: 0,
      title: "Proyecto Alpha",
      description: "Visualización de prototipo geométrico básico.",
      modelType: "cube" as const,
      modelUrl: undefined,
      color: "#4f46e5", // Indigo
      textures: [
        { name: "Sandía", url: texture1.src },
        { name: "Flores", url: texture2.src },
      ],
    },
    {
      id: 1,
      title: "Proyecto Beta",
      description: "Esfera de alta fidelidad con material reflectante.",
      modelType: "sphere" as const,
      modelUrl: undefined,
      color: "#ec4899", // Pink
      textures: [
        { name: "Coche", url: texture3.src },
        { name: "Sandía", url: texture1.src },
      ],
    },
    {
      id: 2,
      title: "Taza de Café",
      description: "Modelo 3D detallado de taza de café en formato FBX.",
      modelType: "fbx" as const,
      modelUrl: coffeeCupModelUrl,
      color: "#8b4513", // Café
      textures: [
        { name: "Porcelana", url: texture2.src },
        { name: "Metal", url: texture1.src },
      ],
    },
    {
      id: 3,
      title: "Camiseta 3D",
      description: "Modelo de camiseta en formato GLB con alta resolución.",
      modelType: "gltf" as const,
      modelUrl: tshirtModelUrl,
      color: "#ffffff", // Blanco
      textures: [
        { name: "Algodón", url: texture3.src },
        { name: "Estampado", url: texture2.src },
      ],
    },
  ];

  // Reset texture when tab changes
  $: if (activeTab !== undefined) {
    currentTexture = null;
  }

  onMount(() => {
    mounted = true;
  });
</script>

<section class="py-12 bg-white">
  <div class="container mx-auto px-4">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-extrabold text-gray-900">
        Galería Interactiva 3D
      </h2>
      <p class="mt-4 text-lg text-gray-600">
        Explora nuestros últimos diseños en un entorno tridimensional.
      </p>
    </div>

    <div class="flex flex-col md:flex-row gap-8 items-start">
      <!-- Tabs / Sidebar -->
      <div class="w-full md:w-1/3 space-y-4">
        {#each projects as project, index}
          <button
            class="w-full text-left p-6 rounded-xl transition-all duration-300 border-2 {activeTab ===
            index
              ? 'border-blue-600 bg-blue-50 shadow-md'
              : 'border-transparent bg-gray-50 hover:bg-gray-100'}"
            on:click={() => (activeTab = index)}
          >
            <h3
              class="text-xl font-bold {activeTab === index
                ? 'text-blue-700'
                : 'text-gray-800'}"
            >
              {project.title}
            </h3>
            <p class="mt-2 text-sm text-gray-600">
              {project.description}
            </p>
          </button>
        {/each}
      </div>

      <!-- Viewer Area -->
      <div class="w-full md:w-2/3">
        <div
          class="h-[500px] bg-gray-50 rounded-2xl p-4 border border-gray-200 shadow-lg relative"
        >
          {#if mounted}
            {#key activeTab}
              <ThreeViewer
                modelType={projects[activeTab].modelType}
                modelUrl={projects[activeTab].modelUrl}
                modelColor={projects[activeTab].color}
                textureUrl={currentTexture}
              />
            {/key}
          {:else}
            <div
              class="w-full h-full flex items-center justify-center text-gray-400"
            >
              <p>Cargando vista 3D...</p>
            </div>
          {/if}

          <div
            class="absolute bottom-6 right-6 bg-white/80 backdrop-blur-sm p-3 rounded-lg text-xs text-gray-500 shadow-sm border border-gray-100"
          >
            Interactúa con el modelo 3D
          </div>
        </div>

        <!-- Texture Gallery -->
        {#if mounted && projects[activeTab].textures}
          <div class="mt-4 flex gap-4 overflow-x-auto pb-2">
            <button
              class="w-16 h-16 rounded-lg border-2 overflow-hidden transition-all {currentTexture ===
              null
                ? 'border-blue-500 scale-105'
                : 'border-gray-200 hover:border-gray-400'}"
              on:click={() => (currentTexture = null)}
              title="Sin textura"
            >
              <div
                class="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-center text-gray-500 font-medium"
              >
                Default
              </div>
            </button>

            {#each projects[activeTab].textures as tex}
              <button
                class="w-16 h-16 rounded-lg border-2 overflow-hidden transition-all {currentTexture ===
                tex.url
                  ? 'border-blue-500 scale-105'
                  : 'border-gray-200 hover:border-gray-400'}"
                on:click={() => (currentTexture = tex.url)}
                title={tex.name}
              >
                <img
                  src={tex.url}
                  alt={tex.name}
                  class="w-full h-full object-cover"
                />
              </button>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
