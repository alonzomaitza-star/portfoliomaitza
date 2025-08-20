# Implementación de Tienda Online con Medusa.js en Insano

Este documento proporciona una guía completa para implementar una tienda online utilizando Medusa.js como framework de e-commerce en el proyecto Insano.

## ¿Qué es Medusa.js?

Medusa.js es un framework de comercio electrónico de código abierto que proporciona una alternativa moderna y flexible a plataformas como Shopify. Está construido con Node.js y ofrece una arquitectura modular que permite una personalización completa de la experiencia de compra.

## Ventajas de Medusa.js

- **Open Source**: Código completamente abierto y gratuito
- **Headless**: Separación clara entre backend y frontend
- **API-first**: APIs RESTful y GraphQL para interactuar con todos los recursos
- **Extensible**: Sistema de plugins para extender funcionalidades
- **Personalizable**: Control total sobre la experiencia de usuario
- **Escalable**: Arquitectura diseñada para escalar

## Requisitos Previos

### Backend
- Node.js (v16 o superior)
- PostgreSQL (v10 o superior)
- Redis (opcional, para caché y colas)

### Frontend
- Astro (ya implementado en el proyecto)
- Cliente de Medusa.js (`@medusajs/medusa-js`)

## Ruta de Implementación

### Fase 1: Configuración del Backend de Medusa

1. **Instalación del CLI de Medusa**
   ```bash
   npm install -g @medusajs/medusa-cli
   ```

2. **Creación del proyecto de Medusa**
   ```bash
   medusa new medusa-backend
   cd medusa-backend
   ```

3. **Configuración de la base de datos**
   - Crear base de datos PostgreSQL
   - Configurar variables de entorno en `.env`
   ```
   DATABASE_URL=postgres://usuario:contraseña@localhost:5432/medusa-db
   REDIS_URL=redis://localhost:6379
   JWT_SECRET=tu_jwt_secret
   COOKIE_SECRET=tu_cookie_secret
   ```

4. **Migraciones y datos iniciales**
   ```bash
   medusa migrations run
   medusa seed --seed-file=./data/seed.json
   ```

5. **Iniciar el servidor de desarrollo**
   ```bash
   medusa develop
   ```

### Fase 2: Integración con Astro

1. **Instalación del cliente de Medusa.js**
   ```bash
   npm install @medusajs/medusa-js
   ```

2. **Configuración del cliente**
   Crear archivo `src/lib/medusa.js`:
   ```javascript
   import Medusa from "@medusajs/medusa-js";

   const MEDUSA_BACKEND_URL = import.meta.env.PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000";

   // Inicializar cliente de Medusa
   export const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 });

   // Funciones para interactuar con la API de Medusa
   export async function getProducts(options = {}) {
     try {
       const { products, count } = await medusa.products.list(options);
       return { products, count };
     } catch (error) {
       console.error("Error fetching products:", error);
       return { products: [], count: 0 };
     }
   }

   export async function getProduct(handle) {
     try {
       const { product } = await medusa.products.retrieve(handle);
       return product;
     } catch (error) {
       console.error(`Error fetching product with handle ${handle}:`, error);
       return null;
     }
   }

   // Más funciones para carritos, checkout, etc.
   ```

3. **Configuración de variables de entorno**
   Crear o actualizar `.env`:
   ```
   PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
   ```

### Fase 3: Desarrollo de Páginas de la Tienda

1. **Estructura de archivos**
   ```
   src/
   ├── components/
   │   └── shop/
   │       ├── ProductCard.astro
   │       ├── ProductList.astro
   │       ├── Cart.astro
   │       ├── MiniCart.astro
   │       └── Checkout/
   │           ├── AddressForm.astro
   │           ├── PaymentForm.astro
   │           └── OrderSummary.astro
   ├── layouts/
   │   └── ShopLayout.astro
   ├── lib/
   │   └── medusa.js
   └── pages/
       └── shop/
           ├── index.astro
           ├── products/
           │   └── [handle].astro
           ├── collections/
           │   └── [handle].astro
           ├── cart.astro
           └── checkout/
               ├── index.astro
               ├── shipping.astro
               ├── payment.astro
               └── confirmation.astro
   ```

2. **Implementación de componentes principales**
   - Catálogo de productos
   - Página de detalle de producto
   - Carrito de compras
   - Proceso de checkout
   - Cuenta de usuario

### Fase 4: Integración con Supabase

1. **Autenticación de usuarios**
   - Integrar Supabase Auth con Medusa.js
   - Implementar login/registro en la tienda

2. **Almacenamiento de datos adicionales**
   - Utilizar Supabase para datos complementarios no gestionados por Medusa

### Fase 5: Optimización y Despliegue

1. **Optimización de rendimiento**
   - Implementar carga perezosa de imágenes
   - Optimizar bundle size
   - Implementar estrategias de caché

2. **SEO para e-commerce**
   - Metadatos para productos y categorías
   - Sitemap.xml y robots.txt
   - Datos estructurados (Schema.org)

3. **Despliegue**
   - Backend de Medusa en servicio compatible con Node.js
   - Frontend de Astro en servicio de hosting estático o Edge

## Ejemplos de Código

### Listado de Productos

```astro
---
// src/pages/shop/index.astro
import Layout from '../../layouts/Layout.astro';
import ProductCard from '../../components/shop/ProductCard.astro';
import { getProducts } from '../../lib/medusa';

// Obtener productos destacados
const { products } = await getProducts({ limit: 8, is_featured: true });
---

<Layout title="Tienda | Insano">
  <section class="container mx-auto py-12">
    <h1 class="text-4xl font-bold mb-8">Nuestros Servicios</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  </section>
</Layout>
```

### Detalle de Producto

```astro
---
// src/pages/shop/products/[handle].astro
import Layout from '../../../layouts/Layout.astro';
import { getProduct } from '../../../lib/medusa';

const { handle } = Astro.params;
const product = await getProduct(handle);

if (!product) {
  return Astro.redirect('/shop');
}
---

<Layout title={`${product.title} | Insano`}>
  <div class="container mx-auto py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Galería de imágenes -->
      <div>
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          class="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      
      <!-- Información del producto -->
      <div>
        <h1 class="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
        <p class="text-2xl font-bold text-primary mb-4">
          {new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: product.variants[0].prices[0].currency_code
          }).format(product.variants[0].prices[0].amount / 100)}
        </p>
        
        <div class="mb-6">
          <p class="text-gray-600">{product.description}</p>
        </div>
        
        <!-- Botón de añadir al carrito -->
        <button 
          id="add-to-cart-btn"
          class="w-full bg-primary text-white py-3 px-6 rounded-md font-medium hover:bg-primary-dark transition-colors"
          data-product-id={product.id}
          data-variant-id={product.variants[0].id}
        >
          Añadir al Carrito
        </button>
      </div>
    </div>
  </div>
</Layout>

<script>
  // Lógica para añadir al carrito
  document.getElementById('add-to-cart-btn').addEventListener('click', async () => {
    const button = document.getElementById('add-to-cart-btn');
    const productId = button.dataset.productId;
    const variantId = button.dataset.variantId;
    
    // Aquí iría la lógica para añadir al carrito usando el cliente de Medusa
    console.log(`Añadiendo producto ${productId}, variante ${variantId} al carrito`);
    
    // Mostrar notificación
    alert('Producto añadido al carrito');
  });
</script>
```

## Próximos Pasos

1. **Configurar el backend de Medusa.js**
   - Instalar y configurar el servidor
   - Crear productos y categorías iniciales

2. **Implementar componentes básicos de la tienda**
   - Listado de productos
   - Detalle de producto
   - Carrito de compras

3. **Desarrollar el flujo de checkout**
   - Dirección de envío
   - Métodos de pago
   - Confirmación de pedido

4. **Integrar con servicios externos**
   - Pasarela de pagos (Stripe)
   - Envío (manual inicialmente)
   - Correos electrónicos (SendGrid)

## Recursos Adicionales

- [Documentación oficial de Medusa.js](https://docs.medusajs.com/)
- [GitHub de Medusa.js](https://github.com/medusajs/medusa)
- [Comunidad de Discord](https://discord.gg/medusajs)
- [Ejemplos de tiendas con Medusa](https://medusajs.com/showcase/)

---

Este documento es una guía inicial para la implementación de Medusa.js en el proyecto Insano. Se actualizará con más detalles y ejemplos a medida que avance la implementación.