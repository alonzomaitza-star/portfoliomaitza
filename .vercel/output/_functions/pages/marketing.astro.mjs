import { a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CnQjhTBy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_HkZ2_2Gl.mjs';
export { renderers } from '../renderers.mjs';

const $$Marketing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="py-16"> <div class="container mx-auto px-4"> <h1 class="text-3xl md:text-4xl font-extrabold text-white">Marketing</h1> <p class="text-gray-300 mt-2 max-w-2xl">Página en construcción. Próximamente: estrategias de marketing digital, campañas publicitarias, analítica y crecimiento.</p> </div> </section> </main> ` })}`;
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
