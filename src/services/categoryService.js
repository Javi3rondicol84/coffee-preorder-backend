import { getAll } from "../repositories/categoryRepository.js";

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
        return "it works with id: "+id;
    }
    catch(error) {
        throw new Error('Error fetching categories');
    }  
}  

export const saveCategory = async (category) => {
    try {
        return category;
    }
    catch(error) {
        throw new Error('Error saving the new category');
    }  
}

export const updateCategoryDetails = async (id, category) => {
    try {
        return category.name + " is the new value for the category with the id: "+id;
    }
    catch(error) {
        throw new Error('Error updating the category with the id: '+id);
    }
}

export const removeCategory = async (id) => {
    try {
        return "the category with the id "+ id + " was removed";
    }
    catch(error) {
        throw new Error('Error fetching categories');

    }   
}