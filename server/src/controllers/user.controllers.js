import { userServices } from '../services/user.services.js';
export const userControllers = {};

userControllers.registerUser = async (req, res) => {
  try {
    const user = req.body;
    const response = await userServices.registerUser(user);
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
