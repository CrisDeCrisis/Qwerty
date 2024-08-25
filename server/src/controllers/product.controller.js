import { productService } from '../services/product.service.js';

export const productControllers = {};

productControllers.addProduct = async (req, res) => {
    const product = req.body;
    try {
        const newProduct = await productService.addProduct(product);
        newProduct.save();
        return res.status(201).json({ product: newProduct });
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Error del servidor' })
    }
};

productControllers.getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        return res.status(200).json(products);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
}

productControllers.getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productService.getProductById(id);
        return res.status(200).json(product);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
}

productControllers.updateProductById = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    try {
        const updatedProduct = await productService.updateProductById(id, product);
        return res.status(200).json(updatedProduct);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
}

productControllers.deleteProductById = async (req, res) => {
    const { id } = req.params;
    try {
        await productService.deleteProductById(id);
        return res.status(200).json({ message: 'Producto eliminado' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
}