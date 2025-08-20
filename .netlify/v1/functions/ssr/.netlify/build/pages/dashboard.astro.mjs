import { a as createComponent, d as renderComponent, e as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D93YMnHd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_yTP-cYjh.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard", "data-astro-cid-3nssi2tu": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="dashboard-container" data-astro-cid-3nssi2tu> <h1 data-astro-cid-3nssi2tu>Bienvenido a tu Dashboard</h1> <p id="user-info" data-astro-cid-3nssi2tu>Cargando información del usuario...</p> <p data-astro-cid-3nssi2tu>Esta es una página protegida. Solo los usuarios autenticados pueden verla.</p> <a href="/" id="logout-button" class="logout-button" style="display: none;" data-astro-cid-3nssi2tu>Cerrar Sesión</a> </main> ` })} ${renderScript($$result, "C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/pages/dashboard.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/pages/dashboard.astro", void 0);

const $$file = "C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
