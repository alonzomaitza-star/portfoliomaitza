import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, e as renderComponent } from '../chunks/astro/server_CnQjhTBy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_HkZ2_2Gl.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://tudominio.com");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { jsonData = {}, textColor, borderColor, bgColor, iconColor } = Astro2.props;
  const rawIcon = jsonData?.icon;
  let iconType = "default";
  let iconUrl = "";
  let iconText = "";
  if (typeof rawIcon === "string") {
    const isUrl = rawIcon.startsWith("/") || rawIcon.startsWith("http://") || rawIcon.startsWith("https://");
    if (isUrl) {
      iconType = "url";
      iconUrl = rawIcon;
    } else if (rawIcon.length <= 3) {
      iconType = "text";
      iconText = rawIcon;
    }
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`card rounded-md border-2 p-4 ${bgColor} ${borderColor}`, "class")}${addAttribute(`color: ${textColor};`, "style")}> <div class="flex flex-col items-center"> <span class="icon mb-2 flex items-center justify-center"${addAttribute(`color: ${iconColor}; font-size: 2rem;`, "style")}> ${iconType === "url" && renderTemplate`<img${addAttribute(iconUrl, "src")} alt="icono" class="h-8 w-8">`} ${iconType === "text" && renderTemplate`<span aria-hidden="true">${iconText}</span>`} ${iconType === "default" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32" aria-hidden="true"> <path d="M12 2l2.9 5.88 6.5.95-4.7 4.58 1.1 6.43L12 17.77 6.2 19.84l1.1-6.43-4.7-4.58 6.5-.95L12 2z"></path> </svg>`} </span> <h2 class="card-title text-lg font-bold mb-2">${jsonData?.titulo ?? ""}</h2> ${jsonData?.imagen && renderTemplate`<img${addAttribute(jsonData.imagen, "src")}${addAttribute(jsonData?.titulo ?? "imagen", "alt")} class="max-h-48 w-auto rounded-md mb-2">`} <p class="text-base text-center">${jsonData?.descripcion ?? ""}</p> </div> </div>`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/Card.astro", void 0);

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Insano Network | Conectando Talento, Impulsando Ideas", "description": "Somos un ecosistema digital que conecta clientes y socios para desarrollar proyectos innovadores. Premiamos el emprendimiento y creemos en el poder del open source." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-16 md:space-y-24 py-16 md:py-24"> <!-- Hero Section --> <section class="text-center"> <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
Conectando Talento. <span class="block md:inline text-blue-600 dark:text-blue-400">Impulsando Ideas.</span> </h1> <p class="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
Insano Network es el ecosistema donde convergen la innovación y la
        colaboración. Más que una cartera de clientes, somos el puente que une
        tus proyectos con las personas correctas.
</p> <div class="mt-8 flex justify-center gap-4"> <a href="#contacto" class="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
Únete a la Red
</a> <a href="#nuestra-filosofia" class="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
Conoce Más
</a> </div> </section> <!-- Nuestra Filosofía Section --> <section id="nuestra-filosofia" class="container mx-auto px-6"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
Nuestra Filosofía de Red
</h2> <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
Creemos en un modelo de crecimiento basado en la sinergia y el apoyo
          mutuo.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${renderComponent($$result2, "Card", $$Card, { "title": "Conexiones Cliente a Cliente (C2C)", "body": "Facilitamos un entorno donde nuestros clientes pueden convertirse en socios, compartiendo soluciones y oportunidades para resolver desaf\xEDos comunes.", "icon": "/icons/c2c.svg" })} ${renderComponent($$result2, "Card", $$Card, { "title": "Alianzas Socio a Socio (B2B)", "body": "Construimos una red s\xF3lida de profesionales y empresas que colaboran en proyectos de mayor escala, combinando habilidades para lograr resultados extraordinarios.", "icon": "/icons/b2b.svg" })} ${renderComponent($$result2, "Card", $$Card, { "title": "Emprendimiento y Open Source", "body": "Apoyamos a los nuevos emprendedores y primamos el uso de tecnolog\xEDas de c\xF3digo abierto como pilar para un desarrollo transparente, flexible y comunitario." })} </div> </section> <!-- De la Idea al Proyecto Section --> <section class="bg-gray-100 dark:bg-gray-800 py-16 md:py-24"> <div class="container mx-auto px-6 text-center"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
De la Idea al Proyecto
</h2> <p class="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
En Insano Network, no solo escuchamos ideas, las impulsamos. Nuestro
          enfoque está en el desarrollo tangible de proyectos, ofreciendo los
          recursos y las conexiones necesarias para transformar un concepto en
          una realidad exitosa.
</p> </div> </section> <!-- Contacto Section --> <section id="contacto" class="container mx-auto px-6 text-center"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
¿Tienes un proyecto en mente?
</h2> <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
Seas un emprendedor, un profesional o una empresa consolidada, hay un
        lugar para ti en nuestra red. Hablemos.
</p> <div class="mt-8"> <a href="mailto:contacto@insanonetwork.com" class="bg-blue-600 text-white font-semibold py-4 px-8 text-lg rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
Contáctanos
</a> </div> </section> </main> ` })}`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/nosotros.astro", void 0);

const $$file = "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Nosotros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
