const express = require('express');
const router = express.Router();
const orderService = require('../services/orderService');

// Crear un pedido
router.post('/', async (req, res) => {
  try {
    const { userId, totalPrice, status } = req.body;
    const order = await orderService.createOrder(userId, totalPrice, status);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todos los pedidos
router.get('/', async (req, res) => {
  try {
    const orders = await orderService.getAllOrders(); // Asegúrate de que este método esté implementado
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un pedido por ID
router.get('/:orderId', async (req, res) => {
  try {
    const order = await orderService.getOrderById(req.params.orderId);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar el estado de un pedido
router.put('/:orderId', async (req, res) => {
  try {
    const { status } = req.body;
    const order = await orderService.updateOrderStatus(req.params.orderId, status);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un pedido
router.delete('/:orderId', async (req, res) => {
  try {
    await orderService.deleteOrder(req.params.orderId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
