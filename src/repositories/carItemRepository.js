import { CartItem } from "../models/cartItem.js";

export async function getAll() {
    try {
        return await CartItem.findAll();
    }
    catch(error) {

    }
}