# Documentación de Experiencia de Usuario (Home Experiencia)

Esta sección tiene como objetivo mejorar la experiencia del usuario al ingresar al sitio, guiándolo a través de necesidades específicas mediante tarjetas interactivas y un futuro asistente de IA.

## Ubicación
- **Directorio**: `src/components/home/1homeExperiencia`
- **Componente Principal**: `HomeExperiencia.astro` (Nombre propuesto)

## Requerimientos Funcionales

### 1. Encabezado
- **Pregunta Principal**: "¿En qué te ayudamos hoy?" o "¿Cómo te ayudamos hoy?"
- Debe ser claro y visible antes de la galería de tarjetas.

### 2. Galería de Servicios (Tarjetas)
Un contenedor (`div`) que agrupe tarjetas interactivas. Cada tarjeta contendrá:
- Título
- Descripción breve
- Imagen provisional

#### Categorías de Tarjetas:
1.  **Diseño**
    - Copy: "¿Te ayudamos con algún diseño?"
2.  **Desarrollo**
    - Copy: "¿Desarrollamos algo nuevo?"
3.  **Compras**
    - Copy: "¿Quieres comprar?"
    - *Detalles*: Opciones para "Comprar producto" o "Mayoristas".
4.  **Ventas**
    - Copy: "¿Quieres vender?"
    - *Detalles*: Montar tienda, crear marca o usar nuestra plataforma.
5.  **Contabilidad**
    - Copy: "¿Necesitas arreglar tu contabilidad (México)?"
    - *Detalles*: Servicios contables y fiscales.

### 3. Asistente IA (Chat Placeholder)
- **Posición**: Debajo de las tarjetas.
- **Funcionalidad Actual (Front)**:
    - Interfaz visual de chat tipo "Google AI".
    - Input para escribir.
    - Mensajes de prueba/bienvenida.
- **Funcionalidad Futura (Back)**:
    - Conexión con Google Gemini API.
    - Recolección de datos tipo formulario (Nombre, Búsqueda, Intención).

## Notas Técnicas
- **Estilos**: Utilizar CSS Modules o Tailwind (según configuración del proyecto) para asegurar diseño responsivo y "Premium".
- **Comportamiento**: Las tarjetas deben ser responsivas (Grid/Flex).
