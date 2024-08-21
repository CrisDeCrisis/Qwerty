import jwt from 'jsonwebtoken';
import { userModel } from '../models/user.models.js';
import { JWT_SECRET } from '../config/config.envs.js';

export const validateJWT = async (token) => {
  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await userModel.findById(id);
    if (!user) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
