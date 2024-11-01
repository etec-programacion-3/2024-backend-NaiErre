const jwt = require("jsonwebtoken");

// La clave secreta debería almacenarse en una variable de entorno para mayor seguridad
const SECRET_KEY = process.env.JWT_SECRET || "tu_secreto_seguro";

const generateToken = (user) => {
  // Crea el payload del token con la información del usuario
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  // Genera el token con el payload y la clave secreta
  // Aquí puedes configurar una expiración si es necesario, por ejemplo, 1h (una hora)
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
};

module.exports = { generateToken };
