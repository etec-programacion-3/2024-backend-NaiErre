const express = require('express');
const router = express.Router();
const orderItemService = require('../services/orderItemService');

// Obtener todos los OrderItems
router.get('/', async (req, res) => {
  try {
    const orderItems = await orderItemService.getAllOrderItems(); // Asegúrate de implementar este método en el servicio
    res.status(200).json(orderItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un OrderItem
router.post('/', async (req, res) => {
  try {
    const { orderId, productId, quantity, price } = req.body;
    const orderItem = await orderItemService.createOrderItem(orderId, productId, quantity, price);
    res.status(201).json(orderItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un OrderItem por ID
router.get('/:orderItemId', async (req, res) => {
  try {
    const orderItem = await orderItemService.getOrderItemById(req.params.orderItemId);
    res.status(200).json(orderItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un OrderItem
router.put('/:orderItemId', async (req, res) => {
  try {
    const { quantity, price } = req.body;
    const orderItem = await orderItemService.updateOrderItem(req.params.orderItemId, quantity, price);
    res.status(200).json(orderItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un OrderItem
router.delete('/:orderItemId', async (req, res) => {
  try {
    await orderItemService.deleteOrderItem(req.params.orderItemId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
