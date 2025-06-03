import { create, getAll, getById, remove, update } from "../repositories/orderRepository.js";

export const getAllOrders = async () => {
    try {
        return await getAll();
    } catch (error) {
        throw new Error(`Failed to retrieve orders. Reason: ${error.message}`);
    }
};

export const findOrderById = async (id) => {
    try {
        return await getById(id);
    } catch (error) {
        throw new Error(`Unable to fetch order with ID ${id}. Error: ${error.message}`);
    }  
};  

export const saveOrder = async (order) => {
    try {
        return await create(order);
    } catch (error) {
        throw new Error(`Could not save the new order (ID: ${order.id}). Error: ${error.message}`);
    }  
};

export const updateOrderDetails = async (id, order) => {
    try {
        return await update(id, order);
    } catch (error) {
        throw new Error(`Update failed for order ID ${id}. Error details: ${error.message}`);
    }
};

export const removeOrder = async (id) => {
    try {
        return await remove(id);
    } catch (error) {
        throw new Error(`Failed to delete order with ID ${id}. Error: ${error.message}`);
    }   
};
