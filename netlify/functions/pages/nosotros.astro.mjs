import { a as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_D7wE4XSf.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Dl7EB-N3.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://InsanoNetwork.com");
const $$TeamCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TeamCard;
  const { miembro } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"> <div class="text-center"> <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center"> <span class="text-white text-2xl font-bold"> ${miembro.nombre.charAt(0)}${miembro.apellido.charAt(0)} </span> </div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1"> ${miembro.nombre} ${miembro.apellido} </h3> <p class="text-gray-600 dark:text-gray-300 mb-4">@${miembro.username}</p> <div class="flex justify-center space-x-3 mb-4"> ${miembro.redes.instagram && renderTemplate`<a${addAttribute(miembro.redes.instagram, "href")} target="_blank" rel="noopener noreferrer" class="text-pink-600 hover:text-pink-700 transition-colors" aria-label="Instagram"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"></path> <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.79 4 4c0 2.209-1.79 4-4 4z"></path> <circle cx="18.406" cy="5.594" r="1.44"></circle> </svg> </a>`} ${miembro.redes.facebook && renderTemplate`<a${addAttribute(miembro.redes.facebook, "href")} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-700 transition-colors" aria-label="Facebook"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path> </svg> </a>`} ${miembro.redes.whatsapp && renderTemplate`<a${addAttribute(`https://wa.me/${miembro.redes.whatsapp.replace("+", "")}`, "href")} target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-700 transition-colors" aria-label="WhatsApp"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 9.885-5.335 9.885-11.893a11.842 11.842 0 00-3.48-8.413Z"></path> </svg> </a>`} </div> <a${addAttribute(miembro.redes.web, "href")} class="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
Ver Portafolio
</a> </div> </div>`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/TeamCard.astro", void 0);

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  const equipo = [
    // {
    //   nombre: "Ferch",
    //   apellido: "Developer",
    //   username: "ferchdev",
    //   redes: {
    //     instagram: "https://instagram.com/ferchdev",
    //     facebook: "https://facebook.com/ferchdev",
    //     whatsapp: "+1234567890",
    //     web: "/portafolio/ferch"
    //   }
    // },
    // {
    //   nombre: "Ana",
    //   apellido: "Designer",
    //   username: "anadesign",
    //   redes: {
    //     instagram: "https://instagram.com/anadesign",
    //     facebook: "https://facebook.com/anadesign",
    //     whatsapp: "+0987654321",
    //     web: "/portafolio/ana"
    //   }
    // },
    // {
    //   nombre: "Carlos",
    //   apellido: "Manager",
    //   username: "carlosmgmt",
    //   redes: {
    //     instagram: "https://instagram.com/carlosmgmt",
    //     facebook: "https://facebook.com/carlosmgmt",
    //     whatsapp: "+1122334455",
    //     web: "/portafolio/carlos"
    //   }
    // },
    {
      nombre: "Fernando J",
      apellido: "Mtz",
      username: "MrDUFYGY",
      redes: {
        instagram: "https://instagram.com/mrdufygy",
        facebook: "https://facebook.com/mrdufygy",
        whatsapp: "+52 55 4296 5463",
        web: "/portafolio/mrdufygy"
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Insano Network | Conectando Talento, Impulsando Ideas", "description": "Somos un ecosistema digital que conecta clientes y socios para desarrollar proyectos innovadores. Premiamos el emprendimiento y creemos en el poder del open source." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-16 md:space-y-24 py-16 md:py-24"> <!-- Hero Section --> <section class="text-center"> <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
Conectando Talento. <span class="block md:inline text-blue-600 dark:text-blue-400">Impulsando Ideas.</span> </h1> <p class="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
Insano Network es el ecosistema donde convergen la innovación y la
        colaboración. Más que una cartera de clientes, somos el puente que une
        tus proyectos con las personas correctas.
</p> <div class="mt-8 flex justify-center gap-4"> <a href="#contacto" class="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
Únete a la Red
</a> <a href="#nuestra-filosofia" class="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
Conoce Más
</a> </div> </section> <!-- Misión y Visión Section --> <section class="bg-gray-50 dark:bg-gray-900 py-16 md:py-24"> <div class="container mx-auto px-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12"> <div class="text-center md:text-left"> <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto md:mx-0 mb-6 flex items-center justify-center"> <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
Nuestra Misión
</h2> <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
En Insano Network, nuestra misión es transformar ideas en
              soluciones funcionales a través de la integración de conocimientos
              en informática, diseño, automatización y marketing. Actuamos como
              el puente entre los desafíos de nuestros clientes y los
              especialistas más aptos para resolverlos, gestionando proyectos de
              forma personalizada, profesional y eficaz. Brindamos servicios y
              productos innovadores adaptados a las necesidades específicas de
              cada cliente, con un enfoque humano, responsable y orientado a
              resultados.
</p> </div> <div class="text-center md:text-left"> <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mx-auto md:mx-0 mb-6 flex items-center justify-center"> <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path> </svg> </div> <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
Nuestra Visión
</h2> <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
Ser la empresa matriz líder en gestión e innovación digital,
              conectando a clientes con especialistas de alto nivel para el
              desarrollo de proyectos tecnológicos personalizados, eficientes y
              centrados en el ser humano. Aspiramos a ser el eje que articula
              redes de conocimiento, creatividad y estrategia, impulsando la
              transformación digital de empresas pequeñas, medianas y grandes en
              cualquier parte del mundo.
</p> </div> </div> </div> </section> <!-- Filosofía Empresarial Section --> <section id="nuestra-filosofia" class="container mx-auto px-6"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
Filosofía Empresarial
</h2> <p class="mt-4 text-xl text-blue-600 dark:text-blue-400 font-semibold">
"Usar lo que tenemos para transformar lo que hacemos."
</p> <p class="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
En Insano Network creemos que el conocimiento no solo es poder, sino
          también puente. Es lo que nos permite conectar ideas con soluciones,
          personas con expertos, y visión con acción. Nuestra filosofía se rige
          por valores sólidos y principios que guían cada proyecto que
          emprendemos.
</p> </div> <!-- Principios Fundamentales --> <div class="mb-16"> <h3 class="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
Principios Fundamentales
</h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"> <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
Centralidad Humana
</h4> <p class="text-gray-600 dark:text-gray-300 text-sm">
Ponemos a las personas en el centro. Desde nuestro equipo hasta
              nuestros clientes, el enfoque humano y empático guía cada
              interacción y decisión.
</p> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"> <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
Conexión Estratégica
</h4> <p class="text-gray-600 dark:text-gray-300 text-sm">
Más que una empresa, somos una red de talentos. Identificamos al
              experto ideal para cada desafío y lo conectamos con quien lo
              necesita.
</p> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"> <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
Optimización de Recursos
</h4> <p class="text-gray-600 dark:text-gray-300 text-sm">
Aprovechamos lo que sabemos, tenemos y somos. No se trata de más
              herramientas, sino de usar mejor las existentes.
</p> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"> <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
Aprendizaje Continuo
</h4> <p class="text-gray-600 dark:text-gray-300 text-sm">
Investigamos, experimentamos y nos certificamos constantemente. El
              conocimiento debe crecer junto con la demanda.
</p> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"> <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
Automatización con Sentido
</h4> <p class="text-gray-600 dark:text-gray-300 text-sm">
Automatizamos procesos para liberar tiempo humano, no para
              deshumanizar el trabajo.
</p> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"> <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
Eficiencia Personalizada
</h4> <p class="text-gray-600 dark:text-gray-300 text-sm">
La productividad no es igual para todos. Adaptamos nuestras
              soluciones al perfil, cultura y necesidad específica del cliente.
</p> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"> <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
Comunicación Transparente
</h4> <p class="text-gray-600 dark:text-gray-300 text-sm">
Informamos, explicamos, escuchamos. Todo flujo de trabajo parte de
              la confianza y la claridad.
</p> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"> <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
Visión Escalable
</h4> <p class="text-gray-600 dark:text-gray-300 text-sm">
Pensamos en hoy, construimos para el mañana. Nuestras soluciones
              permiten crecer y evolucionar.
</p> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"> <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
Responsabilidad Integral
</h4> <p class="text-gray-600 dark:text-gray-300 text-sm">
Nos importa el impacto social, humano y digital de lo que hacemos.
              Actuamos con ética, sostenibilidad y cuidado.
</p> </div> </div> </div> <!-- Habilidades Clave del Equipo --> <div class="mb-16"> <h3 class="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
🛠️ Habilidades Clave de Nuestro Equipo
</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6"> <h4 class="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
👨‍💼 Project Managers (PM)
</h4> <ul class="space-y-2 text-gray-700 dark:text-gray-300"> <li>• Gestión ágil de proyectos (Scrum, Kanban)</li> <li>• Coordinación de equipos multidisciplinarios</li> <li>• Comunicación efectiva con stakeholders</li> <li>• Planificación, seguimiento y control de entregables</li> <li>• Resolución de conflictos y toma de decisiones</li> </ul> </div> <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6"> <h4 class="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">
📱 Community Managers (CM)
</h4> <ul class="space-y-2 text-gray-700 dark:text-gray-300"> <li>• Gestión de comunidades y redes sociales</li> <li>• Branding digital y reputación de marca</li> <li>• Creación de contenido adaptado al público objetivo</li> <li>• Análisis de métricas y engagement</li> <li>• Escucha activa y atención al cliente</li> </ul> </div> <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6"> <h4 class="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4">
💻 Desarrolladores Senior
</h4> <ul class="space-y-2 text-gray-700 dark:text-gray-300"> <li>• Diseño de arquitecturas escalables y seguras</li> <li>• Desarrollo frontend y backend con buenas prácticas</li> <li>• Integración de APIs y servicios externos</li> <li>• Enfoque en rendimiento, testing y mantenimiento</li> <li>• Mentoreo y revisión de código en equipo</li> </ul> </div> <div class="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6"> <h4 class="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-4">
📈 Especialistas en Marketing
</h4> <ul class="space-y-2 text-gray-700 dark:text-gray-300"> <li>• Estrategia digital y funnel de conversión</li> <li>• SEO/SEM y posicionamiento orgánico/pago</li> <li>• Análisis de datos y métricas de campañas</li> <li>• Automatización de marketing (CRM, email, remarketing)</li> <li>• Branding visual y storytelling estratégico</li> </ul> </div> </div> </div> <!-- Servicios Especializados --> <div class="mb-16"> <h3 class="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
Servicios Especializados
</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"> <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
🎬 Producción Digital & Multimedia
</h4> <ul class="space-y-2 text-gray-600 dark:text-gray-300"> <li>• Producción audiovisual profesional</li> <li>• Edición y postproducción de video</li> <li>• Diseño de guiones visuales</li> <li>• Tomas con drone y cámara profesional</li> </ul> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"> <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
🌐 Diseño Digital, Web & 3D
</h4> <ul class="space-y-2 text-gray-600 dark:text-gray-300"> <li>• Diseño web responsivo UX/UI</li> <li>• Identidad visual completa</li> <li>• Modelado 3D de prototipos</li> <li>• Animaciones 3D y prototipado físico</li> </ul> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"> <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
📊 Servicios Contables (México)
</h4> <ul class="space-y-2 text-gray-600 dark:text-gray-300"> <li>• Contabilidad fiscal y financiera</li> <li>• Administración de nómina e IMSS</li> <li>• Declaraciones SAT mensuales/anuales</li> <li>• Emisión y validación CFDI 4.0</li> </ul> </div> </div> </div> </section> <!-- Servicios Principales Section --> <section class="container mx-auto px-6 py-16 md:py-24"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
Nuestros Servicios
</h2> <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
Soluciones integrales para transformar tu negocio digitalmente
</p> </div> <!-- Servicios Grid --> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"> <!-- Diseño --> <div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-8"> <h3 class="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
🧩 Diseño
</h3> <p class="text-gray-700 dark:text-gray-300 mb-4 font-semibold">
Diseño Digital, UI/UX, Identidad y Modelado 3D
</p> <ul class="space-y-2 text-gray-700 dark:text-gray-300 text-sm"> <li>• Branding e identidad corporativa</li> <li>• Manuales de marca y material gráfico</li> <li>• Diseño UI/UX en Figma</li> <li>• Prototipado digital y maquetación</li> <li>• Modelado 3D de productos y espacios</li> <li>• Presentaciones interactivas</li> <li>• Interfaces para software empresarial</li> </ul> </div> <!-- Desarrollo --> <div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-8"> <h3 class="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">
🛠️ Desarrollo
</h3> <p class="text-gray-700 dark:text-gray-300 mb-4 font-semibold">
Software, Sistemas, Automatización y Capacitación
</p> <ul class="space-y-2 text-gray-700 dark:text-gray-300 text-sm"> <li>• Software a medida (ERP, CRM)</li> <li>• Aplicaciones web y móviles</li> <li>• Automatización de procesos</li> <li>• Integración de APIs y servicios</li> <li>• Instalación y soporte de redes</li> <li>• Sistemas contables y administrativos</li> <li>• Auditorías tecnológicas e IT</li> </ul> </div> <!-- Marketing --> <div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-8"> <h3 class="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">
📈 Marketing y Automatización
</h3> <p class="text-gray-700 dark:text-gray-300 mb-4 font-semibold">
Marketing Digital y Procesos Inteligentes
</p> <ul class="space-y-2 text-gray-700 dark:text-gray-300 text-sm"> <li>• Estrategias de marketing digital</li> <li>• Embudos de conversión automatizados</li> <li>• Campañas SEO y SEM</li> <li>• Gestión de redes sociales</li> <li>• Automatización con Zapier/Integromat</li> <li>• Implementación HubSpot, Mailchimp</li> <li>• Generación de leads y remarketing</li> </ul> </div> <!-- Contabilidad --> <div class="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg p-8"> <h3 class="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">
📊 Servicios Contables
</h3> <p class="text-gray-700 dark:text-gray-300 mb-4 font-semibold">
Contabilidad Corporativa y Fiscal (México)
</p> <ul class="space-y-2 text-gray-700 dark:text-gray-300 text-sm"> <li>• Contabilidad electrónica mensual</li> <li>• Declaraciones fiscales mensuales/anuales</li> <li>• Facturación CFDI y timbrado</li> <li>• Gestión de nómina</li> <li>• Auditoría contable y fiscal</li> <li>• Estructuras corporativas múltiples</li> <li>• Reportes financieros y control</li> </ul> </div> <!-- Capacitación --> <div class="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg p-8"> <h3 class="text-2xl font-bold text-red-900 dark:text-red-100 mb-4">
🧠 Capacitación y Desarrollo
</h3> <p class="text-gray-700 dark:text-gray-300 mb-4 font-semibold">
Formación Profesional y Especialización Técnica
</p> <ul class="space-y-2 text-gray-700 dark:text-gray-300 text-sm"> <li>• Cursos técnicos y bootcamps</li> <li>• Certificaciones empresariales</li> <li>• Programas tipo Máster</li> <li>• Capacitación por rol y sector</li> <li>• Formatos híbridos (presencial/online)</li> <li>• Evaluación de desempeño</li> <li>• Seguimiento y feedback personalizado</li> </ul> </div> <!-- Multimedia --> <div class="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-lg p-8"> <h3 class="text-2xl font-bold text-pink-900 dark:text-pink-100 mb-4">
🎥 Producción Multimedia
</h3> <p class="text-gray-700 dark:text-gray-300 mb-4 font-semibold">
Fotografía, Video y Contenido Visual
</p> <ul class="space-y-2 text-gray-700 dark:text-gray-300 text-sm"> <li>• Grabaciones con dron</li> <li>• Video corporativo y promocional</li> <li>• Edición y postproducción</li> <li>• Fotografía profesional</li> <li>• Retoque digital e imágenes</li> <li>• Contenido para redes y catálogos</li> <li>• Escenografía y puesta en escena</li> </ul> </div> </div> <!-- Target Estratégico --> <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-12"> <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
🎯 Nuestro Target Estratégico
</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
Público Objetivo Principal
</h4> <ul class="space-y-3 text-gray-700 dark:text-gray-300"> <li class="flex items-start"> <span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span>Empresarios y fundadores de startups</span> </li> <li class="flex items-start"> <span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span>Pequeñas y medianas empresas (PyMES)</span> </li> <li class="flex items-start"> <span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span>Agencias que externalizan áreas técnicas</span> </li> <li class="flex items-start"> <span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span>Departamentos de innovación empresarial</span> </li> <li class="flex items-start"> <span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span>Marcas personales y creadores de contenido</span> </li> </ul> </div> <div> <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
Perfil del Decisor
</h4> <div class="space-y-3 text-gray-700 dark:text-gray-300"> <div> <p class="font-semibold text-gray-900 dark:text-white">Edad:</p> <p>25 a 45 años</p> </div> <div> <p class="font-semibold text-gray-900 dark:text-white">
Profesión:
</p> <p>
Emprendedores, directores generales, CTOs, CMOs, PMs,
                  diseñadores líderes
</p> </div> <div> <p class="font-semibold text-gray-900 dark:text-white">
Ubicación:
</p> <p>México, escalable a LATAM y EE.UU.</p> </div> <div> <p class="font-semibold text-gray-900 dark:text-white">
Interés Principal:
</p> <p>
Automatizar procesos, escalar negocio, mejorar imagen digital
</p> </div> </div> </div> </div> </div> </section> <section class="bg-gray-100 dark:bg-gray-800 py-16 md:py-24"> <div class="container mx-auto px-6 text-center"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
De la Idea al Proyecto
</h2> <p class="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
En Insano Network, no solo escuchamos ideas, las impulsamos. Nuestro
          enfoque está en el desarrollo tangible de proyectos, ofreciendo los
          recursos y las conexiones necesarias para transformar un concepto en
          una realidad exitosa.
</p> </div> </section> <!-- Nuestro Equipo Section --> <section class="container mx-auto px-6"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
Nuestro Equipo
</h2> <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
Conoce a los talentos que forman parte de Insano Network
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${equipo.map((miembro) => renderTemplate`${renderComponent($$result2, "TeamCard", $$TeamCard, { "miembro": miembro })}`)} </div> </section> <!-- Contacto Section --> <section id="contacto" class="container mx-auto px-6 text-center"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
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
