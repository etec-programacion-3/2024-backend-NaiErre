const { User, Cart, Order } = require("../models");

// Obtener todos los usuarios, incluyendo sus carritos y pedidos
const getAllUsers = async () => {
  return await User.findAll({ include: [Cart, Order] });
};

// Crear un nuevo usuario
const createUser = async (data) => {
  return await User.create(data);
};

// Obtener un usuario por ID, incluyendo sus carritos y pedidos
const getUserById = async (userId) => {
  return await User.findByPk(userId, { include: [Cart, Order] });
};

// Obtener un usuario por email (para login)
const getUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
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
  getAllUsers,
  createUser,
  getUserById,
  getUserByEmail, // Exporta la función para obtener usuario por email
  updateUser,
  deleteUser,
};
