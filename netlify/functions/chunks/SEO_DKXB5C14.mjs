import { a as createAstro, c as createComponent, r as renderTemplate } from './astro/server_D7wE4XSf.mjs';
import 'kleur/colors';
import 'clsx';
import { S as SITE_URL } from './consts_BXFc2Ufu.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b, _c, _d;
const $$Astro = createAstro("https://InsanoNetwork.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    schemaType = "WebPage",
    serviceName,
    serviceDescription,
    servicePrice
  } = Astro2.props;
  const serviceSchema = serviceName ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "provider": {
      "@type": "Organization",
      "name": "Insano Network"
    },
    ...servicePrice && { "offers": {
      "@type": "Offer",
      "price": servicePrice,
      "priceCurrency": "MXN"
    } }
  } : null;
  const localBusinessSchema = schemaType === "LocalBusiness" ? {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "E&V Contadores P\xFAblicos Independientes - Insano Network",
    "description": "Servicios contables y fiscales profesionales",
    "url": `${SITE_URL}/contable`,
    "telephone": "+52-XXX-XXX-XXXX",
    "email": "contacto@insanonetwork.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MX"
    }
  } : null;
  ({
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": serviceName || "P\xE1gina",
        "item": Astro2.url.href
      }
    ]
  });
  return renderTemplate(_d || (_d = __template(['<!-- Schema.org JSON-LD - Compatible con Brave --><script type="application/ld+json">\n  {JSON.stringify(organizationSchema)}\n<\/script> ', "", "", ""])), serviceSchema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">\n    {JSON.stringify(serviceSchema)}\n  <\/script>']))), localBusinessSchema && renderTemplate(_b || (_b = __template(['<script type="application/ld+json">\n    {JSON.stringify(localBusinessSchema)}\n  <\/script>']))), serviceName && renderTemplate(_c || (_c = __template(['<script type="application/ld+json">\n    {JSON.stringify(breadcrumbSchema)}\n  <\/script>']))));
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/components/SEO.astro", void 0);

export { $$SEO as $ };
