# Plan de Implementación: Autenticación

Este documento detalla los pasos para integrar un sistema de autenticación de usuarios en el proyecto.

## Tecnología Seleccionada

-   **Primaria:** **Supabase**. Se eligió por su facilidad de uso, su generoso nivel gratuito y por incluir una base de datos Postgres que será útil a futuro. Permite gestionar login social (Google, etc.) y local de forma unificada.
-   **Alternativa (a futuro):** Firebase. Se considera como una posible alternativa, pero de momento todo el desarrollo se centrará en Supabase.

## Hoja de Ruta de Implementación

### Paso 1: Configuración Inicial

1.  **Crear cuenta en Supabase:** Registrarse y crear un nuevo proyecto.
2.  **Instalar SDK:** `npm install @supabase/supabase-js`.
3.  **Variables de Entorno:** Crear un archivo `.env` y añadir `SUPABASE_URL` y `SUPABASE_ANON_KEY`.
4.  **Habilitar Provider de Google:** En el dashboard de Supabase, activar la autenticación con Google y configurar las credenciales de OAuth.

### Paso 2: Desarrollo en Astro (Server-Side)

1.  **Cliente Supabase:** Crear un archivo `src/lib/supabase.ts` para inicializar y exportar una única instancia del cliente de Supabase.
2.  **API Endpoints:** Crear una carpeta `src/pages/api/auth/` para manejar la lógica de autenticación de forma segura en el servidor:
    -   `signin.ts`: Redirige al usuario a la página de login de Google proporcionada por Supabase.
    -   `callback.ts`: Endpoint al que Supabase redirige tras un login exitoso. Aquí se establece la cookie de sesión.
    -   `signout.ts`: Limpia la sesión del usuario.

### Paso 3: Interfaz de Usuario (Client-Side)

1.  **Componente de Autenticación:** Crear un componente (ej. `Auth.astro` o `Auth.svelte`) que:
    -   Si el usuario no está logueado, muestra un botón "Login con Google" que enlaza a `/api/auth/signin`.
    -   Si el usuario está logueado, muestra su información (ej. avatar) y un botón de "Logout" que enlaza a `/api/auth/signout`.
2.  **Integrar en el Layout:** Añadir este componente en la cabecera (`Header`) principal de la web.

### Paso 4: Rutas Protegidas (Dashboard)

1.  **Crear página Dashboard:** Crear el archivo `src/pages/dashboard.astro`.
2.  **Comprobación de Sesión:** En esta página, se comprobará si existe una sesión de usuario activa. Si no existe, se le redirigirá a la página de inicio.
