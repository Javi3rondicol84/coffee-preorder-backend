import { getAllUsers, findUserById, saveUser, updateUserDetails, removeUser } from "../services/userService.js"; 
export const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await findUserById(req.params.id);
        res.json(user);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to fetch the user' });
    }
}

export const createUser = async (req, res) => {
    try {
        const response = await saveUser(req.body);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to create the user' });
    }
}

export const updateUser = async (req, res) => {
    try {
        const response = await updateUserDetails(req.params.id, req.body);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to update the user' });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const response = await removeUser(req.params.id);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to delete the user' });
    }
}