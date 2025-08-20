# Implementación de Tienda Online con Medusa.js y Astro

Este documento detalla la estructura de archivos y componentes necesarios para implementar una tienda online completa utilizando Medusa.js como backend y Astro como frontend.

## Estructura de Archivos

```
src/
├── components/
│   └── shop/
│       ├── ProductCard.astro       # Tarjeta de producto para listados
│       ├── ProductGallery.astro    # Galería de imágenes para página de producto
│       ├── AddToCart.astro         # Botón y lógica para añadir al carrito
│       ├── CartItem.astro          # Elemento individual del carrito
│       ├── MiniCart.astro          # Carrito desplegable en la navegación
│       ├── CheckoutForm.astro      # Formulario de checkout
│       ├── PaymentMethods.astro    # Selección de métodos de pago
│       └── OrderSummary.astro      # Resumen de pedido
├── layouts/
│   └── ShopLayout.astro           # Layout específico para la tienda
├── lib/
│   └── medusa.js                  # Cliente de Medusa.js y funciones auxiliares
├── pages/
│   └── shop/
│       ├── index.astro             # Página principal de la tienda
│       ├── products/
│       │   ├── index.astro         # Listado de productos con filtros
│       │   └── [handle].astro      # Página de detalle de producto
│       ├── collections/
│       │   ├── index.astro         # Listado de colecciones
│       │   └── [handle].astro      # Productos de una colección específica
│       ├── cart.astro              # Página del carrito
│       ├── checkout.astro          # Página de checkout
│       ├── success.astro           # Página de confirmación de pedido
│       └── account/
│           ├── index.astro         # Panel de usuario
│           ├── orders.astro        # Historial de pedidos
│           ├── order/[id].astro    # Detalle de un pedido específico
│           ├── addresses.astro     # Gestión de direcciones
│           └── profile.astro       # Perfil de usuario
└── utils/
    └── shop/
        ├── cart.js                # Funciones para gestión del carrito
        ├── checkout.js            # Funciones para proceso de checkout
        └── products.js            # Funciones para filtrado y búsqueda de productos
```

## Componentes Principales

### 1. Cliente de Medusa.js

Archivo: `src/lib/medusa.js`

```javascript
import { createClient } from '@medusajs/medusa-js';

// Crear cliente de Medusa
const medusaUrl = import.meta.env.PUBLIC_MEDUSA_BACKEND_URL || 'http://localhost:9000';
const medusa = createClient({ baseUrl: medusaUrl, maxRetries: 3 });

// Funciones para el carrito
export async function getCart(cartId) {
  if (!cartId) return null;
  try {
    const { cart } = await medusa.carts.retrieve(cartId);
    return cart;
  } catch (error) {
    console.error('Error al obtener el carrito:', error);
    return null;
  }
}

export async function createCart() {
  try {
    const { cart } = await medusa.carts.create({});
    return cart;
  } catch (error) {
    console.error('Error al crear el carrito:', error);
    return null;
  }
}

export async function addToCart(cartId, variantId, quantity) {
  try {
    const { cart } = await medusa.carts.lineItems.create(cartId, {
      variant_id: variantId,
      quantity: quantity
    });
    return cart;
  } catch (error) {
    console.error('Error al añadir al carrito:', error);
    return null;
  }
}

// Funciones para productos
export async function getFeaturedProducts() {
  try {
    const { products } = await medusa.products.list({
      limit: 6,
      is_giftcard: false
    });
    return products;
  } catch (error) {
    console.error('Error al obtener productos destacados:', error);
    return [];
  }
}

export async function getProductByHandle(handle) {
  try {
    const { products } = await medusa.products.list({ handle });
    return products[0] || null;
  } catch (error) {
    console.error(`Error al obtener producto con handle ${handle}:`, error);
    return null;
  }
}

export async function getCollections() {
  try {
    const { collections } = await medusa.collections.list();
    return collections;
  } catch (error) {
    console.error('Error al obtener colecciones:', error);
    return [];
  }
}

export default medusa;
```

### 2. Tarjeta de Producto

Archivo: `src/components/shop/ProductCard.astro`

```astro
---
const { product } = Astro.props;

// Obtener la primera imagen del producto o usar una imagen por defecto
const thumbnail = product.thumbnail || '/img/placeholder-product.png';

// Obtener el precio más bajo de las variantes
const lowestPrice = product.variants.reduce((min, variant) => {
  const price = variant.prices.find(p => p.currency_code === 'eur')?.amount || 0;
  return price < min || min === 0 ? price : min;
}, 0);

// Formatear el precio
const formattedPrice = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR'
}).format(lowestPrice / 100);
---

<div class="product-card bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
  <a href={`/shop/products/${product.handle}`} class="block">
    <div class="relative pb-[100%] overflow-hidden">
      <img 
        src={thumbnail} 
        alt={product.title} 
        class="absolute inset-0 w-full h-full object-cover"
      />
    </div>
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
      <p class="text-sm text-gray-500 h-10 overflow-hidden">{product.description}</p>
      <div class="mt-2 flex justify-between items-center">
        <span class="text-xl font-bold text-primary">{formattedPrice}</span>
        <button 
          class="add-to-cart-btn bg-primary text-white px-3 py-1 rounded-full text-sm hover:bg-primary-dark transition-colors"
          data-product-id={product.id}
          data-variant-id={product.variants[0].id}
        >
          Añadir
        </button>
      </div>
    </div>
  </a>
</div>

<script>
  // Función para obtener o crear un carrito
  async function getOrCreateCart() {
    // En desarrollo, usamos localStorage para simular el carrito
    // En producción, esto se conectaría con Medusa.js
    let cartId = localStorage.getItem('medusa_cart_id');
    
    if (!cartId) {
      // Simulación de creación de carrito
      cartId = 'cart_' + Math.random().toString(36).substring(2, 15);
      localStorage.setItem('medusa_cart_id', cartId);
    }
    
    return cartId;
  }

  // Añadir evento a los botones de añadir al carrito
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const variantId = button.dataset.variantId;
      const productId = button.dataset.productId;
      
      // Obtener o crear carrito
      const cartId = await getOrCreateCart();
      
      // Añadir al carrito (simulado en desarrollo)
      // En producción, esto llamaría a la API de Medusa
      const cartItems = JSON.parse(localStorage.getItem('cart_items') || '[]');
      
      // Comprobar si el producto ya está en el carrito
      const existingItem = cartItems.find(item => item.variant_id === variantId);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartItems.push({
          id: 'item_' + Math.random().toString(36).substring(2, 9),
          product_id: productId,
          variant_id: variantId,
          quantity: 1
        });
      }
      
      localStorage.setItem('cart_items', JSON.stringify(cartItems));
      
      // Mostrar notificación
      alert('Producto añadido al carrito');
    });
  });
</script>
```

### 3. Página Principal de la Tienda

Archivo: `src/pages/shop/index.astro`

```astro
---
import ShopLayout from '../../layouts/ShopLayout.astro';
import ProductCard from '../../components/shop/ProductCard.astro';
import { getFeaturedProducts, getCollections } from '../../lib/medusa';

// En desarrollo, usamos datos de ejemplo
// En producción, esto obtendría datos reales de Medusa.js
const featuredProducts = await getFeaturedProducts().catch(() => []);
const collections = await getCollections().catch(() => []);

// Datos de ejemplo para desarrollo
const exampleProducts = featuredProducts.length > 0 ? featuredProducts : [
  {
    id: 'prod_01',
    title: 'Camiseta Premium',
    description: 'Camiseta de algodón 100% orgánico con diseño exclusivo',
    thumbnail: '/img/shop/product-1.jpg',
    handle: 'camiseta-premium',
    variants: [
      {
        id: 'variant_01',
        prices: [{ amount: 2990, currency_code: 'eur' }]
      }
    ]
  },
  {
    id: 'prod_02',
    title: 'Sudadera Clásica',
    description: 'Sudadera con capucha y bolsillo canguro',
    thumbnail: '/img/shop/product-2.jpg',
    handle: 'sudadera-clasica',
    variants: [
      {
        id: 'variant_02',
        prices: [{ amount: 4990, currency_code: 'eur' }]
      }
    ]
  },
  // Más productos de ejemplo...
];

const exampleCollections = collections.length > 0 ? collections : [
  { id: 'col_01', title: 'Novedades', handle: 'novedades' },
  { id: 'col_02', title: 'Ofertas', handle: 'ofertas' },
  { id: 'col_03', title: 'Básicos', handle: 'basicos' },
];

const products = featuredProducts.length > 0 ? featuredProducts : exampleProducts;
---

<ShopLayout title="Tienda Online | Insano">
  <!-- Hero Section -->
  <section class="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Nuestra Tienda Online</h1>
        <p class="text-xl mb-8">Descubre nuestra colección de productos exclusivos</p>
        <a href="/shop/products" class="bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
          Ver Catálogo
        </a>
      </div>
    </div>
  </section>

  <!-- Featured Products -->
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Productos Destacados</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.slice(0, 3).map(product => (
          <ProductCard product={product} />
        ))}
      </div>
      <div class="text-center mt-12">
        <a href="/shop/products" class="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-colors">
          Ver Todos los Productos
        </a>
      </div>
    </div>
  </section>

  <!-- Categories -->
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Categorías</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {exampleCollections.map(collection => (
          <a href={`/shop/collections/${collection.handle}`} class="block group">
            <div class="bg-gray-200 rounded-lg overflow-hidden h-64 relative">
              <div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                <h3 class="text-white text-2xl font-bold">{collection.title}</h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="py-16 bg-gray-800 text-white">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6">¿Buscas algo especial?</h2>
        <p class="text-xl mb-8">Contáctanos para pedidos personalizados o consultas sobre nuestros productos</p>
        <a href="/contacto" class="bg-white text-gray-800 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
          Contactar
        </a>
      </div>
    </div>
  </section>
</ShopLayout>
```

### 4. Mini Carrito

Archivo: `src/components/shop/MiniCart.astro`

```astro
---
// Este componente muestra un resumen del carrito en la navegación
---

<div class="mini-cart-container relative">
  <button id="mini-cart-toggle" class="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
    <span id="cart-count" class="ml-1 text-sm font-medium">0</span>
  </button>
  
  <div id="mini-cart" class="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl z-50 hidden">
    <div class="p-4 border-b">
      <h3 class="font-bold text-lg">Tu Carrito</h3>
    </div>
    
    <!-- Estado de carga -->
    <div id="cart-loading" class="p-4 text-center">
      <p>Cargando carrito...</p>
    </div>
    
    <!-- Carrito vacío -->
    <div id="cart-empty" class="p-4 text-center hidden">
      <p>Tu carrito está vacío</p>
      <a href="/shop/products" class="mt-2 inline-block text-primary hover:underline">Ver productos</a>
    </div>
    
    <!-- Elementos del carrito -->
    <div id="cart-items" class="max-h-80 overflow-y-auto hidden">
      <!-- Los elementos del carrito se insertarán aquí dinámicamente -->
    </div>
    
    <!-- Resumen y botones -->
    <div id="cart-summary" class="p-4 border-t hidden">
      <div class="flex justify-between font-bold mb-4">
        <span>Total:</span>
        <span id="cart-total">0,00 €</span>
      </div>
      <div class="flex flex-col space-y-2">
        <a href="/shop/cart" class="bg-primary text-white text-center py-2 px-4 rounded hover:bg-primary-dark transition-colors">
          Ver Carrito
        </a>
        <a href="/shop/checkout" class="bg-gray-800 text-white text-center py-2 px-4 rounded hover:bg-gray-700 transition-colors">
          Finalizar Compra
        </a>
      </div>
    </div>
  </div>
</div>

<script>
  // Elementos del DOM
  const miniCartToggle = document.getElementById('mini-cart-toggle');
  const miniCart = document.getElementById('mini-cart');
  const cartCount = document.getElementById('cart-count');
  const cartLoading = document.getElementById('cart-loading');
  const cartEmpty = document.getElementById('cart-empty');
  const cartItems = document.getElementById('cart-items');
  const cartSummary = document.getElementById('cart-summary');
  const cartTotal = document.getElementById('cart-total');
  
  // Función para formatear precio
  function formatPrice(amount) {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount / 100);
  }
  
  // Función para actualizar el carrito
  async function updateCart() {
    // Mostrar estado de carga
    cartLoading.classList.remove('hidden');
    cartEmpty.classList.add('hidden');
    cartItems.classList.add('hidden');
    cartSummary.classList.add('hidden');
    
    // En desarrollo, obtenemos datos del localStorage
    // En producción, esto obtendría datos de Medusa.js
    const cartId = localStorage.getItem('medusa_cart_id');
    const storedItems = JSON.parse(localStorage.getItem('cart_items') || '[]');
    
    // Actualizar contador del carrito
    const itemCount = storedItems.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = itemCount.toString();
    
    // Si no hay elementos, mostrar carrito vacío
    if (storedItems.length === 0) {
      cartLoading.classList.add('hidden');
      cartEmpty.classList.remove('hidden');
      return;
    }
    
    // Limpiar elementos anteriores
    cartItems.innerHTML = '';
    
    // Calcular total (simulado en desarrollo)
    let total = 0;
    
    // Añadir elementos al carrito
    storedItems.forEach(item => {
      // En desarrollo, usamos datos de ejemplo
      // En producción, esto obtendría datos reales de Medusa.js
      const itemPrice = Math.floor(Math.random() * 5000) + 1000; // Precio aleatorio entre 10-60€
      total += itemPrice * item.quantity;
      
      const itemElement = document.createElement('div');
      itemElement.className = 'p-4 border-b flex items-center';
      itemElement.innerHTML = `
        <div class="w-16 h-16 bg-gray-200 rounded mr-4"></div>
        <div class="flex-grow">
          <h4 class="font-medium">Producto ${item.variant_id}</h4>
          <div class="flex items-center mt-1">
            <button class="decrease-quantity text-gray-500 hover:text-gray-700" data-item-id="${item.id}">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
              </svg>
            </button>
            <span class="mx-2">${item.quantity}</span>
            <button class="increase-quantity text-gray-500 hover:text-gray-700" data-item-id="${item.id}">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
        <div class="text-right">
          <p class="font-medium">${formatPrice(itemPrice)}</p>
          <button class="remove-item text-red-500 hover:text-red-700 text-sm mt-1" data-item-id="${item.id}">
            Eliminar
          </button>
        </div>
      `;
      
      cartItems.appendChild(itemElement);
    });
    
    // Actualizar total
    cartTotal.textContent = formatPrice(total);
    
    // Mostrar elementos y resumen
    cartLoading.classList.add('hidden');
    cartItems.classList.remove('hidden');
    cartSummary.classList.remove('hidden');
    
    // Añadir eventos a los botones
    addCartItemEvents();
  }
  
  // Función para añadir eventos a los elementos del carrito
  function addCartItemEvents() {
    // Botones para disminuir cantidad
    document.querySelectorAll('.decrease-quantity').forEach(button => {
      button.addEventListener('click', () => {
        const itemId = button.dataset.itemId;
        const storedItems = JSON.parse(localStorage.getItem('cart_items') || '[]');
        const itemIndex = storedItems.findIndex(item => item.id === itemId);
        
        if (itemIndex !== -1) {
          if (storedItems[itemIndex].quantity > 1) {
            storedItems[itemIndex].quantity -= 1;
          } else {
            storedItems.splice(itemIndex, 1);
          }
          
          localStorage.setItem('cart_items', JSON.stringify(storedItems));
          updateCart();
        }
      });
    });
    
    // Botones para aumentar cantidad
    document.querySelectorAll('.increase-quantity').forEach(button => {
      button.addEventListener('click', () => {
        const itemId = button.dataset.itemId;
        const storedItems = JSON.parse(localStorage.getItem('cart_items') || '[]');
        const itemIndex = storedItems.findIndex(item => item.id === itemId);
        
        if (itemIndex !== -1) {
          storedItems[itemIndex].quantity += 1;
          localStorage.setItem('cart_items', JSON.stringify(storedItems));
          updateCart();
        }
      });
    });
    
    // Botones para eliminar
    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', () => {
        const itemId = button.dataset.itemId;
        const storedItems = JSON.parse(localStorage.getItem('cart_items') || '[]');
        const itemIndex = storedItems.findIndex(item => item.id === itemId);
        
        if (itemIndex !== -1) {
          storedItems.splice(itemIndex, 1);
          localStorage.setItem('cart_items', JSON.stringify(storedItems));
          updateCart();
        }
      });
    });
  }
  
  // Mostrar/ocultar mini carrito al hacer clic
  miniCartToggle.addEventListener('click', () => {
    miniCart.classList.toggle('hidden');
    
    // Si se muestra el carrito, actualizarlo
    if (!miniCart.classList.contains('hidden')) {
      updateCart();
    }
  });
  
  // Cerrar el carrito al hacer clic fuera
  document.addEventListener('click', (event) => {
    const isClickInside = miniCartToggle.contains(event.target) || miniCart.contains(event.target);
    
    if (!isClickInside && !miniCart.classList.contains('hidden')) {
      miniCart.classList.add('hidden');
    }
  });
  
  // Actualizar carrito al cargar la página
  document.addEventListener('DOMContentLoaded', () => {
    updateCart();
  });
  
  // Escuchar cambios en el carrito (cuando se añaden productos)
  window.addEventListener('storage', (event) => {
    if (event.key === 'cart_items') {
      updateCart();
    }
  });
</script>
```

### 5. Variables de Entorno

Archivo: `.env.example`

```
# Medusa Backend
PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
MEDUSA_API_KEY=your_medusa_api_key

# Supabase (para autenticación y almacenamiento)
PUBLIC_SUPABASE_URL=your_supabase_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe (para pagos)
PUBLIC_STRIPE_KEY=your_stripe_public_key
```

### 6. Página de Detalle de Producto

Archivo: `src/pages/shop/products/[handle].astro`

```astro
---
import ShopLayout from '../../../layouts/ShopLayout.astro';
import { getProductByHandle } from '../../../lib/medusa';

// Obtener el handle del producto de los parámetros de la URL
const { handle } = Astro.params;

// En desarrollo, usamos datos de ejemplo
// En producción, esto obtendría datos reales de Medusa.js
let product = await getProductByHandle(handle).catch(() => null);

// Si no se encuentra el producto o estamos en desarrollo, usar datos de ejemplo
if (!product) {
  product = {
    id: 'prod_example',
    title: 'Producto de Ejemplo',
    description: 'Esta es una descripción detallada del producto de ejemplo. Incluye información sobre materiales, características y beneficios del producto.',
    handle: handle,
    thumbnail: '/img/shop/product-1.jpg',
    images: [
      { url: '/img/shop/product-1.jpg' },
      { url: '/img/shop/product-2.jpg' },
      { url: '/img/shop/product-3.jpg' }
    ],
    variants: [
      {
        id: 'variant_1',
        title: 'Pequeño / Negro',
        prices: [{ amount: 2990, currency_code: 'eur' }],
        options: [
          { value: 'Pequeño' },
          { value: 'Negro' }
        ]
      },
      {
        id: 'variant_2',
        title: 'Mediano / Negro',
        prices: [{ amount: 3490, currency_code: 'eur' }],
        options: [
          { value: 'Mediano' },
          { value: 'Negro' }
        ]
      },
      {
        id: 'variant_3',
        title: 'Grande / Negro',
        prices: [{ amount: 3990, currency_code: 'eur' }],
        options: [
          { value: 'Grande' },
          { value: 'Negro' }
        ]
      }
    ],
    options: [
      {
        id: 'opt_size',
        title: 'Talla',
        values: ['Pequeño', 'Mediano', 'Grande']
      },
      {
        id: 'opt_color',
        title: 'Color',
        values: ['Negro', 'Blanco', 'Azul']
      }
    ]
  };
}

// Obtener la primera variante como predeterminada
const defaultVariant = product.variants[0];

// Formatear el precio
const formattedPrice = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR'
}).format(defaultVariant.prices[0].amount / 100);
---

<ShopLayout title={`${product.title} | Tienda Insano`}>
  <div class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Galería de imágenes -->
      <div>
        <div class="mb-4">
          <img 
            id="main-image" 
            src={product.images[0].url} 
            alt={product.title} 
            class="w-full h-auto rounded-lg"
          />
        </div>
        <div class="grid grid-cols-4 gap-2">
          {product.images.map((image, index) => (
            <button 
              class="thumbnail-btn border-2 rounded overflow-hidden hover:border-primary transition-colors" 
              data-image-url={image.url}
              data-index={index}
            >
              <img 
                src={image.url} 
                alt={`${product.title} - Imagen ${index + 1}`} 
                class="w-full h-auto"
              />
            </button>
          ))}
        </div>
      </div>
      
      <!-- Información del producto -->
      <div>
        <h1 class="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
        <p class="text-2xl font-bold text-primary mb-4" id="product-price">{formattedPrice}</p>
        
        <div class="mb-6">
          <p class="text-gray-600">{product.description}</p>
        </div>
        
        <!-- Opciones de variantes -->
        <div class="mb-6">
          {product.options.map(option => (
            <div class="mb-4">
              <h3 class="text-sm font-medium text-gray-700 mb-2">{option.title}</h3>
              <div class="flex flex-wrap gap-2">
                {option.values.map(value => (
                  <button 
                    class="option-btn px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                    data-option-id={option.id}
                    data-value={value}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <!-- Cantidad -->
        <div class="mb-6">
          <h3 class="text-sm font-medium text-gray-700 mb-2">Cantidad</h3>
          <div class="flex items-center">
            <button id="decrease-quantity" class="w-10 h-10 border border-gray-300 rounded-l-md flex items-center justify-center hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
              </svg>
            </button>
            <input 
              type="number" 
              id="quantity" 
              value="1" 
              min="1" 
              class="w-16 h-10 border-t border-b border-gray-300 text-center"
            />
            <button id="increase-quantity" class="w-10 h-10 border border-gray-300 rounded-r-md flex items-center justify-center hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Botones de acción -->
        <div class="flex flex-col space-y-4">
          <button 
            id="add-to-cart-btn"
            class="w-full bg-primary text-white py-3 px-6 rounded-md font-medium hover:bg-primary-dark transition-colors"
            data-product-id={product.id}
            data-variant-id={defaultVariant.id}
          >
            Añadir al Carrito
          </button>
          <button class="w-full bg-gray-800 text-white py-3 px-6 rounded-md font-medium hover:bg-gray-700 transition-colors">
            Comprar Ahora
          </button>
        </div>
      </div>
    </div>
  </div>
</ShopLayout>

<script define:vars={{ product, defaultVariant }}>
  // Elementos del DOM
  const mainImage = document.getElementById('main-image');
  const thumbnailButtons = document.querySelectorAll('.thumbnail-btn');
  const optionButtons = document.querySelectorAll('.option-btn');
  const quantityInput = document.getElementById('quantity');
  const decreaseQuantityBtn = document.getElementById('decrease-quantity');
  const increaseQuantityBtn = document.getElementById('increase-quantity');
  const addToCartBtn = document.getElementById('add-to-cart-btn');
  const productPrice = document.getElementById('product-price');
  
  // Estado actual
  let currentVariant = defaultVariant;
  let selectedOptions = {};
  
  // Inicializar opciones seleccionadas con los valores de la variante predeterminada
  if (defaultVariant.options && defaultVariant.options.length > 0) {
    product.options.forEach((option, index) => {
      selectedOptions[option.id] = defaultVariant.options[index].value;
    });
  }
  
  // Función para formatear precio
  function formatPrice(amount) {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount / 100);
  }
  
  // Función para encontrar la variante que coincide con las opciones seleccionadas
  function findMatchingVariant() {
    return product.variants.find(variant => {
      if (!variant.options) return false;
      
      return product.options.every((option, index) => {
        return variant.options[index].value === selectedOptions[option.id];
      });
    }) || defaultVariant;
  }
  
  // Función para actualizar la interfaz según la variante seleccionada
  function updateVariantUI() {
    // Actualizar precio
    const price = currentVariant.prices[0].amount;
    productPrice.textContent = formatPrice(price);
    
    // Actualizar ID de variante para el botón de añadir al carrito
    addToCartBtn.dataset.variantId = currentVariant.id;
    
    // Actualizar botones de opciones seleccionadas
    optionButtons.forEach(button => {
      const optionId = button.dataset.optionId;
      const value = button.dataset.value;
      
      if (selectedOptions[optionId] === value) {
        button.classList.add('border-primary', 'text-primary');
        button.classList.remove('border-gray-300');
      } else {
        button.classList.remove('border-primary', 'text-primary');
        button.classList.add('border-gray-300');
      }
    });
  }
  
  // Eventos para las miniaturas de imágenes
  thumbnailButtons.forEach(button => {
    button.addEventListener('click', () => {
      const imageUrl = button.dataset.imageUrl;
      mainImage.src = imageUrl;
      
      // Actualizar estado activo de las miniaturas
      thumbnailButtons.forEach(btn => {
        btn.classList.remove('border-primary');
        btn.classList.add('border-gray-300');
      });
      button.classList.remove('border-gray-300');
      button.classList.add('border-primary');
    });
  });
  
  // Eventos para los botones de opciones
  optionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const optionId = button.dataset.optionId;
      const value = button.dataset.value;
      
      // Actualizar opción seleccionada
      selectedOptions[optionId] = value;
      
      // Encontrar la variante que coincide con las opciones seleccionadas
      currentVariant = findMatchingVariant();
      
      // Actualizar la interfaz
      updateVariantUI();
    });
  });
  
  // Eventos para los botones de cantidad
  decreaseQuantityBtn.addEventListener('click', () => {
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });
  
  increaseQuantityBtn.addEventListener('click', () => {
    const currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
  });
  
  // Evento para añadir al carrito
  addToCartBtn.addEventListener('click', async () => {
    const productId = addToCartBtn.dataset.productId;
    const variantId = addToCartBtn.dataset.variantId;
    const quantity = parseInt(quantityInput.value);
    
    // Obtener o crear carrito
    let cartId = localStorage.getItem('medusa_cart_id');
    
    if (!cartId) {
      // Simulación de creación de carrito
      cartId = 'cart_' + Math.random().toString(36).substring(2, 15);
      localStorage.setItem('medusa_cart_id', cartId);
    }
    
    // Añadir al carrito (simulado en desarrollo)
    // En producción, esto llamaría a la API de Medusa
    const cartItems = JSON.parse(localStorage.getItem('cart_items') || '[]');
    
    // Comprobar si el producto ya está en el carrito
    const existingItem = cartItems.find(item => item.variant_id === variantId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cartItems.push({
        id: 'item_' + Math.random().toString(36).substring(2, 9),
        product_id: productId,
        variant_id: variantId,
        quantity: quantity
      });
    }
    
    localStorage.setItem('cart_items', JSON.stringify(cartItems));
    
    // Mostrar notificación
    alert(`${quantity} unidad(es) de ${product.title} añadido(s) al carrito`);
  });
  
  // Inicializar la interfaz
  updateVariantUI();
  
  // Marcar la primera miniatura como activa
  if (thumbnailButtons.length > 0) {
    thumbnailButtons[0].classList.remove('border-gray-300');
    thumbnailButtons[0].classList.add('border-primary');
  }
</script>
```

## Próximos Pasos

1. **Implementar el Backend de Medusa.js**
   - Seguir las instrucciones en `docs/medusa-setup.md`
   - Configurar productos, categorías y métodos de pago

2. **Desarrollar Componentes Adicionales**
   - Página de carrito completo
   - Proceso de checkout
   - Panel de cuenta de usuario

3. **Integrar con Supabase**
   - Autenticación de usuarios
   - Almacenamiento de datos adicionales

4. **Optimizar para Producción**
   - Mejorar rendimiento
   - Implementar SEO
   - Configurar análisis y seguimiento

5. **Desplegar**
   - Backend de Medusa en un servidor dedicado
   - Frontend de Astro en un servicio de hosting estático

## Recursos Adicionales

- [Documentación oficial de Medusa.js](https://docs.medusajs.com/)
- [Documentación de Astro](https://docs.astro.build/)
- [Documentación de Supabase](https://supabase.io/docs/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs/)