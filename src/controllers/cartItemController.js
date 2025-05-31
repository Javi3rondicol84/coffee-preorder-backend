import { getAllCartItems, findCartItemById, saveCartItem, updateCartItemDetails, removeCartItem } from "../services/cartItemService.js"; 

export const getCartItems = async (req, res) => {
    try {
        const cartItems = await getAllCartItems();
        res.json(cartItems);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to fetch cart items' });
    }
}

export const getCartItem = async (req, res) => {
    try {
        const cartItem = await findCartItemById(req.params.id);
        res.json(cartItem);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to fetch the cart item' });
    }
}

export const createCartItem = async (req, res) => {
    try {
        const response = await saveCartItem(req.body);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to create the cart item' });
    }
}

export const updateCartItem = async (req, res) => {
    try {
        const response = await updateCartItemDetails(req.params.id, req.body);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to update the cart item' });
    }
}

export const deleteCartItem = async (req, res) => {
    try {
        const response = await removeCartItem(req.params.id);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to delete the cart item' });
    }
}
