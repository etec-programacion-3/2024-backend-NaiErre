const { User, Cart, Order } = require('../models');

// Crear un usuario
const createUser = async (data) => {
  return await User.create(data);
};

// Obtener un usuario por ID
const getUserById = async (userId) => {
  return await User.findByPk(userId, { include: [Cart, Order] });
};

// Actualizar un usuario
const updateUser = async (userId, data) => {
  return await User.update(data, { where: { id: userId } });
};

// Eliminar un usuario
const deleteUser = async (userId) => {
  return await User.destroy({ where: { id: userId } });
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
