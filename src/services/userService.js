import { create, getAll, getById, remove, update } from "../repositories/userRepository.js";

export const getAllUsers = async () => {
    try {
        return await getAll();
    } catch (error) {
        throw new Error(`Failed to retrieve users. Reason: ${error.message}`);
    }
};

export const findUserById = async (id) => {
    try {
        return await getById(id);
    } catch (error) {
        throw new Error(`Unable to fetch user with ID ${id}. Error: ${error.message}`);
    }  
};  

export const saveUser = async (user) => {
    try {
        return await create(user);
    } catch (error) {
        throw new Error(`Could not save the new user (${user.name}). Error: ${error.message}`);
    }  
};

export const updateUserDetails = async (id, user) => {
    try {
        return await update(id, user);
    } catch (error) {
        throw new Error(`Update failed for user ID ${id}. Error details: ${error.message}`);
    }
};

export const removeUser = async (id) => {
    try {
        return await remove(id);
    } catch (error) {
        throw new Error(`Failed to delete user with ID ${id}. Error: ${error.message}`);
    }   
};
