import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    //console.log(req.body)
    // Realizar la autenticación (en este caso, simplemente verificar la existencia del usuario)
    const user = await User.findOne({ user: username });
    //console.log(user);
    

    if (!user) {
      return res.status(401).json({ message: "Usuario no Encontrado" });
    }

    // Verificar si la contraseña es correcta
    //if (password !== user.password) {
      //return res.status(401).json({ message: "Invalid password" });
    //}

    // Generar un token JWT
    //const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Devolver el token al cliente
    res.status(200).json({ username , password });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
