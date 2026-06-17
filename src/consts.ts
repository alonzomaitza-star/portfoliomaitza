// Configuración del sitio
export const SITE_TITLE = 'Insano Network Landing';
export const SITE_DESCRIPTION = 'Diseña, Desarrolla y Vende.';
export const SITE_URL = 'https://insanonetwork.com';
export const SITE_AUTHOR = 'Equipo Insano';

// Redes sociales
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/InsanoNetwork',
  github: 'https://github.com/InsanoNetwork',
  linkedin: 'https://linkedin.com/company/InsanoNetwork',
  instagram: 'https://instagram.com/InsanoNetwork',
  facebook: 'https://facebook.com/InsanoNetwork',
  youtube: 'https://youtube.com/InsanoNetwork',
  tiktok: 'https://tiktok.com/InsanoNetwork',
  whatsapp: 'https://whatsapp.com/+525516849340',
  telegram: 'https://telegram.com/+525516849340',
  discord: 'https://discord.gg/36cRDfKYds',
  twitch: 'https://twitch.tv/InsanoNetwork',
  kick: 'https://kick.com/InsanoNetwork',
};

// Configuración de metadatos
export const DEFAULT_OG_IMAGE = '/images/default.png';
export const FAVICON_SRC = '/favicon.ico';

// Configuración del blog
export const POSTS_PER_PAGE = 10;

// Configuración de SEO
export const SEO_CONFIG = {
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: SITE_TITLE,
  },
  twitter: {
    handle: '@InsanoNet',
    site: '@InsanoNet',
    cardType: 'summary_large_image',
  },
} as const;
