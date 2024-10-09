'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // Relación de Order con User (un pedido pertenece a un usuario)
      Order.belongsTo(models.User, { foreignKey: 'userId' });

      // Relación de Order con OrderItem (un pedido puede tener muchos elementos de pedido)
      Order.hasMany(models.OrderItem, { foreignKey: 'orderId' });
    }
  }
  Order.init({
    userId: DataTypes.INTEGER,
    totalPrice: DataTypes.FLOAT,
    status: DataTypes.ENUM('pending', 'completed', 'cancelled')  // Estado del pedido
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
