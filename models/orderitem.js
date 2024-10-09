'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(models) {
      // Relación de OrderItem con Product (un elemento del pedido pertenece a un producto)
      OrderItem.belongsTo(models.Product, { foreignKey: 'productId' });

      // Relación de OrderItem con Order (un elemento del pedido pertenece a un pedido)
      OrderItem.belongsTo(models.Order, { foreignKey: 'orderId' });
    }
  }
  OrderItem.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'OrderItem',
  });
  return OrderItem;
};
