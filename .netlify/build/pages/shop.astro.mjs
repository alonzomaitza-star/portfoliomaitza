import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderScript, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_D93YMnHd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_yTP-cYjh.mjs';
import 'clsx';
import { a as getFeaturedProducts, b as getCollections } from '../chunks/medusa_qyMsVh7S.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://tudominio.com");
const $$ProductCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { product, className = "" } = Astro2.props;
  const firstVariant = product.variants && product.variants.length > 0 ? product.variants[0] : null;
  const price = firstVariant?.prices?.length > 0 ? firstVariant.prices[0].amount / 100 : null;
  const imageUrl = product.thumbnail || "/img/shop/product-placeholder.png";
  const productUrl = `/shop/products/${product.handle}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`product-card bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 ${className}`, "class")}> <a${addAttribute(productUrl, "href")} class="block"> <div class="product-image relative pb-[75%] overflow-hidden bg-gray-100"> <img${addAttribute(imageUrl, "src")}${addAttribute(product.title, "alt")} class="absolute inset-0 w-full h-full object-cover object-center" loading="lazy"> </div> </a> <div class="p-4"> <a${addAttribute(productUrl, "href")} class="block"> <h3 class="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors line-clamp-2 mb-2"> ${product.title} </h3> </a> ${product.description && renderTemplate`<p class="text-gray-600 text-sm line-clamp-2 mb-3"> ${product.description} </p>`} <div class="flex justify-between items-center"> ${price !== null ? renderTemplate`<span class="text-lg font-bold text-gray-900">
$${price.toFixed(2)} </span>` : renderTemplate`<span class="text-sm text-gray-500">Precio no disponible</span>`} ${firstVariant && renderTemplate`<button class="add-to-cart-btn bg-blue-600 text-white py-1.5 px-3 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"${addAttribute(product.id, "data-product-id")}${addAttribute(firstVariant.id, "data-variant-id")}>
Añadir
</button>`} </div> </div> </div> ${renderScript($$result, "C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/components/shop/ProductCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/components/shop/ProductCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let featuredProducts = [];
  let collections = [];
  let error = null;
  try {
    if (false) ; else {
      featuredProducts = await getFeaturedProducts(4);
      collections = await getCollections();
    }
  } catch (e) {
    console.error("Error al cargar datos de la tienda:", e);
    error = e.message;
  }
  const title = "Tienda Online | Insano";
  const description = "Descubre nuestros servicios profesionales y productos digitales de alta calidad.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16"> <div class="container mx-auto px-4"> <div class="max-w-3xl mx-auto text-center"> <h1 class="text-4xl md:text-5xl font-bold mb-4">Servicios Profesionales para tu Negocio</h1> <p class="text-xl mb-8">Soluciones digitales de calidad para impulsar tu presencia online</p> <a href="#featured-products" class="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
Ver Servicios
</a> </div> </div> </section>  <section id="featured-products" class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-12">Servicios Destacados</h2> ${error ? renderTemplate`<div class="text-center text-red-600 p-4 bg-red-50 rounded-lg max-w-lg mx-auto"> <p>Error al cargar los productos: ${error}</p> <p class="mt-2 text-sm">Por favor, intenta recargar la página o contacta con soporte si el problema persiste.</p> </div>` : featuredProducts.length === 0 ? renderTemplate`<div class="text-center text-gray-600 p-4"> <p>No hay productos destacados disponibles en este momento.</p> </div>` : renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> ${featuredProducts.map((product) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "product": product })}`)} </div>`} <div class="text-center mt-12"> <a href="/shop/products" class="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
Ver Todos los Servicios
</a> </div> </div> </section>  <section class="py-16 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-12">Categorías</h2> ${collections.length === 0 ? renderTemplate`<div class="text-center text-gray-600 p-4"> <p>No hay categorías disponibles en este momento.</p> </div>` : renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> ${collections.map((collection) => renderTemplate`<a${addAttribute(`/shop/collections/${collection.handle}`, "href")} class="block group"> <div class="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-6 text-center"> <h3 class="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors"> ${collection.title} </h3> </div> </a>`)} </div>`} </div> </section>  <section class="py-16 bg-gray-900 text-white"> <div class="container mx-auto px-4"> <div class="max-w-3xl mx-auto text-center"> <h2 class="text-3xl font-bold mb-6">¿Necesitas un servicio personalizado?</h2> <p class="text-xl mb-8">Contáctanos para discutir tus necesidades específicas y obtener una cotización a medida.</p> <a href="/contacto" class="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-500 transition-colors">
Solicitar Cotización
</a> </div> </div> </section>  ${renderScript($$result2, "C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/pages/shop/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/pages/shop/index.astro", void 0);
const $$file = "C:/dev/Node.js/Insano - LandingPage/Insano-landing/src/pages/shop/index.astro";
const $$url = "/shop";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
