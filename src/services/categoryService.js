import { create, getAll, getAllWithProducts, getById, remove, update } from "../repositories/categoryRepository.js";

export const getAllCategories = async () => {
    try {
        return await getAll();
    } catch (error) {
        throw new Error(`Failed to retrieve categories. Reason: ${error.message}`);
    }
};

export const findCategoriesAndProducts = async (limit) => {
    try {
        return await getAllWithProducts(Number(limit));
    } catch (error) {
        throw new Error(`Failed to delete category with ID ${id}. Error: ${error.message}`);
    }   
};

export const findCategoryById = async (id) => {
    try {
        return await getById(id);
    } catch (error) {
        throw new Error(`Unable to fetch category with ID ${id}. Error: ${error.message}`);
    }  
};  

export const saveCategory = async (category) => {
    try {
        return await create(category);
    } catch (error) {
        throw new Error(`Could not save the new category (${category.name}). Error: ${error.message}`);
    }  
};

export const updateCategoryDetails = async (id, category) => {
    try {
        return await update(id, category);
    } catch (error) {
        throw new Error(`Update failed for category ID ${id}. Error details: ${error.message}`);
    }
};

export const removeCategory = async (id) => {
    try {
        return await remove(id);
    } catch (error) {
        throw new Error(`Failed to delete category with ID ${id}. Error: ${error.message}`);
    }   
};


