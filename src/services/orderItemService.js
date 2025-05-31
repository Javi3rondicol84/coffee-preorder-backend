export const getAllOrderItems = async () => {
    try {
        return "it works";
    }
    catch(error) {
        throw new Error('Error fetching order items');
    }
}

export const findOrderItemById = async (id) => {
    try {
        return "it works with id: " + id;
    }
    catch(error) {
        throw new Error('Error fetching order item');
    }  
}  

export const saveOrderItem = async (orderItem) => {
    try {
        return orderItem;
    }
    catch(error) {
        throw new Error('Error saving the new order item');
    }  
}

export const updateOrderItemDetails = async (id, orderItem) => {
    try {
        return orderItem.status + " is the new value for the order item with the id: " + id;
    }
    catch(error) {
        throw new Error('Error updating the order item with the id: " + id');
    }
}

export const removeOrderItem = async (id) => {
    try {
        return "the order item with the id " + id + " was removed";
    }
    catch(error) {
        throw new Error('Error fetching order items');
    }   
}
