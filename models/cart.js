'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      // Relación de Cart con User (un carrito pertenece a un usuario)
      Cart.belongsTo(models.User, { foreignKey: 'userId' });

      // Relación de Cart con CartItem (un carrito puede tener muchos elementos del carrito)
      Cart.hasMany(models.CartItem, { foreignKey: 'cartId' });
    }
  }
  Cart.init({
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
