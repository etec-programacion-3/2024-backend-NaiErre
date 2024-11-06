const { Product } = require("../models");
const { Op } = require("sequelize"); // Importa Op desde sequelize

// Crear un producto
const createProduct = async (data) => {
  return await Product.create(data);
};

// Obtener todos los productos
const getProducts = async () => {
  return await Product.findAll();
};

// Buscar productos por término (sensible a mayúsculas y minúsculas)
const searchProducts = async (query) => {
  return await Product.findAll({
    where: {
      name: {
        [Op.like]: `%${query}%`, // Coincidencia parcial con sensibilidad a mayúsculas y minúsculas
      },
    },
  });
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
  searchProducts, // Exporta la nueva función
  getProductById,
  updateProduct,
  deleteProduct,
};
