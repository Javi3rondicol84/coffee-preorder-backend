import { getAll } from "../repositories/carItemRepository.js";

export const getAllCartItems = async () => {
    try {
        return await getAll();
    }
    catch(error) {
        throw new Error('Error fetching cart items');
    }
}

export const findCartItemById = async (id) => {
    try {
        return "it works with id: " + id;
    }
    catch(error) {
        throw new Error('Error fetching cart item');
    }  
}  

export const saveCartItem = async (cartItem) => {
    try {
        return cartItem;
    }
    catch(error) {
        throw new Error('Error saving the new cart item');
    }  
}

export const updateCartItemDetails = async (id, cartItem) => {
    try {
        return cartItem.status + " is the new value for the cart item with the id: " + id;
    }
    catch(error) {
        throw new Error('Error updating the cart item with the id: " + id');
    }
}

export const removeCartItem = async (id) => {
    try {
        return "the cart item with the id " + id + " was removed";
    }
    catch(error) {
        throw new Error('Error fetching cart items');
    }   
}
