import { getAllOrderItems, findOrderItemById, saveOrderItem, updateOrderItemDetails, removeOrderItem } from "../services/orderItemService.js"; 

export const getOrderItems = async (req, res) => {
    try {
        const orderItems = await getAllOrderItems();
        res.json(orderItems);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to fetch order items' });
    }
}

export const getOrderItem = async (req, res) => {
    try {
        const orderItem = await findOrderItemById(req.params.id);
        res.json(orderItem);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to fetch the order item' });
    }
}

export const createOrderItem = async (req, res) => {
    try {
        const response = await saveOrderItem(req.body);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to create the order item' });
    }
}

export const updateOrderItem = async (req, res) => {
    try {
        const response = await updateOrderItemDetails(req.params.id, req.body);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to update the order item' });
    }
}

export const deleteOrderItem = async (req, res) => {
    try {
        const response = await removeOrderItem(req.params.id);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to delete the order item' });
    }
}
