const { OrderItem, Product } = require('../models');

// Obtener todos los OrderItems
const getAllOrderItems = async () => {
  return await OrderItem.findAll({ include: [Product] });
};

// Crear un OrderItem
const createOrderItem = async (orderId, productId, quantity, price) => {
  return await OrderItem.create({ orderId, productId, quantity, price });
};

// Obtener un OrderItem por ID
const getOrderItemById = async (orderItemId) => {
  return await OrderItem.findByPk(orderItemId, { include: [Product] });
};

// Actualizar un OrderItem
const updateOrderItem = async (orderItemId, quantity, price) => {
  return await OrderItem.update({ quantity, price }, { where: { id: orderItemId } });
};

// Eliminar un OrderItem
const deleteOrderItem = async (orderItemId) => {
  return await OrderItem.destroy({ where: { id: orderItemId } });
};

module.exports = {
  getAllOrderItems, // Agregar esta línea
  createOrderItem,
  getOrderItemById,
  updateOrderItem,
  deleteOrderItem,
};
