const { Cart, CartItem } = require('../models');

// Obtener todos los carritos
const getAllCarts = async () => {
  return await Cart.findAll(); // Asegúrate de que este método sea compatible con tus requisitos
};

// Crear un carrito
const createCart = async (userId) => {
  return await Cart.create({ userId });
};

// Obtener un carrito por ID
const getCartById = async (cartId) => {
  return await Cart.findByPk(cartId, { include: [CartItem] }); // Esto incluirá los elementos del carrito
};

// Actualizar un carrito (puedes expandir esta funcionalidad)
const updateCart = async (cartId, data) => {
  return await Cart.update(data, { where: { id: cartId } });
};

// Eliminar un carrito
const deleteCart = async (cartId) => {
  return await Cart.destroy({ where: { id: cartId } });
};

module.exports = {
  getAllCarts,
  createCart,
  getCartById,
  updateCart,
  deleteCart,
};
