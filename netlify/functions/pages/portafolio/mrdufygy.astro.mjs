import { a as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, e as renderScript, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_D7wE4XSf.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Dl7EB-N3.mjs';
import 'clsx';
import { $ as $$ProjectGallery } from '../../chunks/ProjectGallery_C5cgTIp5.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://InsanoNetwork.com");
const $$CV = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CV;
  const { pdfUrl, title = "Curriculum Vitae" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="cv-container" class="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen relative"> <!-- Actions Bar (Floating) --> <div class="fixed bottom-8 right-8 z-50 flex flex-col gap-4"> <!-- View PDF Button --> <button id="view-pdf-btn" class="flex items-center justify-center w-14 h-14 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110" title="Ver PDF"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path> </svg> </button> <!-- Download PNG Button --> <button id="download-png-btn" class="flex items-center justify-center w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110" title="Descargar como Imagen"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> </button> <!-- Download PDF Button --> <a${addAttribute(pdfUrl, "href")} download class="flex items-center justify-center w-14 h-14 bg-[#bfa100] hover:bg-yellow-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110" title="Descargar PDF"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg> </a> </div> <!-- Main Content --> <div class="container mx-auto px-4 max-w-7xl bg-white dark:bg-gray-900 shadow-2xl rounded-xl overflow-hidden" id="cv-content"> <div class="grid grid-cols-1 lg:grid-cols-12 gap-0"> <!-- Right Column (Sidebar Style) MOVED TO LEFT visually in grid but order handles it --> <div class="lg:col-span-4 bg-[#1a1a1a] text-white p-8 lg:p-12 space-y-10"> <!-- Photo & Basic Info --> <div class="text-center"> <div class="w-48 h-48 mx-auto mb-8 relative"> <div class="absolute inset-0 bg-gradient-to-br from-[#ffd600] to-[#bfa100] rounded-full blur-lg opacity-20 animate-pulse"></div> <img src="https://media.licdn.com/dms/image/v2/D4E03AQGg8-bX5i0tVA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718218174984?e=1741824000&v=beta&t=XfNnN-1X4x4x4x4x4x4x4x4x4x4x4x4x4x4x4" alt="Fernando Juarez" class="w-full h-full object-cover rounded-full border-4 border-[#bfa100] shadow-2xl relative z-10" crossorigin="anonymous"> </div> <h2 class="text-2xl font-bold text-white mb-6 uppercase tracking-wider border-b border-gray-700 pb-2">
Contacto
</h2> <div class="space-y-4 text-left"> <a href="tel:+525516849340" class="flex items-center gap-4 text-gray-300 hover:text-[#bfa100] transition-colors group"> <span class="p-2 bg-gray-800 rounded-lg group-hover:bg-[#bfa100] group-hover:text-black transition-colors"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> </span> <span class="text-sm">+52 55 1684 9340</span> </a> <a href="mailto:fernando.juarez.mtz.contacto@gmail.com" class="flex items-center gap-4 text-gray-300 hover:text-[#bfa100] transition-colors group"> <span class="p-2 bg-gray-800 rounded-lg group-hover:bg-[#bfa100] group-hover:text-black transition-colors"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> </span> <span class="text-sm truncate">fernando.juarez.mtz.contacto@gmail.com</span> </a> <div class="flex items-center gap-4 text-gray-300 group"> <span class="p-2 bg-gray-800 rounded-lg group-hover:bg-[#bfa100] group-hover:text-black transition-colors"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> </span> <span class="text-sm">Miguel Hidalgo, CDMX.</span> </div> </div> </div> <!-- Education --> <div> <h2 class="text-xl font-bold text-white mb-6 uppercase tracking-wider border-b border-gray-700 pb-2">
Educación
</h2> <div class="mb-4"> <p class="text-xs font-bold text-[#bfa100] mb-1">
2019 - 2023
</p> <h3 class="text-md font-bold text-white">
Ingeniería en Sistemas Computacionales
</h3> <p class="text-sm text-gray-400 mt-1">
Universidad Tecnológica de México
</p> </div> </div> <!-- Technologies --> <div> <h2 class="text-xl font-bold text-white mb-6 uppercase tracking-wider border-b border-gray-700 pb-2">
Tecnologías
</h2> <div class="space-y-4"> ${[
    { name: "ASP.NET con C#", width: "95%" },
    { name: "HTML, CSS, JS", width: "93%" },
    { name: "Astro, Svelte, TS", width: "93%" },
    { name: "ASPX.NET con VB", width: "92%" },
    { name: "SQL Server", width: "90%" },
    { name: "Figma / UI UX", width: "90%" },
    { name: "Java, PHP, Python", width: "82%" },
    { name: "Node.js", width: "81%" }
  ].map((tech) => renderTemplate`<div> <div class="flex justify-between mb-1"> <span class="text-xs font-bold text-gray-300"> ${tech.name} </span> </div> <div class="w-full bg-gray-800 rounded-full h-1.5"> <div class="bg-[#bfa100] h-1.5 rounded-full"${addAttribute(`width: ${tech.width}`, "style")}></div> </div> </div>`)} </div> </div> <!-- Soft Skills --> <div> <h2 class="text-xl font-bold text-white mb-6 uppercase tracking-wider border-b border-gray-700 pb-2">
Habilidades
</h2> <div class="flex flex-wrap gap-2"> ${[
    "Automatizaci\xF3n",
    "L\xF3gica",
    "Autodidacta",
    "Adaptabilidad",
    "Liderazgo",
    "Iniciativa"
  ].map((skill) => renderTemplate`<span class="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"> ${skill} </span>`)} </div> </div> <!-- Courses --> <div> <h2 class="text-xl font-bold text-white mb-6 uppercase tracking-wider border-b border-gray-700 pb-2">
Cursos
</h2> <ul class="space-y-3 text-sm text-gray-300"> <li class="flex items-start gap-2"> <span class="text-[#bfa100] mt-1">●</span> <span><strong class="text-white">Diplomado BEDU:</strong> Desarrollo web con JS y Git.</span> </li> <li class="flex items-start gap-2"> <span class="text-[#bfa100] mt-1">●</span> <span><strong class="text-white">FullStackOpen:</strong> Js, Express , React, GraphQL, Ts.</span> </li> <li class="flex items-start gap-2"> <span class="text-[#bfa100] mt-1">●</span> <span><strong class="text-white">Certificaciones:</strong> Illustrator, Cisco IT.</span> </li> </ul> </div> </div> <!-- Left Column (Main Content) --> <div class="lg:col-span-8 p-8 lg:p-12 bg-white dark:bg-gray-100 text-gray-800"> <!-- Name Header --> <div class="mb-12 border-b-4 border-[#bfa100] pb-8"> <h1 class="text-5xl lg:text-6xl font-black text-gray-900 leading-none mb-2">
FERNANDO
</h1> <h1 class="text-5xl lg:text-6xl font-black text-gray-500 leading-none mb-6">
JUAREZ MARTINEZ
</h1> <div class="flex items-center gap-4"> <div class="h-1 flex-grow bg-gray-200"></div> <h3 class="text-lg font-bold text-[#bfa100] tracking-[0.3em] uppercase whitespace-nowrap">
Full Stack Developer
</h3> <div class="h-1 flex-grow bg-gray-200"></div> </div> </div> <!-- Profile Summary --> <div class="mb-12"> <h3 class="text-xl font-bold text-gray-900 mb-6 uppercase tracking-widest flex items-center gap-3"> <span class="w-8 h-1 bg-[#bfa100]"></span> Perfil Profesional
</h3> <p class="text-gray-600 text-lg leading-relaxed text-justify">
Desarrollador con más de 5 años de experiencia,
                        especializado en el ecosistema .NET y tecnologías web
                        modernas. Apasionado por la optimización de procesos y
                        la creación de soluciones escalables. Me caracterizo por
                        un enfoque pragmático para resolver problemas complejos,
                        combinando habilidades técnicas sólicas con una
                        comunicación efectiva y liderazgo de equipos.
</p> </div> <!-- Experience Timeline --> <div class="space-y-12"> <h3 class="text-xl font-bold text-gray-900 mb-8 uppercase tracking-widest flex items-center gap-3"> <span class="w-8 h-1 bg-[#bfa100]"></span> Experiencia Laboral
</h3> <div class="relative border-l-2 border-gray-200 ml-3 pl-8 space-y-12"> <!-- Job 1 --> <div class="relative group"> <span class="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#bfa100] border-4 border-white shadow-sm group-hover:scale-125 transition-transform"></span> <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2"> <h3 class="text-2xl font-bold text-gray-900">
Grupo Gasolinero Hidrosina
</h3> <span class="text-sm font-bold text-[#bfa100] bg-gray-100 px-3 py-1 rounded-full">Ago 2024 - Actual</span> </div> <p class="text-lg font-semibold text-gray-500 mb-4">
Desarrollador FullStack
</p> <ul class="list-disc list-outside ml-4 space-y-2 text-gray-600 text-justify"> <li> <strong>Arquitectura Híbrida:</strong> Implementación
                                    de app Astro (SSR) encapsulada en WinForms vía
                                    WebView, comunicando con API ASP.NET.
</li> <li> <strong>Suite de RRHH:</strong> Liderazgo técnico
                                    en el desarrollo de 3 apps interconectadas (Recolección,
                                    Portal Web, Backend Central).
</li> <li> <strong>Visor de Documentación:</strong> Reingeniería
                                    de sistema de guías usando pdf-lib y serialización
                                    binaria en .NET.
</li> <li> <strong>Infraestructura Data:</strong> Admin de
                                    SQL Server, LINQ, Stored Procedures e integraciones
                                    AWS/SMTP.
</li> <li> <strong>Automatización:</strong> Scripts Python
                                    para respaldos y mantenimiento de sistemas Legacy
                                    (VB/ASPX).
</li> </ul> </div> <!-- Job 2 --> <div class="relative group"> <span class="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-400 border-4 border-white shadow-sm group-hover:scale-125 transition-transform"></span> <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2"> <h3 class="text-2xl font-bold text-gray-900">
Digis01 Soluciones Digitales
</h3> <span class="text-sm font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Jun 2023 - Jul 2024</span> </div> <p class="text-lg font-semibold text-gray-500 mb-4">
Desarrollador .NET
</p> <ul class="list-disc list-outside ml-4 space-y-2 text-gray-600 text-justify"> <li>
Desarrollo de apps web con ASP.NET, Entity
                                    Framework y arquitectura MVC.
</li> <li>
Implementación de servicios SOAP/REST y
                                    consumo de APIs externas (Maps, Zoom).
</li> <li>
Optimización de bases de datos con
                                    Transact-SQL y Stored Procedures.
</li> <li>
Diseño de interfaces dinámicas con
                                    Bootstrap, JQuery y AJAX.
</li> </ul> </div> <!-- Job 3 --> <div class="relative group"> <span class="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-400 border-4 border-white shadow-sm group-hover:scale-125 transition-transform"></span> <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2"> <h3 class="text-2xl font-bold text-gray-900">
ICO (Instituto de Compuingles)
</h3> <span class="text-sm font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Feb 2021 - Jul 2023</span> </div> <p class="text-lg font-semibold text-gray-500 mb-4">
Profesor de Informática
</p> <ul class="list-disc list-outside ml-4 space-y-2 text-gray-600"> <li>
Impartición de clases de Desarrollo Web,
                                    Lógica de Programación y Diseño a nivel
                                    bachillerato.
</li> </ul> </div> </div> </div> <!-- Freelance & Interests --> <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h3 class="text-lg font-bold text-gray-900 mb-4 uppercase tracking-widest flex items-center gap-3"> <span class="w-8 h-1 bg-[#bfa100]"></span> Freelance
</h3> <ul class="space-y-2 text-gray-600"> <li>● Landing Page Arcodisic.com.mx</li> <li>● SEO, Blog y CMS personalizados.</li> <li>● Atención a clientes y Git flow.</li> </ul> </div> <div> <h3 class="text-lg font-bold text-gray-900 mb-4 uppercase tracking-widest flex items-center gap-3"> <span class="w-8 h-1 bg-[#bfa100]"></span> Otros Intereses
</h3> <p class="text-gray-600">
Ciberseguridad, Linux, IoT, Robótica, Circuitos
                            Cerrados y Virtualización.
</p> </div> </div> </div> </div> </div> <!-- CV Modal --> <div id="cv-modal" class="fixed hidden z-[100] pointer-events-none transition-opacity duration-300" style="top: 50px; left: 50px;"> <div class="pointer-events-auto w-[1000px] h-[800px] max-w-[95vw] max-h-[90vh] flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 cv-modal-content" style="box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);"> <!-- Toolbar --> <div id="cv-modal-header" class="h-10 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 cursor-move select-none"> <div class="flex gap-2"> <div class="w-3 h-3 rounded-full bg-red-500"></div> <div class="w-3 h-3 rounded-full bg-yellow-500"></div> <div class="w-3 h-3 rounded-full bg-green-500"></div> </div> <span class="text-sm font-medium text-gray-600 dark:text-gray-300">${title} - PDF</span> <button id="close-cv-modal" class="text-gray-500 hover:text-red-500 transition-colors"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <!-- Iframe Container --> <div class="flex-1 bg-gray-800 relative"> <iframe${addAttribute(`${pdfUrl}#toolbar=0`, "src")} class="w-full h-full border-0" title="PDF Viewer"></iframe> </div> </div> </div> </section> ${renderScript($$result, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/CV.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/CV.astro", void 0);

const $$Mrdufygy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Fernando J Mtz | Insano Network", "description": "Desarrollador Full Stack (.NET/JS), L\xEDder T\xE9cnico e Ingeniero de Redes. Experto en arquitectura de sistemas h\xEDbridos y gesti\xF3n de infraestructura." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "CV", $$CV, { "pdfUrl": "/src/assets/docPDF/Cv fjuarez clasic.pdf" })} <div class="container mx-auto px-4 max-w-7xl mt-12 mb-20"> ${renderComponent($$result2, "ProjectGallery", $$ProjectGallery, {})} </div> </main> ` })}`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/portafolio/mrdufygy.astro", void 0);

const $$file = "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/portafolio/mrdufygy.astro";
const $$url = "/portafolio/mrdufygy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Mrdufygy,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
