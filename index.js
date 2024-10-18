const { sequelize } = require('./models');  // Importa la instancia de Sequelize
const app = require('./app');  // Importa tu aplicación desde app.js

// Sincroniza los modelos con la base de datos
sequelize.sync({ force: false })  // Si usas { force: true }, borrará y recreará las tablas
  .then(() => {
    console.log('Tablas creadas correctamente.');
    // Inicia el servidor solo después de que las tablas se hayan creado
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error creando las tablas:', err);
  });
