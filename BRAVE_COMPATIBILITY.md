# Compatibilidad con Brave Browser

## 🔍 Problemas Detectados en Brave

Brave Browser tiene **bloqueadores agresivos de rastreo** que causan estos errores:

### 1. Scripts Bloqueados
- ❌ `cdn.vercel-insights.com` - Analytics de Vercel
- ❌ `reporting.cdndex.io` - Reportes de errores de CDN
- ❌ `www.youtube.com/youtubei/v1/log_event` - Tracking de YouTube

### 2. Iframes Bloqueados/Restringidos
- ❌ Twitch iframes con error `X-Frame-Options: sameorigin`
- ⚠️ YouTube embeds con tracking bloqueado
- ⚠️ Instagram embeds pueden fallar

### 3. APIs de Terceros
- ❌ Twitch GraphQL con error 429 (Too Many Requests)
- ❌ Twitch fingerprinting (`gql.twitch.tv`, `passport.twitch.tv`)

### 4. Warnings
- ⚠️ Meta tag deprecado: `apple-mobile-web-app-capable`
- ⚠️ React Router future flags (no crítico)

## ✅ Soluciones Implementadas

### 1. Schema.org JSON-LD
**Cambio realizado:**
- Usamos `is:inline` en lugar de `set:html` para los scripts JSON-LD
- Comentamos temporalmente el array `sameAs` con enlaces a redes sociales

**Antes:**
```astro
<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

**Después:**
```astro
<script type="application/ld+json" is:inline>
  {JSON.stringify(schema)}
</script>
```

### 2. Enlaces de Redes Sociales en Schema
**Problema:** Brave bloquea schemas que contienen URLs de rastreadores conocidos.

**Solución temporal:** Comentar el array `sameAs` en el schema Organization.

**Para reactivar en producción:**
1. Verifica que Brave no bloquee el contenido
2. O usa una lista de redes sociales más limitada
3. O implementa detección de Brave y carga condicional

## 🧪 Cómo Probar

### En Brave:
1. Abre DevTools (F12)
2. Ve a la pestaña "Console"
3. Busca errores relacionados con scripts bloqueados
4. Ve a "Shields" (icono del león) y verifica qué está bloqueando

### Niveles de Shields en Brave:
- **Aggressive**: Bloquea casi todo (puede romper funcionalidad)
- **Standard**: Balance entre privacidad y funcionalidad ✅ Recomendado
- **Disabled**: No bloquea nada

## 🔧 Soluciones Alternativas

### Opción 1: Detección de Brave
```javascript
const isBrave = navigator.brave && await navigator.brave.isBrave();
if (!isBrave) {
  // Cargar schemas completos con sameAs
}
```

### Opción 2: Lazy Load de Schemas
```astro
<script>
  // Cargar schemas después de que la página esté lista
  window.addEventListener('load', () => {
    const schema = {...};
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  });
</script>
```

### Opción 3: Schema Minimalista
Mantener solo información esencial sin enlaces externos:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Insano Network",
  "url": "https://insanonetwork.com",
  "description": "..."
}
```

## 📱 Iframes (YouTube, Twitch, Instagram)

**Problema:** Brave puede bloquear iframes de terceros.

**Soluciones:**
1. **Facade Pattern**: Mostrar imagen preview y cargar iframe al hacer click
2. **Lazy Loading**: Usar `loading="lazy"` en iframes
3. **Consent Banner**: Pedir permiso antes de cargar contenido de terceros

### Ejemplo de Facade Pattern:
```astro
<div class="video-facade" data-video-id="VIDEO_ID">
  <img src="thumbnail.jpg" alt="Video preview" />
  <button>▶ Reproducir Video</button>
</div>

<script>
  document.querySelectorAll('.video-facade').forEach(el => {
    el.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = `https://youtube.com/embed/${el.dataset.videoId}`;
      el.replaceWith(iframe);
    });
  });
</script>
```

## 🎯 Recomendaciones

### Para Desarrollo:
- Probar en Brave con Shields en modo "Standard"
- Verificar que el contenido principal funcione sin scripts externos
- Usar progressive enhancement

### Para Producción:
- Implementar detección de bloqueadores
- Mostrar mensajes amigables si algo está bloqueado
- Ofrecer alternativas (ej: enlaces directos en lugar de embeds)

### Para SEO:
- Los schemas funcionan correctamente en Google/Bing aunque Brave los bloquee
- El contenido HTML es lo más importante para SEO
- Los schemas son un "plus" pero no críticos para el ranking

## 📊 Testing Checklist

- [ ] Página carga correctamente en Brave (Shields Standard)
- [ ] No hay errores en Console
- [ ] Schemas JSON-LD no están bloqueados
- [ ] Contenido principal visible sin JavaScript
- [ ] Iframes se cargan o tienen fallback
- [ ] Formularios funcionan correctamente
- [ ] No hay warnings de privacidad

## 🔗 Referencias

- [Brave Shields Documentation](https://support.brave.com/hc/en-us/articles/360022973471-What-is-Shields-)
- [Schema.org Best Practices](https://schema.org/docs/gs.html)
- [Progressive Enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement)

---

**Última actualización:** 2025-10-09  
**Estado:** ✅ Solucionado con `is:inline` y schema minimalista
