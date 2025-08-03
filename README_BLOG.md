# Guía del Blog

Esta guía cubre la configuración, estructura y buenas prácticas para el blog del proyecto.

## 📝 Estructura del Proyecto

```
src/
  content/
    blog/                  # Contenido del blog en MDX
      posts/               # Archivos de posts individuales
  pages/
    blog/                  # Rutas del blog
      [...slug].astro      # Plantilla de post individual
      index.astro          # Listado de posts
  components/
    blog/                  # Componentes específicos del blog
```

## 🔄 Configuración de RSS

El blog incluye un feed RSS siguiendo las mejores prácticas de Astro v1+. Para configurarlo:

1. Instala la integración RSS:
   ```bash
   npx astro add @astrojs/rss
   ```

2. Crea el archivo de generación del feed en `src/pages/rss.xml.js`:
   ```javascript
   import rss from '@astrojs/rss';
   import { getCollection } from 'astro:content';
   import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

   export async function GET(context) {
     const posts = await getCollection('blog');
     return rss({
       title: SITE_TITLE,
       description: SITE_DESCRIPTION,
       site: context.site,
       items: posts.map((post) => ({
         title: post.data.title,
         pubDate: post.data.pubDate,
         description: post.data.description,
         link: `/blog/${post.slug}/`,
       })),
       customData: `<language>es</language>`,
     });
   }
   ```

## 🔍 Configuración SEO

### Metadatos Básicos

1. Asegúrate de tener estos metadatos en tu layout principal:
   ```astro
   <head>
     <title>{title} | {SITE_TITLE}</title>
     <meta name="description" content={description} />
     <meta name="author" content={author || SITE_AUTHOR} />
     
     <!-- Open Graph / Facebook -->
     <meta property="og:type" content="website" />
     <meta property="og:url" content={new URL(Astro.url.pathname, Astro.site).toString()} />
     <meta property="og:title" content={title} />
     <meta property="og:description" content={description} />
     <meta property="og:image" content={new URL(image || '/default-og-image.jpg', Astro.site).toString()} />
     
     <!-- Twitter -->
     <meta name="twitter:card" content="summary_large_image" />
     <meta name="twitter:title" content={title} />
     <meta name="twitter:description" content={description} />
     <meta name="twitter:image" content={new URL(image || '/default-twitter-image.jpg', Astro.site).toString()} />
   </head>
   ```

### Sitemap

1. Añade el generador de sitemap:
   ```bash
   npx astro add @astrojs/sitemap
   ```

2. Configúralo en `astro.config.mjs`:
   ```javascript
   import { defineConfig } from 'astro/config';
   import sitemap from '@astrojs/sitemap';

   export default defineConfig({
     site: 'https://tudominio.com',
     integrations: [sitemap()],
   });
   ```

## 🚀 Despliegue en Netlify

### Configuración Básica

1. Crea un archivo `netlify.toml` en la raíz:
   ```toml
   [build]
   command = "npm run build"
   publish = "dist"
   
   [build.environment]
   NODE_VERSION = "18"
   
   [[redirects]]
   from = "/*"
   to = "/index.html"
   status = 200
   ```

### Configuración de Headers

Crea un archivo `_headers` en `public/`:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com;
```

## 📊 Google Search Console

1. **Verificación del Sitio**:
   - Ve a [Google Search Console](https://search.google.com/search-console)
   - Añade tu propiedad
   - Descarga el archivo de verificación HTML y colócalo en `public/`

2. **Sitemap**:
   - Una vez desplegado, envía tu sitemap a Google Search Console
   - La URL será: `https://tudominio.com/sitemap-index.xml`

3. **Google Analytics 4**:
   - Crea una cuenta en [Google Analytics](https://analytics.google.com/)
   - Añade el script de seguimiento en tu layout principal

## 🔍 Pruebas SEO

Antes de desplegar, verifica:

1. **Lighthouse**:
   ```bash
   npm run build
   npx serve dist
   # Abre Chrome DevTools > Lighthouse y ejecuta una auditoría
   ```

2. **Validación de Estructura**:
   - Usa [Schema Markup Validator](https://validator.schema.org/)
   - Valida tus rich snippets con [Rich Results Test](https://search.google.com/test/rich-results)

## 📝 Plantilla de Post

Cada post debe incluir estos metadatos:

```yaml
---
title: "Título del Post"
description: "Descripción corta para SEO (150-160 caracteres)" 
pubDate: 2025-01-01
author: "Nombre del Autor"
image: "/images/blog/imagen-destacada.jpg"
tags: ["etiqueta1", "etiqueta2"]
category: "Categoría"
readingTime: 5  # Tiempo estimado de lectura en minutos
draft: false    # Cambiar a true para borradores
---
```

## 🔄 Actualizaciones Futuras

- [ ] Implementar búsqueda con Algolia
- [ ] Añadir soporte para comentarios (usando Disqus o similar)
- [ ] Implementar suscripción por correo
- [ ] Añadir soporte para series de posts
- [ ] Implementar sistema de autores con perfiles
