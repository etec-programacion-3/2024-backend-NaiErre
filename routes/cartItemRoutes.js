const express = require('express');
const router = express.Router();
const cartItemService = require('../services/cartItemService');

// Obtener todos los CartItems
router.get('/', async (req, res) => {
  try {
    const cartItems = await cartItemService.getAllCartItems(); // Asegúrate de implementar este método en el servicio
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un CartItem
router.post('/', async (req, res) => {
  try {
    const { cartId, productId, quantity } = req.body;
    const cartItem = await cartItemService.createCartItem(cartId, productId, quantity);
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un CartItem por ID
router.get('/:cartItemId', async (req, res) => {
  try {
    const cartItem = await cartItemService.getCartItemById(req.params.cartItemId);
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un CartItem
router.put('/:cartItemId', async (req, res) => {
  try {
    const cartItem = await cartItemService.updateCartItem(req.params.cartItemId, req.body.quantity);
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un CartItem
router.delete('/:cartItemId', async (req, res) => {
  try {
    await cartItemService.deleteCartItem(req.params.cartItemId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
