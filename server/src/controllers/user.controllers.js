import { userServices } from '../services/user.services.js';
import { userServices } from '../services/user.services.js';
export const userControllers = {};

userControllers.registerUser = async (req, res) => {
  try {
    const user = req.body;
    const response = await userServices.registerUser(user);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

userControllers.loginUser = async (req, res) => {
  try {
    const user = req.body;
    const response = await userServices.loginUser(user);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
