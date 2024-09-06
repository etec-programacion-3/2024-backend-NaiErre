const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Ajusta la ruta según tu estructura

const Product = sequelize.define('Product', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  talla: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  imagen_url: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'zapatillas',
  timestamps: false // Asume que no estás usando campos createdAt y updatedAt
});

module.exports = Product;
