// Configuración del sitio
export const SITE_TITLE = 'Landing Insano';
export const SITE_DESCRIPTION = 'Soluciones web de alto rendimiento para tu negocio';
export const SITE_URL = 'https://tudominio.com'; // Cambiar al dominio real
export const SITE_AUTHOR = 'Equipo Landing Insano';

// Redes sociales
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/tucuenta',
  github: 'https://github.com/tucuenta',
  linkedin: 'https://linkedin.com/company/tucuenta',
};

// Configuración de metadatos
export const DEFAULT_OG_IMAGE = '/images/og-default.jpg';
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
    handle: '@tucuenta',
    site: '@tucuenta',
    cardType: 'summary_large_image',
  },
} as const;
