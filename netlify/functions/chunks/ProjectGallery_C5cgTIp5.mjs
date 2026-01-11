import { a as createAstro, c as createComponent, m as maybeRenderHead, e as renderScript, b as addAttribute, r as renderTemplate } from './astro/server_D7wE4XSf.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://InsanoNetwork.com");
const $$ProjectGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectGallery;
  const projects = [
    {
      title: "Arcoditechos Landing",
      description: "P\xE1gina de arcotechos enfocada en SEO y Prototipado.",
      tags: ["SEO", "Prototipado", "Astro"],
      url: "https://arcodisic-landing-page.netlify.app/"
    },
    {
      title: "Hidro Valija Electr\xF3nica",
      description: "P\xE1gina demo con interfaces complejas y flujo de usuario.",
      tags: ["UI", "Astro", "Svelte", "React", "API", "SSR"],
      url: "https://hidro-valija-electronica.netlify.app/"
    },
    {
      title: "Hidro Caja Herramientas",
      description: "Herramientas para manejo de PDFs y firma digital.",
      tags: ["Python Flask", "Cloudinary API", "UI", "PDF"],
      url: "https://hidroxcajaherramientas.netlify.app/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-12 px-4"> <div class="max-w-7xl mx-auto"> <h2 class="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
Galería de Proyectos
</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${projects.map((project, index) => renderTemplate`<div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col h-full border border-gray-100 dark:border-gray-700"> <div class="mb-4"> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2"> ${project.title} </h3> <p class="text-gray-600 dark:text-gray-300 text-sm mb-4"> ${project.description} </p> <div class="flex flex-wrap gap-2 mb-4"> ${project.tags.map((tag) => renderTemplate`<span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"> ${tag} </span>`)} </div> </div> <div class="mt-auto flex gap-3"> <button class="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all text-sm flex items-center justify-center gap-2 group open-modal-btn"${addAttribute(project.url, "data-url")}${addAttribute(project.title, "data-title")}> <span>Ver Demo</span> <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </button> ${project.repo && renderTemplate`<a${addAttribute(project.repo, "href")} target="_blank" rel="noopener noreferrer" class="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300" aria-label="Ver código"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path> </svg> </a>`} </div> </div>`)} </div> </div> <!-- Draggable Modal --> <div id="project-modal" class="fixed hidden z-50 pointer-events-none" style="top: 50px; left: 50px;"> <div class="pointer-events-auto w-[1200px] h-[700px] max-w-[95vw] max-h-[90vh] flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 modal-content" style="box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);"> <!-- Toolbar --> <div id="modal-header" class="h-10 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 cursor-move select-none"> <div class="flex gap-2"> <div class="w-3 h-3 rounded-full bg-red-500"></div> <div class="w-3 h-3 rounded-full bg-yellow-500"></div> <div class="w-3 h-3 rounded-full bg-green-500"></div> </div> <span id="modal-title" class="text-sm font-medium text-gray-600 dark:text-gray-300">Demo Preview</span> <button id="close-modal" class="text-gray-500 hover:text-red-500 transition-colors"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <!-- Iframe Container --> <div class="flex-1 bg-white relative"> <div id="loader" class="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900 z-10"> <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div> </div> <iframe id="project-iframe" class="w-full h-full border-0" sandbox="allow-scripts allow-same-origin allow-forms"></iframe> </div> </div> </div> </section> ${renderScript($$result, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/ProjectGallery.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/ProjectGallery.astro", void 0);

export { $$ProjectGallery as $ };
