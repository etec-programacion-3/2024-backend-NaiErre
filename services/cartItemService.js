const { CartItem, Product } = require("../models");

const createCartItem = async (cartId, productId, quantity) => {
  return await CartItem.create({ cartId, productId, quantity });
};

// Obtener todos los CartItems
const getAllCartItems = async () => {
  return await CartItem.findAll({ include: [Product] }); // Obtiene todos los elementos de la tabla CartItem
};

// Obtener un CartItem por ID
const getCartItemById = async (cartItemId) => {
  return await CartItem.findByPk(cartItemId, { include: [Product] });
};

// Actualizar un CartItem
const updateCartItem = async (cartItemId, quantity) => {
  return await CartItem.update({ quantity }, { where: { id: cartItemId } });
};

// Eliminar un CartItem
const deleteCartItem = async (cartItemId) => {
  return await CartItem.destroy({ where: { id: cartItemId } });
};

// En cartItemService.js

module.exports = {
  createCartItem,
  getAllCartItems, // Asegúrate de que este método esté aquí
  getCartItemById,
  updateCartItem,
  deleteCartItem,
};
