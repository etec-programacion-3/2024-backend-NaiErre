"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // Un producto puede estar en muchos elementos del carrito
      Product.hasMany(models.CartItem, { foreignKey: "productId" });

      // Un producto puede estar en muchos elementos del pedido
      Product.hasMany(models.OrderItem, { foreignKey: "productId" });
    }
  }
  
  Product.init(
    {
      name: DataTypes.STRING,
      brand: DataTypes.STRING,
      model: DataTypes.STRING,
      price: DataTypes.FLOAT,
      size: DataTypes.FLOAT,
      color: DataTypes.STRING,
      description: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING, // Nueva columna para la URL de la imagen del producto
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  
  return Product;
};
