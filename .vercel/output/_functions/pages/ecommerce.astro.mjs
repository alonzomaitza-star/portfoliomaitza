import { a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CnQjhTBy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_HkZ2_2Gl.mjs';
export { renderers } from '../renderers.mjs';

const $$Ecommerce = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="py-16"> <div class="container mx-auto px-4"> <h1 class="text-3xl md:text-4xl font-extrabold text-white">E-commerce</h1> <p class="text-gray-300 mt-2 max-w-2xl">Página en construcción. Próximamente: tiendas online, pasarelas de pago, gestión de inventario y analítica.</p> </div> </section> </main> ` })}`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/ecommerce.astro", void 0);

const $$file = "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/ecommerce.astro";
const $$url = "/ecommerce";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ecommerce,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
