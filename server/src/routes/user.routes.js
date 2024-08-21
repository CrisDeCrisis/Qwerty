import { Router } from 'express';
import { userControllers } from '../controllers/user.controllers.js';
const userRoutes = Router();

userRoutes.post('/register', userControllers.registerUser);
userRoutes.post('/login', userControllers.loginUser);
