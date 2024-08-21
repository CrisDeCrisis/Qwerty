import bcrypt from 'bcryptjs';
import { userModel } from '../models/user.models.js';
export const userServices = {};

userServices.registerUser = async (user) => {
  const {
    NombreUsuario,
    ApellidoUsuario,
    Genero,
    FechaNacimiento,
    Pais,
    Email,
    Contrasenia,
  } = user;
  // Verificar que el email no sea nulo
  if (!Email) {
    throw new Error('El campo Email es obligatorio');
  }
  if (!Contrasenia) {
    throw new Error('El campo Contrasenia es obligatorio');
  }
  // Verificar que el email no exista en la base de datos
  const userExists = await userModel.findOne({ Email });
  if (userExists) {
    throw new Error('El email ya está registrado');
  }
  // Encriptar la contraseña
  const hashPassword = bcrypt.hashSync(Contrasenia, 10);
  // Crear el usuario
  const newUser = new userModel({
    NombreUsuario,
    ApellidoUsuario,
    Genero,
    FechaNacimiento,
    Pais,
    Email,
    Contrasenia: hashPassword,
  });
  // Guardar el usuario en la base de datos
  await newUser.save();
  return {
    message: 'Usuario registrado',
  };
};
