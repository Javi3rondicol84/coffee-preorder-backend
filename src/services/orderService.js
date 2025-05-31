export const getAllOrders = async () => {
    try {
        return "it works";
    }
    catch(error) {
        throw new Error('Error fetching orders');
    }
}

export const findOrderById = async (id) => {
    try {
        return "it works with id: " + id;
    }
    catch(error) {
        throw new Error('Error fetching order');
    }  
}  

export const saveOrder = async (order) => {
    try {
        return order;
    }
    catch(error) {
        throw new Error('Error saving the new order');
    }  
}

export const updateOrderDetails = async (id, order) => {
    try {
        return order.status + " is the new value for the order with the id: " + id;
    }
    catch(error) {
        throw new Error('Error updating the order with the id: " + id');
    }
}

export const removeOrder = async (id) => {
    try {
        return "the order with the id " + id + " was removed";
    }
    catch(error) {
        throw new Error('Error fetching orders');
    }   
}
