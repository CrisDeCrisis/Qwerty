import { app } from './app.js';
import { connectDB } from './database/dataBase.js';
import { PORT } from './config/config.envs.js';

//ponemos en escucha al servidor
app.listen(PORT, () => {
    connectDB();
    console.log(`🚀 Servidor corriendo en el puerto: ${PORT} 🚀`);
});