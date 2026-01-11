import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D7wE4XSf.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Dl7EB-N3.mjs';
import { $ as $$CardShop } from '../chunks/CardShop_IpPmU-Zt.mjs';
import { $ as $$SEO } from '../chunks/SEO_DKXB5C14.mjs';
import { c as content4, a as content5, b as content3 } from '../chunks/shellby_PjYWm4GN.mjs';
export { renderers } from '../renderers.mjs';

const $$Contable = createComponent(($$result, $$props, $$slots) => {
  const serviciosContables = [
    {
      icono: "\u{1F680}",
      titulo: "Paquete Emprendedor",
      descripcion: "Perfecto para nuevos emprendedores y micro empresas. Todo lo necesario para iniciar tu negocio formalmente.",
      caracteristicas: [
        "Constituci\xF3n de empresa incluida",
        "Registro de ingresos y egresos",
        "Declaraciones mensuales (IVA, ISR)",
        "Software de facturaci\xF3n SAT incluido",
        "Soporte v\xEDa WhatsApp",
        "Capacitaci\xF3n inicial gratuita"
      ],
      precio: "1,800",
      periodo: "mes",
      descuento: "20% primer a\xF1o + constituci\xF3n gratis"
    },
    {
      icono: "\u{1F4CA}",
      titulo: "Contabilidad PYME",
      descripcion: "Ideal para peque\xF1as y medianas empresas. Registro contable completo con herramientas digitales.",
      caracteristicas: [
        "Registro de ingresos y egresos",
        "Conciliaciones bancarias mensuales",
        "Declaraciones mensuales (IVA, ISR)",
        "Estados financieros b\xE1sicos",
        "Software de facturaci\xF3n SAT",
        "Portal web para consultas 24/7"
      ],
      precio: "2,500",
      periodo: "mes",
      descuento: "15% por renovaci\xF3n anual"
    },
    {
      icono: "\u{1F4BC}",
      titulo: "Contabilidad Empresarial",
      descripcion: "Para empresas establecidas que requieren control financiero completo y asesor\xEDa especializada.",
      caracteristicas: [
        "Contabilidad completa con p\xF3lizas",
        "Estados financieros mensuales",
        "Declaraciones anuales incluidas",
        "Asesor\xEDa fiscal personalizada",
        "Revisi\xF3n de deducciones",
        "Reuniones mensuales presenciales"
      ],
      precio: "4,800",
      periodo: "mes",
      descuento: "15% anual"
    },
    {
      icono: "\u{1F3E2}",
      titulo: "Paquete Corporativo",
      descripcion: "Soluci\xF3n integral para medianas y grandes empresas con m\xFAltiples obligaciones fiscales.",
      caracteristicas: [
        "Contabilidad multi-empresa",
        "N\xF3minas y IMSS incluidos",
        "Auditor\xEDas internas trimestrales",
        "Dict\xE1menes fiscales",
        "Consultor\xEDa estrat\xE9gica",
        "Contador dedicado",
        "Soporte 24/7"
      ],
      precio: "12,000",
      periodo: "mes",
      descuento: "20% anual"
    },
    {
      icono: "\u26A1",
      titulo: "Servicios Express",
      descripcion: "Servicios puntuales para necesidades espec\xEDficas con entrega r\xE1pida.",
      caracteristicas: [
        "Declaraci\xF3n anual personas f\xEDsicas",
        "Constituci\xF3n de empresas",
        "Cambios en el SAT",
        "Facturas de a\xF1os anteriores",
        "Consultas fiscales urgentes"
      ],
      precio: "1,200",
      periodo: "servicio",
      descuento: "Sin costo adicional"
    }
  ];
  const paquetesContables = [
    {
      id: 1,
      titulo: "Kit Emprendedor Completo",
      descripcion: "Constituci\xF3n + contabilidad 6 meses + software SAT",
      imagen: content4.src,
      precio: 8500,
      etiqueta: "M\xE1s Popular"
    },
    {
      id: 2,
      titulo: "Paquete PYME Anual",
      descripcion: "Contabilidad completa + software + renovaci\xF3n 15% desc",
      imagen: content5.src,
      precio: 28e3,
      etiqueta: "Ahorro 35%"
    },
    {
      id: 3,
      titulo: "Migraci\xF3n Digital",
      descripcion: "Digitalizaci\xF3n contable + capacitaci\xF3n + software",
      imagen: content3.src,
      precio: 12500,
      etiqueta: "Incluye Software"
    }
  ];
  const herramientasSoftware = [
    {
      nombre: "Sistema de Facturaci\xF3n SAT",
      descripcion: "Software propio para generar facturas con timbrado fiscal autom\xE1tico",
      caracteristicas: [
        "Timbrado autom\xE1tico con PAC certificado",
        "Cat\xE1logo de productos y servicios",
        "Clientes y proveedores ilimitados",
        "Reportes fiscales autom\xE1ticos",
        "Respaldo en la nube",
        "Soporte t\xE9cnico incluido"
      ],
      precio: "Incluido",
      icono: "\u{1F9FE}"
    },
    {
      nombre: "Portal Contable Web",
      descripcion: "Plataforma web para consultar tu informaci\xF3n contable 24/7",
      caracteristicas: [
        "Estados financieros en tiempo real",
        "Consulta de declaraciones",
        "Subida de documentos",
        "Chat directo con tu contador",
        "Alertas fiscales autom\xE1ticas",
        "App m\xF3vil disponible"
      ],
      precio: "Incluido",
      icono: "\u{1F4BB}"
    }
  ];
  const descuentosPyme = [
    {
      tipo: "Cliente Nuevo",
      descuento: "20% primer a\xF1o",
      condicion: "Para emprendedores y nuevas PYMEs"
    },
    {
      tipo: "Renovaci\xF3n Anual",
      descuento: "15% descuento",
      condicion: "Al renovar contrato por 12 meses"
    },
    {
      tipo: "Referido",
      descuento: "1 mes gratis",
      condicion: "Por cada cliente que refiera"
    },
    {
      tipo: "Paquete Completo",
      descuento: "Constituci\xF3n gratis",
      condicion: "Al contratar paquete emprendedor"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios Contables CDMX - Precios Competitivos", "description": "Servicios contables profesionales en Ciudad de M\xE9xico. Contabilidad, declaraciones fiscales, n\xF3minas y asesor\xEDa desde $2,500/mes. Contadores certificados.", "keywords": "servicios contables CDMX, contador p\xFAblico M\xE9xico, declaraciones fiscales, contabilidad empresarial, asesor\xEDa fiscal Ciudad de M\xE9xico" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SEO", $$SEO, { "schemaType": "LocalBusiness", "serviceName": "Servicios Contables y Fiscales", "serviceDescription": "Servicios contables profesionales, declaraciones fiscales, n\xF3minas y asesor\xEDa fiscal para empresas en Ciudad de M\xE9xico" })} ${maybeRenderHead()}<main> <!-- Hero --> <section class="py-16 bg-gradient-to-r from-blue-600 to-indigo-700"> <div class="container mx-auto px-4 text-center"> <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
Servicios Contables para PYMEs y Emprendedores en CDMX
</h1> <p class="text-xl text-blue-100 max-w-3xl mx-auto mb-8"> <span class="font-semibold">E&V Contadores Públicos Independientes</span> - Especialistas en pequeñas y medianas empresas. 
          Precios accesibles, software incluido y acompañamiento personalizado para hacer crecer tu negocio.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="#paquetes" class="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
Ver Paquetes
</a> <a href="#contacto" class="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
Cotizar Gratis
</a> </div> </div> </section> <!-- Precios Competitivos --> <section class="py-12 bg-green-50"> <div class="container mx-auto px-4"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-gray-800 mb-4">💰 Precios Más Competitivos de CDMX</h2> <p class="text-lg text-gray-600">Comparamos nuestros precios con el mercado para ofrecerte el mejor valor</p> </div> <div class="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="space-y-4"> <h3 class="text-xl font-bold text-green-600">🏆 Nuestros Precios</h3> <div class="space-y-2"> <div class="flex justify-between"> <span>Contabilidad Básica:</span> <span class="font-bold text-green-600">$2,500/mes</span> </div> <div class="flex justify-between"> <span>Contabilidad Empresarial:</span> <span class="font-bold text-green-600">$4,800/mes</span> </div> <div class="flex justify-between"> <span>Declaración Anual:</span> <span class="font-bold text-green-600">$1,200</span> </div> <div class="flex justify-between"> <span>Constitución Empresa:</span> <span class="font-bold text-green-600">$3,500</span> </div> </div> </div> <div class="space-y-4"> <h3 class="text-xl font-bold text-gray-600">📊 Promedio del Mercado</h3> <div class="space-y-2"> <div class="flex justify-between"> <span>Contabilidad Básica:</span> <span class="text-gray-600">$3,000-4,500/mes</span> </div> <div class="flex justify-between"> <span>Contabilidad Empresarial:</span> <span class="text-gray-600">$5,500-8,000/mes</span> </div> <div class="flex justify-between"> <span>Declaración Anual:</span> <span class="text-gray-600">$1,500-2,500</span> </div> <div class="flex justify-between"> <span>Constitución Empresa:</span> <span class="text-gray-600">$4,000-6,000</span> </div> </div> </div> </div> <div class="mt-6 p-4 bg-green-100 rounded-lg text-center"> <p class="text-green-800 font-semibold">
💡 <strong>Ahorra hasta 40%</strong> comparado con otros despachos contables en CDMX
</p> </div> </div> </div> </section> <!-- Servicios --> <section id="servicios" class="py-16"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Nuestros Servicios Contables</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${serviciosContables.map((servicio) => renderTemplate`<div class="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500"> <div class="flex items-start gap-4"> <div class="text-4xl">${servicio.icono}</div> <div class="flex-1"> <h3 class="text-xl font-bold text-gray-800 mb-2">${servicio.titulo}</h3> <p class="text-gray-600 mb-4">${servicio.descripcion}</p> <ul class="space-y-2 mb-4"> ${servicio.caracteristicas.map((caracteristica) => renderTemplate`<li class="flex items-center text-sm text-gray-700"> <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> ${caracteristica} </li>`)} </ul> <div class="flex items-center justify-between"> <div> <span class="text-2xl font-bold text-blue-600">$${servicio.precio}</span> <span class="text-gray-500">/${servicio.periodo}</span> ${servicio.descuento && renderTemplate`<div class="text-sm text-green-600 font-semibold">${servicio.descuento}</div>`} </div> <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
Contratar
</button> </div> </div> </div> </div>`)} </div> </div> </section> <!-- Paquetes Especiales --> <section id="paquetes" class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-4 text-gray-800">Paquetes Especiales para PYMEs</h2> <p class="text-center text-gray-600 mb-12">Combina servicios y ahorra más con nuestros paquetes diseñados específicamente para pequeñas y medianas empresas</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> ${paquetesContables.map((paquete, i) => renderTemplate`${renderComponent($$result2, "CardShop", $$CardShop, { "producto": paquete, "key": i })}`)} </div> </div> </section> <!-- Herramientas de Software Incluidas --> <section class="py-16 bg-gradient-to-r from-green-50 to-blue-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-4 text-gray-800">🛠️ Software y Herramientas Incluidas</h2> <p class="text-center text-gray-600 mb-12">Tecnología de punta para digitalizar y automatizar tu contabilidad</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${herramientasSoftware.map((software, i) => renderTemplate`<div class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500"> <div class="flex items-start gap-4"> <div class="text-4xl">${software.icono}</div> <div class="flex-1"> <h3 class="text-xl font-bold text-gray-800 mb-2">${software.nombre}</h3> <p class="text-gray-600 mb-4">${software.descripcion}</p> <ul class="space-y-2 mb-4"> ${software.caracteristicas.map((caracteristica) => renderTemplate`<li class="flex items-center text-sm text-gray-700"> <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> ${caracteristica} </li>`)} </ul> <div class="bg-green-100 rounded-lg p-3 text-center"> <span class="text-green-800 font-bold text-lg">${software.precio}</span> <p class="text-green-700 text-sm">Sin costo adicional con cualquier paquete</p> </div> </div> </div> </div>`)} </div> </div> </section> <!-- Descuentos Especiales PYME --> <section class="py-16 bg-yellow-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-4 text-gray-800">🎁 Descuentos Especiales para PYMEs</h2> <p class="text-center text-gray-600 mb-12">Apoyamos a los emprendedores y pequeñas empresas con descuentos exclusivos</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> ${descuentosPyme.map((descuento, i) => renderTemplate`<div class="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-yellow-500"> <div class="text-3xl mb-3">🏷️</div> <h3 class="text-lg font-bold text-gray-800 mb-2">${descuento.tipo}</h3> <div class="text-2xl font-bold text-yellow-600 mb-2">${descuento.descuento}</div> <p class="text-gray-600 text-sm">${descuento.condicion}</p> </div>`)} </div> <div class="mt-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-6 text-center"> <h3 class="text-2xl font-bold text-white mb-2">🚀 Oferta Especial para Nuevos Emprendedores</h3> <p class="text-yellow-100 mb-4">Constitución de empresa + 6 meses de contabilidad + software SAT</p> <div class="flex items-center justify-center gap-4 mb-4"> <span class="text-white line-through text-xl">$15,000</span> <span class="text-white font-bold text-3xl">$8,500</span> <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">43% OFF</span> </div> <button class="bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors">
¡Quiero esta oferta!
</button> </div> </div> </section> <!-- Proceso --> <section class="py-16"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">¿Cómo Trabajamos?</h2> <div class="max-w-4xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-4 gap-6"> <div class="text-center"> <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div> <h3 class="font-bold text-lg mb-2">Consulta Gratuita</h3> <p class="text-gray-600 text-sm">Analizamos tu situación fiscal y necesidades contables sin costo</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div> <h3 class="font-bold text-lg mb-2">Propuesta Personalizada</h3> <p class="text-gray-600 text-sm">Te presentamos el paquete ideal para tu empresa con precios transparentes</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div> <h3 class="font-bold text-lg mb-2">Implementación</h3> <p class="text-gray-600 text-sm">Configuramos tu contabilidad y te asignamos un contador dedicado</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div> <h3 class="font-bold text-lg mb-2">Soporte Continuo</h3> <p class="text-gray-600 text-sm">Mantenemos tu contabilidad al día con reportes mensuales y asesoría</p> </div> </div> </div> </div> </section> <!-- Ventajas Competitivas --> <section class="py-16 bg-blue-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">¿Por Qué Somos Tu Mejor Opción en CDMX?</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="text-center p-6"> <div class="text-5xl mb-4">🏆</div> <h3 class="text-xl font-bold mb-3 text-gray-800">15+ Años de Experiencia</h3> <p class="text-gray-600">Contadores públicos certificados con amplia experiencia en diversos sectores de CDMX</p> </div> <div class="text-center p-6"> <div class="text-5xl mb-4">💰</div> <h3 class="text-xl font-bold mb-3 text-gray-800">Precios Más Competitivos</h3> <p class="text-gray-600">Hasta 40% más económico que otros despachos sin comprometer la calidad del servicio</p> </div> <div class="text-center p-6"> <div class="text-5xl mb-4">📱</div> <h3 class="text-xl font-bold mb-3 text-gray-800">Tecnología Avanzada</h3> <p class="text-gray-600">Plataforma digital para consultar tu información contable 24/7 desde cualquier dispositivo</p> </div> <div class="text-center p-6"> <div class="text-5xl mb-4">⚡</div> <h3 class="text-xl font-bold mb-3 text-gray-800">Respuesta Rápida</h3> <p class="text-gray-600">Soporte vía WhatsApp y respuesta en menos de 2 horas en horario laboral</p> </div> <div class="text-center p-6"> <div class="text-5xl mb-4">🛡️</div> <h3 class="text-xl font-bold mb-3 text-gray-800">Cumplimiento Garantizado</h3> <p class="text-gray-600">Nos hacemos responsables de multas por errores en declaraciones bajo nuestro servicio</p> </div> <div class="text-center p-6"> <div class="text-5xl mb-4">🤝</div> <h3 class="text-xl font-bold mb-3 text-gray-800">Atención Personalizada</h3> <p class="text-gray-600">Contador dedicado que conoce tu negocio y reuniones mensuales presenciales</p> </div> </div> </div> </section> <!-- CTA Final --> <section id="contacto" class="py-16 bg-gradient-to-r from-blue-600 to-indigo-700"> <div class="container mx-auto px-4 text-center"> <h2 class="text-3xl font-bold text-white mb-4">¿Listo para Optimizar tu Contabilidad?</h2> <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
Obtén una consulta gratuita y descubre cómo podemos ayudarte a ahorrar tiempo y dinero en tus obligaciones fiscales
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8"> <a href="tel:+525512345678" class="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center">
📞 Llamar Ahora: (55) 1234-5678
</a> <a href="https://wa.me/525512345678" target="_blank" class="bg-green-500 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center">
💬 WhatsApp: Consulta Gratis
</a> </div> <p class="text-blue-100 text-sm">
📍 <strong>Ubicación:</strong> Polanco, Ciudad de México | 🕒 <strong>Horario:</strong> Lun-Vie 9:00-18:00
</p> </div> </section> </main> ` })}`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/contable.astro", void 0);

const $$file = "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/contable.astro";
const $$url = "/contable";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contable,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
