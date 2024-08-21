import { Router } from 'express';
import { userControllers } from '../controllers/user.controllers.js';
export const userRoutes = Router();

userRoutes.post('/register', userControllers.registerUser);
userRoutes.post('/login', userControllers.loginUser);
