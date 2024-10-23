const express = require('express');
const router = express.Router();
const cartService = require('../services/cartService'); // Tu servicio de carrito

// Obtener todos los carritos
router.get('/', async (req, res) => {
  try {
    const carts = await cartService.getAllCarts(); // Asegúrate de que este método exista en tu servicio
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo carrito
router.post('/', async (req, res) => {
  try {
    const { userId } = req.body;
    const newCart = await cartService.createCart(userId); // Asegúrate de que este método exista
    res.status(201).json(newCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un carrito por ID
router.get('/:cartId', async (req, res) => {
  try {
    const cart = await cartService.getCartById(req.params.cartId); // Asegúrate de que este método exista
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un carrito
router.put('/:cartId', async (req, res) => {
  try {
    const updatedCart = await cartService.updateCart(req.params.cartId, req.body); // Asegúrate de que este método exista
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un carrito
router.delete('/:cartId', async (req, res) => {
  try {
    await cartService.deleteCart(req.params.cartId); // Asegúrate de que este método exista
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
