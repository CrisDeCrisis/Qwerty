import { v2 as cloudinary } from 'cloudinary';
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} from '../config/config.envs.js';

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export const uploadImage = async (filePath) => {
  try {
    const response = await cloudinary.uploader.upload(filePath, {
      folder: 'api',
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteImage = async (public_id) => {
  try {
    const response = await cloudinary.uploader.destroy(public_id);
    return response;
  } catch (error) {
    console.log(error);
  }
};
