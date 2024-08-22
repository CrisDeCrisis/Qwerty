import { Router } from 'express';
import { userControllers } from '../controllers/user.controllers.js';
export const userRoutes = Router();

userRoutes.get('/', userControllers.getAllUsers);
userRoutes.get('/:id', userControllers.getUserById);
userRoutes.put('/:id', userControllers.updateUser);
userRoutes.post('/register', userControllers.registerUser);
userRoutes.post('/login', userControllers.loginUser);
userRoutes.get('/compatibility/:id', userControllers.getBloodCompatibility);
