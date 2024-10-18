const { Product } = require('../models');

// Crear un producto
const createProduct = async (data) => {
  return await Product.create(data);
};

const getProducts = async () => {
  return await Product.findAll();
};

// Obtener un producto por ID
const getProductById = async (productId) => {
  return await Product.findByPk(productId);
};

// Actualizar un producto
const updateProduct = async (productId, data) => {
  return await Product.update(data, { where: { id: productId } });
};

// Eliminar un producto
const deleteProduct = async (productId) => {
  return await Product.destroy({ where: { id: productId } });
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
