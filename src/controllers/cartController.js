import { getAllCarts, findCartById, saveCart, updateCartDetails, removeCart } from "../services/cartService.js"; 

export const getCarts = async (req, res) => {
    try {
        const carts = await getAllCarts();
        res.json(carts);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to fetch carts' });
    }
}

export const getCart = async (req, res) => {
    try {
        const cart = await findCartById(req.params.id);
        res.json(cart);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to fetch the cart' });
    }
}

export const createCart = async (req, res) => {
    try {
        const response = await saveCart(req.body);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to create the cart' });
    }
}

export const updateCart = async (req, res) => {
    try {
        const response = await updateCartDetails(req.params.id, req.body);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to update the cart' });
    }
}

export const deleteCart = async (req, res) => {
    try {
        const response = await removeCart(req.params.id);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to delete the cart' });
    }
}
