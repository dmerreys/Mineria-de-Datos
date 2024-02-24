import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    const { user } = req.params;
    const usuario = await User.findOne({user});
    res.status(200).json(usuario);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


