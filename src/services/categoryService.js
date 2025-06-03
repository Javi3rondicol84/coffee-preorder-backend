import { create, getAll, getById, remove, update } from "../repositories/categoryRepository.js";

export const getAllCategories = async () => {
    try {
        return await getAll();
    }
    catch(error) {
        throw new Error('Error fetching categories');
    }
}

export const findCategoryById = async (id) => {
    try {
        return await getById(id);
    }
    catch(error) {
        throw new Error('Error fetching categories');
    }  
}  

export const saveCategory = async (category) => {
    try {
        return await create(category);
    }
    catch(error) {
        throw new Error('Error saving the new category');
    }  
}

export const updateCategoryDetails = async (id, category) => {
    try {
        return await update(id, category);
    }
    catch(error) {
        throw new Error('Error updating the category with the id: '+id);
    }
}

export const removeCategory = async (id) => {
    try {
        return await remove(id);
    }
    catch(error) {
        throw new Error('Error fetching categories');

    }   
}