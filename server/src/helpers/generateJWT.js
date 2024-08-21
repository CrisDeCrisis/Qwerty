import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config.envs.js';

export const generarJWT = (id) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      id,
      JWT_SECRET,
      {
        expiresIn: 60 * 60 * 24,
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('No se pudo generar el token');
        }
        resolve(token);
      }
    );
  });
};
