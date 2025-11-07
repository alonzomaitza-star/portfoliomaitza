import { a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CnQjhTBy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_HkZ2_2Gl.mjs';
export { renderers } from '../renderers.mjs';

const $$Desarrollo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="py-16"> <div class="container mx-auto px-4"> <h1 class="text-3xl md:text-4xl font-extrabold text-white">Desarrollo</h1> <p class="text-gray-300 mt-2 max-w-2xl">Página en construcción. Próximamente: soluciones de desarrollo web y software a medida, integraciones y soporte técnico.</p> </div> </section> </main> ` })}`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/desarrollo.astro", void 0);

const $$file = "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/desarrollo.astro";
const $$url = "/desarrollo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Desarrollo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
