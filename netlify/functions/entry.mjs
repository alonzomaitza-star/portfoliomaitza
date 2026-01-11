import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BY7AI-jQ.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/beneficios.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page4 = () => import('./pages/capacitacion.astro.mjs');
const _page5 = () => import('./pages/contable.astro.mjs');
const _page6 = () => import('./pages/cursos.astro.mjs');
const _page7 = () => import('./pages/dashboard.astro.mjs');
const _page8 = () => import('./pages/desarrollo.astro.mjs');
const _page9 = () => import('./pages/diseno.astro.mjs');
const _page10 = () => import('./pages/ecommerce.astro.mjs');
const _page11 = () => import('./pages/herramientas.astro.mjs');
const _page12 = () => import('./pages/marketing.astro.mjs');
const _page13 = () => import('./pages/nosotros.astro.mjs');
const _page14 = () => import('./pages/portafolio/ana.astro.mjs');
const _page15 = () => import('./pages/portafolio/carlos.astro.mjs');
const _page16 = () => import('./pages/portafolio/ferch.astro.mjs');
const _page17 = () => import('./pages/portafolio/init.astro.mjs');
const _page18 = () => import('./pages/portafolio/mrdufygy.astro.mjs');
const _page19 = () => import('./pages/rss.xml.astro.mjs');
const _page20 = () => import('./pages/shop/products/_handle_.astro.mjs');
const _page21 = () => import('./pages/shop.astro.mjs');
const _page22 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/beneficios.astro", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/blog/[...slug].astro", _page3],
    ["src/pages/capacitacion.astro", _page4],
    ["src/pages/contable.astro", _page5],
    ["src/pages/cursos.astro", _page6],
    ["src/pages/dashboard.astro", _page7],
    ["src/pages/desarrollo.astro", _page8],
    ["src/pages/diseno.astro", _page9],
    ["src/pages/ecommerce.astro", _page10],
    ["src/pages/herramientas.astro", _page11],
    ["src/pages/marketing.astro", _page12],
    ["src/pages/nosotros.astro", _page13],
    ["src/pages/portafolio/ana.astro", _page14],
    ["src/pages/portafolio/carlos.astro", _page15],
    ["src/pages/portafolio/ferch.astro", _page16],
    ["src/pages/portafolio/init.md", _page17],
    ["src/pages/portafolio/mrdufygy.astro", _page18],
    ["src/pages/rss.xml.js", _page19],
    ["src/pages/shop/products/[handle].astro", _page20],
    ["src/pages/shop/index.astro", _page21],
    ["src/pages/index.astro", _page22]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "cad355f5-8df7-4b6e-9649-50cf3d1f12f7"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
