import { a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CnQjhTBy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_HkZ2_2Gl.mjs';
import { $ as $$CardServiceNeo } from '../chunks/CardServiceNeo_BoULlork.mjs';
export { renderers } from '../renderers.mjs';

const $$Contable = createComponent(($$result, $$props, $$slots) => {
  const serviciosContables = [
    {
      icono: "/img/iconos/declaracion.svg",
      titulo: "Declaraci\xF3n de Impuestos",
      descripcion: "Preparamos y presentamos tus declaraciones de impuestos, asegurando el cumplimiento normativo y optimizando tu carga fiscal.",
      caracteristicas: [
        "Declaraciones mensuales y anuales",
        "Personas f\xEDsicas y morales",
        "C\xE1lculo y revisi\xF3n de impuestos",
        "Asesor\xEDa en deducciones"
      ],
      precio: "120",
      periodo: "declaraci\xF3n"
    },
    {
      icono: "/img/iconos/contabilidad.svg",
      titulo: "Contabilidad General",
      descripcion: "Llevamos un registro preciso y actualizado de tus operaciones financieras para una toma de decisiones informada.",
      caracteristicas: [
        "Registro de p\xF3lizas contables",
        "Conciliaciones bancarias",
        "Elaboraci\xF3n de estados financieros",
        "Depuraci\xF3n de cuentas"
      ],
      precio: "180",
      periodo: "mes"
    },
    {
      icono: "/img/iconos/asesoria.svg",
      titulo: "Asesor\xEDa Fiscal y Financiera",
      descripcion: "Te brindamos orientaci\xF3n experta para optimizar tus recursos, reducir riesgos y mejorar la rentabilidad de tu negocio.",
      caracteristicas: [
        "Planificaci\xF3n fiscal estrat\xE9gica",
        "An\xE1lisis de estados financieros",
        "Consultor\xEDa en inversiones",
        "Optimizaci\xF3n de costos"
      ],
      precio: "250",
      periodo: "consulta"
    },
    {
      icono: "/img/iconos/auditoria.svg",
      titulo: "Auditor\xEDas y Dict\xE1menes",
      descripcion: "Realizamos auditor\xEDas exhaustivas para verificar la razonabilidad de la informaci\xF3n financiera y emitir dict\xE1menes confiables.",
      caracteristicas: [
        "Auditor\xEDas financieras y fiscales",
        "Dict\xE1menes para efectos del IMSS e INFONAVIT",
        "Revisi\xF3n de control interno",
        "Informes detallados"
      ],
      precio: "500",
      periodo: "auditor\xEDa"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios Contables - E&V Contadores" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Soluciones Contables a tu Medida</h1> <p class="text-lg text-gray-600 max-w-3xl mx-auto">En <span class="font-semibold">E&V Contadores Públicos Independientes</span>, nos dedicamos a brindar servicios contables y fiscales de la más alta calidad, con un enfoque personalizado para cada uno de nuestros clientes.</p> </header> <section> <h2 class="text-3xl font-bold text-center mb-10 text-gray-800">Nuestros Servicios</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-10"> ${serviciosContables.map((servicio) => renderTemplate`${renderComponent($$result2, "CardServiceNeo", $$CardServiceNeo, { "servicio": servicio })}`)} </div> </section> <section class="mt-20 bg-gray-50 p-8 rounded-xl"> <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">¿Por Qué Elegirnos?</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"> <div class="p-6"> <h3 class="text-xl font-semibold mb-2">Experiencia y Profesionalismo</h3> <p class="text-gray-600">Contamos con un equipo de contadores públicos con amplia experiencia en diversos sectores.</p> </div> <div class="p-6"> <h3 class="text-xl font-semibold mb-2">Atención Personalizada</h3> <p class="text-gray-600">Nos adaptamos a las necesidades específicas de tu negocio para ofrecerte soluciones a la medida.</p> </div> <div class="p-6"> <h3 class="text-xl font-semibold mb-2">Compromiso y Confianza</h3> <p class="text-gray-600">Construimos relaciones a largo plazo basadas en la transparencia y la confianza mutua.</p> </div> </div> </section> </main> ` })}`;
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
