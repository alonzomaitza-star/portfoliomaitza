import { c as createComponent, m as maybeRenderHead, e as renderScript, b as addAttribute, r as renderTemplate, a as createAstro, d as renderComponent } from '../chunks/astro/server_D7wE4XSf.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Dl7EB-N3.mjs';
/* empty css                                  */
import 'clsx';
/* empty css                                 */
import { I as ImgSlider, a as ImgSlider2 } from '../chunks/Insano Network-Slider 2_Bi_FSDmg.mjs';
import { b as content3, a as content5, c as content4 } from '../chunks/shellby_PjYWm4GN.mjs';
import { $ as $$ProjectGallery } from '../chunks/ProjectGallery_C5cgTIp5.mjs';
export { renderers } from '../renderers.mjs';

const TWITCH_CLIENT_ID = "yiy38u8xyk5j247i8mrkefsg2br7du";
const TWITCH_CLIENT_SECRET = "07plx5tbxxssl7e6vu2q145ompc4xj";
const TWITCH_CHANNEL = "insanonetwork";
let cachedToken = null;
async function getAccessToken() {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.token;
  }
  const response = await fetch("https://id.twitch.tv/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      client_id: TWITCH_CLIENT_ID,
      client_secret: TWITCH_CLIENT_SECRET,
      grant_type: "client_credentials"
    })
  });
  if (!response.ok) {
    throw new Error(`Failed to get Twitch access token: ${response.status}`);
  }
  const data = await response.json();
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 3600) * 1e3
  };
  return data.access_token;
}
async function getUserId(accessToken) {
  const response = await fetch(
    `https://api.twitch.tv/helix/users?login=${TWITCH_CHANNEL}`,
    {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Client-Id": TWITCH_CLIENT_ID
      }
    }
  );
  if (!response.ok) {
    console.error("Failed to get user ID:", response.status);
    return null;
  }
  const data = await response.json();
  return data.data?.[0]?.id || null;
}
async function getStreamStatus(accessToken) {
  const response = await fetch(
    `https://api.twitch.tv/helix/streams?user_login=${TWITCH_CHANNEL}`,
    {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Client-Id": TWITCH_CLIENT_ID
      }
    }
  );
  if (!response.ok) {
    console.error("Failed to get stream status:", response.status);
    return null;
  }
  const data = await response.json();
  return data.data?.[0] || null;
}
async function getLatestVideo(accessToken, userId) {
  const response = await fetch(
    `https://api.twitch.tv/helix/videos?user_id=${userId}&first=1&type=archive`,
    {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Client-Id": TWITCH_CLIENT_ID
      }
    }
  );
  if (!response.ok) {
    console.error("Failed to get latest video:", response.status);
    return null;
  }
  const data = await response.json();
  return data.data?.[0] || null;
}
async function getTwitchEmbedData() {
  const fallbackData = {
    isLive: false,
    channelName: TWITCH_CHANNEL,
    latestVideoId: "2643470685"
    // Fallback video ID
  };
  try {
    const accessToken = await getAccessToken();
    const stream = await getStreamStatus(accessToken);
    if (stream) {
      return {
        isLive: true,
        channelName: TWITCH_CHANNEL,
        streamTitle: stream.title,
        viewerCount: stream.viewer_count,
        gameName: stream.game_name
      };
    }
    const userId = await getUserId(accessToken);
    if (!userId) {
      return fallbackData;
    }
    const latestVideo = await getLatestVideo(accessToken, userId);
    return {
      isLive: false,
      channelName: TWITCH_CHANNEL,
      latestVideoId: latestVideo?.id || fallbackData.latestVideoId,
      latestVideoTitle: latestVideo?.title,
      latestVideoThumbnail: latestVideo?.thumbnail_url?.replace("%{width}", "640").replace("%{height}", "360")
    };
  } catch (error) {
    console.error("Error fetching Twitch data:", error);
    return fallbackData;
  }
}

const YOUTUBE_API_KEY = "AIzaSyBrtb9SfYerwsRidIDGjc-sz9CdRDrO7ks";
const YOUTUBE_CHANNEL_ID = "UC1lMa3YpykRzHQ1M4J_TMXw";
async function getYouTubeLiveStatus() {
  const fallbackData = {
    isLive: false,
    channelId: YOUTUBE_CHANNEL_ID
  };
  try {
    const searchUrl = new URL("https://www.googleapis.com/youtube/v3/search");
    searchUrl.searchParams.set("part", "snippet");
    searchUrl.searchParams.set("channelId", YOUTUBE_CHANNEL_ID);
    searchUrl.searchParams.set("eventType", "live");
    searchUrl.searchParams.set("type", "video");
    searchUrl.searchParams.set("key", YOUTUBE_API_KEY);
    const response = await fetch(searchUrl.toString());
    if (!response.ok) {
      console.error("YouTube API request failed:", response.status, await response.text());
      return fallbackData;
    }
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      const liveStream = data.items[0];
      return {
        isLive: true,
        liveVideoId: liveStream.id.videoId,
        liveVideoTitle: liveStream.snippet.title,
        liveThumbnail: liveStream.snippet.thumbnails.high.url,
        channelId: YOUTUBE_CHANNEL_ID
      };
    }
    return fallbackData;
  } catch (error) {
    console.error("Error fetching YouTube live status:", error);
    return fallbackData;
  }
}

const $$HomeExperiencia = createComponent(async ($$result, $$props, $$slots) => {
  await getTwitchEmbedData();
  await getYouTubeLiveStatus();
  const EXPERIENCE_CARDS = [
    {
      id: "emprender",
      title: "\xBFEmprender?",
      description: "Te guiamos desde la idea hasta la realidad. Estructura, marca y camino claro para tu nuevo negocio.",
      color: "orange",
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
      services: [
        "Ideaci\xF3n y Estructura",
        "Identidad de Marca",
        "Modelo de Negocio",
        "Asesor\xEDa Inicial"
      ],
      storeProducts: [
        "Paquetes de Emprendedor"
      ]
    },
    {
      id: "diseno",
      title: "\xBFDise\xF1o?",
      description: "Creamos identidades visuales \xFAnicas y experiencias memorables.",
      color: "purple",
      iconPath: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
      services: [
        "Dise\xF1os y Logos",
        "Prototipado UI",
        "Direcci\xF3n de marca",
        "Dise\xF1o 3D",
        "Dise\xF1o imprenta",
        "Corte l\xE1ser",
        "Vectorizaci\xF3n"
      ],
      storeProducts: [
        "Tazas (personalizadas/mayoreo)",
        "Logos pre-dise\xF1ados",
        "Vectores para playeras",
        "Lonas"
      ]
    },
    {
      id: "desarrollo",
      title: "\xBFDesarrollo?",
      description: "Soluciones tecnol\xF3gicas a medida y aplicaciones web modernas.",
      color: "blue",
      iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      services: [
        "P\xE1ginas y Sitios Web",
        "Apps M\xF3viles Multiplataforma",
        "Software y APIs"
      ],
      storeProducts: [
        "Landing Page",
        "Blogs",
        "SEO",
        "Consultor\xEDa"
      ]
    },
    {
      id: "contabilidad",
      title: "Contabilidad",
      description: "Arregla tu contabilidad en M\xE9xico. Servicios fiscales expertos.",
      color: "teal",
      iconPath: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
      services: [
        "Paquete Emprendedor",
        "Contabilidad PYME",
        "Contabilidad Empresarial",
        "Paquete Corporativo",
        "Servicios Express"
      ],
      storeProducts: [
        "Kit Emprendedor Completo",
        "Paquete PYME Anual",
        "Migraci\xF3n Digital",
        "Sistema de Facturaci\xF3n SAT",
        "Portal Contable Web"
      ]
    },
    {
      id: "comprar-vender",
      title: "\xBFQuieres vender o comprar?",
      description: "Entendemos que eres un cliente que necesitas llevar tu marca al siguiente nivel, alg\xFAn evento corporativo, o simplemente un regalo de navidad, por ello, te ayudamos a tener ese producto estrella para tu idea.",
      color: "emerald",
      iconPath: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
      storeProducts: [
        "Prod. Personalizados (Mayoreo/Menudeo)",
        "Tazas, Playeras, Lonas",
        "Sellos y Bolsas",
        "Frasadas Personalizadas",
        "Impresiones DTF / Sublimaci\xF3n",
        "DFTV"
      ]
    },
    {
      id: "cursos",
      title: "\xBFCursos y Certificaciones?",
      description: "Prep\xE1rate con profesionales certificados. TOEFL, Excel, Python, Power BI y m\xE1s. Conecta con expertos y obt\xE9n valor curricular.",
      color: "orange",
      iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      services: [
        "TOEFL Preparation",
        "Excel B\xE1sico/Avanzado",
        "Excel con Python y Power BI",
        "Certificaciones Microsoft",
        "Ingl\xE9s Conversacional"
      ],
      storeProducts: [
        "Curso TOEFL Intensivo",
        "Excel para Negocios",
        "Python para Data Analysis",
        "Power BI Dashboard",
        "Certificaci\xF3n Microsoft Office"
      ]
    },
    {
      id: "capacitacion",
      title: "\xBFCapacitaci\xF3n de Equipos?",
      description: "Capacita a tu equipo o grupo escolar. Desarrollo de software, inform\xE1tica b\xE1sica, habilidades blandas y m\xE1s. Programas a medida.",
      color: "blue",
      iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      services: [
        "Capacitaci\xF3n Empresarial",
        "Desarrollo de Equipos",
        "Inform\xE1tica Corporativa",
        "Habilidades Blandas",
        "Programas a Medida"
      ],
      storeProducts: [
        "Capacitaci\xF3n Python Empresarial",
        "Excel para Equipos",
        "Desarrollo Web Corporativo",
        "Soft Skills para Teams",
        "Programas H\xEDbridos"
      ]
    }
  ];
  const COLOR_MAP = {
    purple: {
      borderHover: "md:hover:border-purple-500/50",
      shadowHover: "md:hover:shadow-purple-500/10",
      bgGradient: "from-purple-600/10",
      iconBg: "bg-purple-500/20",
      iconText: "text-purple-400",
      iconGroupHoverText: "md:group-hover:text-purple-300",
      iconGroupHoverBg: "md:group-hover:bg-purple-500/30"
    },
    blue: {
      borderHover: "md:hover:border-blue-500/50",
      shadowHover: "md:hover:shadow-blue-500/10",
      bgGradient: "from-blue-600/10",
      iconBg: "bg-blue-500/20",
      iconText: "text-blue-400",
      iconGroupHoverText: "md:group-hover:text-blue-300",
      iconGroupHoverBg: "md:group-hover:bg-blue-500/30"
    },
    emerald: {
      borderHover: "md:hover:border-emerald-500/50",
      shadowHover: "md:hover:shadow-emerald-500/10",
      bgGradient: "from-emerald-600/10",
      iconBg: "bg-emerald-500/20",
      iconText: "text-emerald-400",
      iconGroupHoverText: "md:group-hover:text-emerald-300",
      iconGroupHoverBg: "md:group-hover:bg-emerald-500/30"
    },
    orange: {
      borderHover: "md:hover:border-orange-500/50",
      shadowHover: "md:hover:shadow-orange-500/10",
      bgGradient: "from-orange-600/10",
      iconBg: "bg-orange-500/20",
      iconText: "text-orange-400",
      iconGroupHoverText: "md:group-hover:text-orange-300",
      iconGroupHoverBg: "md:group-hover:bg-orange-500/30"
    },
    teal: {
      borderHover: "md:hover:border-teal-500/50",
      shadowHover: "md:hover:shadow-teal-500/10",
      bgGradient: "from-teal-600/10",
      iconBg: "bg-teal-500/20",
      iconText: "text-teal-400",
      iconGroupHoverText: "md:group-hover:text-teal-300",
      iconGroupHoverBg: "md:group-hover:bg-teal-500/30"
    }
  };
  return renderTemplate`${maybeRenderHead()}<section class="h-full py-16 md:py-24 bg-gradient-to-b from-slate-900/10 to-slate-950/10 text-white overflow-hidden relative" data-astro-cid-rpcdpgfo> <!-- Decoration background elements --> <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0" data-astro-cid-rpcdpgfo> <div class="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[100px]" data-astro-cid-rpcdpgfo></div> <div class="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-blue-600/10 rounded-full blur-[100px]" data-astro-cid-rpcdpgfo></div> </div> <div class="container mx-auto px-4 relative z-10" data-astro-cid-rpcdpgfo> <!-- Header Question --> <div class="text-center mb-12 md:mb-16" data-astro-cid-rpcdpgfo> <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" data-astro-cid-rpcdpgfo>
¿En qué te ayudamos hoy?
</h2> <p class="text-lg text-slate-400 max-w-2xl mx-auto" data-astro-cid-rpcdpgfo>
Selecciona una opción para comenzar tu experiencia personalizada.
</p> </div> <!-- Cards Gallery --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 mb-20" data-astro-cid-rpcdpgfo> ${EXPERIENCE_CARDS.map((card) => {
    const colors = COLOR_MAP[card.color];
    return renderTemplate`<div${addAttribute(card.id, "data-card-id")}${addAttribute([
      "experience-card group relative p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg flex flex-col h-full cursor-pointer md:cursor-default",
      colors.borderHover,
      colors.shadowHover
    ], "class:list")} data-astro-cid-rpcdpgfo> <div${addAttribute([
      "absolute inset-0 bg-gradient-to-br to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none",
      colors.bgGradient
    ], "class:list")} data-astro-cid-rpcdpgfo></div> <div class="relative z-10 flex flex-col h-full" data-astro-cid-rpcdpgfo> <!-- Header (Icon + Title + toggle indicator) --> <div class="flex items-start justify-between" data-astro-cid-rpcdpgfo> <div${addAttribute([
      "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors flex-shrink-0",
      colors.iconBg,
      colors.iconText,
      colors.iconGroupHoverText,
      colors.iconGroupHoverBg
    ], "class:list")} data-astro-cid-rpcdpgfo> <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-rpcdpgfo> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(card.iconPath, "d")} data-astro-cid-rpcdpgfo></path> </svg> </div> <!-- Mobile Chevron --> <div class="md:hidden text-slate-500 transition-transform duration-300 chevron-icon" data-astro-cid-rpcdpgfo> <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-rpcdpgfo> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-rpcdpgfo></path> </svg> </div> </div> <!-- Title (Always visible) --> <h3 class="text-2xl font-bold mb-3 select-none" data-astro-cid-rpcdpgfo>${card.title}</h3> <!-- Content Body (Collapsible on mobile) --> <div class="card-content flex-col flex-grow" data-astro-cid-rpcdpgfo> <!-- Content --> <p class="text-base text-slate-400 mb-6 flex-grow" data-astro-cid-rpcdpgfo> ${card.description} </p> <!-- Services List (Optional) --> ${card.services && card.services.length > 0 && renderTemplate`<div class="mb-5" data-astro-cid-rpcdpgfo> <p class="text-sm font-semibold uppercase text-slate-500 mb-3 tracking-wider" data-astro-cid-rpcdpgfo>
Servicios
</p> <div class="flex flex-wrap gap-2" data-astro-cid-rpcdpgfo> ${card.services.slice(0, 4).map((service) => renderTemplate`<span class="text-xs bg-slate-700/50 px-2.5 py-1.5 rounded text-slate-300 border border-slate-600/50" data-astro-cid-rpcdpgfo> ${service} </span>`)} ${card.services.length > 4 && renderTemplate`<span class="text-xs text-slate-500 px-2 py-1" data-astro-cid-rpcdpgfo>...</span>`} </div> </div>`} <!-- Store Products (Tienda) Section --> ${card.storeProducts && card.storeProducts.length > 0 && renderTemplate`<div class="mt-auto pt-5 border-t border-slate-700/50 mb-4" data-astro-cid-rpcdpgfo> <div class="flex items-center gap-2 mb-3" data-astro-cid-rpcdpgfo> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-rpcdpgfo> <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 001-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" data-astro-cid-rpcdpgfo></path> </svg> <span class="text-base font-semibold text-slate-400" data-astro-cid-rpcdpgfo>Tienda</span> </div> <ul class="grid grid-cols-2 gap-x-2 gap-y-1.5" data-astro-cid-rpcdpgfo> ${card.storeProducts.slice(0, 6).map((product) => renderTemplate`<li class="text-sm text-slate-500 flex items-start gap-2 leading-tight" data-astro-cid-rpcdpgfo> <span class="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 flex-shrink-0" data-astro-cid-rpcdpgfo></span> <span data-astro-cid-rpcdpgfo>${product}</span> </li>`)} </ul> <div class="text-xs text-slate-500 mt-3 italic flex items-center gap-1 opacity-70" data-astro-cid-rpcdpgfo> <span data-astro-cid-rpcdpgfo>+ Cursos y servicios...</span> </div> </div>`} <!-- Category-specific Action Button --> ${card.id === "diseno" && renderTemplate`<a href="/diseno" class="w-full mt-2 py-2.5 px-4 bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 group-hover:shadow-md" data-astro-cid-rpcdpgfo> <span data-astro-cid-rpcdpgfo>Mira nuestra galería y proyectos</span> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-rpcdpgfo> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" data-astro-cid-rpcdpgfo></path> </svg> </a>`} ${card.id === "desarrollo" && renderTemplate`<a href="/desarrollo" class="w-full mt-2 py-2.5 px-4 bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 group-hover:shadow-md" data-astro-cid-rpcdpgfo> <span data-astro-cid-rpcdpgfo>Stack tech, herramientas open source</span> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-rpcdpgfo> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" data-astro-cid-rpcdpgfo></path> </svg> </a>`} ${card.id === "contabilidad" && renderTemplate`<a href="/contable" class="w-full mt-2 py-2.5 px-4 bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 group-hover:shadow-md" data-astro-cid-rpcdpgfo> <span data-astro-cid-rpcdpgfo>Servicios fiscales y contables</span> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-rpcdpgfo> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" data-astro-cid-rpcdpgfo></path> </svg> </a>`} ${card.id === "comprar-vender" && renderTemplate`<a href="/ecommerce" class="w-full mt-2 py-2.5 px-4 bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 group-hover:shadow-md" data-astro-cid-rpcdpgfo> <span data-astro-cid-rpcdpgfo>Tienda y productos personalizados</span> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-rpcdpgfo> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" data-astro-cid-rpcdpgfo></path> </svg> </a>`} ${card.id === "emprender" && renderTemplate`<a href="/marketing" class="w-full mt-2 py-2.5 px-4 bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 group-hover:shadow-md" data-astro-cid-rpcdpgfo> <span data-astro-cid-rpcdpgfo>Marketing y estrategia de negocio</span> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-rpcdpgfo> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" data-astro-cid-rpcdpgfo></path> </svg> </a>`} ${card.id === "cursos" && renderTemplate`<a href="/cursos" class="w-full mt-2 py-2.5 px-4 bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 group-hover:shadow-md" data-astro-cid-rpcdpgfo> <span data-astro-cid-rpcdpgfo>Certificaciones y cursos profesionales</span> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-rpcdpgfo> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" data-astro-cid-rpcdpgfo></path> </svg> </a>`} ${card.id === "capacitacion" && renderTemplate`<a href="/capacitacion" class="w-full mt-2 py-2.5 px-4 bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 group-hover:shadow-md" data-astro-cid-rpcdpgfo> <span data-astro-cid-rpcdpgfo>Capacitación empresarial y de equipos</span> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-rpcdpgfo> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" data-astro-cid-rpcdpgfo></path> </svg> </a>`} </div> </div> </div>`;
  })} </div> <!-- Streaming Unificado Panel (Twitch & Kick) --> <div class="mb-20" data-astro-cid-rpcdpgfo> <div class="text-center mb-10" data-astro-cid-rpcdpgfo> <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white" data-astro-cid-rpcdpgfo>
Streaming en Vivo
</h2> <p class="text-xl text-slate-300" data-astro-cid-rpcdpgfo>Conéctate con nosotros en tiempo real</p> </div> <div class="w-full max-w-6xl mx-auto" data-astro-cid-rpcdpgfo> <div class="relative overflow-hidden bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-3xl shadow-2xl" data-astro-cid-rpcdpgfo> <!-- Background Gradients --> <div class="absolute top-0 right-0 w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" data-astro-cid-rpcdpgfo></div> <div class="absolute bottom-0 left-0 w-[50%] h-[50%] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" data-astro-cid-rpcdpgfo></div> <div class="relative z-10 p-6 md:p-8" data-astro-cid-rpcdpgfo> <!-- Platform Selector Tabs --> <div class="flex flex-wrap gap-2 mb-6 justify-center" data-astro-cid-rpcdpgfo> <button id="twitch-tab" class="platform-tab active px-4 py-2 bg-[#9146FF] text-white rounded-lg font-semibold transition-all hover:shadow-[0_0_20px_rgba(145,70,255,0.3)]" onclick="showPlatform('twitch')" data-astro-cid-rpcdpgfo> <svg class="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-rpcdpgfo> <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h2.998L22.285 11.571V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" data-astro-cid-rpcdpgfo></path> </svg>
Twitch
</button> <button id="kick-tab" class="platform-tab px-4 py-2 bg-slate-700 text-white rounded-lg font-semibold transition-all hover:bg-[#53FC18]" onclick="showPlatform('kick')" data-astro-cid-rpcdpgfo> <svg class="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-rpcdpgfo> <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.88-2.91 6.31-1.48 1.18-3.3 1.73-5.16 1.63-2.14-.16-4.11-1.04-5.62-2.39-1.51-1.36-2.5-3.35-2.61-5.38-.17-3.13 1.41-6.19 3.96-8.08.31-.23.63-.44.97-.61.64-.32 1.35-.55 2.07-.63v4.08c-.75.14-1.48.51-2.03 1.05-.63.63-.94 1.54-.86 2.45.1 1.02.66 1.95 1.5 2.55.77.55 1.77.78 2.72.63.92-.15 1.75-.63 2.3-1.37.56-.75.86-1.67.86-2.61V.02z" data-astro-cid-rpcdpgfo></path> </svg>
Kick
</button> </div> <!-- Streaming Content Area --> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-astro-cid-rpcdpgfo> <!-- Main Stream Display --> <div class="lg:col-span-2" data-astro-cid-rpcdpgfo> <div class="relative aspect-video bg-black rounded-xl overflow-hidden border border-slate-700" data-astro-cid-rpcdpgfo> <!-- Twitch Stream --> <div id="twitch-content" class="stream-content" data-astro-cid-rpcdpgfo> <iframe height="100%" width="100%" allowfullscreen class="absolute inset-0 w-full h-full" src="https://player.twitch.tv/?channel=insanonetwork&parent=localhost&parent=127.0.0.1&parent=insano.network&parent=insanonetwork.com&muted=false&autoplay=true" data-astro-cid-rpcdpgfo></iframe> </div> <!-- Kick Stream --> <div id="kick-content" class="stream-content hidden" data-astro-cid-rpcdpgfo> <iframe height="100%" width="100%" allowfullscreen class="absolute inset-0 w-full h-full" src="https://player.kick.com/insanonetwork?muted=false&autoplay=true" data-astro-cid-rpcdpgfo></iframe> </div> </div> </div> <!-- Chat & Info Panel --> <div class="lg:col-span-1" data-astro-cid-rpcdpgfo> <div class="bg-slate-900/50 rounded-xl p-4 border border-slate-700 h-full" data-astro-cid-rpcdpgfo> <h4 class="text-white font-semibold mb-4" data-astro-cid-rpcdpgfo>Chat & Info</h4> <!-- Live Status --> <div class="mb-4" data-astro-cid-rpcdpgfo> <div class="flex items-center gap-2 mb-2" data-astro-cid-rpcdpgfo> <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse" data-astro-cid-rpcdpgfo></span> <span class="text-green-400 text-sm font-semibold" data-astro-cid-rpcdpgfo>EN VIVO</span> </div> <p class="text-slate-300 text-sm" data-astro-cid-rpcdpgfo>Contenido en tiempo real</p> </div> <!-- Chat Placeholder --> <div class="bg-slate-800 rounded-lg p-3 h-48 overflow-y-auto" data-astro-cid-rpcdpgfo> <div class="space-y-2 text-xs" data-astro-cid-rpcdpgfo> <div class="text-slate-400" data-astro-cid-rpcdpgfo> <span class="text-purple-400 font-semibold" data-astro-cid-rpcdpgfo>Usuario:</span> ¡Hola! ¿Qué tal el stream?
</div> <div class="text-slate-400" data-astro-cid-rpcdpgfo> <span class="text-blue-400 font-semibold" data-astro-cid-rpcdpgfo>Visitante:</span> Muy bueno contenido 👍
</div> <div class="text-slate-400" data-astro-cid-rpcdpgfo> <span class="text-green-400 font-semibold" data-astro-cid-rpcdpgfo>Fans:</span> Sigan a @insanonetwork!
</div> </div> </div> <!-- Platform Links --> <div class="mt-4 space-y-2" data-astro-cid-rpcdpgfo> <a href="https://www.twitch.tv/insanonetwork" target="_blank" class="block w-full px-3 py-2 bg-[#9146FF] hover:bg-[#772ce8] text-white text-sm rounded-lg transition-colors text-center" data-astro-cid-rpcdpgfo>
Ver en Twitch
</a> <a href="https://kick.com/insanonetwork" target="_blank" class="block w-full px-3 py-2 bg-[#53FC18] hover:bg-[#45E0A0] text-white text-sm rounded-lg transition-colors text-center" data-astro-cid-rpcdpgfo>
Ver en Kick
</a> </div> </div> </div> </div> </div> </div> </div> </div> </div> </section>  ${renderScript($$result, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/home/1homeExperiencia/HomeExperiencia.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/home/1homeExperiencia/HomeExperiencia.astro", void 0);

const $$Astro$1 = createAstro("https://InsanoNetwork.com");
const $$SliderImg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SliderImg;
  const { imagenes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="slider" data-astro-cid-chu6qkcs> ${imagenes && imagenes.length > 0 ? imagenes.map((img, index) => renderTemplate`<img${addAttribute(img.src, "src")}${addAttribute(`Slider ${index + 1}`, "alt")} data-astro-cid-chu6qkcs>`) : renderTemplate`<p data-astro-cid-chu6qkcs>No images</p>`} </div> ${renderScript($$result, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/SliderImg.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/SliderImg.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ScrollPrompt = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- \nColors implemented map:\nmoss-dark -> #485b39\nmoss -> #5a7247\nbg-paper -> #f5f3ef (not used as main bg, but text contrast)\n-->", `<div id="scroll-prompt" class="fixed shadow-sm lg:bottom-10 bottom-60 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-1000 opacity-100 pointer-events-none"> <div class="flex flex-col items-center animate-bounce"> <span class="text-xs shadow-sm font-sans text-yellow-500 opacity-80 mb-2 font-bold uppercase tracking-widest">Scroll Abajo</span> <div class="w-6 h-10 shadow-sm rounded-full border-2 border-yellow-500 border-opacity-50 flex justify-center p-1"> <div class="w-1 h-2 shadow-sm bg-yellow-500 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div> </div> </div> </div> <script>
    // Use an IIFE or unique function name to avoid collisions if imported multiple times
    (function () {
        const scrollPrompt = document.getElementById("scroll-prompt");

        function handleScroll() {
            if (!scrollPrompt) return;

            // Robust check
            const scrollPosition =
                window.scrollY ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
            const isAtTop = scrollPosition < 100;

            if (isAtTop) {
                scrollPrompt.classList.remove("opacity-0");
                scrollPrompt.classList.add("opacity-100");
                scrollPrompt.style.visibility = "visible";
            } else {
                scrollPrompt.classList.remove("opacity-100");
                scrollPrompt.classList.add("opacity-0");
                // Hide visibility after transition to ensure it doesn't block anything, though it is pointer-events-none
                // We can use a timeout or just let opacity handle it.
                // Since it is pointer-events-none, opacity 0 is fine visually.
            }
        }

        // Initial check
        handleScroll();

        // Listen for scroll events
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        window.addEventListener("DOMContentLoaded", handleScroll);

        // Safety check
        setInterval(handleScroll, 1000);
    })();
<\/script>`])), maybeRenderHead());
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/home/ScrollPrompt.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$HeaderTitleIndex = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div id="hero-title" class="bg-black/40 backdrop-blur-sm border-b border-white/20 shadow-2xl fixed bottom-0 left-0 w-full p-2 md:p-6 z-45 text-right pointer-events-none transition-opacity duration-500"> <h1 class="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-tight uppercase tracking-tighter drop-shadow-lg">\nInsano<br>Network\n</h1> <h2 class="text-2xl md:text-4xl text-[#ffd600] font-bold mt-4 max-w-4xl ml-auto drop-shadow-md">\nDise\xF1a, Desarrolla y Vende tus Ideas.\n</h2> ', ' </div> <script>\n        function handleHeroScrollInline() {\n        const heroTitle = document.getElementById("hero-title");\n        if (!heroTitle) return;\n        \n        const scrollPosition =\n        window.scrollY ||\n        document.documentElement.scrollTop ||\n        document.body.scrollTop ||\n        0;\n        \n        const windowHeight = window.innerHeight;\n        // Fade out quickly - completely gone by 30% of viewport height scroll\n        const fadeThreshold = windowHeight * 0.45;\n        const opacity = Math.max(0, 1 - scrollPosition / fadeThreshold);\n        \n        heroTitle.style.opacity = opacity.toString();\n        \n        if (opacity <= 0.05) {\n            heroTitle.style.visibility = "hidden";\n        } else {\n            heroTitle.style.visibility = "visible";\n        }\n        }\n        \n        window.addEventListener("scroll", handleHeroScrollInline);\n        window.addEventListener("resize", handleHeroScrollInline);\n        window.addEventListener("DOMContentLoaded", handleHeroScrollInline);\n        \n        // Also interval check for safety in case of layout shifts\n        setInterval(handleHeroScrollInline, 500);\n        \n        // Immediate check\n        handleHeroScrollInline();\n    <\/script>'])), maybeRenderHead(), renderComponent($$result, "ScrollPrompt", $$ScrollPrompt, {}));
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/home/HeaderTitleIndex.astro", void 0);

const courseVideos = [{"id":"dQw4w9WgXcQ","title":"Programación con IA para Principiantes 2026","description":"Aprende a programar utilizando las últimas herramientas de Inteligencia Artificial","duration":"4:30:15","thumbnail":"https://img.youtube.com/vi/dQw4w9WgXcQ/default.jpg"},{"id":"jNQXAC9IVRw","title":"Introducción a Python con IA","description":"Curso completo de Python para principiantes","duration":"3:45:22","thumbnail":"https://img.youtube.com/vi/jNQXAC9IVRw/default.jpg"},{"id":"9bZkp7q19f0","title":"Machine Learning Básico","description":"Conceptos fundamentales de Machine Learning","duration":"2:30:45","thumbnail":"https://img.youtube.com/vi/9bZkp7q19f0/default.jpg"},{"id":"hT_nvWreIhg","title":"Desarrollo Web con IA","description":"Crear sitios web usando herramientas de IA","duration":"1:55:30","thumbnail":"https://img.youtube.com/vi/hT_nvWreIhg/default.jpg"},{"id":"kJQP7kiw5Fk","title":"Análisis de Datos con Python","description":"Curso de análisis de datos para principiantes","duration":"3:15:20","thumbnail":"https://img.youtube.com/vi/kJQP7kiw5Fk/default.jpg"},{"id":"L_Guz73e6fw","title":"JavaScript Moderno 2026","description":"Aprende JavaScript con las últimas características","duration":"2:45:10","thumbnail":"https://img.youtube.com/vi/L_Guz73e6fw/default.jpg"}];
const youtubeData = {
  courseVideos};

const $$YouTubeEducation = createComponent(($$result, $$props, $$slots) => {
  const playlistData = youtubeData;
  return renderTemplate`<!-- YouTube Education Section -->${maybeRenderHead()}<section id="youtube-education-section" class="py-12 mb-10" data-astro-cid-z2i3zkzz> <div class="container mx-auto p-4 max-w-7xl" data-astro-cid-z2i3zkzz> <div class="text-center mb-10" data-astro-cid-z2i3zkzz> <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white" data-astro-cid-z2i3zkzz>
Biblioteca de Videos y Cursos Gratis
</h2> <p class="text-xl text-slate-300" data-astro-cid-z2i3zkzz>Aprende programación, IA y más con nuestros cursos gratuitos</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-astro-cid-z2i3zkzz> <!-- Featured Course --> <div class="lg:col-span-2" data-astro-cid-z2i3zkzz> <div class="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-xl overflow-hidden" data-astro-cid-z2i3zkzz> <div class="relative aspect-video bg-black" data-astro-cid-z2i3zkzz> <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4Ojg5y6Oq3Y?autoplay=0&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="absolute inset-0 w-full h-full" data-astro-cid-z2i3zkzz></iframe> </div> <div class="p-6" data-astro-cid-z2i3zkzz> <div class="flex items-center gap-3 mb-4" data-astro-cid-z2i3zkzz> <span class="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full" data-astro-cid-z2i3zkzz>
DESTACADO
</span> <span class="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full" data-astro-cid-z2i3zkzz>
GRATIS
</span> </div> <h3 class="text-2xl font-bold text-white mb-3" data-astro-cid-z2i3zkzz>
Programación con IA para Principiantes 2026
</h3> <p class="text-slate-300 mb-4" data-astro-cid-z2i3zkzz>
Aprende a programar utilizando las últimas herramientas de Inteligencia Artificial. 
              Curso completo para principiantes sin experiencia previa.
</p> <div class="flex items-center gap-4 text-sm text-slate-400 mb-4" data-astro-cid-z2i3zkzz> <div class="flex items-center gap-1" data-astro-cid-z2i3zkzz> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-z2i3zkzz> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-astro-cid-z2i3zkzz></path> </svg> <span data-astro-cid-z2i3zkzz>12 lecciones</span> </div> <div class="flex items-center gap-1" data-astro-cid-z2i3zkzz> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-z2i3zkzz> <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" data-astro-cid-z2i3zkzz></path> </svg> <span data-astro-cid-z2i3zkzz>4.5 horas</span> </div> <div class="flex items-center gap-1" data-astro-cid-z2i3zkzz> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-z2i3zkzz> <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" data-astro-cid-z2i3zkzz></path> </svg> <span data-astro-cid-z2i3zkzz>Actualizado 2026</span> </div> </div> <a href="https://www.youtube.com/watch?v=4Ojg5y6Oq3Y" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition-colors" data-astro-cid-z2i3zkzz> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-z2i3zkzz> <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" data-astro-cid-z2i3zkzz></path> </svg>
Ver Curso Completo
</a> </div> </div> </div> <!-- Course List --> <div class="lg:col-span-1" data-astro-cid-z2i3zkzz> <div class="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-xl p-6" data-astro-cid-z2i3zkzz> <h4 class="text-xl font-bold text-white mb-4" data-astro-cid-z2i3zkzz>Más Cursos Gratuitos</h4> <div class="space-y-4 max-h-96 overflow-y-auto" data-astro-cid-z2i3zkzz> ${playlistData.courseVideos.slice(0, 6).map((video, index) => renderTemplate`<div class="flex gap-3 p-3 bg-slate-900/50 rounded-lg hover:bg-slate-900/70 transition-colors cursor-pointer" data-astro-cid-z2i3zkzz> <img${addAttribute(`https://img.youtube.com/vi/${video.id}/default.jpg`, "src")}${addAttribute(video.title, "alt")} class="w-20 h-14 rounded object-cover flex-shrink-0" data-astro-cid-z2i3zkzz> <div class="flex-1 min-w-0" data-astro-cid-z2i3zkzz> <h5 class="text-white text-sm font-medium line-clamp-2" data-astro-cid-z2i3zkzz>${video.title}</h5> <p class="text-slate-400 text-xs mt-1 line-clamp-2" data-astro-cid-z2i3zkzz>${video.description}</p> <div class="flex items-center gap-2 mt-2" data-astro-cid-z2i3zkzz> <span class="text-xs text-slate-500" data-astro-cid-z2i3zkzz>${video.duration || "--:--"}</span> <span class="text-xs text-green-400" data-astro-cid-z2i3zkzz>Gratis</span> </div> </div> </div>`)} </div> <a href="https://www.youtube.com/@insanonetwork/videos" target="_blank" class="block w-full mt-4 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-center rounded-lg transition-colors" data-astro-cid-z2i3zkzz>
Ver Todos los Videos
</a> </div> </div> </div> <!-- Course Categories --> <div class="mt-12" data-astro-cid-z2i3zkzz> <h3 class="text-2xl font-bold text-white mb-6 text-center" data-astro-cid-z2i3zkzz>Categorías de Cursos</h3> <div class="grid grid-cols-2 md:grid-cols-4 gap-4" data-astro-cid-z2i3zkzz> <div class="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-600/30 rounded-lg p-4 text-center hover:from-blue-600/30 hover:to-blue-800/30 transition-all" data-astro-cid-z2i3zkzz> <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3" data-astro-cid-z2i3zkzz> <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-z2i3zkzz> <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" data-astro-cid-z2i3zkzz></path> </svg> </div> <h4 class="text-white font-semibold" data-astro-cid-z2i3zkzz>Programación</h4> <p class="text-slate-300 text-sm mt-1" data-astro-cid-z2i3zkzz>Python, JavaScript, IA</p> </div> <div class="bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-600/30 rounded-lg p-4 text-center hover:from-green-600/30 hover:to-green-800/30 transition-all" data-astro-cid-z2i3zkzz> <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3" data-astro-cid-z2i3zkzz> <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-z2i3zkzz> <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" data-astro-cid-z2i3zkzz></path> </svg> </div> <h4 class="text-white font-semibold" data-astro-cid-z2i3zkzz>Datos</h4> <p class="text-slate-300 text-sm mt-1" data-astro-cid-z2i3zkzz>Excel, SQL, Análisis</p> </div> <div class="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-600/30 rounded-lg p-4 text-center hover:from-purple-600/30 hover:to-purple-800/30 transition-all" data-astro-cid-z2i3zkzz> <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3" data-astro-cid-z2i3zkzz> <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-z2i3zkzz> <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-astro-cid-z2i3zkzz></path> </svg> </div> <h4 class="text-white font-semibold" data-astro-cid-z2i3zkzz>Diseño</h4> <p class="text-slate-300 text-sm mt-1" data-astro-cid-z2i3zkzz>UI/UX, Gráfico, Web</p> </div> <div class="bg-gradient-to-br from-red-600/20 to-red-800/20 border border-red-600/30 rounded-lg p-4 text-center hover:from-red-600/30 hover:to-red-800/30 transition-all" data-astro-cid-z2i3zkzz> <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3" data-astro-cid-z2i3zkzz> <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-z2i3zkzz> <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" data-astro-cid-z2i3zkzz></path> </svg> </div> <h4 class="text-white font-semibold" data-astro-cid-z2i3zkzz>Marketing</h4> <p class="text-slate-300 text-sm mt-1" data-astro-cid-z2i3zkzz>Digital, Redes, SEO</p> </div> </div> </div> </div> </section> `;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/home/YouTubeEducation.astro", void 0);

const content1 = new Proxy({"src":"/_astro/1.CufzJBKT.png","width":1465,"height":1419,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/assets/SlideImages/1.png";
							}
							
							return target[name];
						}
					});

const contentImage = new Proxy({"src":"/_astro/2.D0cNa6No.jpg","width":3333,"height":5333,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/assets/SlideImages/2.jpg";
							}
							
							return target[name];
						}
					});

const $$InstagramFeed = createComponent(($$result, $$props, $$slots) => {
  const posts = [
    {
      id: "instagram-1",
      image: contentImage.src,
      caption: "Dise\xF1o 3D e impresi\xF3n de alta calidad. \u{1F3A8}\u2728 #3dprinting #design",
      likes: 124,
      comments: 18
    },
    {
      id: "instagram-2",
      image: content1.src,
      caption: "Desarrollo de nuevas funcionalidades para Dashboard. \u{1F4BB}\u{1F680}",
      likes: 89,
      comments: 5
    },
    {
      id: "instagram-3",
      image: content3.src,
      caption: "Shellby en proceso. Personajes \xFAnicos. \u{1F422}\u{1F525} #art #character",
      likes: 245,
      comments: 42
    },
    {
      id: "instagram-4",
      image: content5.src,
      caption: "Explorando nuevas formas y geometr\xEDas. \u{1F9CA}",
      likes: 156,
      comments: 21
    },
    {
      id: "instagram-5",
      image: content4.src,
      caption: "Decoraci\xF3n moderna para tu espacio. \u{1F33B}",
      likes: 310,
      comments: 55
    },
    {
      id: "instagram-6",
      image: contentImage.src,
      // Reusing to fill grid
      caption: "Prototipado r\xE1pido en acci\xF3n. \u26A1",
      likes: 198,
      comments: 33
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="instagram-feed" class="social-media__instagram-feed"> <div class="social-media__instagram-feed--container bg-gray-900 rounded-xl p-6 h-full flex flex-col"> <!-- Header --> <div class="flex items-center justify-between mb-6"> <div class="flex items-center gap-3"> <div class="w-12 h-12 p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"> <div class="w-full h-full rounded-full bg-gray-900 flex items-center justify-center"> <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg> </div> </div> <div> <h3 class="font-bold text-white text-lg leading-none">
@InsanoNetwork
</h3> <span class="text-xs text-pink-400 font-medium">Instagram</span> </div> </div> <a href="https://instagram.com/InsanoNetwork" target="_blank" class="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold text-white transition-colors">
Ver perfil
</a> </div> <!-- Gallery Grid --> <div class="grid grid-cols-3 gap-2 mb-6 flex-grow"> ${posts.map((post) => renderTemplate`<div class="social-media__post"> <img${addAttribute(post.image, "src")} alt="Instagram Post" class="w-full h-full object-cover transition-transform duration-500"> <div class="social-media__post-overlay"> <p class="social-media__post-caption"> ${post.caption} </p> <div class="social-media__post-stats"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path> </svg> ${post.likes} </div> </div> </div>`)} </div> <div class="text-center pt-2 border-t border-gray-800"> <p class="text-sm text-gray-400">
Diseñamos y desarrollamos soluciones digitales.
</p> </div> </div> </div> `;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/home/SocialMedia/instagram/InstagramFeed.astro", void 0);

const $$FacebookPanel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-gradient-to-r from-blue-600 to-blue-800 p-1 rounded-2xl shadow-xl h-full"> <div class="bg-gray-900 rounded-xl p-6 h-full flex flex-col"> <!-- Header --> <div class="flex items-center gap-3 mb-6"> <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0"> <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg> </div> <div> <h3 class="font-bold text-white text-lg">Insano Network</h3> <div class="flex items-center gap-2 text-xs text-gray-400"> <span>@InsanoNetwork</span> <span>•</span> <span>Hace 2 h</span> </div> </div> </div> <!-- Latest Post Content --> <div class="flex-grow bg-gray-800/50 rounded-xl p-4 mb-6 border border-gray-700/50"> <p class="text-gray-200 text-sm mb-4 leading-relaxed">
¡Estamos emocionados de anunciar nuestra nueva plataforma de
                cursos! 🚀
<br><br>
Aprende desarrollo web, diseño y marketing digital con expertos de
                la industria. Únete a nuestra comunidad hoy mismo.
<span class="block mt-2 text-blue-400">#WebDev #Desarrollo #CursosOnline</span> </p> <div class="rounded-lg overflow-hidden h-40 bg-gray-700"> <img${addAttribute(contentImage.src, "src")} alt="Post" class="w-full h-full object-cover"> </div> <div class="flex items-center gap-6 mt-4 pt-3 border-t border-gray-700 text-gray-400 text-sm"> <div class="flex items-center gap-1 hover:text-blue-400 cursor-pointer transition-colors"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg> <span>45</span> </div> <div class="flex items-center gap-1 hover:text-blue-400 cursor-pointer transition-colors"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg> <span>12</span> </div> <div class="flex items-center gap-1 hover:text-blue-400 cursor-pointer transition-colors ml-auto"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg> <span>Compartir</span> </div> </div> </div> <!-- Actions --> <a href="#" class="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-white text-center transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-900/20"> <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-1.07 3.97-2.9 5.4z"></path></svg>
Unirse al Grupo
</a> </div> </div>`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/home/SocialMedia/facebook/FacebookPanel.astro", void 0);

const $$TwitterUpdates = createComponent(($$result, $$props, $$slots) => {
  const updates = [
    {
      id: 1,
      text: "\xA1Nuevo lanzamiento de software! \u{1F680} Hemos mejorado el rendimiento un 300%.",
      date: "2h",
      likes: 45,
      retweets: 12
    },
    {
      id: 2,
      text: "\xBFSab\xEDas que la optimizaci\xF3n web es clave para el SEO? Lee nuestro \xFAltimo hilo. \u{1F9F5}\u{1F447}",
      date: "5h",
      likes: 89,
      retweets: 34
    },
    {
      id: 3,
      text: "Gran sesi\xF3n de coding hoy con el equipo. Se vienen cosas grandes para Insano Network. \u{1F525}",
      date: "1d",
      likes: 120,
      retweets: 15
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-gradient-to-br from-gray-700 to-black p-1 rounded-2xl shadow-xl h-full"> <div class="bg-gray-900 rounded-xl p-6 h-full flex flex-col"> <!-- Header --> <div class="flex items-center justify-between mb-6"> <div class="flex items-center gap-3"> <div class="w-12 h-12 bg-black border border-gray-700 rounded-full flex items-center justify-center text-white flex-shrink-0"> <!-- X Logo --> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg> </div> <div> <h3 class="font-bold text-white text-lg">Insano Network</h3> <span class="text-xs text-gray-400">@InsanoNet</span> </div> </div> <a href="https://twitter.com/InsanoNet" target="_blank" class="text-gray-400 hover:text-white transition-colors"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg> </a> </div> <!-- Timeline --> <div class="flex-grow space-y-4 mb-4"> ${updates.map((tweet) => renderTemplate`<div class="border-b border-gray-800 pb-4 last:border-0 last:pb-0"> <p class="text-gray-300 text-sm mb-2">${tweet.text}</p> <div class="flex items-center gap-6 text-xs text-gray-500"> <span>${tweet.date}</span> <span class="flex items-center gap-1 hover:text-green-500 transition-colors cursor-pointer"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path> </svg> ${tweet.retweets} </span> <span class="flex items-center gap-1 hover:text-pink-500 transition-colors cursor-pointer"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path> </svg> ${tweet.likes} </span> </div> </div>`)} </div> </div> </div>`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/home/SocialMedia/twitter/TwitterUpdates.astro", void 0);

const $$TikTokFeed = createComponent(($$result, $$props, $$slots) => {
  const videos = [
    {
      id: 1,
      views: "12K",
      cover: "https://images.unsplash.com/photo-1542204637-e67bc7d41e48?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      views: "8.5K",
      cover: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      views: "25K",
      cover: "https://images.unsplash.com/photo-1592286915354-2067566236b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-gradient-to-r from-[#00f2ea] to-[#ff0050] p-1 rounded-2xl shadow-xl h-full"> <div class="bg-gray-900 rounded-xl p-6 h-full flex flex-col"> <!-- Header --> <div class="flex items-center gap-3 mb-6"> <div class="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white flex-shrink-0 relative overflow-hidden"> <!-- TikTok Icon --> <svg class="w-7 h-7 z-10 relative" style="filter: drop-shadow(2px 2px 0px rgba(255,0,80,0.5)) drop-shadow(-2px -2px 0px rgba(0,242,234,0.5));" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.88-2.91 6.31-1.48 1.18-3.3 1.73-5.16 1.63-2.14-.16-4.11-1.04-5.62-2.39-1.51-1.36-2.5-3.35-2.61-5.38-.17-3.13 1.41-6.19 3.96-8.08.31-.23.63-.44.97-.61.64-.32 1.35-.55 2.07-.63v4.08c-.75.14-1.48.51-2.03 1.05-.63.63-.94 1.54-.86 2.45.1 1.02.66 1.95 1.5 2.55.77.55 1.77.78 2.72.63.92-.15 1.75-.63 2.3-1.37.56-.75.86-1.67.86-2.61V.02z"></path></svg> </div> <div> <h3 class="font-bold text-white text-lg">Insano Network</h3> <span class="text-xs text-gray-400">@InsanoNetwork</span> </div> </div> <!-- Featured Videos --> <div class="grid grid-cols-3 gap-3 flex-grow"> ${videos.map((video) => renderTemplate`<div class="relative group aspect-[9/16] rounded-lg overflow-hidden bg-gray-800 cursor-pointer"> <img${addAttribute(video.cover, "src")} alt="TikTok" class="w-full h-full object-cover group-hover:scale-105 transition-transform"> <div class="absolute bottom-2 left-2 flex items-center gap-1 text-white text-xs drop-shadow-md font-bold"> <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"> <path d="M8 5v14l11-7z"></path> </svg> ${video.views} </div> <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div> </div>`)} </div> <a href="https://tiktok.com/@InsanoNetwork" target="_blank" class="mt-4 w-full py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm text-center font-medium transition-colors">
Ver más en TikTok
</a> </div> </div>`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/home/SocialMedia/tiktok/TikTokFeed.astro", void 0);

const $$SocialMediaSlider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Social Media Slider Section -->${maybeRenderHead()}<section id="social-media-slider-section" class="py-12 mb-10" data-astro-cid-nnwkzj66> <div class="container mx-auto p-4 max-w-7xl" data-astro-cid-nnwkzj66> <div class="text-center mb-10" data-astro-cid-nnwkzj66> <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white" data-astro-cid-nnwkzj66>
Síguenos en Redes Sociales
</h2> <p class="text-xl text-slate-300" data-astro-cid-nnwkzj66>Conecta con nosotros en todas nuestras plataformas</p> </div> <!-- Social Media Platform Selector --> <div class="flex flex-wrap justify-center gap-3 mb-8" data-astro-cid-nnwkzj66> <button id="instagram-slider-tab" class="social-tab active px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold transition-all hover:shadow-lg" onclick="showSocialPlatform('instagram')" data-astro-cid-nnwkzj66> <svg class="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-nnwkzj66> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" data-astro-cid-nnwkzj66></path> </svg>
Instagram
</button> <button id="facebook-slider-tab" class="social-tab px-4 py-2 bg-slate-700 text-white rounded-lg font-semibold transition-all hover:bg-blue-600" onclick="showSocialPlatform('facebook')" data-astro-cid-nnwkzj66> <svg class="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-nnwkzj66> <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" data-astro-cid-nnwkzj66></path> </svg>
Facebook
</button> <button id="tiktok-slider-tab" class="social-tab px-4 py-2 bg-slate-700 text-white rounded-lg font-semibold transition-all hover:bg-black" onclick="showSocialPlatform('tiktok')" data-astro-cid-nnwkzj66> <svg class="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-nnwkzj66> <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.88-2.91 6.31-1.48 1.18-3.3 1.73-5.16 1.63-2.14-.16-4.11-1.04-5.62-2.39-1.51-1.36-2.5-3.35-2.61-5.38-.17-3.13 1.41-6.19 3.96-8.08.31-.23.63-.44.97-.61.64-.32 1.35-.55 2.07-.63v4.08c-.75.14-1.48.51-2.03 1.05-.63.63-.94 1.54-.86 2.45.1 1.02.66 1.95 1.5 2.55.77.55 1.77.78 2.72.63.92-.15 1.75-.63 2.3-1.37.56-.75.86-1.67.86-2.61V.02z" data-astro-cid-nnwkzj66></path> </svg>
TikTok
</button> <button id="twitter-slider-tab" class="social-tab px-4 py-2 bg-slate-700 text-white rounded-lg font-semibold transition-all hover:bg-sky-600" onclick="showSocialPlatform('twitter')" data-astro-cid-nnwkzj66> <svg class="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-nnwkzj66> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-astro-cid-nnwkzj66></path> </svg>
X/Twitter
</button> </div> <!-- Social Media Content Slider --> <div class="relative bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-3xl overflow-hidden" data-astro-cid-nnwkzj66> <!-- Background Gradients --> <div class="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-[100px] pointer-events-none" data-astro-cid-nnwkzj66></div> <div class="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-r from-blue-600/10 to-sky-600/10 rounded-full blur-[100px] pointer-events-none" data-astro-cid-nnwkzj66></div> <div class="relative z-10 p-6 md:p-8" data-astro-cid-nnwkzj66> <!-- Instagram Content --> <div id="instagram-slider-content" class="social-slider-content" data-astro-cid-nnwkzj66> ${renderComponent($$result, "InstagramFeed", $$InstagramFeed, { "data-astro-cid-nnwkzj66": true })} </div> <!-- Facebook Content --> <div id="facebook-slider-content" class="social-slider-content hidden" data-astro-cid-nnwkzj66> ${renderComponent($$result, "FacebookPanel", $$FacebookPanel, { "data-astro-cid-nnwkzj66": true })} </div> <!-- TikTok Content --> <div id="tiktok-slider-content" class="social-slider-content hidden" data-astro-cid-nnwkzj66> ${renderComponent($$result, "TikTokFeed", $$TikTokFeed, { "data-astro-cid-nnwkzj66": true })} </div> <!-- Twitter Content --> <div id="twitter-slider-content" class="social-slider-content hidden" data-astro-cid-nnwkzj66> ${renderComponent($$result, "TwitterUpdates", $$TwitterUpdates, { "data-astro-cid-nnwkzj66": true })} </div> </div> <!-- Slider Navigation --> <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20" data-astro-cid-nnwkzj66> <button onclick="previousSocialPlatform()" class="w-8 h-8 bg-slate-700/80 hover:bg-slate-600/80 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm" data-astro-cid-nnwkzj66> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-nnwkzj66> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-nnwkzj66></path> </svg> </button> <button onclick="nextSocialPlatform()" class="w-8 h-8 bg-slate-700/80 hover:bg-slate-600/80 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm" data-astro-cid-nnwkzj66> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-nnwkzj66> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-nnwkzj66></path> </svg> </button> </div> </div> <!-- Platform Links --> <div class="mt-8 flex flex-wrap justify-center gap-4" data-astro-cid-nnwkzj66> <a href="https://www.instagram.com/insanonetwork" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-sm rounded-lg transition-all" data-astro-cid-nnwkzj66> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-nnwkzj66> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" data-astro-cid-nnwkzj66></path> </svg>
@insanonetwork
</a> <a href="https://www.facebook.com/insanonetwork" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg transition-colors" data-astro-cid-nnwkzj66> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-nnwkzj66> <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" data-astro-cid-nnwkzj66></path> </svg>
insanonetwork
</a> <a href="https://www.tiktok.com/@insanonetwork" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-800 text-white text-sm rounded-lg transition-colors" data-astro-cid-nnwkzj66> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-nnwkzj66> <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.88-2.91 6.31-1.48 1.18-3.3 1.73-5.16 1.63-2.14-.16-4.11-1.04-5.62-2.39-1.51-1.36-2.5-3.35-2.61-5.38-.17-3.13 1.41-6.19 3.96-8.08.31-.23.63-.44.97-.61.64-.32 1.35-.55 2.07-.63v4.08c-.75.14-1.48.51-2.03 1.05-.63.63-.94 1.54-.86 2.45.1 1.02.66 1.95 1.5 2.55.77.55 1.77.78 2.72.63.92-.15 1.75-.63 2.3-1.37.56-.75.86-1.67.86-2.61V.02z" data-astro-cid-nnwkzj66></path> </svg>
@insanonetwork
</a> <a href="https://twitter.com/insanonetwork" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-sm rounded-lg transition-colors" data-astro-cid-nnwkzj66> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-nnwkzj66> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-astro-cid-nnwkzj66></path> </svg>
@insanonetwork
</a> </div> </div> </section> ${renderScript($$result, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/home/SocialMediaSlider.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/home/SocialMediaSlider.astro", void 0);

const products = [{"id":1,"name":"Paquete Emprendedor","category":"diseno","price":299,"description":"Te ayudamos con logo, estampado y diseño de marca para tu emprendimiento","stock":true,"features":["Diseño de logo","Estampado profesional","Asesoramiento de marca"]},{"id":2,"name":"Automatización de Negocio","category":"desarrollo","price":499,"description":"Software a medida y licencias para optimizar procesos empresariales","stock":true,"features":["Software personalizado","Licencias open source","Soporte técnico"]},{"id":3,"name":"Campaña de Marketing Digital","category":"marketing","price":399,"description":"Estrategia completa para generar ventas y posicionamiento","stock":true,"features":["Estrategia digital","Gestión de redes","Análisis de mercado"]},{"id":4,"name":"Contabilidad Corporativa","category":"contabilidad","price":199,"description":"Pon tus finanzas en orden con servicios contables y asesoría","stock":true,"features":["Contabilidad profesional","Declaración de impuestos","Servicios personales"]}];
const categories = [{"id":"diseno","name":"Diseño y Branding","description":"Servicios de diseño para emprendedores","icon":"brush"},{"id":"desarrollo","name":"Desarrollo y Sistemas","description":"Software y automatización para empresas","icon":"laptop"},{"id":"marketing","name":"Marketing Digital","description":"Campañas y estrategias para generar ventas","icon":"megaphone"},{"id":"contabilidad","name":"Contabilidad y Servicios","description":"Gestión financiera y servicios personales","icon":"calculator"}];
const shopData = {
  products,
  categories,
};

const $$ShopMinimal = createComponent(($$result, $$props, $$slots) => {
  const { products, categories } = shopData;
  categories.reduce((acc, category) => {
    acc[category.id] = products.filter(
      (product) => product.category === category.id
    );
    return acc;
  }, {});
  return renderTemplate`<!-- Shop Minimal Section -->${maybeRenderHead()}<section id="shop-minimal-section" class="py-12 mb-10" data-astro-cid-k4ebpzxq> <div class="container mx-auto p-4 max-w-7xl" data-astro-cid-k4ebpzxq> <div class="text-center mb-10" data-astro-cid-k4ebpzxq> <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white" data-astro-cid-k4ebpzxq>
Nuestros Servicios
</h2> <p class="text-xl text-slate-300" data-astro-cid-k4ebpzxq>
Soluciones completas para tu negocio o emprendimiento
</p> </div> <!-- 4 Main Service Blocks --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" data-astro-cid-k4ebpzxq> ${categories.map((category) => {
    const categoryProduct = products.find(
      (product) => product.category === category.id
    );
    return renderTemplate`<div class="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all group" data-astro-cid-k4ebpzxq> <div class="flex items-center gap-4 mb-6" data-astro-cid-k4ebpzxq> <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" data-astro-cid-k4ebpzxq> <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-k4ebpzxq> ${category.icon === "brush" && renderTemplate`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.5 1.5L5 17l5 5zm10.5-5l9 9 1.5-1.5-9-9z" data-astro-cid-k4ebpzxq></path>`} ${category.icon === "laptop" && renderTemplate`<path d="M20 18c1.1 0 1.99-.9 1.99-2V8c0-1.1-.9-2-2-2h-3c0-1.1-.9-2-2-2V4c0-1.1-.9-2-2-2h-3c0-1.1-.9-2-2-2v-2c0-1.1-.9-2-2-2z" data-astro-cid-k4ebpzxq></path>`} ${category.icon === "megaphone" && renderTemplate`<path d="M3 9v6h4l5 5v4h2v-4l5-5h4V9H3zm16 0L9 3l-2 2h7l-2-2 2 2 7 7-2-2h7l9 9z" data-astro-cid-k4ebpzxq></path>`} ${category.icon === "calculator" && renderTemplate`<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-3c0-1.1-.9-2-2-2V4c0-1.1-.9-2-2-2h3c1.1 0 2-.89 2-2v2c0 1.11.89 2 2 2h3c1.11 0 2-.89 2-2v-2c0-1.11-.89-2-2-2z" data-astro-cid-k4ebpzxq></path>`} </svg> </div> <div data-astro-cid-k4ebpzxq> <h3 class="text-2xl font-bold text-white mb-2" data-astro-cid-k4ebpzxq> ${category.name} </h3> <p class="text-slate-400 mb-4" data-astro-cid-k4ebpzxq>${category.description}</p> </div> </div> ${categoryProduct && renderTemplate`<div class="space-y-6" data-astro-cid-k4ebpzxq> <div class="bg-slate-900/50 rounded-xl p-6 border border-slate-700" data-astro-cid-k4ebpzxq> <div class="flex justify-between items-start mb-4" data-astro-cid-k4ebpzxq> <h4 class="text-xl font-bold text-white" data-astro-cid-k4ebpzxq> ${categoryProduct.name} </h4> <span class="text-2xl font-bold text-green-400" data-astro-cid-k4ebpzxq>
$${categoryProduct.price} </span> </div> <p class="text-slate-300 mb-4" data-astro-cid-k4ebpzxq> ${categoryProduct.description} </p> <div class="space-y-3 mb-6" data-astro-cid-k4ebpzxq> ${categoryProduct.features?.map((feature, index) => renderTemplate`<div class="flex items-center gap-3" data-astro-cid-k4ebpzxq> <div class="w-6 h-6 bg-green-600/20 rounded-full flex items-center justify-center" data-astro-cid-k4ebpzxq> <svg class="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-k4ebpzxq> <path d="M9 16.17L4.83 12l-4.17 4.17L6 12l6 6 6 6 1.41-1.41z" data-astro-cid-k4ebpzxq></path> </svg> </div> <span class="text-slate-300" data-astro-cid-k4ebpzxq>${feature}</span> </div>`)} </div> <div class="flex justify-between items-center" data-astro-cid-k4ebpzxq> <div class="flex items-center gap-2" data-astro-cid-k4ebpzxq> <span${addAttribute(`text-sm px-3 py-1 rounded-full ${categoryProduct.stock ? "bg-green-600/20 text-green-400" : "bg-red-600/20 text-red-400"}`, "class")} data-astro-cid-k4ebpzxq> ${categoryProduct.stock ? "Disponible" : "Agotado"} </span> <span class="text-slate-400 text-sm" data-astro-cid-k4ebpzxq>
Stock limitado
</span> </div> <button class="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25" data-astro-cid-k4ebpzxq>
Ir a la Tienda
</button> </div> </div> </div>`} </div>`;
  })} </div> <!-- Bottom CTA --> <div class="text-center mt-12" data-astro-cid-k4ebpzxq> <a href="#" class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25" data-astro-cid-k4ebpzxq> <span data-astro-cid-k4ebpzxq>Ver Todos los Servicios</span> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-k4ebpzxq> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5-5 5M5 12l5 5m0 0l-5-5m0 0l-5 5" data-astro-cid-k4ebpzxq></path> </svg> </a> </div> </div> </section> `;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/home/ShopMinimal.astro", void 0);

const $$Astro = createAstro("https://InsanoNetwork.com");
const $$PortafolioCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PortafolioCard;
  const { miembro } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"> <!-- Header --> <div class="bg-gradient-to-r from-indigo-500 to-purple-600 p-6"> <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-4 flex items-center justify-center"> <span class="text-white text-2xl font-bold"> ${miembro.nombre.charAt(0)}${miembro.apellido.charAt(0)} </span> </div> <h3 class="text-xl font-bold text-white text-center"> ${miembro.nombre} ${miembro.apellido} </h3> <p class="text-indigo-100 text-center mt-1">@${miembro.username}</p> </div> <!-- Content --> <div class="p-6"> <div class="text-center mb-6"> <p class="text-gray-600 dark:text-gray-300 mb-4">
Desarrollador Full Stack especializado en arquitectura de sistemas y desarrollo web moderno.
</p> <div class="flex flex-wrap gap-2 justify-center"> <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">.NET</span> <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Astro</span> <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">SQL</span> </div> </div> <!-- Social Links --> <div class="flex justify-center space-x-3 mb-6"> <a${addAttribute(miembro.redes.instagram, "href")} target="_blank" rel="noopener noreferrer" class="text-pink-600 hover:text-pink-700 transition-colors" aria-label="Instagram"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"></path> <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.79 4 4c0 2.209-1.79 4-4 4z"></path> <circle cx="18.406" cy="5.594" r="1.44"></circle> </svg> </a> <a${addAttribute(miembro.redes.facebook, "href")} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-700 transition-colors" aria-label="Facebook"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path> </svg> </a> <a${addAttribute(miembro.redes.whatsapp.replace("+", "https://wa.me/"), "href")} target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-700 transition-colors" aria-label="WhatsApp"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 9.885-5.335 9.885-11.893a11.842 11.842 0 00-3.48-8.413Z"></path> </svg> </a> </div> <!-- Action Button --> <div class="text-center"> <a${addAttribute(miembro.redes.web, "href")} class="inline-flex items-center justify-center w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
Ver Portafolio
<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> </div> </div>`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/PortafolioCard.astro", void 0);

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const equipo = [
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-j7pv25f6><header data-astro-cid-j7pv25f6><div class="container-slider lg:scale-200" data-astro-cid-j7pv25f6>${renderComponent($$result2, "SliderImg", $$SliderImg, { "imagenes": [ImgSlider, ImgSlider2], "data-astro-cid-j7pv25f6": true })}</div><!-- Header Title Section - Giant & Fixed -->${renderComponent($$result2, "HeaderTitleIndex", $$HeaderTitleIndex, { "data-astro-cid-j7pv25f6": true })}</header><!-- Seccion de Experiencia de Usuario -->${renderComponent($$result2, "HomeExperiencia", $$HomeExperiencia, { "data-astro-cid-j7pv25f6": true })}<!-- Seccion de Portafolio --><section class="py-12 px-4" data-astro-cid-j7pv25f6><div class="max-w-7xl mx-auto" data-astro-cid-j7pv25f6><h2 class="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-astro-cid-j7pv25f6>
Nuestro Equipo
</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-j7pv25f6>${equipo.map((miembro) => renderTemplate`${renderComponent($$result2, "PortafolioCard", $$PortafolioCard, { "miembro": miembro, "data-astro-cid-j7pv25f6": true })}`)}</div></div></section><!-- Section Herramientas Gallery -->${renderComponent($$result2, "ProjectGallery", $$ProjectGallery, { "data-astro-cid-j7pv25f6": true })}<!-- Seccion de Shop Minimal -->${renderComponent($$result2, "ShopMinimal", $$ShopMinimal, { "data-astro-cid-j7pv25f6": true })}<!-- YouTube Education Section -->${renderComponent($$result2, "YouTubeEducation", $$YouTubeEducation, { "data-astro-cid-j7pv25f6": true })}<!-- Social Media Slider Section -->${renderComponent($$result2, "SocialMediaSlider", $$SocialMediaSlider, { "data-astro-cid-j7pv25f6": true })}</main>` })}`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/index.astro", void 0);

const $$file = "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
