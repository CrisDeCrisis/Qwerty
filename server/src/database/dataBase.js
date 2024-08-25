import mongoose from "mongoose";
import { MONGODB_URL } from "../config/config.envs.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log(
            `💻 conexion exitosa a la base de datos: ${mongoose.connection.name} 💻`
        );
        return mongoose.connection;
    } catch (error) {
        console.log('Error al conectar a la base de datos!', error);
    }
};