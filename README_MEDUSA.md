# Implementación de Tienda Online con Medusa.js

## Introducción

Este documento describe la ruta de implementación para integrar Medusa.js, un framework de comercio electrónico, con nuestra aplicación Astro existente. Medusa.js proporciona una solución completa para crear tiendas online con funcionalidades avanzadas como gestión de productos, carritos de compra, procesamiento de pagos y más.

## ¿Qué es Medusa.js?

Medusa.js es un framework de comercio electrónico de código abierto que ofrece:

- **Arquitectura headless**: Separa el frontend del backend, permitiendo flexibilidad en la implementación de la interfaz de usuario.
- **API RESTful**: Facilita la integración con cualquier frontend o servicio.
- **Extensibilidad**: Sistema de plugins para extender funcionalidades.
- **Gestión completa de comercio electrónico**: Productos, variantes, inventario, carritos, pedidos, clientes, etc.
- **Procesamiento de pagos**: Integración con múltiples proveedores de pago.

## Ruta de Implementación

### Fase 1: Configuración del Backend de Medusa

1. **Instalación del servidor Medusa**
   ```bash
   # Crear un directorio para el backend de Medusa
   mkdir medusa-backend
   cd medusa-backend
   
   # Instalar Medusa CLI globalmente
   npm install -g @medusajs/medusa-cli
   
   # Crear un nuevo proyecto Medusa
   medusa new
   
   # Iniciar el servidor de desarrollo
   medusa develop
   ```

2. **Configuración de la base de datos**
   - Medusa utiliza PostgreSQL por defecto
   - Configurar las variables de entorno en `.env`
   - Ejecutar migraciones: `medusa migrations run`

3. **Configuración de servicios esenciales**
   - Sistema de pagos (Stripe, PayPal, etc.)
   - Servicio de envío
   - Gestión de impuestos
   - Almacenamiento de archivos (para imágenes de productos)

### Fase 2: Integración con Astro

1. **Instalación del cliente de Medusa en el proyecto Astro**
   ```bash
   cd ../Insano-landing
   npm install @medusajs/medusa-js
   ```

2. **Configuración del cliente**
   ```javascript
   // src/lib/medusa.js
   import { createClient } from '@medusajs/medusa-js'
   
   export const medusaClient = createClient({
     baseUrl: 'http://localhost:9000',
     maxRetries: 3
   })
   ```

3. **Creación de componentes para la tienda**
   - Componentes de productos
   - Carrito de compra
   - Proceso de pago
   - Gestión de cuenta de usuario

### Fase 3: Desarrollo de Páginas de la Tienda

1. **Página de catálogo de productos**
   - Listado de productos con filtros y búsqueda
   - Paginación
   - Ordenación

2. **Página de detalle de producto**
   - Información detallada del producto
   - Selección de variantes
   - Añadir al carrito
   - Productos relacionados

3. **Carrito de compra**
   - Visualización de productos en el carrito
   - Actualización de cantidades
   - Eliminación de productos
   - Cálculo de subtotales, impuestos y total

4. **Proceso de checkout**
   - Información de envío
   - Información de facturación
   - Selección de método de pago
   - Confirmación de pedido

5. **Área de cliente**
   - Registro e inicio de sesión
   - Historial de pedidos
   - Gestión de direcciones
   - Preferencias de usuario

### Fase 4: Integración con Supabase

Aprovechar la integración existente con Supabase para:

1. **Autenticación de usuarios**
   - Utilizar el sistema de autenticación de Supabase para los clientes de la tienda
   - Sincronizar usuarios entre Supabase y Medusa

2. **Almacenamiento de archivos**
   - Utilizar Supabase Storage para imágenes de productos

3. **Funcionalidades adicionales**
   - Reseñas de productos
   - Sistema de favoritos
   - Historial de navegación personalizado

### Fase 5: Optimización y Despliegue

1. **Optimización de rendimiento**
   - Implementación de caché
   - Optimización de imágenes
   - Lazy loading

2. **SEO para e-commerce**
   - Metadatos para productos
   - URLs amigables
   - Sitemap para productos
   - Datos estructurados (Schema.org)

3. **Despliegue**
   - Backend de Medusa en un servidor dedicado o servicio en la nube
   - Frontend de Astro utilizando el proceso de build existente

## Estructura de Archivos Propuesta

```
├── medusa-backend/           # Servidor Medusa separado
│   ├── src/
│   │   ├── api/              # Endpoints personalizados
│   │   ├── services/         # Servicios personalizados
│   │   └── subscribers/      # Manejadores de eventos
│   ├── data/                 # Datos de la tienda
│   └── medusa-config.js      # Configuración de Medusa
│
└── Insano-landing/           # Proyecto Astro existente
    ├── src/
    │   ├── components/
    │   │   └── shop/         # Componentes de la tienda
    │   │       ├── ProductCard.astro
    │   │       ├── ProductDetail.astro
    │   │       ├── Cart.astro
    │   │       └── Checkout.astro
    │   ├── lib/
    │   │   └── medusa.js     # Cliente de Medusa
    │   └── pages/
    │       └── shop/         # Páginas de la tienda
    │           ├── index.astro
    │           ├── products/
    │           │   └── [handle].astro
    │           ├── cart.astro
    │           ├── checkout.astro
    │           └── account/
    │               ├── index.astro
    │               ├── orders.astro
    │               └── addresses.astro
    └── public/
        └── img/
            └── shop/         # Imágenes estáticas de la tienda
```

## Ejemplos de Implementación

### Ejemplo: Listado de Productos

```javascript
// src/pages/shop/index.astro
import { medusaClient } from '../../lib/medusa';
import ProductCard from '../../components/shop/ProductCard.astro';
import Layout from '../../layouts/Layout.astro';

const { products } = await medusaClient.products.list();

---

<Layout title="Tienda | Insano">
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-8">Nuestros Productos</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  </div>
</Layout>
```

### Ejemplo: Detalle de Producto

```javascript
// src/pages/shop/products/[handle].astro
import { medusaClient } from '../../../lib/medusa';
import Layout from '../../../layouts/Layout.astro';

export async function getStaticPaths() {
  const { products } = await medusaClient.products.list();
  
  return products.map((product) => ({
    params: { handle: product.handle },
    props: { product },
  }));
}

const { product } = Astro.props;

---

<Layout title={`${product.title} | Tienda Insano`}>
  <div class="container mx-auto py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="product-images">
        <img 
          src={product.thumbnail} 
          alt={product.title}
          class="w-full rounded-lg shadow-lg" 
        />
      </div>
      
      <div class="product-info">
        <h1 class="text-3xl font-bold mb-2">{product.title}</h1>
        <p class="text-xl text-gray-700 mb-4">${product.variants[0].prices[0].amount / 100}</p>
        
        <div class="mb-6">
          <p>{product.description}</p>
        </div>
        
        <button 
          class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          id="add-to-cart"
          data-product-id={product.id}
          data-variant-id={product.variants[0].id}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  </div>
  
  <script>
    document.getElementById('add-to-cart').addEventListener('click', async (e) => {
      const button = e.target;
      const productId = button.dataset.productId;
      const variantId = button.dataset.variantId;
      
      // Importar el cliente de Medusa en el cliente
      const { medusaClient } = await import('../../../lib/medusa');
      
      try {
        // Obtener o crear un carrito
        let cart;
        const cartId = localStorage.getItem('cart_id');
        
        if (cartId) {
          const { cart: existingCart } = await medusaClient.carts.retrieve(cartId);
          cart = existingCart;
        } else {
          const { cart: newCart } = await medusaClient.carts.create();
          cart = newCart;
          localStorage.setItem('cart_id', cart.id);
        }
        
        // Añadir el producto al carrito
        await medusaClient.carts.lineItems.create(cart.id, {
          variant_id: variantId,
          quantity: 1
        });
        
        // Notificar al usuario
        alert('Producto añadido al carrito');
      } catch (error) {
        console.error('Error al añadir al carrito:', error);
        alert('Error al añadir el producto al carrito');
      }
    });
  </script>
</Layout>
```

## Próximos Pasos

1. **Configuración inicial del servidor Medusa**
   - Instalación y configuración básica
   - Conexión con la base de datos

2. **Creación de la estructura de datos**
   - Definición de categorías de productos
   - Creación de productos iniciales

3. **Desarrollo de componentes básicos**
   - Tarjeta de producto
   - Mini carrito
   - Barra de navegación de la tienda

4. **Implementación de páginas principales**
   - Catálogo de productos
   - Detalle de producto
   - Carrito

## Recursos

- [Documentación oficial de Medusa.js](https://docs.medusajs.com/)
- [GitHub de Medusa.js](https://github.com/medusajs/medusa)
- [Ejemplos de tiendas con Medusa](https://medusajs.com/showcase/)
- [Comunidad de Medusa en Discord](https://discord.gg/medusajs)

## Consideraciones Finales

La implementación de Medusa.js nos permitirá tener una tienda online completa y profesional, con todas las funcionalidades necesarias para un comercio electrónico moderno. Al ser una solución headless, nos da la flexibilidad de diseñar la interfaz de usuario según nuestras necesidades específicas, manteniendo la coherencia con el resto de nuestra aplicación Astro.

La arquitectura propuesta separa claramente el backend (Medusa) del frontend (Astro), lo que facilita el mantenimiento y la escalabilidad del proyecto a largo plazo.