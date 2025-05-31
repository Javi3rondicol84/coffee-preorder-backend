import { getAllOrders, findOrderById, saveOrder, updateOrderDetails, removeOrder } from "../services/orderService.js"; 

export const getOrders = async (req, res) => {
    try {
        const orders = await getAllOrders();
        res.json(orders);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
}

export const getOrder = async (req, res) => {
    try {
        const order = await findOrderById(req.params.id);
        res.json(order);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to fetch the order' });
    }
}

export const createOrder = async (req, res) => {
    try {
        const response = await saveOrder(req.body);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to create the order' });
    }
}

export const updateOrder = async (req, res) => {
    try {
        const response = await updateOrderDetails(req.params.id, req.body);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to update the order' });
    }
}

export const deleteOrder = async (req, res) => {
    try {
        const response = await removeOrder(req.params.id);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to delete the order' });
    }
}
