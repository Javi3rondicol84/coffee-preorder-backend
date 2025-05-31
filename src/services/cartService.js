export const getAllCarts = async () => {
    try {
        return "it works";
    }
    catch(error) {
        throw new Error('Error fetching carts');
    }
}

export const findCartById = async (id) => {
    try {
        return "it works with id: " + id;
    }
    catch(error) {
        throw new Error('Error fetching cart');
    }  
}  

export const saveCart = async (cart) => {
    try {
        return cart;
    }
    catch(error) {
        throw new Error('Error saving the new cart');
    }  
}

export const updateCartDetails = async (id, cart) => {
    try {
        return cart.status + " is the new value for the cart with the id: " + id;
    }
    catch(error) {
        throw new Error('Error updating the cart with the id: " + id');
    }
}

export const removeCart = async (id) => {
    try {
        return "the cart with the id " + id + " was removed";
    }
    catch(error) {
        throw new Error('Error fetching carts');
    }   
}
