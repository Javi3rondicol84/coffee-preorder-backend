import { create, getAll, getById, remove, update } from "../repositories/cartItemRepository.js";

export const getAllCartItems = async () => {
    try {
        return await getAll();
    } catch (error) {
        throw new Error(`Failed to retrieve cart items. Reason: ${error.message}`);
    }
};

export const findCartItemById = async (id) => {
    try {
        return await getById(id);
    } catch (error) {
        throw new Error(`Unable to fetch cart item with ID ${id}. Error: ${error.message}`);
    }  
};  

export const saveCartItem = async (cartItem) => {
    try {
        return await create(cartItem);
    } catch (error) {
        throw new Error(`Could not save the new cart item (ID: ${cartItem.id}). Error: ${error.message}`);
    }  
};

export const updateCartItemDetails = async (id, cartItem) => {
    try {
        return await update(id, cartItem);
    } catch (error) {
        throw new Error(`Update failed for cart item ID ${id}. Error details: ${error.message}`);
    }
};

export const removeCartItem = async (id) => {
    try {
        return await remove(id);
    } catch (error) {
        throw new Error(`Failed to delete cart item with ID ${id}. Error: ${error.message}`);
    }   
};
