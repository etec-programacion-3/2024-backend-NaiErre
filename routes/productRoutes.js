const express = require("express");
const router = express.Router();
const productService = require("../services/productService");

// Crear un producto
router.post("/", async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todos los productos o buscar por término
router.get("/", async (req, res) => {
  const searchQuery = req.query.q; // Captura el parámetro `q` de la consulta
  try {
    let products;
    if (searchQuery) {
      // Filtra productos basándose en el término de búsqueda
      products = await productService.searchProducts(searchQuery);
    } else {
      // Si no hay término de búsqueda, devuelve todos los productos
      products = await productService.getProducts();
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un producto por ID
router.get("/:productId", async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.productId);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un producto
router.put("/:productId", async (req, res) => {
  try {
    const product = await productService.updateProduct(
      req.params.productId,
      req.body
    );
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un producto
router.delete("/:productId", async (req, res) => {
  try {
    await productService.deleteProduct(req.params.productId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
