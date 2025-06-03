import { OrderItem } from "../models/orderItem.js";

export async function getAll() {
    try {
        return await OrderItem.findAll();
    }
    catch(error) {
        console.error('Database error in getAll');
        throw new Error('Failed to retrieve order items. Reason: ' + error.message);
    }
}

export async function getById(id) {
    try {
        return await OrderItem.findByPk(id);
    }
    catch(error) {
        console.error('Database error in getById');
        throw new Error(`Failed to retrieve order item with ID ${id}. Error: ${error.message}`);    
    }
}

export async function create(orderItem) {
    try {
        return await OrderItem.create(orderItem);
    }
    catch(error) {
        console.error('Database error in create');
        throw new Error(`Failed to create an order item. Error: ${error.message}`);       
    }
}

export async function update(id, orderItem) {
    try {
        return await OrderItem.update(orderItem, {
            where: {
                orderItemId: id
            }
        });
    }
    catch(error) {
        console.error('Database error in update');
        throw new Error(`Failed to update order item with ID ${id}. Error: ${error.message}`);    
    }
}

export async function remove(id) {
    try {
        return await OrderItem.destroy({ 
            where: {
                orderItemId: id
            }
        });
    }
    catch(error) {
        console.error('Database error in remove');
        throw new Error(`Failed to remove order item with ID ${id}. Error: ${error.message}`);     
    }
}
