# Plan de Implementación: Tienda Online

Este documento detalla la estrategia para integrar una tienda de e-commerce en la plataforma.

## Tecnología Seleccionada

-   **Backend:** **Medusa.js**. Es una plataforma de e-commerce "headless" (sin frontend acoplado) y de código abierto. Esto nos da total libertad para construir la interfaz de la tienda en nuestro proyecto de Astro.
-   **Frontend:** **Astro**. Consumiremos los datos de Medusa.js a través de su API REST.

## Estrategia de Integración

La integración se basa en el principio "headless": el backend y el frontend están desacoplados y se comunican por una API.

1.  **Backend (Medusa.js):**
    -   **Instalación:** Se debe instalar y configurar un proyecto de Medusa.js por separado.
    -   **Productos:** Se darán de alta los productos, precios, inventario, etc., desde el panel de administración de Medusa.
    -   **Hosting:** El backend de Medusa necesita estar alojado en un servidor para que sea accesible desde internet. Opciones populares:
        -   **Railway:** Ofrece plantillas para desplegar Medusa con un solo clic.
        -   **Heroku:** Plataforma como servicio (PaaS) tradicional.
        -   **DigitalOcean:** Servidores privados virtuales (VPS) para mayor control.

2.  **Frontend (Astro):**
    -   **Conexión a la API:** Usaremos el SDK de Medusa o `fetch` para realizar peticiones a la API del backend desde Astro.
    -   **Páginas a Crear:**
        -   `/tienda`: Página principal de la tienda, listando categorías o productos destacados.
        -   `/tienda/productos`: Galería de todos los productos con filtros.
        -   `/tienda/productos/[slug]`: Página de detalle para cada producto.
        -   `/carrito`: Página para ver y gestionar el carrito de compras.
        -   `/checkout`: Proceso de pago (se integra con los proveedores de pago de Medusa, como Stripe).

## Pasos Preliminares

1.  **Investigar y desplegar un backend de Medusa.js:** El primer paso es tener el backend funcionando y accesible online.
2.  **Crear SDK o cliente de API:** Desarrollar un pequeño wrapper en `src/lib/medusa.ts` para simplificar las llamadas a la API de Medusa desde las páginas de Astro.
3.  **Diseñar componentes de UI:** Crear componentes Astro/Svelte para:
    -   `ProductCard.astro`
    -   `ProductGallery.astro`
    -   `ShoppingCart.svelte` (necesitará estado en el cliente)
