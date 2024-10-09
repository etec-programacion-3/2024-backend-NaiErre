'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    static associate(models) {
      // Relación de CartItem con Product (un elemento del carrito pertenece a un producto)
      CartItem.belongsTo(models.Product, { foreignKey: 'productId' });

      // Relación de CartItem con Cart (un elemento del carrito pertenece a un carrito)
      CartItem.belongsTo(models.Cart, { foreignKey: 'cartId' });
    }
  }
  CartItem.init({
    cartId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CartItem',
  });
  return CartItem;
};
