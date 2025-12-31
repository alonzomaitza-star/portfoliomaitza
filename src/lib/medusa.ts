/**
 * Medusa.js API Helper Module
 * 
 * Proporciona funciones para interactuar con la API de Medusa.js
 * para e-commerce (productos, colecciones, carrito, etc.)
 */

// Configuración de la API
const MEDUSA_API_URL = import.meta.env.PUBLIC_MEDUSA_API_URL || 'http://localhost:9000';

/**
 * Cliente HTTP básico para Medusa API
 */
async function medusaFetch(endpoint: string, options: RequestInit = {}) {
    const url = `${MEDUSA_API_URL}${endpoint}`;

    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });

        if (!response.ok) {
            throw new Error(`Medusa API error: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        throw error;
    }
}

/**
 * Obtiene productos destacados (featured)
 * @param limit - Número de productos a obtener
 */
export async function getFeaturedProducts(limit: number = 4) {
    try {
        // En Medusa v2, los productos están en /store/products
        const data = await medusaFetch(`/store/products?limit=${limit}`);
        return data.products || [];
    } catch (error) {
        console.error('Error getting featured products:', error);
        // Retornar array vacío si hay error
        return [];
    }
}

/**
 * Obtiene todas las colecciones disponibles
 */
export async function getCollections() {
    try {
        const data = await medusaFetch('/store/collections');
        return data.collections || [];
    } catch (error) {
        console.error('Error getting collections:', error);
        return [];
    }
}

/**
 * Obtiene productos por colección
 * @param handle - Handle/slug de la colección
 */
export async function getProductsByCollection(handle: string) {
    try {
        const data = await medusaFetch(`/store/collections/${handle}/products`);
        return data.products || [];
    } catch (error) {
        console.error(`Error getting products for collection ${handle}:`, error);
        return [];
    }
}

/**
 * Obtiene un producto por su ID
 * @param productId - ID del producto
 */
export async function getProduct(productId: string) {
    try {
        const data = await medusaFetch(`/store/products/${productId}`);
        return data.product || null;
    } catch (error) {
        console.error(`Error getting product ${productId}:`, error);
        return null;
    }
}

/**
 * Obtiene o crea un carrito de compras
 * Usa localStorage para mantener el ID del carrito
 */
export async function getOrCreateCart() {
    try {
        // Buscar carrito existente en localStorage
        let cartId = null;
        if (typeof window !== 'undefined') {
            cartId = localStorage.getItem('medusa_cart_id');
        }

        if (cartId) {
            // Intentar obtener el carrito existente
            try {
                const data = await medusaFetch(`/store/carts/${cartId}`);
                return data.cart;
            } catch {
                // Si falla, crear uno nuevo
                cartId = null;
            }
        }

        // Crear nuevo carrito
        const data = await medusaFetch('/store/carts', {
            method: 'POST',
            body: JSON.stringify({}),
        });

        if (typeof window !== 'undefined' && data.cart) {
            localStorage.setItem('medusa_cart_id', data.cart.id);
        }

        return data.cart;
    } catch (error) {
        console.error('Error creating/getting cart:', error);
        return null;
    }
}

/**
 * Agrega un producto al carrito
 * @param productId - ID del producto
 * @param variantId - ID de la variante del producto
 * @param quantity - Cantidad a agregar
 */
export async function addToCart(productId: string, variantId: string, quantity: number = 1) {
    try {
        const cart = await getOrCreateCart();
        if (!cart) throw new Error('No se pudo obtener el carrito');

        const data = await medusaFetch(`/store/carts/${cart.id}/line-items`, {
            method: 'POST',
            body: JSON.stringify({
                variant_id: variantId,
                quantity,
            }),
        });

        return data.cart;
    } catch (error) {
        console.error('Error adding to cart:', error);
        throw error;
    }
}

/**
 * Formatea el precio de Medusa a formato legible
 * @param amount - Cantidad en centavos
 * @param currencyCode - Código de moneda (default: USD)
 */
export function formatPrice(amount: number, currencyCode: string = 'USD'): string {
    const value = amount / 100; // Medusa guarda precios en centavos

    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: currencyCode,
    }).format(value);
}

/**
 * Datos mock para desarrollo cuando el backend no está disponible
 */
export const mockProducts = [
    {
        id: 'prod_01',
        title: 'Servicio de Desarrollo Web',
        handle: 'servicio-desarrollo-web',
        thumbnail: '/img/shop/web-development.jpg',
        description: 'Desarrollo de sitios web profesionales con las últimas tecnologías',
        variants: [
            {
                id: 'variant_01',
                prices: [{ amount: 149900, currency_code: 'USD' }]
            }
        ]
    },
    {
        id: 'prod_02',
        title: 'Consultoría de Marketing Digital',
        handle: 'consultoria-marketing-digital',
        thumbnail: '/img/shop/digital-marketing.jpg',
        description: 'Estrategias personalizadas para mejorar tu presencia online',
        variants: [
            {
                id: 'variant_02',
                prices: [{ amount: 99900, currency_code: 'USD' }]
            }
        ]
    },
    {
        id: 'prod_03',
        title: 'Diseño de Identidad Corporativa',
        handle: 'diseno-identidad-corporativa',
        thumbnail: '/img/shop/brand-identity.jpg',
        description: 'Creación de logos, paletas de colores y guías de estilo para tu marca',
        variants: [
            {
                id: 'variant_03',
                prices: [{ amount: 79900, currency_code: 'USD' }]
            }
        ]
    },
    {
        id: 'prod_04',
        title: 'Optimización SEO',
        handle: 'optimizacion-seo',
        thumbnail: '/img/shop/seo-optimization.jpg',
        description: 'Mejora el posicionamiento de tu sitio en los motores de búsqueda',
        variants: [
            {
                id: 'variant_04',
                prices: [{ amount: 59900, currency_code: 'USD' }]
            }
        ]
    }
];
