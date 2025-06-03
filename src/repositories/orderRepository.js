import { Order } from "../models/order.js";

export async function getAll() {
    try {
        return await Order.findAll();
    }
    catch(error) {
        console.error('Database error in getAll');
        throw new Error('Failed to retrieve orders');
    }
}

export async function getById(id) {
    try {
        return await Order.findByPk(id);
    }
    catch(error) {
        console.error('Database error in getById');
        throw new Error(`Failed to retrieve order with ID ${id}. Error: ${error.message}`);    
    }
}

export async function create(order) {
    try {
        return await Order.create(order);
    }
    catch(error) {
        console.error('Database error in create');
        throw new Error(`Failed to create an order. Error: ${error.message}`);       
    }
}

export async function update(id, order) {
    try {
        return await Order.update(order, {
            where: {
                orderId: id
            }
        });
    }
    catch(error) {
        console.error('Database error in update');
        throw new Error(`Failed to update order with ID ${id}. Error: ${error.message}`);    
    }
}

export async function remove(id) {
    try {
        return await Order.destroy({ 
            where: {
                orderId: id
            }
        });
    }
    catch(error) {
        console.error('Database error in remove');
        throw new Error(`Failed to remove order with ID ${id}. Error: ${error.message}`);     
    }
}
