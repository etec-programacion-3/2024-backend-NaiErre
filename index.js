const express = require('express');
const { sequelize } = require('./models');  // Importa tu instancia de Sequelize y modelos
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bienvenido al backend del e-commerce!');
});

// Sincroniza los modelos con la base de datos
sequelize.sync({ force: false })  // Si usas { force: true }, esto borrará las tablas existentes y las volverá a crear.
  .then(() => {
    console.log('Tablas creadas correctamente.');
  })
  .catch(err => {
    console.error('Error creando las tablas:', err);
  });

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
