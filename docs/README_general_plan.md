# Plan General del Proyecto: Landing Insano v2

Este documento describe la hoja de ruta para evolucionar la landing page actual a una plataforma web completa y funcional.

## Objetivos Principales

1.  **Implementar Autenticación de Usuarios:** Añadir un sistema de login para gestionar sesiones y usuarios.
2.  **Integrar una Tienda Online:** Conectar la web con un backend de e-commerce para vender mercancía.
3.  **Crear un Dashboard de Usuario:** Una vez logueado, el usuario tendrá acceso a una sección privada.

## Fases del Proyecto

### Fase 1: Autenticación (Login)

-   **Tecnología Principal:** Supabase.
-   **Métodos de Login:**
    -   Inicial: Proveedores sociales (Google).
    -   Futuro: Email y contraseña (login local).
-   **Componentes a desarrollar:**
    -   Endpoints de API para `signin`, `callback`, `signout`.
    -   Componente de UI para mostrar estado de sesión (Login/Logout).
    -   Página protegida `/dashboard`.
-   **Ver:** `README_login.md` para más detalles.

### Fase 2: Tienda Online (E-commerce)

-   **Tecnología Principal:** Medusa.js (backend headless).
-   **Integración:**
    -   El frontend (Astro) consumirá la API de Medusa.js para mostrar productos, gestionar el carrito y procesar el checkout.
-   **Hosting del Backend (Medusa.js):** Se necesita una plataforma para alojar el backend de Medusa. Esto es independiente del hosting del frontend (Astro).
    -   **Opciones a considerar:**
        -   Railway
        -   Heroku
        -   DigitalOcean
        -   Un servidor VPS propio.
-   **Ver:** `README_shop.md` para más detalles.
