/**
 * Cliente de Medusa.js para la integración con la tienda online
 * 
 * Este archivo configura el cliente de Medusa.js para interactuar con el backend
 * de la tienda. Proporciona funciones de utilidad para acceder a productos,
 * gestionar carritos, procesar pedidos y más.
 */

import Medusa from "@medusajs/medusa-js";

// URL del backend de Medusa (ajustar según el entorno)
const MEDUSA_BACKEND_URL = import.meta.env.PUBLIC_MEDUSA_BACKEND_URL || 'http://localhost:9000'

/**
 * Cliente principal de Medusa
 * Se utiliza para todas las operaciones relacionadas con la tienda
 */
export const medusaClient = createClient({
  baseUrl: MEDUSA_BACKEND_URL,
  maxRetries: 3
})

/**
 * Obtiene un carrito existente o crea uno nuevo
 * @returns {Promise<Object>} El objeto del carrito
 */
export async function getOrCreateCart() {
  // Intentar recuperar el ID del carrito del almacenamiento local
  const cartId = localStorage.getItem('medusa_cart_id')
  
  try {
    // Si existe un ID de carrito, intentar recuperarlo
    if (cartId) {
      const { cart } = await medusaClient.carts.retrieve(cartId)
      return cart
    }
    
    // Si no existe, crear un nuevo carrito
    const { cart } = await medusaClient.carts.create({})
    localStorage.setItem('medusa_cart_id', cart.id)
    return cart
  } catch (error) {
    console.error('Error al obtener/crear carrito:', error)
    
    // Si hay un error (por ejemplo, el carrito ya no existe), crear uno nuevo
    try {
      const { cart } = await medusaClient.carts.create({})
      localStorage.setItem('medusa_cart_id', cart.id)
      return cart
    } catch (createError) {
      console.error('Error al crear nuevo carrito:', createError)
      throw createError
    }
  }
}

/**
 * Añade un producto al carrito
 * @param {string} variantId - ID de la variante del producto
 * @param {number} quantity - Cantidad a añadir
 * @returns {Promise<Object>} El carrito actualizado
 */
export async function addToCart(variantId, quantity = 1) {
  try {
    const cart = await getOrCreateCart()
    
    const { cart: updatedCart } = await medusaClient.carts.lineItems.create(
      cart.id,
      {
        variant_id: variantId,
        quantity
      }
    )
    
    return updatedCart
  } catch (error) {
    console.error('Error al añadir al carrito:', error)
    throw error
  }
}

/**
 * Actualiza la cantidad de un producto en el carrito
 * @param {string} lineItemId - ID del item en el carrito
 * @param {number} quantity - Nueva cantidad
 * @returns {Promise<Object>} El carrito actualizado
 */
export async function updateCartItem(lineItemId, quantity) {
  try {
    const cart = await getOrCreateCart()
    
    const { cart: updatedCart } = await medusaClient.carts.lineItems.update(
      cart.id,
      lineItemId,
      {
        quantity
      }
    )
    
    return updatedCart
  } catch (error) {
    console.error('Error al actualizar item del carrito:', error)
    throw error
  }
}

/**
 * Elimina un producto del carrito
 * @param {string} lineItemId - ID del item en el carrito
 * @returns {Promise<Object>} El carrito actualizado
 */
export async function removeFromCart(lineItemId) {
  try {
    const cart = await getOrCreateCart()
    
    const { cart: updatedCart } = await medusaClient.carts.lineItems.delete(
      cart.id,
      lineItemId
    )
    
    return updatedCart
  } catch (error) {
    console.error('Error al eliminar del carrito:', error)
    throw error
  }
}

/**
 * Completa un carrito y lo convierte en un pedido
 * @param {Object} customerInfo - Información del cliente
 * @returns {Promise<Object>} El pedido creado
 */
export async function completeCart(customerInfo) {
  try {
    const cart = await getOrCreateCart()
    
    // Añadir información del cliente al carrito
    await medusaClient.carts.update(cart.id, {
      email: customerInfo.email,
      shipping_address: customerInfo.shippingAddress,
      billing_address: customerInfo.billingAddress || customerInfo.shippingAddress
    })
    
    // Completar el carrito
    const { type, data } = await medusaClient.carts.complete(cart.id)
    
    // Limpiar el ID del carrito del almacenamiento local
    localStorage.removeItem('medusa_cart_id')
    
    return { type, data }
  } catch (error) {
    console.error('Error al completar el carrito:', error)
    throw error
  }
}

/**
 * Obtiene los productos destacados
 * @param {number} limit - Número máximo de productos a obtener
 * @returns {Promise<Array>} Lista de productos destacados
 */
export async function getFeaturedProducts(limit = 4) {
  try {
    const { products } = await medusaClient.products.list({
      limit,
      is_giftcard: false
    })
    
    return products
  } catch (error) {
    console.error('Error al obtener productos destacados:', error)
    return []
  }
}

/**
 * Obtiene un producto por su handle (slug)
 * @param {string} handle - Handle/slug del producto
 * @returns {Promise<Object|null>} El producto o null si no se encuentra
 */
export async function getProductByHandle(handle) {
  try {
    const { products } = await medusaClient.products.list({
      handle
    })
    
    return products[0] || null
  } catch (error) {
    console.error(`Error al obtener producto con handle ${handle}:`, error)
    return null
  }
}

/**
 * Obtiene las colecciones de productos
 * @returns {Promise<Array>} Lista de colecciones
 */
export async function getCollections() {
  try {
    const { collections } = await medusaClient.collections.list()
    return collections
  } catch (error) {
    console.error('Error al obtener colecciones:', error)
    return []
  }
}

/**
 * Obtiene los productos de una colección
 * @param {string} collectionId - ID de la colección
 * @param {number} limit - Número máximo de productos a obtener
 * @returns {Promise<Array>} Lista de productos de la colección
 */
export async function getProductsByCollection(collectionId, limit = 10) {
  try {
    const { products } = await medusaClient.products.list({
      collection_id: [collectionId],
      limit
    })
    
    return products
  } catch (error) {
    console.error(`Error al obtener productos de la colección ${collectionId}:`, error)
    return []
  }
}