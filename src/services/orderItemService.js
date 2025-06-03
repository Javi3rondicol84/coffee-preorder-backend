import { create, getAll, getById, remove, update } from "../repositories/orderItemRepository.js";

export const getAllOrderItems = async () => {
    try {
        return await getAll();
    } catch (error) {
        throw new Error(`Failed to retrieve order items. Reason: ${error.message}`);
    }
};

export const findOrderItemById = async (id) => {
    try {
        return await getById(id);
    } catch (error) {
        throw new Error(`Unable to fetch order item with ID ${id}. Error: ${error.message}`);
    }  
};  

export const saveOrderItem = async (orderItem) => {
    try {
        return await create(orderItem);
    } catch (error) {
        throw new Error(`Could not save the new order item (ID: ${orderItem.id}). Error: ${error.message}`);
    }  
};

export const updateOrderItemDetails = async (id, orderItem) => {
    try {
        return await update(id, orderItem);
    } catch (error) {
        throw new Error(`Update failed for order item ID ${id}. Error details: ${error.message}`);
    }
};

export const removeOrderItem = async (id) => {
    try {
        return await remove(id);
    } catch (error) {
        throw new Error(`Failed to delete order item with ID ${id}. Error: ${error.message}`);
    }   
};
