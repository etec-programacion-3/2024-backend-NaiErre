const { CartItem, Product } = require('../models');

// Crear un CartItem
const createCartItem = async (cartId, productId, quantity) => {
  return await CartItem.create({ cartId, productId, quantity });
};

// Obtener un CartItem por ID
const getCartItemById = async (cartItemId) => {
  return await CartItem.findByPk(cartItemId, { include: [Product] });
};

// Actualizar la cantidad de un CartItem
const updateCartItem = async (cartItemId, quantity) => {
  return await CartItem.update({ quantity }, { where: { id: cartItemId } });
};

// Eliminar un CartItem
const deleteCartItem = async (cartItemId) => {
  return await CartItem.destroy({ where: { id: cartItemId } });
};

module.exports = {
  createCartItem,
  getCartItemById,
  updateCartItem,
  deleteCartItem,
};
