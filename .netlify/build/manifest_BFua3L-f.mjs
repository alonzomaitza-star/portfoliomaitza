import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, k as decodeKey } from './chunks/astro/server_D93YMnHd.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/dev/Node.js/Insano%20-%20LandingPage/Insano-landing/","cacheDir":"file:///C:/dev/Node.js/Insano%20-%20LandingPage/Insano-landing/node_modules/.astro/","outDir":"file:///C:/dev/Node.js/Insano%20-%20LandingPage/Insano-landing/dist/","srcDir":"file:///C:/dev/Node.js/Insano%20-%20LandingPage/Insano-landing/src/","publicDir":"file:///C:/dev/Node.js/Insano%20-%20LandingPage/Insano-landing/public/","buildClientDir":"file:///C:/dev/Node.js/Insano%20-%20LandingPage/Insano-landing/dist/","buildServerDir":"file:///C:/dev/Node.js/Insano%20-%20LandingPage/Insano-landing/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.BJTl8uVs.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.BJTl8uVs.css"},{"type":"inline","content":".dashboard-container[data-astro-cid-3nssi2tu]{padding:2rem;max-width:800px;margin:2rem auto;background-color:#f4f4f9;border-radius:8px;text-align:center}.logout-button[data-astro-cid-3nssi2tu]{display:inline-block;margin-top:1rem;padding:.75rem 1.5rem;border-radius:8px;text-decoration:none;font-weight:500;background-color:#f44336;color:#fff;transition:background-color .2s ease}.logout-button[data-astro-cid-3nssi2tu]:hover{background-color:#d32f2f}\n"}],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.BJTl8uVs.css"}],"routeData":{"route":"/servicios-ejemplo","isIndex":false,"type":"page","pattern":"^\\/servicios-ejemplo\\/?$","segments":[[{"content":"servicios-ejemplo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios-ejemplo.astro","pathname":"/servicios-ejemplo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.BJTl8uVs.css"}],"routeData":{"route":"/shop/products/[handle]","isIndex":false,"type":"page","pattern":"^\\/shop\\/products\\/([^/]+?)\\/?$","segments":[[{"content":"shop","dynamic":false,"spread":false}],[{"content":"products","dynamic":false,"spread":false}],[{"content":"handle","dynamic":true,"spread":false}]],"params":["handle"],"component":"src/pages/shop/products/[handle].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.BJTl8uVs.css"}],"routeData":{"route":"/shop","isIndex":true,"type":"page","pattern":"^\\/shop\\/?$","segments":[[{"content":"shop","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/shop/index.astro","pathname":"/shop","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.BJTl8uVs.css"},{"type":"inline","content":".slider[data-astro-cid-chu6qkcs]{aspect-ratio:10 / 16;width:100%;max-height:100%;position:relative;display:flex;overflow:scroll;scroll-snap-type:x mandatory;margin-top:-119px;scroll-behavior:smooth;overflow-y:hidden;scrollbar-width:thin}.slider[data-astro-cid-chu6qkcs] img[data-astro-cid-chu6qkcs]{width:100%;left:0;position:sticky;object-fit:cover;scroll-snap-align:center;max-height:10-fit-content}@media (min-width: 601px){.slider[data-astro-cid-chu6qkcs]{width:400px;margin-top:0;border-radius:5px}}@media (max-width: 600px){.slider[data-astro-cid-chu6qkcs]{width:100%}}.auth-link[data-astro-cid-cyhdpflw]{display:inline-block;padding:.5rem 1rem;border-radius:8px;text-decoration:none;font-weight:500;transition:background-color .2s ease}.login[data-astro-cid-cyhdpflw]{background-color:#4285f4;color:#fff}.login[data-astro-cid-cyhdpflw]:hover{background-color:#357ae8}.logout[data-astro-cid-cyhdpflw]{background-color:#f44336;color:#fff}.logout[data-astro-cid-cyhdpflw]:hover{background-color:#d32f2f}header[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2rem;margin-bottom:2rem;position:relative}@media (min-width: 601px){header[data-astro-cid-j7pv25f6]{flex-direction:row;align-items:center;justify-content:center}}.header-title[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;align-items:center;justify-content:center}.header-title[data-astro-cid-j7pv25f6] h1[data-astro-cid-j7pv25f6]{font-size:2.5rem;color:#fff;font-weight:700;margin:0;text-align:center}.header-title[data-astro-cid-j7pv25f6] p[data-astro-cid-j7pv25f6]{font-size:1.2rem;color:#ffd600;margin:.5rem 0 0;text-align:center}.slider[data-astro-cid-j7pv25f6]{aspect-ratio:10 / 16;width:100%;max-height:100%;position:relative;display:flex;overflow:scroll;scroll-snap-type:x mandatory;margin-top:-119px;scroll-behavior:smooth;overflow-y:hidden;scrollbar-width:thin}.slider[data-astro-cid-j7pv25f6] img[data-astro-cid-j7pv25f6]{width:100%;left:0;position:sticky;object-fit:cover;scroll-snap-align:center;max-height:10-fit-content}@media (min-width: 601px){.slider[data-astro-cid-j7pv25f6]{width:400px;margin-top:0;border-radius:5px}}@media (max-width: 600px){.slider[data-astro-cid-j7pv25f6]{width:100%}.header-title[data-astro-cid-j7pv25f6]{position:absolute;top:30px;left:0;right:0;z-index:2;pointer-events:none}}.modal-bottom[data-astro-cid-j7pv25f6]{position:fixed;left:50%;bottom:32px;transform:translate(-50%);background:#1e1e1efa;color:#fff;border-radius:20px;box-shadow:0 8px 32px #00000059;padding:1.25rem 2.5rem;font-size:1.2rem;font-weight:700;z-index:1000;border:2px solid #ffd600;display:flex;align-items:center;gap:.75rem;animation:modalAppear .7s cubic-bezier(.42,0,.58,1)}@keyframes modalAppear{0%{opacity:0;bottom:0}to{opacity:1;bottom:32px}}footer[data-astro-cid-j7pv25f6]{margin-top:4rem;position:relative;z-index:10}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://tudominio.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/pages/servicios-ejemplo.astro",{"propagation":"none","containsHead":true}],["C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/pages/shop/index.astro",{"propagation":"none","containsHead":true}],["C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/pages/shop/products/[handle].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/servicios-ejemplo@_@astro":"pages/servicios-ejemplo.astro.mjs","\u0000@astro-page:src/pages/shop/products/[handle]@_@astro":"pages/shop/products/_handle_.astro.mjs","\u0000@astro-page:src/pages/shop/index@_@astro":"pages/shop.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BFua3L-f.mjs","C:/dev/Node.js/Insano - LandingPage/Insano-landing/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","C:\\dev\\Node.js\\Insano - LandingPage\\Insano-landing\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","\u0000astro:assets":"chunks/_astro_assets_CLwe9HF7.mjs","C:\\dev\\Node.js\\Insano - LandingPage\\Insano-landing\\.astro\\content-modules.mjs":"chunks/content-modules_xQvG28Vp.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BjYWdiMx.mjs","C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/content/blog/posts/primer-post.mdx?astroPropagatedAssets":"chunks/primer-post_Cm33RDKE.mjs","C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/content/blog/posts/primer-post.mdx":"chunks/primer-post_Dtj93sYF.mjs","C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/pages/shop/products/[handle].astro?astro&type=script&index=0&lang.ts":"_astro/_handle_.astro_astro_type_script_index_0_lang.l0sNRNKZ.js","C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/pages/dashboard.astro?astro&type=script&index=0&lang.ts":"_astro/dashboard.astro_astro_type_script_index_0_lang.CC8UxjpW.js","C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/pages/shop/products/[handle].astro?astro&type=script&index=1&lang.ts":"_astro/_handle_.astro_astro_type_script_index_1_lang.CrQD7iTY.js","C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/pages/shop/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.B1cI4D_5.js","C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/components/Auth.astro?astro&type=script&index=0&lang.ts":"_astro/Auth.astro_astro_type_script_index_0_lang.CxCwp4f2.js","C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/components/shop/ProductCard.astro?astro&type=script&index=0&lang.ts":"_astro/ProductCard.astro_astro_type_script_index_0_lang.5zGDmBXZ.js","C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/components/NavBarMain.astro?astro&type=script&index=0&lang.ts":"_astro/NavBarMain.astro_astro_type_script_index_0_lang.J-o0Hb-3.js","@astrojs/svelte/client.js":"_astro/client.svelte.Bs7bApgk.js","C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/lib/medusa.js":"_astro/medusa.DUomZkvh.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/pages/shop/products/[handle].astro?astro&type=script&index=0&lang.ts",""],["C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/pages/shop/index.astro?astro&type=script&index=0&lang.ts","async function r(){try{console.log(\"Actualizando mini-carrito...\")}catch(t){console.error(\"Error al actualizar mini-carrito:\",t)}}document.addEventListener(\"DOMContentLoaded\",r);document.addEventListener(\"product-added-to-cart\",r);"],["C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/components/NavBarMain.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"navbarmain-proyectos-link\"),i=document.getElementById(\"navbarmain-proyectos-dialog\");if(t&&i){const e=i;t.addEventListener(\"mouseenter\",()=>{e.show(),t.setAttribute(\"aria-expanded\",\"true\")}),t.addEventListener(\"mouseleave\",()=>{setTimeout(()=>{e.matches(\":hover\")||(e.close(),t.setAttribute(\"aria-expanded\",\"false\"))},100)}),e.addEventListener(\"mouseleave\",()=>{e.close(),t.setAttribute(\"aria-expanded\",\"false\")}),e.addEventListener(\"mouseenter\",()=>{e.show(),t.setAttribute(\"aria-expanded\",\"true\")}),t.addEventListener(\"click\",d=>{d.preventDefault(),e.open?(e.close(),t.setAttribute(\"aria-expanded\",\"false\")):(e.show(),t.setAttribute(\"aria-expanded\",\"true\"))})}const a=document.getElementById(\"user-menu-button\"),n=document.getElementById(\"user-menu-dropdown\");a&&n&&(a.addEventListener(\"click\",s=>{s.stopPropagation(),a.getAttribute(\"aria-expanded\")===\"true\"?(n.classList.remove(\"active\"),a.setAttribute(\"aria-expanded\",\"false\")):(n.classList.add(\"active\"),a.setAttribute(\"aria-expanded\",\"true\"))}),document.addEventListener(\"click\",s=>{n.classList.contains(\"active\")&&!n.contains(s.target)&&s.target!==a&&!a.contains(s.target)&&(n.classList.remove(\"active\"),a.setAttribute(\"aria-expanded\",\"false\"))}));"]],"assets":["/_astro/elemento 3d.DNF35x2F.jpg","/_astro/shellby.DcPa4khb.png","/_astro/Florero.DbTbDSjc.jpg","/_astro/Logo.D5IleTMP.png","/_astro/_slug_.BJTl8uVs.css","/favicon.svg","/rss-styles.xsl","/_astro/Auth.astro_astro_type_script_index_0_lang.CxCwp4f2.js","/_astro/client.svelte.Bs7bApgk.js","/_astro/dashboard.astro_astro_type_script_index_0_lang.CC8UxjpW.js","/_astro/medusa.DUomZkvh.js","/_astro/preload-helper.BlTxHScW.js","/_astro/ProductCard.astro_astro_type_script_index_0_lang.5zGDmBXZ.js","/_astro/supabase.BFinLM1L.js","/_astro/_handle_.astro_astro_type_script_index_1_lang.CrQD7iTY.js","/img/iconos/app.svg","/img/iconos/finance.svg","/img/iconos/marketing.svg","/img/iconos/shop.svg","/img/iconos/web.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"B0Eb9Nj9ksHQE0x2smJNHseCfdtUHsX9WQK71dvtQHs=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
