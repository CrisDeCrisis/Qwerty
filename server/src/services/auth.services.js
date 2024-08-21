import bcrypt from 'bcrypt';
import { userModel } from '../models/user.models.js';
import { generarJWT } from '../helpers/generateJWT.js';

export const authServices = {};

authServices.loginUser = async (user) => {
  const { Email, Contrasenia } = user;
  const userExists = await userModel.findOne({ Email });
  // Verificar que el email exista en la base de datos
  if (!userExists) {
    throw new Error('El email no está registrado');
  }
  // Verificar que el email no sea nulo
  if (!Email) {
    throw new Error('El campo Email es obligatorio');
  }
  if (!Contrasenia) {
    throw new Error('El campo Contrasenia es obligatorio');
  }
  // Verificar que la contraseña sea correcta
  const validPassword = bcrypt.compareSync(Contrasenia, userExists.Contrasenia);
  if (!validPassword) {
    throw new Error('La contraseña o el email son incorrectos');
  }
  // Generar el token
  const token = await generarJWT({ id: userExists._id });
  return {
    message: 'Usuario logueado',
    token,
  };
};
