const { Cart, CartItem, User } = require('../models');

// Obtener todos los CartItems
const getAllCartItems = async () => {
  return await CartItem.findAll(); // Esto obtiene todos los elementos de la tabla CartItem
};

// Crear un carrito
const createCart = async (userId) => {
  return await Cart.create({ userId });
};

// Obtener un carrito por ID
const getCartById = async (cartId) => {
  return await Cart.findByPk(cartId, { include: [CartItem] });
};

// Actualizar un carrito (agregar un CartItem)
const addCartItem = async (cartId, productId, quantity) => {
  const cartItem = await CartItem.create({ cartId, productId, quantity });
  return cartItem;
};

// Eliminar un carrito
const deleteCart = async (cartId) => {
  return await Cart.destroy({ where: { id: cartId } });
};

module.exports = {
  createCart,
  getCartById,
  addCartItem,
  deleteCart,
  getAllCartItems,
};
