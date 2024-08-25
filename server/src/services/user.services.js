// Importar bcrypt para el hashing de contraseñas
import bcrypt from 'bcrypt';
// Importar el modelo de usuario
import { userModel } from '../models/user.models.js';

// Definir el objeto de servicios de usuario
export const userServices = {};

// Función para registrar un nuevo usuario
userServices.registerUser = async (user) => {
  const {
    NombreUsuario,
    ApellidoUsuario,
    Genero,
    FechaNacimiento,
    Pais,
    Email,
    Contrasenia,
    Roles,
    TipoSangre,
  } = user;

  // Validar campos obligatorios
  if (!Email || !Contrasenia) {
    throw new Error('Los campos Email y Contrasenia son obligatorios');
  }

  // Verificar si el usuario ya existe
  const userExists = await userModel.findOne({ Email });
  if (userExists) {
    throw new Error('El email ya está registrado');
  }

  // Hashear la contraseña
  const hashPassword = await bcrypt.hash(Contrasenia, 10);

  // Crear un nuevo usuario
  const newUser = new userModel({
    NombreUsuario,
    ApellidoUsuario,
    Genero,
    FechaNacimiento,
    Pais,
    Email,
    Contrasenia: hashPassword,
    Roles,
    TipoSangre,
  });

  // Guardar el nuevo usuario en la base de datos
  await newUser.save();
  return { message: 'Usuario registrado' };
};

// Función para obtener todos los usuarios
userServices.getAllUsers = async () => {
  return await userModel.find();
};

// Función para obtener un usuario por su ID
userServices.getUserById = async (id) => {
  const user = await userModel.findById(id);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }
  return user;
};

// Función para obtener la compatibilidad de sangre
userServices.getBloodCompatibility = async (receptor) => {
  const receptorUser = await userModel.findById(receptor);
  if (!receptorUser || !receptorUser.TipoSangre) {
    throw new Error('Usuario no encontrado o tipo de sangre inválido');
  }

  // Definir los tipos de sangre compatibles
  const compatibleBloodTypes = {
    'A+': ['A+', 'A-', 'O+', 'O-'],
    'A-': ['A-', 'O-'],
    'B+': ['B+', 'B-', 'O+', 'O-'],
    'B-': ['B-', 'O-'],
    'AB+': ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    'AB-': ['A-', 'B-', 'AB-', 'O-'],
    'O+': ['O+', 'O-'],
    'O-': ['O-'],
  };

  // Buscar usuarios compatibles
  const compatibleUsers = await userModel.find({
    TipoSangre: { $in: compatibleBloodTypes[receptorUser.TipoSangre] },
    Roles: 'Donante',
  });

  // Retornar los usuarios compatibles
  return {
    message: 'Tipos de sangre que son compatibles',
    compatibleUsers: compatibleUsers.map(({ NombreUsuario, ApellidoUsuario, FechaNacimiento, Pais, Email, TipoSangre, Roles }) => ({
      NombreUsuario,
      ApellidoUsuario,
      FechaNacimiento,
      Pais,
      Email,
      TipoSangre,
      Roles,
    })),
  };
};

// Función para eliminar un usuario por su ID
userServices.deleteUser = async (id) => {
  const user = await userModel.findByIdAndDelete(id);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }
  return { message: 'Usuario eliminado' };
};