import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D7wE4XSf.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Dl7EB-N3.mjs';
/* empty css                                  */
import { $ as $$CardShop } from '../chunks/CardShop_IpPmU-Zt.mjs';
import { $ as $$SEO } from '../chunks/SEO_DKXB5C14.mjs';
import { c as content4, a as content5, b as content3 } from '../chunks/shellby_PjYWm4GN.mjs';
export { renderers } from '../renderers.mjs';

const $$Marketing = createComponent(($$result, $$props, $$slots) => {
  const serviciosMarketing = [
    {
      icono: "\u{1F680}",
      titulo: "Paquete PYME Starter",
      descripcion: "Perfecto para peque\xF1as empresas que inician en redes sociales. Todo lo b\xE1sico para empezar a vender.",
      caracteristicas: [
        "Gesti\xF3n de Instagram y Facebook",
        "15-20 publicaciones mensuales",
        "Dise\xF1o gr\xE1fico b\xE1sico incluido",
        "Respuesta a comentarios principales",
        "Reporte mensual b\xE1sico",
        "Capacitaci\xF3n inicial gratuita"
      ],
      precio: "3,200",
      periodo: "mes",
      descuento: "20% primer trimestre"
    },
    {
      icono: "\u{1F4F1}",
      titulo: "Gesti\xF3n Completa PYME",
      descripcion: "Manejo profesional de tus redes sociales con contenido de calidad y engagement real para PYMEs.",
      caracteristicas: [
        "Gesti\xF3n de Instagram, Facebook, TikTok",
        "25-30 publicaciones mensuales",
        "Dise\xF1o gr\xE1fico profesional incluido",
        "Respuesta a comentarios y DMs",
        "Reportes mensuales detallados",
        "Estrategia de hashtags personalizada"
      ],
      precio: "4,500",
      periodo: "mes",
      descuento: "15% por renovaci\xF3n anual"
    },
    {
      icono: "\u{1F3AF}",
      titulo: "Campa\xF1as Publicitarias",
      descripcion: "Campa\xF1as pagadas en Facebook Ads, Instagram Ads y Google Ads optimizadas para conversi\xF3n.",
      caracteristicas: [
        "Configuraci\xF3n de campa\xF1as en Meta y Google",
        "Segmentaci\xF3n avanzada de audiencias",
        "Dise\xF1o de creativos publicitarios",
        "Optimizaci\xF3n diaria de presupuesto",
        "A/B testing de anuncios",
        "Reportes semanales de ROI"
      ],
      precio: "6,800",
      periodo: "mes",
      descuento: "+ presupuesto publicitario"
    },
    {
      icono: "\u{1F4CA}",
      titulo: "Marketing Digital Integral",
      descripcion: "Estrategia completa de marketing digital: redes sociales, publicidad, email marketing y m\xE1s.",
      caracteristicas: [
        "Gesti\xF3n completa de redes sociales",
        "Campa\xF1as publicitarias multi-plataforma",
        "Email marketing automatizado",
        "SEO b\xE1sico y content marketing",
        "Landing pages optimizadas",
        "Consultor\xEDa estrat\xE9gica mensual"
      ],
      precio: "12,500",
      periodo: "mes",
      descuento: "20% por contrato anual"
    },
    {
      icono: "\u26A1",
      titulo: "Servicios Express",
      descripcion: "Servicios puntuales de marketing para necesidades espec\xEDficas con entrega r\xE1pida.",
      caracteristicas: [
        "Auditor\xEDa de redes sociales",
        "Dise\xF1o de feed de Instagram",
        "Configuraci\xF3n de Facebook Business",
        "Creaci\xF3n de contenido por lotes",
        "Estrategia de influencer marketing"
      ],
      precio: "2,200",
      periodo: "servicio",
      descuento: "Entrega en 5 d\xEDas"
    }
  ];
  const paquetesMarketing = [
    {
      id: 1,
      titulo: "Kit PYME Completo",
      descripcion: "Redes sociales + video + fotograf\xEDa por 3 meses",
      imagen: content4.src,
      precio: 18500,
      etiqueta: "M\xE1s Popular"
    },
    {
      id: 2,
      titulo: "Paquete Growth Premium",
      descripcion: "Marketing integral + video + dron + ERP por 6 meses",
      imagen: content5.src,
      precio: 85e3,
      etiqueta: "Ahorro 30%"
    },
    {
      id: 3,
      titulo: "Producci\xF3n Audiovisual",
      descripcion: "Videos profesionales + fotograf\xEDa + dise\xF1o empresarial",
      imagen: content3.src,
      precio: 25e3,
      etiqueta: "Incluye Dron"
    }
  ];
  const serviciosAdicionales = [
    {
      categoria: "Producci\xF3n Audiovisual",
      servicios: [
        {
          nombre: "Videos Corporativos",
          descripcion: "Videos profesionales para presentar tu empresa",
          precio: "8,500",
          incluye: ["Gui\xF3n personalizado", "Grabaci\xF3n profesional", "Edici\xF3n avanzada", "M\xFAsica y efectos", "Entrega en m\xFAltiples formatos"]
        },
        {
          nombre: "Videos de Eventos",
          descripcion: "Cobertura completa de tus eventos empresariales",
          precio: "12,000",
          incluye: ["Cobertura completa del evento", "M\xFAltiples c\xE1maras", "Edici\xF3n profesional", "Highlights de 3-5 min", "Video completo"]
        },
        {
          nombre: "Tomas A\xE9reas con Dron",
          descripcion: "Perspectivas \xFAnicas para tu contenido",
          precio: "5,500",
          incluye: ["Piloto certificado", "Dron 4K profesional", "Hasta 2 horas de vuelo", "Edici\xF3n b\xE1sica incluida", "Entrega en 48hrs"]
        }
      ]
    },
    {
      categoria: "Fotograf\xEDa Profesional",
      servicios: [
        {
          nombre: "Sesi\xF3n Corporativa",
          descripcion: "Fotograf\xEDas profesionales para tu equipo y empresa",
          precio: "4,500",
          incluye: ["Hasta 3 horas de sesi\xF3n", "50+ fotos editadas", "Retratos individuales", "Fotos grupales", "Entrega digital"]
        },
        {
          nombre: "Fotograf\xEDa de Productos",
          descripcion: "Im\xE1genes profesionales para tu cat\xE1logo",
          precio: "3,200",
          incluye: ["Hasta 20 productos", "Fondo blanco profesional", "M\xFAltiples \xE1ngulos", "Edici\xF3n avanzada", "Optimizaci\xF3n web"]
        },
        {
          nombre: "Cobertura de Eventos",
          descripcion: "Fotograf\xEDa profesional de tus eventos",
          precio: "6,800",
          incluye: ["Cobertura completa", "200+ fotos editadas", "Galer\xEDa online privada", "Descargas ilimitadas", "Entrega en 72hrs"]
        }
      ]
    },
    {
      categoria: "Dise\xF1o Empresarial",
      servicios: [
        {
          nombre: "Art\xEDculos Promocionales",
          descripcion: "Llaveros, tazas, playeras y m\xE1s con tu marca",
          precio: "2,800",
          incluye: ["Dise\xF1o personalizado", "Hasta 100 piezas", "5 tipos de art\xEDculos", "Entrega incluida CDMX", "Garant\xEDa de calidad"]
        },
        {
          nombre: "Material Corporativo",
          descripcion: "Tarjetas, folders, cat\xE1logos empresariales",
          precio: "3,500",
          incluye: ["Dise\xF1o profesional", "Impresi\xF3n premium", "Hasta 500 piezas", "M\xFAltiples formatos", "Entrega incluida"]
        },
        {
          nombre: "Se\xF1al\xE9tica Empresarial",
          descripcion: "Letreros, banners y se\xF1alizaci\xF3n para tu negocio",
          precio: "4,200",
          incluye: ["Dise\xF1o personalizado", "Materiales resistentes", "Instalaci\xF3n incluida", "Garant\xEDa 2 a\xF1os", "Mantenimiento"]
        }
      ]
    }
  ];
  const herramientasMarketing = [
    {
      nombre: "Plataforma de Marketing Propia",
      descripcion: "Sistema web personalizado para gestionar tu marketing digital",
      caracteristicas: [
        "Dashboard de m\xE9tricas en tiempo real",
        "Programaci\xF3n de contenido",
        "Gesti\xF3n de clientes y leads",
        "Reportes autom\xE1ticos",
        "Integraci\xF3n con redes sociales",
        "App m\xF3vil incluida"
      ],
      precio: "Incluido para PYMEs peque\xF1as",
      icono: "\u{1F4CA}"
    },
    {
      nombre: "Integraci\xF3n con Odoo ERP",
      descripcion: "Conectamos tu marketing con el sistema ERP m\xE1s completo",
      caracteristicas: [
        "Sincronizaci\xF3n de leads autom\xE1tica",
        "Gesti\xF3n de campa\xF1as integrada",
        "Seguimiento de ROI por cliente",
        "Automatizaci\xF3n de procesos",
        "Reportes unificados",
        "Soporte t\xE9cnico especializado"
      ],
      precio: "Para empresas medianas",
      icono: "\u{1F517}"
    }
  ];
  const descuentosMarketingPyme = [
    {
      tipo: "PYME Nueva",
      descuento: "50% primer mes",
      condicion: "Para empresas que inician en marketing digital"
    },
    {
      tipo: "Paquete Anual",
      descuento: "25% descuento",
      condicion: "Al contratar servicios por 12 meses"
    },
    {
      tipo: "Cliente Contable",
      descuento: "20% adicional",
      condicion: "Si ya eres cliente de nuestros servicios contables"
    },
    {
      tipo: "Referido",
      descuento: "1 mes gratis",
      condicion: "Por cada PYME que refiera"
    }
  ];
  const casosExito = [
    {
      cliente: "Restaurante Local",
      resultado: "+300% seguidores en 6 meses",
      metrica: "De 500 a 2,000 seguidores",
      plataforma: "Instagram"
    },
    {
      cliente: "E-commerce de Ropa",
      resultado: "ROI 4.5x en campa\xF1as",
      metrica: "$45 ganados por cada $10 invertidos",
      plataforma: "Facebook Ads"
    },
    {
      cliente: "Consultorio Dental",
      resultado: "+150% citas mensuales",
      metrica: "De 40 a 100 citas por mes",
      plataforma: "Google Ads"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Marketing Digital y Redes Sociales CDMX - Precios Competitivos", "description": "Agencia de marketing digital en Ciudad de M\xE9xico. Gesti\xF3n de redes sociales, campa\xF1as publicitarias Facebook Ads, Instagram, Google Ads desde $4,500/mes.", "keywords": "marketing digital CDMX, redes sociales M\xE9xico, Facebook Ads, Instagram marketing, Google Ads, agencia marketing Ciudad de M\xE9xico" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SEO", $$SEO, { "schemaType": "Service", "serviceName": "Marketing Digital y Redes Sociales", "serviceDescription": "Servicios de marketing digital, gesti\xF3n de redes sociales y campa\xF1as publicitarias para empresas en Ciudad de M\xE9xico" })} ${maybeRenderHead()}<main> <!-- Hero --> <section class="py-16 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600"> <div class="container mx-auto px-4 text-center"> <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
Marketing Digital Integral para PYMEs en CDMX
</h1> <p class="text-xl text-pink-100 max-w-3xl mx-auto mb-8">
Especialistas en <span class="font-semibold">redes sociales, video, fotografía y diseño empresarial</span> para pequeñas y medianas empresas. 
          Desde contenido digital hasta producción audiovisual con drones, todo en un solo lugar.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="#paquetes" class="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-pink-50 transition-colors">
Ver Paquetes
</a> <a href="#contacto" class="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
Auditoría Gratis
</a> </div> </div> </section> <!-- Casos de Éxito --> <section class="py-12 bg-gradient-to-r from-green-50 to-blue-50"> <div class="container mx-auto px-4"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-gray-800 mb-4">🚀 Resultados Reales de Nuestros Clientes</h2> <p class="text-lg text-gray-600">Casos de éxito verificables en el mercado mexicano</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> ${casosExito.map((caso, i) => renderTemplate`<div class="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-green-500"> <h3 class="text-lg font-bold text-gray-800 mb-2">${caso.cliente}</h3> <div class="text-3xl font-bold text-green-600 mb-2">${caso.resultado}</div> <p class="text-gray-600 mb-3">${caso.metrica}</p> <span class="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold"> ${caso.plataforma} </span> </div>`)} </div> </div> </section> <!-- Precios Competitivos --> <section class="py-12 bg-purple-50"> <div class="container mx-auto px-4"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-gray-800 mb-4">💰 Precios Más Competitivos de CDMX</h2> <p class="text-lg text-gray-600">Comparativa real con otras agencias de marketing digital</p> </div> <div class="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="space-y-4"> <h3 class="text-xl font-bold text-purple-600">🏆 Nuestros Precios</h3> <div class="space-y-2"> <div class="flex justify-between"> <span>Gestión Redes Sociales:</span> <span class="font-bold text-purple-600">$4,500/mes</span> </div> <div class="flex justify-between"> <span>Campañas Publicitarias:</span> <span class="font-bold text-purple-600">$6,800/mes</span> </div> <div class="flex justify-between"> <span>Marketing Integral:</span> <span class="font-bold text-purple-600">$12,500/mes</span> </div> <div class="flex justify-between"> <span>Consultoría:</span> <span class="font-bold text-purple-600">$2,200</span> </div> </div> </div> <div class="space-y-4"> <h3 class="text-xl font-bold text-gray-600">📊 Promedio del Mercado</h3> <div class="space-y-2"> <div class="flex justify-between"> <span>Gestión Redes Sociales:</span> <span class="text-gray-600">$5,000-8,000/mes</span> </div> <div class="flex justify-between"> <span>Campañas Publicitarias:</span> <span class="text-gray-600">$8,000-12,000/mes</span> </div> <div class="flex justify-between"> <span>Marketing Integral:</span> <span class="text-gray-600">$15,000-25,000/mes</span> </div> <div class="flex justify-between"> <span>Consultoría:</span> <span class="text-gray-600">$3,000-5,000</span> </div> </div> </div> </div> <div class="mt-6 p-4 bg-purple-100 rounded-lg text-center"> <p class="text-purple-800 font-semibold">
💡 <strong>Ahorra hasta 35%</strong> comparado con otras agencias de marketing en CDMX
</p> </div> </div> </div> </section> <!-- Servicios --> <section id="servicios" class="py-16"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Nuestros Servicios de Marketing Digital</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${serviciosMarketing.map((servicio) => renderTemplate`<div class="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500"> <div class="flex items-start gap-4"> <div class="text-4xl">${servicio.icono}</div> <div class="flex-1"> <h3 class="text-xl font-bold text-gray-800 mb-2">${servicio.titulo}</h3> <p class="text-gray-600 mb-4">${servicio.descripcion}</p> <ul class="space-y-2 mb-4"> ${servicio.caracteristicas.map((caracteristica) => renderTemplate`<li class="flex items-center text-sm text-gray-700"> <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> ${caracteristica} </li>`)} </ul> <div class="flex items-center justify-between"> <div> <span class="text-2xl font-bold text-purple-600">$${servicio.precio}</span> <span class="text-gray-500">/${servicio.periodo}</span> ${servicio.descuento && renderTemplate`<div class="text-sm text-green-600 font-semibold">${servicio.descuento}</div>`} </div> <button class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
Contratar
</button> </div> </div> </div> </div>`)} </div> </div> </section> <!-- Plataformas que Manejamos --> <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Plataformas que Dominamos</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-6"> <div class="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"> <div class="text-4xl mb-3">📘</div> <h3 class="font-bold text-lg mb-2">Facebook</h3> <p class="text-gray-600 text-sm">Posts, Stories, Reels, Facebook Ads</p> </div> <div class="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"> <div class="text-4xl mb-3">📸</div> <h3 class="font-bold text-lg mb-2">Instagram</h3> <p class="text-gray-600 text-sm">Feed, Stories, Reels, IGTV, Instagram Ads</p> </div> <div class="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"> <div class="text-4xl mb-3">🎵</div> <h3 class="font-bold text-lg mb-2">TikTok</h3> <p class="text-gray-600 text-sm">Videos virales, TikTok Ads, Influencers</p> </div> <div class="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"> <div class="text-4xl mb-3">🔍</div> <h3 class="font-bold text-lg mb-2">Google Ads</h3> <p class="text-gray-600 text-sm">Search, Display, YouTube, Shopping</p> </div> <div class="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"> <div class="text-4xl mb-3">💼</div> <h3 class="font-bold text-lg mb-2">LinkedIn</h3> <p class="text-gray-600 text-sm">Content B2B, LinkedIn Ads</p> </div> <div class="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"> <div class="text-4xl mb-3">📺</div> <h3 class="font-bold text-lg mb-2">YouTube</h3> <p class="text-gray-600 text-sm">Videos, Shorts, YouTube Ads</p> </div> <div class="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"> <div class="text-4xl mb-3">📧</div> <h3 class="font-bold text-lg mb-2">Email Marketing</h3> <p class="text-gray-600 text-sm">Mailchimp, Klaviyo, automatizaciones</p> </div> <div class="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"> <div class="text-4xl mb-3">💬</div> <h3 class="font-bold text-lg mb-2">WhatsApp Business</h3> <p class="text-gray-600 text-sm">Catálogos, automatización, campañas</p> </div> </div> </div> </section> <!-- Paquetes Especiales --> <section id="paquetes" class="py-16 bg-gradient-to-r from-pink-50 to-purple-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-4 text-gray-800">Paquetes Integrales para PYMEs</h2> <p class="text-center text-gray-600 mb-12">Marketing digital + producción audiovisual + diseño empresarial en paquetes especializados</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> ${paquetesMarketing.map((paquete, i) => renderTemplate`${renderComponent($$result2, "CardShop", $$CardShop, { "producto": paquete, "key": i })}`)} </div> </div> </section> <!-- Servicios Adicionales Especializados --> <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-4 text-gray-800">🎬 Servicios Especializados para PYMEs</h2> <p class="text-center text-gray-600 mb-12">Producción audiovisual, fotografía profesional y diseño empresarial</p> ${serviciosAdicionales.map((categoria, i) => renderTemplate`<div class="mb-12"> <h3 class="text-2xl font-bold text-center mb-8 text-purple-600">${categoria.categoria}</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> ${categoria.servicios.map((servicio, j) => renderTemplate`<div class="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500"> <h4 class="text-xl font-bold text-gray-800 mb-2">${servicio.nombre}</h4> <p class="text-gray-600 mb-4">${servicio.descripcion}</p> <div class="mb-4"> <span class="text-2xl font-bold text-purple-600">$${servicio.precio}</span> </div> <ul class="space-y-2 mb-4"> ${servicio.incluye.map((item) => renderTemplate`<li class="flex items-center text-sm text-gray-700"> <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> ${item} </li>`)} </ul> <button class="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
Contratar Servicio
</button> </div>`)} </div> </div>`)} </div> </section> <!-- Herramientas de Software Marketing --> <section class="py-16 bg-gradient-to-r from-blue-50 to-indigo-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-4 text-gray-800">🛠️ Plataformas y Software Incluido</h2> <p class="text-center text-gray-600 mb-12">Herramientas tecnológicas para potenciar tu marketing digital</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${herramientasMarketing.map((herramienta, i) => renderTemplate`<div class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500"> <div class="flex items-start gap-4"> <div class="text-4xl">${herramienta.icono}</div> <div class="flex-1"> <h3 class="text-xl font-bold text-gray-800 mb-2">${herramienta.nombre}</h3> <p class="text-gray-600 mb-4">${herramienta.descripcion}</p> <ul class="space-y-2 mb-4"> ${herramienta.caracteristicas.map((caracteristica) => renderTemplate`<li class="flex items-center text-sm text-gray-700"> <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> ${caracteristica} </li>`)} </ul> <div class="bg-blue-100 rounded-lg p-3 text-center"> <span class="text-blue-800 font-bold text-lg">${herramienta.precio}</span> <p class="text-blue-700 text-sm">Acceso completo con nuestros paquetes</p> </div> </div> </div> </div>`)} </div> </div> </section> <!-- Descuentos Especiales PYME Marketing --> <section class="py-16 bg-gradient-to-r from-orange-50 to-red-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-4 text-gray-800">🎁 Descuentos Exclusivos para PYMEs</h2> <p class="text-center text-gray-600 mb-12">Apoyamos el crecimiento de las pequeñas y medianas empresas</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> ${descuentosMarketingPyme.map((descuento, i) => renderTemplate`<div class="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-orange-500"> <div class="text-3xl mb-3">🏷️</div> <h3 class="text-lg font-bold text-gray-800 mb-2">${descuento.tipo}</h3> <div class="text-2xl font-bold text-orange-600 mb-2">${descuento.descuento}</div> <p class="text-gray-600 text-sm">${descuento.condicion}</p> </div>`)} </div> <div class="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-center"> <h3 class="text-2xl font-bold text-white mb-2">🚀 Oferta Especial PYME Completa</h3> <p class="text-purple-100 mb-4">Marketing digital + video corporativo + fotografía + diseño empresarial</p> <div class="flex items-center justify-center gap-4 mb-4"> <span class="text-white line-through text-xl">$35,000</span> <span class="text-white font-bold text-3xl">$18,500</span> <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">47% OFF</span> </div> <button class="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-purple-50 transition-colors">
¡Quiero esta oferta completa!
</button> </div> </div> </section> <!-- Proceso de Trabajo --> <section class="py-16"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Nuestro Proceso de Marketing</h2> <div class="max-w-5xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-5 gap-6"> <div class="text-center"> <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div> <h3 class="font-bold text-lg mb-2">Auditoría Gratuita</h3> <p class="text-gray-600 text-sm">Analizamos tu presencia digital actual y competencia</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div> <h3 class="font-bold text-lg mb-2">Estrategia Personalizada</h3> <p class="text-gray-600 text-sm">Creamos un plan de marketing específico para tu negocio</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div> <h3 class="font-bold text-lg mb-2">Creación de Contenido</h3> <p class="text-gray-600 text-sm">Diseñamos y producimos contenido de alta calidad</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div> <h3 class="font-bold text-lg mb-2">Implementación</h3> <p class="text-gray-600 text-sm">Ejecutamos campañas y publicamos contenido optimizado</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">5</div> <h3 class="font-bold text-lg mb-2">Análisis y Optimización</h3> <p class="text-gray-600 text-sm">Medimos resultados y optimizamos para mejor ROI</p> </div> </div> </div> </div> </section> <!-- Ventajas Competitivas --> <section class="py-16 bg-gradient-to-r from-purple-50 to-pink-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">¿Por Qué Elegir Nuestra Agencia en CDMX?</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="text-center p-6"> <div class="text-5xl mb-4">🎯</div> <h3 class="text-xl font-bold mb-3 text-gray-800">Especialistas en Conversión</h3> <p class="text-gray-600">No solo generamos likes, creamos estrategias que convierten seguidores en clientes reales</p> </div> <div class="text-center p-6"> <div class="text-5xl mb-4">💰</div> <h3 class="text-xl font-bold mb-3 text-gray-800">ROI Comprobado</h3> <p class="text-gray-600">Promedio de 4.2x de retorno de inversión en nuestras campañas publicitarias</p> </div> <div class="text-center p-6"> <div class="text-5xl mb-4">📊</div> <h3 class="text-xl font-bold mb-3 text-gray-800">Reportes Transparentes</h3> <p class="text-gray-600">Dashboard en tiempo real y reportes detallados semanales con métricas claras</p> </div> <div class="text-center p-6"> <div class="text-5xl mb-4">🚀</div> <h3 class="text-xl font-bold mb-3 text-gray-800">Crecimiento Acelerado</h3> <p class="text-gray-600">Estrategias probadas para hacer crecer tu marca 3x más rápido que la competencia</p> </div> <div class="text-center p-6"> <div class="text-5xl mb-4">🎨</div> <h3 class="text-xl font-bold mb-3 text-gray-800">Diseño Profesional</h3> <p class="text-gray-600">Equipo de diseñadores especializados en contenido para redes sociales y publicidad</p> </div> <div class="text-center p-6"> <div class="text-5xl mb-4">⚡</div> <h3 class="text-xl font-bold mb-3 text-gray-800">Soporte Inmediato</h3> <p class="text-gray-600">Community manager dedicado y respuesta en menos de 1 hora en crisis de reputación</p> </div> </div> </div> </section> <!-- CTA Final --> <section id="contacto" class="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600"> <div class="container mx-auto px-4 text-center"> <h2 class="text-3xl font-bold text-white mb-4">¿Listo para Hacer Crecer tu Negocio?</h2> <p class="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
Obtén una auditoría gratuita de tus redes sociales y descubre cómo podemos multiplicar tus ventas con marketing digital
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8"> <a href="tel:+525512345678" class="bg-white text-purple-600 font-bold py-4 px-8 rounded-lg hover:bg-pink-50 transition-colors flex items-center justify-center">
📞 Llamar Ahora: (55) 1234-5678
</a> <a href="https://wa.me/525512345678" target="_blank" class="bg-green-500 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center">
💬 WhatsApp: Auditoría Gratis
</a> </div> <div class="bg-white/10 rounded-lg p-4 max-w-md mx-auto mb-6"> <p class="text-white font-semibold mb-2">🎁 Promoción Especial CDMX</p> <p class="text-purple-100 text-sm">Primer mes 50% descuento + auditoría gratuita + diseño de 10 posts de regalo</p> </div> <p class="text-purple-100 text-sm">
📍 <strong>Ubicación:</strong> Roma Norte, Ciudad de México | 🕒 <strong>Horario:</strong> Lun-Vie 9:00-19:00
</p> </div> </section> </main> ` })}`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/marketing.astro", void 0);

const $$file = "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/marketing.astro";
const $$url = "/marketing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Marketing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
