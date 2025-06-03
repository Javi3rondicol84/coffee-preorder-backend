import { CartItem } from "../models/cartItem.js";

export async function getAll() {
    try {
        return await CartItem.findAll();
    }
    catch(error) {
        console.error('Database error in getAll');
        throw new Error('Failed to retrieve cart items. Reason: ' + error.message);
    }
}

export async function getById(id) {
    try {
        return await CartItem.findByPk(id);
    }
    catch(error) {
        console.error('Database error in getById');
        throw new Error(`Failed to retrieve cart item with ID ${id}. Error: ${error.message}`);    
    }
}

export async function create(cartItem) {
    try {
        return await CartItem.create(cartItem);
    }
    catch(error) {
        console.error('Database error in create');
        throw new Error(`Failed to create a cart item. Error: ${error.message}`);       
    }
}

export async function update(id, cartItem) {
    try {
        return await CartItem.update(cartItem, {
            where: {
                cartItemId: id
            }
        });
    }
    catch(error) {
        console.error('Database error in update');
        throw new Error(`Failed to update cart item with ID ${id}. Error: ${error.message}`);    
    }
}

export async function remove(id) {
    try {
        return await CartItem.destroy({ 
            where: {
                cartItemId: id
            }
        });
    }
    catch(error) {
        console.error('Database error in remove');
        throw new Error(`Failed to remove cart item with ID ${id}. Error: ${error.message}`);     
    }
}
