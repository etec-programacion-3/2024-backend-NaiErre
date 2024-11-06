const express = require("express");
const cors = require("cors");
const path = require("path");
const { sequelize } = require("./models"); // Importa la instancia de Sequelize desde tu configuración de modelos
const app = express();
const PORT = process.env.PORT || 3000;

require("dotenv").config();

// Configuración de CORS para permitir solicitudes desde el frontend
app.use(
  cors({
    origin: "http://localhost:4200", // Permitir solicitudes desde el frontend en localhost:4200
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Métodos permitidos
    allowedHeaders: ["Content-Type", "Authorization"], // Encabezados permitidos
    optionsSuccessStatus: 200,
  })
);

app.options("*", cors());

app.use(express.json());

// Importa las rutas
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const orderItemRoutes = require("./routes/orderItemRoutes");
const cartItemRoutes = require("./routes/cartItemRoutes");

// Usa las rutas en la aplicación Express
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/order-items", orderItemRoutes);
app.use("/api/cart-items", cartItemRoutes);
app.use("/productimages", express.static(path.join(__dirname, "productimages")));

// Sincroniza Sequelize y luego inicia el servidor
sequelize
  .sync({ force: false }) // Cambia a `true` solo si quieres recrear las tablas en cada inicio
  .then(() => {
    console.log("Base de datos sincronizada correctamente.");
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });
