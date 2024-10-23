const express = require('express');
const router = express.Router();
const cartService = require('../services/cartService'); // Este es tu servicio de carrito

// Define las rutas aquí
router.get('/', async (req, res) => {
  const carts = await cartService.getCarts(); // Llama a los métodos del servicio
  res.json(carts);
});

module.exports = router;
