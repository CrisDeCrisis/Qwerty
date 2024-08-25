import dotenv from 'dotenv';

// inicializamos variable de entorno
dotenv.config();

// inicializamos las variables de entorno
export const PORT = process.env.PORT || 3000;
export const MONGODB_URL = process.env.MONGODB_URL;
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
export const JWT_SECRET = process.env.JWT_SECRET;
