# Plan de SEO - Insano Network Landing

## 📊 Análisis de Páginas Principales

### Páginas Identificadas

1. **Home** (`/` - `index.astro`) - ✅ Contenido completo
2. **Nosotros** (`/nosotros` - `nosotros.astro`) - ✅ Contenido completo
3. **Diseño** (`/diseno` - `diseno.astro`) - ✅ Contenido completo
4. **Desarrollo** (`/desarrollo` - `desarrollo.astro`) - ⚠️ En construcción
5. **Marketing** (`/marketing` - `marketing.astro`) - ⚠️ En construcción
6. **Contable** (`/contable` - `contable.astro`) - ✅ Contenido completo
7. **E-commerce** (`/ecommerce` - `ecommerce.astro`) - ⚠️ En construcción
8. **Blog** (`/blog` - `blog/index.astro`) - ✅ Estructura lista

---

## 🎯 Problemas SEO Detectados

### 🔴 Críticos

1. **Meta Tags Faltantes**
   - No hay meta description personalizada por página
   - No hay Open Graph tags (og:title, og:description, og:image)
   - No hay Twitter Cards
   - Falta canonical URL en cada página

2. **Layout Base Deficiente**
   - El `Layout.astro` no acepta props para title y description
   - Title hardcodeado: "Insano Network — Diseña, Desarrolla y Vende tus Ideas"
   - No hay soporte para meta tags dinámicos

3. **Estructura de Headings**
   - Página home: múltiples h3 sin jerarquía clara
   - Falta estructura semántica H1 > H2 > H3

4. **Imágenes sin Optimización SEO**
   - Falta atributo `alt` descriptivo en muchas imágenes
   - No hay lazy loading explícito
   - Imágenes de Unsplash sin optimización local

### 🟡 Importantes

5. **Schema.org / JSON-LD**
   - No hay structured data (Organization, LocalBusiness, Service, etc.)
   - Falta breadcrumbs schema

6. **Sitemap Configurado pero Básico**
   - Sitemap existe pero sin prioridades personalizadas por página
   - No hay diferenciación de changefreq por tipo de contenido

7. **URLs y Slugs**
   - URLs en español sin configuración i18n clara
   - Falta robots.txt

8. **Performance SEO**
   - Muchos iframes embebidos (YouTube, Twitch, Instagram)
   - No hay estrategia de carga diferida para contenido pesado

### 🟢 Menores

9. **Contenido Duplicado**
   - Páginas "en construcción" con contenido mínimo
   - Falta contenido único y relevante

10. **Internal Linking**
    - Poca interconexión entre páginas de servicios
    - Falta estrategia de anchor text

---

## 🚀 Plan de Acción SEO

### Fase 1: Fundamentos Técnicos (Prioridad Alta)

#### 1.1 Mejorar Layout Base
- [ ] Modificar `Layout.astro` para aceptar props SEO
- [ ] Agregar meta tags dinámicos (title, description, keywords)
- [ ] Implementar Open Graph tags
- [ ] Implementar Twitter Cards
- [ ] Agregar canonical URLs
- [ ] Agregar hreflang para i18n futuro

#### 1.2 Crear Componente SEO Reutilizable
- [ ] Crear `components/SEO.astro` con todas las meta tags
- [ ] Incluir soporte para JSON-LD structured data
- [ ] Configuración por tipo de página (home, service, blog, product)

#### 1.3 Configurar Meta Tags por Página
- [ ] **Home**: "Insano Network - Diseña, Desarrolla y Vende tus Ideas | Servicios Digitales"
- [ ] **Nosotros**: "Sobre Insano Network - Conectando Talento e Impulsando Ideas"
- [ ] **Diseño**: "Servicios de Diseño Web, 3D y UI/UX | Insano Network"
- [ ] **Desarrollo**: "Desarrollo Web y Software a Medida | Insano Network"
- [ ] **Marketing**: "Marketing Digital y Estrategias de Crecimiento | Insano Network"
- [ ] **Contable**: "Servicios Contables y Fiscales | E&V Contadores - Insano Network"
- [ ] **E-commerce**: "Soluciones E-commerce y Tiendas Online | Insano Network"
- [ ] **Blog**: "Blog de Tecnología y Desarrollo Web | Insano Network"

### Fase 2: Contenido y Estructura (Prioridad Alta)

#### 2.1 Optimizar Estructura de Headings
- [ ] Asegurar un solo H1 por página (título principal)
- [ ] Jerarquía lógica H1 > H2 > H3
- [ ] Keywords en headings de forma natural

#### 2.2 Optimizar Imágenes
- [ ] Agregar alt text descriptivo a todas las imágenes
- [ ] Implementar lazy loading con `loading="lazy"`
- [ ] Optimizar imágenes (WebP, tamaños responsive)
- [ ] Usar componente Image de Astro

#### 2.3 Completar Páginas en Construcción
- [ ] Desarrollo: agregar contenido de servicios (mínimo 500 palabras)
- [ ] Marketing: agregar contenido de servicios (mínimo 500 palabras)
- [ ] E-commerce: agregar contenido de servicios (mínimo 500 palabras)

### Fase 3: Structured Data (Prioridad Media)

#### 3.1 Implementar Schema.org
- [ ] **Organization Schema** (todas las páginas)
  ```json
  {
    "@type": "Organization",
    "name": "Insano Network",
    "url": "https://insanonetwork.com",
    "logo": "https://insanonetwork.com/logo.png",
    "sameAs": [redes sociales]
  }
  ```

- [ ] **Service Schema** (páginas de servicios)
- [ ] **LocalBusiness Schema** (página contable)
- [ ] **BlogPosting Schema** (posts del blog)
- [ ] **BreadcrumbList Schema** (todas las páginas)

### Fase 4: Performance y Técnico (Prioridad Media)

#### 4.1 Optimizar Carga de Recursos
- [ ] Lazy load para iframes (YouTube, Twitch, Instagram)
- [ ] Implementar facade pattern para embeds pesados
- [ ] Minificar CSS y JS
- [ ] Implementar preload para recursos críticos

#### 4.2 Configuraciones Técnicas
- [ ] Crear y configurar `robots.txt`
- [ ] Mejorar configuración de `sitemap.xml` con prioridades
- [ ] Configurar redirects 301 si es necesario
- [ ] Implementar breadcrumbs visuales y schema

### Fase 5: Contenido y Keywords (Prioridad Media-Baja)

#### 5.1 Investigación de Keywords
- [ ] Identificar keywords principales por servicio
- [ ] Crear matriz de keywords (primarias, secundarias, long-tail)
- [ ] Análisis de competencia

#### 5.2 Optimización de Contenido
- [ ] Densidad de keywords natural (1-2%)
- [ ] LSI keywords (sinónimos y relacionados)
- [ ] Contenido único y de valor (evitar duplicados)
- [ ] Call-to-actions claros

#### 5.3 Internal Linking
- [ ] Estrategia de enlaces internos entre servicios
- [ ] Anchor text descriptivo y variado
- [ ] Enlaces desde home a páginas principales
- [ ] Enlaces desde blog a servicios relacionados

### Fase 6: Local SEO (Prioridad Baja)

#### 6.1 Optimización Local (si aplica)
- [ ] Google My Business
- [ ] NAP consistency (Name, Address, Phone)
- [ ] Local schema markup
- [ ] Reviews y testimonios

---

## 📋 Keywords Sugeridas por Página

### Home
- **Primarias**: servicios digitales, diseño y desarrollo web, agencia digital
- **Secundarias**: e-commerce, marketing digital, desarrollo software
- **Long-tail**: agencia de diseño y desarrollo en [ciudad], servicios digitales para empresas

### Diseño
- **Primarias**: diseño web, diseño UI/UX, modelado 3D
- **Secundarias**: diseño gráfico, diseño de interfaces, diseño 2D
- **Long-tail**: servicios de diseño web profesional, diseño UI para aplicaciones móviles

### Desarrollo
- **Primarias**: desarrollo web, desarrollo software, programación
- **Secundarias**: desarrollo a medida, aplicaciones web, API
- **Long-tail**: desarrollo de aplicaciones web personalizadas, servicios de programación

### Marketing
- **Primarias**: marketing digital, estrategias de marketing, publicidad online
- **Secundarias**: SEO, SEM, redes sociales, analítica web
- **Long-tail**: estrategias de marketing digital para pymes, servicios de marketing online

### Contable
- **Primarias**: servicios contables, contador público, asesoría fiscal
- **Secundarias**: declaración de impuestos, contabilidad general, auditorías
- **Long-tail**: servicios contables para empresas, asesoría fiscal y financiera

### E-commerce
- **Primarias**: tienda online, e-commerce, comercio electrónico
- **Secundarias**: plataforma de ventas, carrito de compras, pasarela de pago
- **Long-tail**: desarrollo de tiendas online, soluciones e-commerce para negocios

---

## 🎯 Métricas de Éxito

### KPIs a Monitorear
1. **Posicionamiento Orgánico**
   - Ranking de keywords principales (Top 10, Top 20)
   - Visibilidad en SERP

2. **Tráfico Orgánico**
   - Sesiones orgánicas mensuales
   - Páginas vistas
   - Tasa de rebote
   - Tiempo en sitio

3. **Conversiones**
   - Formularios de contacto enviados
   - Clicks en CTAs
   - Tasa de conversión por página

4. **Técnico**
   - Core Web Vitals (LCP, FID, CLS)
   - Velocidad de carga (PageSpeed Insights)
   - Errores de rastreo (Google Search Console)
   - Cobertura de indexación

### Herramientas Recomendadas
- Google Search Console
- Google Analytics 4
- Google PageSpeed Insights
- Ahrefs / SEMrush / Ubersuggest
- Screaming Frog (auditorías técnicas)

---

## 📅 Timeline Estimado

| Fase | Duración | Prioridad |
|------|----------|-----------|
| Fase 1: Fundamentos Técnicos | 1-2 semanas | 🔴 Alta |
| Fase 2: Contenido y Estructura | 2-3 semanas | 🔴 Alta |
| Fase 3: Structured Data | 1 semana | 🟡 Media |
| Fase 4: Performance | 1-2 semanas | 🟡 Media |
| Fase 5: Keywords y Contenido | 2-4 semanas | 🟢 Media-Baja |
| Fase 6: Local SEO | 1 semana | 🟢 Baja |

**Total estimado**: 8-13 semanas para implementación completa

---

## 🔧 Próximos Pasos Inmediatos

1. ✅ **Revisar y aprobar este plan**
2. 🔄 **Comenzar con Fase 1.1**: Mejorar Layout.astro
3. 🔄 **Crear componente SEO reutilizable**
4. 🔄 **Configurar meta tags para cada página**
5. 🔄 **Optimizar estructura de headings en home**

---

## 📝 Notas Adicionales

- El sitio usa **Astro 5** con SSR (server-side rendering)
- Ya tiene **sitemap** configurado
- Usa **Tailwind CSS** para estilos
- Integración con **Supabase** y **Medusa.js** (e-commerce)
- Configurado para deploy en **Netlify**

---

**Documento creado**: 2025-10-09  
**Última actualización**: 2025-10-09  
**Responsable**: Equipo Insano Network
