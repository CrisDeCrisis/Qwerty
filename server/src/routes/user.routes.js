import { Router } from 'express';
import { userControllers } from '../controllers/user.controllers.js';
export const userRoutes = Router();

userRoutes.post('/register', userControllers.registerUser);
userRoutes.post('/login', userControllers.loginUser);
userRoutes.get('/', userControllers.getAllUsers);
userRoutes.get('/compatibility/:id', userControllers.getBloodCompatibility);
