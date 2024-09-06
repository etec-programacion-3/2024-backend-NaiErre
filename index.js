const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'tu_usuario', // Cambia esto
    password: 'tu_contraseña', // Cambia esto
    database: 'ecommerce'
});

db.connect((err) => {
    if (err) {
        console.log('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
