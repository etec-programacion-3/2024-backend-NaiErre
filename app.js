const express = require('express');
const app = express();
const cartRoutes = require('./routes/cartRoutes');
const cartItemRoutes = require('./routes/cartItemRoutes');
const orderRoutes = require('./routes/orderRoutes');
const orderItemRoutes = require('./routes/orderItemRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json()); // Para recibir JSON en los requests

// Definir las rutas
app.use('/api/carts', cartRoutes);
app.use('/api/cart-items', cartItemRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/order-items', orderItemRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenido al backend del e-commerce!');
});

module.exports = app;
