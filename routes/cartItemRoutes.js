const express = require("express");
const router = express.Router();
const cartItemService = require("../services/cartItemService");

// Ruta para obtener todos los CartItems
router.get("/", async (req, res) => {
  try {
    const cartItems = await cartItemService.getAllCartItems(); // Asegúrate de implementar este método en el servicio
    res.status(200).json(cartItems);
  } catch (error) {
    console.error("Error al obtener todos los CartItems:", error);
    res.status(500).json({ error: error.message });
  }
});

// Ruta para crear un nuevo CartItem
router.post("/", async (req, res) => {
  const { cartId, productId, quantity } = req.body;
  if (!cartId || !productId || !quantity) {
    return res.status(400).json({ error: "Todos los campos son requeridos." });
  }

  try {
    const newCartItem = await cartItemService.createCartItem(
      cartId,
      productId,
      quantity
    );
    res.status(201).json(newCartItem);
  } catch (error) {
    console.error("Error al crear el CartItem:", error);
    res.status(500).json({ error: error.message });
  }
});

// Ruta para obtener un CartItem por su ID
router.get("/:cartItemId", async (req, res) => {
  try {
    const cartItem = await cartItemService.getCartItemById(
      req.params.cartItemId
    );
    if (!cartItem) {
      return res.status(404).json({ error: "CartItem no encontrado" });
    }
    res.status(200).json(cartItem);
  } catch (error) {
    console.error("Error al obtener el CartItem:", error);
    res.status(500).json({ error: error.message });
  }
});

// Ruta para actualizar un CartItem
router.put("/:cartItemId", async (req, res) => {
  const { quantity } = req.body;
  if (!quantity) {
    return res
      .status(400)
      .json({ error: "La cantidad es requerida para actualizar el CartItem" });
  }

  try {
    const updatedCartItem = await cartItemService.updateCartItem(
      req.params.cartItemId,
      quantity
    );
    if (!updatedCartItem) {
      return res
        .status(404)
        .json({ error: "CartItem no encontrado para actualizar" });
    }
    res.status(200).json(updatedCartItem);
  } catch (error) {
    console.error("Error al actualizar el CartItem:", error);
    res.status(500).json({ error: error.message });
  }
});

// Ruta para eliminar un CartItem
router.delete("/:cartItemId", async (req, res) => {
  try {
    const deleted = await cartItemService.deleteCartItem(req.params.cartItemId);
    if (!deleted) {
      return res
        .status(404)
        .json({ error: "CartItem no encontrado para eliminar" });
    }
    res.status(204).send(); // No content
  } catch (error) {
    console.error("Error al eliminar el CartItem:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
