# Guía de Estilos – Proyecto Landing Insano

Este documento explica la base del sistema de estilos implementado en este proyecto. Aquí encontrarás cómo funciona, cómo está configurado y recomendaciones para mantener la coherencia visual y técnica.

---

## Stack de Estilos

- **TailwindCSS**: Framework de utilidades CSS para desarrollo rápido y consistente.
- **PostCSS**: Herramienta para procesar CSS con plugins.
- **Autoprefixer**: Plugin de PostCSS que añade automáticamente los prefijos necesarios para compatibilidad entre navegadores.

---

## Archivos Clave

- `src/styles/global.css`: Archivo principal donde se importan las directivas de Tailwind (`@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`). Aquí puedes añadir resets mínimos o estilos globales adicionales si es necesario.

- `tailwind.config.mjs`: Configuración de Tailwind. Aquí defines los paths de tus archivos fuente, personalizaciones de tema, plugins, etc.

- `postcss.config.mjs`: Configuración de PostCSS. Actualmente usamos el plugin `@tailwindcss/postcss` para procesar Tailwind.

---

## Integración con Astro

- Los estilos globales se importan en el entrypoint (ejemplo: en `src/pages/index.astro` con `import "../styles/global.css";`).
- Puedes usar clases utilitarias de Tailwind directamente en tus componentes `.astro` o `.svelte`.
- No necesitas preocuparte por el build manual de CSS: Astro y Vite manejan todo el procesamiento automáticamente.

---

## Buenas Prácticas

- Usa siempre las clases utilitarias de Tailwind para mantener consistencia y evitar CSS personalizado innecesario.
- Si necesitas estilos globales, agrégalos en `global.css` después de las directivas de Tailwind.
- Personaliza el tema de Tailwind en `tailwind.config.mjs` si tu branding lo requiere.
- No edites directamente los archivos generados por build.

---
normalmente se usa tailwindcss para generar los estilos, y es importado el el documento de layout (Layout.astro) para ser mas facil de mantener o utilizable.
## Ejemplo de Uso

```astro
---
import "../styles/global.css";
---

<h1 class="text-4xl font-bold text-white">Título principal</h1>
```

---

## Notas para despliegue

- El sistema está listo para producción y funciona correctamente en Netlify.
- No necesitas ejecutar esbuild ni preocuparte por el procesamiento de CSS: todo está automatizado.

---

¿Dudas o sugerencias? Modifica este archivo para dejar notas a futuros desarrolladores.
