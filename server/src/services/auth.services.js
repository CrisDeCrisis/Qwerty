import bcrypt from 'bcrypt';
import { userModel } from '../models/user.models.js';
import { generarJWT } from '../helpers/generateJWT.js';

export const authServices = {};

authServices.loginUser = async (user) => {
  const { Email, Contrasenia } = user;
  const userExists = await userModel.findOne({ Email });
  // Verificar que el email exista en la base de datos
  if (!userExists) {
    throw new Error('El usuario no esta registrado');
  }
  // Verificar que los campos no sean nulos
  if (!Email || !Contrasenia) {
    throw new Error('debes ingresar un email y una contraseña');
  }
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
