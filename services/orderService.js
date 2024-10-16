const { Order, OrderItem } = require('../models');

// Crear un pedido
const createOrder = async (userId, totalPrice, status) => {
  return await Order.create({ userId, totalPrice, status });
};

// Obtener un pedido por ID
const getOrderById = async (orderId) => {
  return await Order.findByPk(orderId, { include: [OrderItem] });
};

// Actualizar un pedido (estado)
const updateOrderStatus = async (orderId, status) => {
  return await Order.update({ status }, { where: { id: orderId } });
};

// Eliminar un pedido
const deleteOrder = async (orderId) => {
  return await Order.destroy({ where: { id: orderId } });
};

module.exports = {
  createOrder,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
};
