import bcrypt from 'bcrypt';
import { userModel } from '../models/user.models.js';
import { validateJWT } from '../helpers/validateJWT.js';
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
    Roles,
    TipoSangre,
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
    Roles,
    TipoSangre,
  });
  // Guardar el usuario en la base de datos
  await newUser.save();
  return {
    message: 'Usuario registrado',
  };
};

// obtener a todos los usuarios
userServices.getAllUsers = async () => {
  const users = await userModel.find();
  return users;
};

// obtener a un usuario por id
userServices.getUserById = async (id) => {
  const user = await userModel.findById(id);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }
  return user;
};

// compatibilidad con tipo de sangre donante y receptor
userServices.getBloodCompatibility = async (tokenData) => {
  const usuarioValido = await validateJWT(tokenData);
  if (!usuarioValido) {
    throw new Error('Usuario no autorizado');
  }
  // Buscar al usuario en la base de datos
  const receptorUser = await userModel.findOne({ _id: usuarioValido.id });
  // Verificar si el usuario existe
  if (!receptorUser) {
    throw new Error('Usuario no encontrado');
  }
  // Obtener el tipo de sangre del receptor
  const receptorTipoSangre = receptorUser.TipoSangre;
  // Verificar si el receptor tiene un tipo de sangre válido
  if (!receptorTipoSangre) {
    throw new Error('El receptor no tiene un tipo de sangre válido');
  }
  // Verificar compatibilidad de tipo de sangre
  const compatibleBloodTypes = {
    // Tipos de sangre compatibles con A+
    'A+': ['A+', 'A-', 'O+', 'O-'],
    // Tipos de sangre compatibles con A-
    'A-': ['A-', 'O-'],
    // Tipos de sangre compatibles con B+
    'B+': ['B+', 'B-', 'O+', 'O-'],
    // Tipos de sangre compatibles con B-
    'B-': ['B-', 'O-'],
    // Tipos de sangre compatibles con AB+
    'AB+': ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    // Tipos de sangre compatibles con AB-
    'AB-': ['A-', 'B-', 'AB-', 'O-'],
    // Tipos de sangre compatibles con O+
    'O+': ['O+', 'O-'],
    // Tipos de sangre compatibles con O-
    'O-': ['O-'],
  };
  // Verificar si el tipo de sangre del receptor es válido
  if (!compatibleBloodTypes[receptorTipoSangre]) {
    throw new Error('El receptor tiene un tipo de sangre inválido');
  } else {
    const compatibleUsers = await userModel.find({
      TipoSangre: { $in: compatibleBloodTypes[receptorTipoSangre] },
      Roles: 'Donante',
    });
    // Retornar los usuarios compatibles
    return {
      message: 'Tipos de sangre que son compatibles',
      // Solo retornar los campos necesarios
      compatibleUsers: compatibleUsers.map((user) => ({
        NombreUsuario: user.NombreUsuario,
        ApellidoUsuario: user.ApellidoUsuario,
        FechaNacimiento: user.FechaNacimiento,
        Pais: user.Pais,
        Email: user.Email,
        TipoSangre: user.TipoSangre,
        Roles: user.Roles,
      })),
    };
  }
};

// eliminar a un usuario por id
userServices.deleteUser = async (id) => {
  const user = await userModel.findOneAndDelete({ _id: id });
  if (!user) {
    throw new Error('Usuario no encontrado');
  }
  return {
    message: 'Usuario eliminado',
  };
};
