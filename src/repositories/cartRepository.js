import { Cart } from "../models/cart.js";

export async function getAll() {
    try {
        return await Cart.findAll();
    }
    catch(error) {
        console.error('Database error in getAll');
        throw new Error('Failed to retrieve carts. Reason: ' + error.message);
    }
}

export async function getById(id) {
    try {
        return await Cart.findByPk(id);
    }
    catch(error) {
        console.error('Database error in getById');
        throw new Error(`Failed to retrieve cart with ID ${id}. Error: ${error.message}`);    
    }
}

export async function create(cart) {
    try {
        return await Cart.create(cart);
    }
    catch(error) {
        console.error('Database error in create');
        throw new Error(`Failed to create a cart. Error: ${error.message}`);       
    }
}

export async function update(id, cart) {
    try {
        return await Cart.update(cart, {
            where: {
                cartId: id
            }
        });
    }
    catch(error) {
        console.error('Database error in update');
        throw new Error(`Failed to update cart with ID ${id}. Error: ${error.message}`);    
    }
}

export async function remove(id) {
    try {
        return await Cart.destroy({ 
            where: {
                cartId: id
            }
        });
    }
    catch(error) {
        console.error('Database error in remove');
        throw new Error(`Failed to remove cart with ID ${id}. Error: ${error.message}`);     
    }
}

export async function getCartIdByUserId(userId) {

    try {
        return await Cart.findOne( {
            where: {
                userIdFk: userId
            },
            attributes: ['cartId']
        });
    }
    catch(error) {
        console.error('Database error in getById');
        throw new Error(`Failed to retrieve cartId with userID ${userId}. Error: ${error.message}`);
    }
}


