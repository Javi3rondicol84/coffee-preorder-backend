import { create, getAll, getById, remove, update } from "../repositories/productRepository.js";

export const getAllProducts = async () => {
    try {
        return await getAll();
    } catch (error) {
        throw new Error(`Failed to retrieve products. Reason: ${error.message}`);
    }
};

export const findProductById = async (id) => {
    try {
        return await getById(id);
    } catch (error) {
        throw new Error(`Unable to fetch product with ID ${id}. Error: ${error.message}`);
    }  
};  

export const saveProduct = async (product) => {
    try {
        return await create(product);
    } catch (error) {
        throw new Error(`Could not save the new product (${product.name}). Error: ${error.message}`);
    }  
};

export const updateProductDetails = async (id, product) => {
    try {
        return await update(id, product);
    } catch (error) {
        throw new Error(`Update failed for product ID ${id}. Error details: ${error.message}`);
    }
};

export const removeProduct = async (id) => {
    try {
        return await remove(id);
    } catch (error) {
        throw new Error(`Failed to delete product with ID ${id}. Error: ${error.message}`);
    }   
};