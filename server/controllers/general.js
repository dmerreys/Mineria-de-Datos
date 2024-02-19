import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    const { user } = req.params;
    const usuario = await User.findOne({user});
    //console.log(req.params);
    //console.log(user);
    //console.log(usuario);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


