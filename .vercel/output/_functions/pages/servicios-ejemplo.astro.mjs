import { a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CnQjhTBy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_HkZ2_2Gl.mjs';
import { $ as $$CardShop } from '../chunks/CardShop_BBYQjKIc.mjs';
import { $ as $$CardServiceNeo } from '../chunks/CardServiceNeo_BoULlork.mjs';
import { $ as $$CardServiceMinimal } from '../chunks/CardServiceMinimal_NdPKqYI5.mjs';
export { renderers } from '../renderers.mjs';

const $$ServiciosEjemplo = createComponent(($$result, $$props, $$slots) => {
  const productosEjemplo = [
    {
      imagen: "/img/productos/producto1.webp",
      titulo: "Servicio de Dise\xF1o Web",
      descripcion: "Creamos sitios web modernos y responsivos adaptados a tus necesidades espec\xEDficas.",
      precio: "299",
      etiqueta: "Popular"
    },
    {
      imagen: "/img/productos/producto2.webp",
      titulo: "Desarrollo de Aplicaciones",
      descripcion: "Desarrollamos aplicaciones web y m\xF3viles con las \xFAltimas tecnolog\xEDas.",
      precio: "499",
      etiqueta: "Nuevo"
    }
  ];
  const serviciosEjemplo = [
    {
      icono: "/img/iconos/web.svg",
      titulo: "Dise\xF1o Web Profesional",
      descripcion: "Creamos sitios web modernos y responsivos adaptados a tus necesidades espec\xEDficas, con enfoque en la experiencia de usuario y optimizados para buscadores.",
      caracteristicas: [
        "Dise\xF1o responsivo para todos los dispositivos",
        "Optimizaci\xF3n SEO incluida",
        "Integraci\xF3n con redes sociales",
        "Soporte t\xE9cnico por 3 meses"
      ],
      precio: "299",
      periodo: "mes"
    },
    {
      icono: "/img/iconos/app.svg",
      titulo: "Desarrollo de Aplicaciones",
      descripcion: "Desarrollamos aplicaciones web y m\xF3viles con las \xFAltimas tecnolog\xEDas, enfocadas en rendimiento y escalabilidad para tu negocio.",
      caracteristicas: [
        "Aplicaciones nativas para iOS y Android",
        "Interfaz de usuario intuitiva",
        "Integraci\xF3n con APIs externas",
        "Mantenimiento incluido por 6 meses"
      ],
      precio: "499",
      periodo: "mes"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ejemplos de Tarjetas de Servicios" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-12"> <h1 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Ejemplos de Tarjetas de Servicios</h1> <!-- Sección 1: Tarjetas con Glassmorphism --> <section class="mb-16"> <h2 class="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Estilo Glassmorphism</h2> <p class="text-gray-600 mb-8">Diseño moderno con efecto de vidrio difuminado, gradientes sutiles y efectos de hover elegantes.</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${productosEjemplo.map((producto) => renderTemplate`${renderComponent($$result2, "CardShop", $$CardShop, { "producto": producto })}`)} </div> </section> <!-- Sección 2: Tarjetas con Neomorfismo --> <section class="mb-16 bg-gray-100 py-10 px-6 rounded-xl"> <h2 class="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Estilo Neomórfico</h2> <p class="text-gray-600 mb-8">Diseño con efecto de relieve suave, sombras y luces que dan sensación de profundidad y textura.</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${serviciosEjemplo.map((servicio) => renderTemplate`${renderComponent($$result2, "CardServiceNeo", $$CardServiceNeo, { "servicio": servicio })}`)} </div> </section> <!-- Sección 3: Tarjetas Minimalistas --> <section class="mb-16"> <h2 class="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Estilo Minimalista</h2> <p class="text-gray-600 mb-8">Diseño limpio y funcional con acentos de color y elementos decorativos sutiles.</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${serviciosEjemplo.map((servicio) => renderTemplate`${renderComponent($$result2, "CardServiceMinimal", $$CardServiceMinimal, { "servicio": servicio })}`)} </div> </section> <!-- Sección de Comparación --> <section class="bg-gray-50 p-6 rounded-xl"> <h2 class="text-2xl font-bold mb-6 text-gray-800">Comparativa de Estilos</h2> <div class="overflow-x-auto"> <table class="min-w-full bg-white rounded-lg overflow-hidden"> <thead class="bg-gray-100"> <tr> <th class="py-3 px-4 text-left">Característica</th> <th class="py-3 px-4 text-left">Glassmorphism</th> <th class="py-3 px-4 text-left">Neomorfismo</th> <th class="py-3 px-4 text-left">Minimalista</th> </tr> </thead> <tbody class="divide-y divide-gray-200"> <tr> <td class="py-3 px-4 font-medium">Estilo visual</td> <td class="py-3 px-4">Moderno, transparente</td> <td class="py-3 px-4">Suave, con relieve</td> <td class="py-3 px-4">Limpio, funcional</td> </tr> <tr> <td class="py-3 px-4 font-medium">Mejor para</td> <td class="py-3 px-4">Destacar productos visuales</td> <td class="py-3 px-4">Servicios premium</td> <td class="py-3 px-4">Información directa</td> </tr> <tr> <td class="py-3 px-4 font-medium">Efectos</td> <td class="py-3 px-4">Transparencia, blur</td> <td class="py-3 px-4">Sombras suaves</td> <td class="py-3 px-4">Acentos de color</td> </tr> <tr> <td class="py-3 px-4 font-medium">Tendencia</td> <td class="py-3 px-4">Muy actual (2023)</td> <td class="py-3 px-4">Moderna y elegante</td> <td class="py-3 px-4">Atemporal</td> </tr> </tbody> </table> </div> </section> </main> ` })}`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/servicios-ejemplo.astro", void 0);

const $$file = "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/servicios-ejemplo.astro";
const $$url = "/servicios-ejemplo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ServiciosEjemplo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
