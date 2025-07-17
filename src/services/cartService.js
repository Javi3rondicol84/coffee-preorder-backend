import { create, getAll, getById, remove, update, getCartIdByUserId } from "../repositories/cartRepository.js";
import { create as createCartItem } from "../repositories/cartItemRepository.js";

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

export const findCartIdByUserId = async (userId) => {
    try {
        return await getCartIdByUserId(userId);
    } catch (error) {
        throw new Error(`Unable to fetch cart with userId ${userId}. Error: ${error.message}`);
    }
};

export const saveCartItem = async (cartItem) => {
    try {

        //de cart item tomar el productId, userId y obtener mediante el userId el cart al que pertenece
        let productId = cartItem.productData.productId;
        let productPrice = cartItem.productData.price;
        let userId = cartItem.userId;
        let cartData = await findCartIdByUserId(userId);
        let cartId = cartData.dataValues.cartId;
        console.log("sssaaa"
        +cartId);

        let newCartItem = {
            cartIdFk: cartId,
            productIdFk: productId,
            price: productPrice,
            quantity: 1
        }

        console.log(newCartItem);

        return await createCartItem(newCartItem);
    } catch (error) {
        throw new Error(`Could not save the new cartItem ( Error: ${error.message}`);
    }
};