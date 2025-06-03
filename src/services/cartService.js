import { create, getAll, getById, remove, update } from "../repositories/cartRepository.js";

export const getAllCarts = async () => {
    try {
        return await getAll();
    } catch (error) {
        throw new Error(`Failed to retrieve carts. Reason: ${error.message}`);
    }
};

export const findCartById = async (id) => {
    try {
        return await getById(id);
    } catch (error) {
        throw new Error(`Unable to fetch cart with ID ${id}. Error: ${error.message}`);
    }  
};  

export const saveCart = async (cart) => {
    try {
        return await create(cart);
    } catch (error) {
        throw new Error(`Could not save the new cart (ID: ${cart.id}). Error: ${error.message}`);
    }  
};

export const updateCartDetails = async (id, cart) => {
    try {
        return await update(id, cart);
    } catch (error) {
        throw new Error(`Update failed for cart ID ${id}. Error details: ${error.message}`);
    }
};

export const removeCart = async (id) => {
    try {
        return await remove(id);
    } catch (error) {
        throw new Error(`Failed to delete cart with ID ${id}. Error: ${error.message}`);
    }   
};
