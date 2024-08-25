import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { userRoutes } from './routes/user.routes.js';
import { productRoutes } from './routes/product.routes.js';

export const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/user', userRoutes);
app.use('/product', productRoutes);
