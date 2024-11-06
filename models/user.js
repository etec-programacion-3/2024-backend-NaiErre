"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Un usuario tiene un carrito
      User.hasOne(models.Cart, { foreignKey: "userId" });

      // Un usuario tiene muchos pedidos
      User.hasMany(models.Order, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.ENUM("admin", "user"),
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
