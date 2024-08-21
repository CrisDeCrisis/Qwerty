import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    NombreUsuario: {
      type: String,
      required: true,
      unique: true,
    },
    ApellidoUsuario: {
      type: String,
      required: true,
    },
    Genero: {
      type: String,
      required: true,
    },
    FechaNacimiento: {
      type: Date,
      required: true,
    },
    Pais: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Contrasenia: {
      type: String,
      required: true,
      unique: true,
    },
    Roles: {
      type: String,
      required: true,
    },
    TipoSangre: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = model('User', userSchema);
