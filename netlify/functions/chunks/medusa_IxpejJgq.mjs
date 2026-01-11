import Medusa from '@medusajs/medusa-js';

const MEDUSA_BACKEND_URL = "http://localhost:9000";
const medusaClient = new Medusa({
  baseUrl: MEDUSA_BACKEND_URL,
  maxRetries: 3
});
async function getFeaturedProducts(limit = 4) {
  try {
    const { products } = await medusaClient.products.list({
      limit,
      is_giftcard: false
    });
    return products;
  } catch (error) {
    console.error("Error al obtener productos destacados:", error);
    return [];
  }
}
async function getProductByHandle(handle) {
  try {
    const { products } = await medusaClient.products.list({
      handle
    });
    return products[0] || null;
  } catch (error) {
    console.error(`Error al obtener producto con handle ${handle}:`, error);
    return null;
  }
}
async function getCollections() {
  try {
    const { collections } = await medusaClient.collections.list();
    return collections;
  } catch (error) {
    console.error("Error al obtener colecciones:", error);
    return [];
  }
}

export { getFeaturedProducts as a, getCollections as b, getProductByHandle as g };
