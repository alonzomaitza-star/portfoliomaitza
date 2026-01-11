import { a as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_D7wE4XSf.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_xGataIRV.mjs';
import { $ as $$Layout } from '../chunks/Layout_Dl7EB-N3.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://InsanoNetwork.com");
const $$PostList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostList;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="  grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-gray-200"> ${posts.map((post) => renderTemplate`<article class="rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md"> <a${addAttribute(`/blog/${post.slug}`, "href")} class="block"> ${post.data.image && renderTemplate`<img${addAttribute(post.data.image, "src")}${addAttribute(post.data.title, "alt")} class="mb-4 h-48 w-full rounded-lg object-cover" loading="lazy">`} <h2 class="mb-2 text-xl font-bold text-gray-100"> ${post.data.title} </h2> <p class="mb-4 text-gray-300"> ${post.data.description} </p> <div class="flex items-center text-sm text-gray-300"> <time${addAttribute(post.data.pubDate.toISOString(), "datetime")}> ${new Date(post.data.pubDate).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> <span class="mx-2">•</span> <span>${post.data.readingTime} min de lectura</span> </div> </a> </article>`)} </div>`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/blog/PostList.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
  const pageTitle = "Blog";
  const pageDescription = "Art\xEDculos y tutoriales sobre desarrollo web, tecnolog\xEDa y m\xE1s.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"> <div class="text-center"> <h1 class="text-white text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
Nuestro Blog
</h1> <p class="mx-auto mt-3 max-w-md text-base text-gray-200 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"> ${pageDescription} </p> </div> <div class="mt-12"> ${posts.length > 0 ? renderTemplate`${renderComponent($$result2, "PostList", $$PostList, { "posts": posts })}` : renderTemplate`<div class="text-center py-12"> <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path> </svg> <h3 class="mt-2 text-sm font-medium text-gray-900">No hay publicaciones aún</h3> <p class="mt-1 text-sm text-gray-500">Pronto publicaremos contenido interesante.</p> </div>`} </div> </div> ` })}`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/blog/index.astro", void 0);

const $$file = "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
