## Este es un archivo para documentar, planificar e implementar unos CV para mi proyecto.

# Implementation Plan - CV Contadores E&V

## Goal Description
Create a new CV component `CV-CONTADORES.astro` in `src/components/portfolio-cv/contadoresE&V/` that mimics the design of the provided PDFs.

## Proposed Changes

### Component Creation
#### [NEW] [CV-CONTADORES.astro](./CV-CONTADORES.astro)
- Base logic on `src/components/portfolio-cv/fercho/CV.astro`.
- Props: `pdfUrl`, `title`.
- Structure:
    - **Header**: Logo/Name (Contadores E&V).
    - **Sidebar/Info**: Contact info, Services list.
    - **Main Content**: Detailed description, Mission/Vision, Experience.
    - **PDF Viewer**: Modal to view the full PDF.
    - **Actions**: Download PDF/PNG buttons.

### Assets
- **Source**: `d:\dev\Node.js\InsanoNetwork\assets global\`
- **Action**: Copy `CatalogoE&V Contadores Publicos Independientes.pdf` to `public/cvs/`.

