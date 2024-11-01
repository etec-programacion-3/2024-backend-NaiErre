const express = require("express");
const router = express.Router();
const userService = require("../services/userService");
const { generateToken } = require("../services/tokenService");

// Obtener todos los usuarios
router.get("/", async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo usuario
router.post("/", async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta de Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.getUserByEmail(email);

    // Verifica si el usuario existe y la contraseña coincide
    if (!user || user.password !== password) {
      return res
        .status(401)
        .json({ error: "Usuario o contraseña incorrectos" });
    }

    // Genera el token usando la función generateToken
    const token = generateToken(user);

    res.status(200).json({ message: "Login exitoso", token, user });
  } catch (error) {
    console.error(error); // Imprimir el error en consola para depurar
    res.status(500).json({ error: "Error en el servidor" });
  }
});

// Obtener un usuario por ID
router.get("/:userId", async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un usuario
router.put("/:userId", async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.userId, req.body);
    if (user[0] === 1) {
      res.status(200).json({ message: "Usuario actualizado correctamente" });
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un usuario
router.delete("/:userId", async (req, res) => {
  try {
    const result = await userService.deleteUser(req.params.userId);
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
