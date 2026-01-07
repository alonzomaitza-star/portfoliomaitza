# IDs de Componentes de Social Media

## Componentes Actualizados con IDs Únicos

### Instagram Feed
- **ID Principal**: `instagram-feed`
- **ID Wrapper**: `instagram-feed-wrapper`
- **Componente**: `./instagram/InstagramFeed.astro`
- **Clases CSS**: `social-media__instagram-feed`, `social-media__instagram-feed--container`
- **Descripción**: Panel de Instagram con galería de posts y enlace al perfil

### Facebook Panel  
- **ID Principal**: `facebook-panel`
- **ID Wrapper**: `facebook-panel-wrapper`
- **Componente**: `./facebook/FacebookPanel.astro`
- **Clases CSS**: `social-media__facebook-panel`, `social-media__facebook-panel--container`
- **Descripción**: Panel de Facebook con posts recientes y enlace al grupo

### TikTok Feed
- **ID Principal**: `tiktok-feed`
- **ID Wrapper**: `tiktok-feed-wrapper`
- **Componente**: `./tiktok/TikTokFeed.astro`
- **Clases CSS**: `social-media__tiktok-feed`, `social-media__tiktok-feed--container`
- **Descripción**: Feed de TikTok con videos destacados y enlace al perfil

### Twitter Updates
- **ID Principal**: `twitter-updates`
- **ID Wrapper**: `twitter-updates-wrapper`
- **Componente**: `./twitter/TwitterUpdates.astro`
- **Clases CSS**: `social-media__twitter-updates`, `social-media__twitter-updates--container`
- **Descripción**: Panel de Twitter/X con actualizaciones y timeline

## Sección Principal
- **ID Sección**: `social-media-section`
- **ID Título**: `social-media-title`
- **ID Grid**: `social-media-grid`
- **Clases CSS**: `social-media__section`, `social-media__title`, `social-media__grid`

## Convenciones de Nomenclatura

- **Formato ID**: kebab-case (`nombre-componente`)
- **Formato Archivo**: PascalCase (`NombreComponente.astro`)
- **Formato Clase CSS**: BEM (`social-media__componente-id`)
- **Formato Data Attribute**: kebab-case (`data-componente-id`)

## Uso en SocialMedia.astro

```astro
<section id="social-media-section" class="social-media__section">
  <div id="social-media-grid" class="social-media__grid">
    <div id="instagram-feed-wrapper" class="social-media__instagram-feed-wrapper">
      <InstagramFeed />
    </div>
    <!-- otros componentes... -->
  </div>
</section>
```

## Manejo Programático

### JavaScript para manipular componentes:
```javascript
// Ocultar Instagram
document.getElementById('instagram-feed-wrapper').style.display = 'none';

// Mostrar Facebook
document.getElementById('facebook-panel-wrapper').style.display = 'block';

// Cambiar título
document.getElementById('social-media-title').textContent = 'Nuevo Título';
```

### CSS Selectores:
```css
/* Componente específico */
#instagram-feed-wrapper { ... }

/* Clases BEM */
.social-media__instagram-feed { ... }
.social-media__instagram-feed--container { ... }

/* Posts individuales */
.social-media__post { ... }
.social-media__post-overlay { ... }
```

## Estado Actual

✅ **Completado**:
- InstagramFeed.astro - Estandarizado con IDs únicos y clases BEM
- SocialMedia.astro - Actualizado con IDs únicos y estructura consistente
- Documentación de IDs y convenciones

🔄 **Pendiente**:
- FacebookPanel.astro - Necesita estandarización similar
- TikTokFeed.astro - Necesita estandarización similar  
- TwitterUpdates.astro - Necesita estandarización similar

## Notas para Futuro

- Cada componente es autocontenido y modular
- IDs únicos permiten manipulación individual
- Clases BEM facilitan mantenimiento y escalabilidad
- Estructura consistente para nuevos componentes
- Responsive integrado en el grid principal
