'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Un usuario tiene un carrito
      User.hasOne(models.Cart, { foreignKey: 'userId' });

      // Un usuario tiene muchos pedidos
      User.hasMany(models.Order, { foreignKey: 'userId' });
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false // Por defecto, admin será false
    },
    profilePicture: DataTypes.STRING // Nueva columna para la foto de perfil
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
