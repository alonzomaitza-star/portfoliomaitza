import { c as createAstro, a as createComponent, e as renderComponent, f as renderScript, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../../chunks/astro/server_CnQjhTBy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/Layout_HkZ2_2Gl.mjs';
import { g as getProductByHandle } from '../../../chunks/medusa_IxpejJgq.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://tudominio.com");
const $$handle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$handle;
  const { handle } = Astro2.params;
  let product = null;
  let error = null;
  try {
    if (false) ; else {
      product = await getProductByHandle(handle || "");
      if (!product) {
        error = "Producto no encontrado";
      }
    }
  } catch (e) {
    console.error(`Error al cargar el producto ${handle}:`, e);
    error = e.message;
  }
  const title = product ? `${product.title} | Tienda Insano` : "Producto no encontrado | Tienda Insano";
  const description = product ? product.description.substring(0, 160) : "Detalles del producto no disponibles.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate`${error ? renderTemplate`${maybeRenderHead()}<div class="container mx-auto px-4 py-16"> <div class="text-center text-red-600 p-6 bg-red-50 rounded-lg max-w-lg mx-auto"> <h1 class="text-2xl font-bold mb-4">Error</h1> <p>${error}</p> <a href="/shop" class="inline-block mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
Volver a la tienda
</a> </div> </div>` : product ? renderTemplate`<div class="container mx-auto px-4 py-12"> <!-- Breadcrumbs --> <nav class="flex mb-8 text-sm"> <ol class="flex items-center space-x-2"> <li> <a href="/" class="text-gray-500 hover:text-blue-600">Inicio</a> </li> <li class="flex items-center space-x-2"> <span class="text-gray-400">/</span> <a href="/shop" class="text-gray-500 hover:text-blue-600">Tienda</a> </li> <li class="flex items-center space-x-2"> <span class="text-gray-400">/</span> <span class="text-gray-900 font-medium">${product.title}</span> </li> </ol> </nav> <!-- Product Details --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12"> <!-- Product Images --> <div class="product-images space-y-4"> <!-- Main Image --> <div class="main-image bg-gray-100 rounded-lg overflow-hidden"> <img id="main-product-image"${addAttribute(product.thumbnail || product.images?.[0], "src")}${addAttribute(product.title, "alt")} class="w-full h-auto object-cover"> </div> <!-- Thumbnail Gallery --> ${product.images && product.images.length > 1 && renderTemplate`<div class="thumbnail-gallery grid grid-cols-4 gap-4"> ${product.images.map((image, index) => renderTemplate`<button class="thumbnail-btn bg-gray-100 rounded-md overflow-hidden border-2 border-transparent hover:border-blue-500 transition-colors"${addAttribute(image, "data-image")}${addAttribute(`Ver imagen ${index + 1}`, "aria-label")}> <img${addAttribute(image, "src")}${addAttribute(`${product.title} - Imagen ${index + 1}`, "alt")} class="w-full h-auto object-cover" loading="lazy"> </button>`)} </div>`} </div> <!-- Product Info --> <div class="product-info"> <h1 class="text-3xl font-bold text-gray-900 mb-4">${product.title}</h1> <!-- Price --> <div class="mb-6"> ${product.variants && product.variants.length > 0 && renderTemplate`<p class="text-2xl font-bold text-gray-900">
$${(product.variants[0].prices[0].amount / 100).toFixed(2)} </p>`} </div> <!-- Description --> <div class="mb-8"> <p class="text-gray-700 leading-relaxed">${product.description}</p> </div> <!-- Features List --> ${product.features && product.features.length > 0 && renderTemplate`<div class="mb-8"> <h3 class="text-lg font-semibold mb-3">Características:</h3> <ul class="space-y-2"> ${product.features.map((feature) => renderTemplate`<li class="flex items-start"> <svg class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>${feature}</span> </li>`)} </ul> </div>`} <!-- Variants Selection --> ${product.options && product.options.length > 0 && renderTemplate`<div class="mb-8"> <h3 class="text-lg font-semibold mb-3">${product.options[0].title}:</h3> <div class="variant-options flex flex-wrap gap-3"> ${product.options[0].values.map((value, index) => renderTemplate`<button class="variant-btn px-4 py-2 border-2 border-gray-300 rounded-md text-gray-700 font-medium hover:border-blue-500 hover:text-blue-600 transition-colors"${addAttribute(product.variants[index].id, "data-variant-id")}${addAttribute((product.variants[index].prices[0].amount / 100).toFixed(2), "data-variant-price")}> ${value} </button>`)} </div> </div>`} <!-- Add to Cart --> <div class="flex items-center space-x-4 mb-8"> <div class="quantity-selector flex items-center border border-gray-300 rounded-md"> <button id="decrease-quantity" class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900" aria-label="Disminuir cantidad"> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path> </svg> </button> <input type="number" id="quantity" value="1" min="1" max="99" class="w-12 h-10 text-center border-x border-gray-300 focus:outline-none"> <button id="increase-quantity" class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900" aria-label="Aumentar cantidad"> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path> </svg> </button> </div> <button id="add-to-cart-btn" class="flex-grow bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"${addAttribute(product.id, "data-product-id")}${addAttribute(product.variants?.[0]?.id, "data-variant-id")}>
Añadir al Carrito
</button> </div> <!-- Additional Info --> <div class="border-t border-gray-200 pt-6"> <div class="flex items-center text-sm text-gray-600 mb-4"> <svg class="w-5 h-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>Satisfacción garantizada</span> </div> <div class="flex items-center text-sm text-gray-600"> <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span>Soporte técnico incluido</span> </div> </div> </div> </div> </div>` : null}${renderScript($$result2, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/shop/products/[handle].astro?astro&type=script&index=0&lang.ts")} ` })} ${renderScript($$result, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/shop/products/[handle].astro?astro&type=script&index=1&lang.ts")}`;
}, "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/shop/products/[handle].astro", void 0);
const $$file = "D:/dev/Node.js/InsanoNetwork/Insano-landing/src/pages/shop/products/[handle].astro";
const $$url = "/shop/products/[handle]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$handle,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
