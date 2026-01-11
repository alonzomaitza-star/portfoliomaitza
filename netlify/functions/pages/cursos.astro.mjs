import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D7wE4XSf.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Dl7EB-N3.mjs';
/* empty css                                  */
import { $ as $$CardShop } from '../chunks/CardShop_IpPmU-Zt.mjs';
import { I as ImgSlider, a as ImgSlider2 } from '../chunks/Insano Network-Slider 2_Bi_FSDmg.mjs';
import { I as ImgSlider3 } from '../chunks/Insano Network-Slider 3__mQ3AlYv.mjs';
export { renderers } from '../renderers.mjs';

const $$Cursos = createComponent(($$result, $$props, $$slots) => {
  const tiendaCursos = [
    { id: 1, titulo: "TOEFL Preparation", descripcion: "Prep\xE1rate para el examen TOEFL con profesionales certificados. Enfoque en M\xE9xico y conversacional.", imagen: ImgSlider.src, precio: 3999, etiqueta: "Premium" },
    { id: 2, titulo: "Excel B\xE1sico a Avanzado", descripcion: "Domina Excel desde nivel b\xE1sico hasta avanzado con proyectos reales.", imagen: ImgSlider2.src, precio: 1499, etiqueta: "Popular" },
    { id: 3, titulo: "Excel con Python y Power BI", descripcion: "Curso propio: Combina Excel, Python y Power BI para an\xE1lisis de datos avanzado.", imagen: ImgSlider3.src, precio: 2999, etiqueta: "Hot" },
    { id: 4, titulo: "Certificaci\xF3n Microsoft Office", descripcion: "Prep\xE1rate para las certificaciones oficiales de Word, Excel y PowerPoint.", imagen: ImgSlider.src, precio: 1999, etiqueta: "Certificaci\xF3n" },
    { id: 5, titulo: "Ingl\xE9s Conversacional", descripcion: "Practica ingl\xE9s conversacional con profesores nativos y profesionales certificados.", imagen: ImgSlider2.src, precio: 1799, etiqueta: "Comunicaci\xF3n" },
    { id: 6, titulo: "Python para Data Analysis", descripcion: "Aprende Python aplicado al an\xE1lisis de datos y automatizaci\xF3n de procesos.", imagen: ImgSlider3.src, precio: 2499, etiqueta: "Tecnolog\xEDa" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!-- Hero Section --> <section class="py-14"> <div class="container mx-auto px-4"> <h1 class="text-3xl md:text-4xl font-extrabold text-white text-center">Cursos y Certificaciones Profesionales</h1> <p class="text-base md:text-lg text-gray-200 text-center mt-2 max-w-3xl mx-auto">Conecta con profesionales certificados y obtén valor curricular. Prepárate para exámenes como TOEFL, domina Excel con Python y Power BI, y obtén certificaciones Microsoft oficiales.</p> <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"> <div class="bg-white/90 rounded-xl p-6 shadow border border-gray-200"> <h3 class="text-xl font-bold">Aprende</h3> <p class="text-gray-700 mt-2">Accede a contenido de calidad desarrollado por profesionales con años de experiencia.</p> </div> <div class="bg-white/90 rounded-xl p-6 shadow border border-gray-200"> <h3 class="text-xl font-bold">Practica</h3> <p class="text-gray-700 mt-2">Aplica lo aprendido con proyectos reales y ejercicios prácticos.</p> </div> <div class="bg-white/90 rounded-xl p-6 shadow border border-gray-200"> <h3 class="text-xl font-bold">Certifícate</h3> <p class="text-gray-700 mt-2">Obtén certificados reconocidos que validan tus nuevas habilidades.</p> </div> </div> </div> </section> <!-- Cursos Destacados --> <section class="py-14 bg-gray-100"> <div class="container mx-auto px-4"> <h2 class="text-2xl md:text-3xl font-bold text-center mb-8">Cursos Destacados</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${tiendaCursos.map((curso) => renderTemplate`${renderComponent($$result2, "CardShop", $$CardShop, { "key": curso.id, "titulo": curso.titulo, "descripcion": curso.descripcion, "imagen": curso.imagen, "precio": curso.precio, "etiqueta": curso.etiqueta })}`)} </div> </div> </section> <!-- Modalidades de Aprendizaje --> <section class="py-14"> <div class="container mx-auto px-4"> <h2 class="text-2xl md:text-3xl font-bold text-center mb-8 text-white">Modalidades de Aprendizaje</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="bg-white/90 rounded-xl p-8 shadow border border-gray-200"> <h3 class="text-xl font-bold mb-4">Cursos Autoadministrados</h3> <ul class="space-y-2 text-gray-700"> <li>• Acceso 24/7 al contenido</li> <li>• Aprende a tu propio ritmo</li> <li>• Material descargable</li> <li>• Certificado de finalización</li> </ul> </div> <div class="bg-white/90 rounded-xl p-8 shadow border border-gray-200"> <h3 class="text-xl font-bold mb-4">Clases en Vivo</h3> <ul class="space-y-2 text-gray-700"> <li>• Sesiones interactivas</li> <li>• Preguntas en tiempo real</li> <li>• Grupos reducidos</li> <li>• Seguimiento personalizado</li> </ul> </div> </div> </div> </section> <!-- Comunidad --> <section class="py-14 bg-gray-100"> <div class="container mx-auto px-4 text-center"> <h2 class="text-2xl md:text-3xl font-bold mb-4">Únete a nuestra Comunidad</h2> <p class="text-gray-700 max-w-2xl mx-auto mb-8">Más de 5,000 estudiantes ya están aprendiendo con nosotros. Forma parte de una comunidad activa de profesionales y creativos.</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="#seccionTwitch" class="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
Ver Cursos Gratuitos
</a> <a href="#chat-assistant" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
Hablar con un Asesor
</a> </div> </div> </section> </main> ` })}`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/cursos.astro", void 0);

const $$file = "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/cursos.astro";
const $$url = "/cursos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cursos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
