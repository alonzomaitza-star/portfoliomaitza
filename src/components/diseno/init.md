
## Planes de implementaciones:

### Galería de Proyectos 3D

**Objetivo**: Crear un componente de galería con pestañas (tabs) para visualizar proyectos de diseño en 3D (productos o prendas).

**Estructura**:
1.  **Componente Contenedor (`ProjectGallery`)**:
    *   Maneja el estado de la pestaña activa.
    *   Inicialmente 2 pestañas, escalable a 3.
    *   Diseño moderno y responsivo.
2.  **Visor 3D (`ThreeViewer`)**:
    *   Utiliza `Three.js` para renderizar contenido 3D.
    *   Capaz de cargar/mostrar diferentes modelos según la pestaña seleccionada.
    *   Controles básicos (órbita) para inspeccionar el modelo.

**Ubicación**:
*   Archivo: `src/pages/diseno.astro`
*   Posición: Arriba del componente `ImaginaloChat`.

**Tecnologías**:
*   Astro (Contenedor de página)
*   Svelte (Lógica de pestañas y manejo del ciclo de vida de Three.js)
*   Three.js (Motor de renderizado 3D)
