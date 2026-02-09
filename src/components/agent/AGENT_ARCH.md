# Insano AI Agent - Architectural Plan

## 🎯 Objetivo
Crear un agente inteligente integrado en **Insano Network** que asista a los usuarios en:
1.  **Navegación**: Moverse por la plataforma de manera intuitiva.
2.  **Productividad**: Interactuar con las herramientas disponibles (generadores, dashboards, etc.).
3.  **Soporte**: Responder dudas y guiar en el uso de la app.

## 🏗️ Arquitectura Técnica

### Estructura de Archivos Propuesta
```text
src/components/agent/
├── AGENT_ARCH.md       # Este archivo de planificación
├── ChatInterface.astro # UI Principal del Chat (Flotante)
├── AgentCore.ts        # Lógica de negocio / State Management
└── components/         # Componentes internos del chat
    ├── MessageBubble.astro
    ├── TypingIndicator.astro
    └── QuickActions.astro
```

### Stack Tecnológico
-   **Frontend**: Astro + Svelte/React (para interactividad compleja si es necesario) o Vanilla JS optimizado.
-   **Estilos**: TailwindCSS v4 (Glassmorphism, Animate UI).
-   **Estado**: Nano Stores (ligero y reactivo entre islas).
-   **IA / Lógica**:
    -   *Fase 1*: Respuestas predefinidas y comandos regex.
    -   *Fase 2*: Integración con API externa (OpenAI/Anthropic/Gemini) vía Edge Functions.

## 🧠 Capacidades del Agente

### 1. Navegación Asistida (`/goto`)
El agente podrá redirigir al usuario o hacer scroll a secciones específicas.
*   "Ir a contacto" -> `window.scrollTo('#contact')`
*   "Ver tienda" -> `window.location.href = '/shop'`

### 2. Herramientas de Productividad
Integración con herramientas del sitio mediante "Commands".
*   "Generar reporte" -> Abre modal de reporte.
*   "Modo oscuro" -> `toggleTheme()`

### 3. Contexto & Memoria
*   El agente recordará el nombre del usuario (si se logueó).
*   Mantendrá el historial de la conversación actual (SessionStorage).

## 🚀 Roadmap de Implementación

### Fase 1: UI & Estructura (✅ En Progreso)
- [ ] Definir diseño "Premium" (Glassmorphism).
- [ ] Crear estructura de componentes en `src/components/agent/`.

### Fase 2: Lógica Básica
- [ ] Implementar `AgentCore.ts` para manejar mensajes.
- [ ] Crear sistema de "Comandos Básicos".

### Fase 3: Integración de Herramientas
- [ ] Conectar chatbot con acciones reales del sitio (Navegación, UI Toggles).

### Fase 4: Inteligencia Real
- [ ] Conectar endpoint API para respuestas generativas.

---
> **Nota**: Este documento evolucionará conforme se añadan nuevas capacidades.
