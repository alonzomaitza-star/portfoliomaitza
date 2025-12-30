import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CliqOHC1.mjs';
import { manifest } from './manifest_zKB0pR-D.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blog.astro.mjs');
const _page2 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page3 = () => import('./pages/contable.astro.mjs');
const _page4 = () => import('./pages/dashboard.astro.mjs');
const _page5 = () => import('./pages/desarrollo.astro.mjs');
const _page6 = () => import('./pages/diseno.astro.mjs');
const _page7 = () => import('./pages/ecommerce.astro.mjs');
const _page8 = () => import('./pages/marketing.astro.mjs');
const _page9 = () => import('./pages/nosotros.astro.mjs');
const _page10 = () => import('./pages/rss.xml.astro.mjs');
const _page11 = () => import('./pages/servicios-ejemplo.astro.mjs');
const _page12 = () => import('./pages/shop/products/_handle_.astro.mjs');
const _page13 = () => import('./pages/shop.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/index.astro", _page1],
    ["src/pages/blog/[...slug].astro", _page2],
    ["src/pages/contable.astro", _page3],
    ["src/pages/dashboard.astro", _page4],
    ["src/pages/desarrollo.astro", _page5],
    ["src/pages/diseno.astro", _page6],
    ["src/pages/ecommerce.astro", _page7],
    ["src/pages/marketing.astro", _page8],
    ["src/pages/nosotros.astro", _page9],
    ["src/pages/rss.xml.js", _page10],
    ["src/pages/servicios-ejemplo.astro", _page11],
    ["src/pages/shop/products/[handle].astro", _page12],
    ["src/pages/shop/index.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3f7aba87-0bca-4616-ad0d-73a61e26dfa5",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
