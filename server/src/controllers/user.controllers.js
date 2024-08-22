import { userServices } from '../services/user.services.js';
import { authServices } from '../services/auth.services.js';
export const userControllers = {};

userControllers.registerUser = async (req, res) => {
  try {
    const user = req.body;
    const response = await userServices.registerUser(user);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

userControllers.loginUser = async (req, res) => {
  try {
    const user = req.body;
    const response = await authServices.loginUser(user);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

userControllers.getAllUsers = async (req, res) => {
  try {
    const response = await userServices.getAllUsers();
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

userControllers.getBloodCompatibility = async (req, res) => {
  try {
    const token = req.headers.token;
    const response = await userServices.getBloodCompatibility(token);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

userControllers.getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await userServices.getUserById(id);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

userControllers.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.body;
    const response = await userServices.updateUser(id, user);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
