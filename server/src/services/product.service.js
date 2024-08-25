import { productModel } from '../models/product.model.js';

export const productService = {};

productService.addProduct = async (product) => {
    try {
        const newProduct = await productModel.create(product);
        if (!newProduct) {
            throw new Error('Error al crear la tarea');
        }
        return newProduct;
    } catch (error) {
        console.error(error);
    }
};

productService.getAllProducts = async () => {
    try {
        const products = await productModel.find();
        return products;
    } catch (error) {
        console.error(error);
    }
};

productService.getProductById = async (id) => {
    try {
        const product = await productModel.findById(id);
        return product;
    } catch (error) {
        console.error(error);
    }
};

productService.updateProductById = async (id, product) => {
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(id, product, { new: true });
        return updatedProduct;
    }
    catch (error) {
        console.error(error);
    }
};

productService.deleteProductById = async (id) => {
    try {
        await productModel.findByIdAndDelete(id);
    } catch (error) {
        console.error(error);
    }
};