import { User } from "../models/user.js";

export async function getAll() {
    try {
        return await User.findAll();
    }
    catch(error) {
        console.error('Database error in getAll');
        throw new Error('Failed to retrieve users. Reason: ' + error.message);
    }
}

export async function getById(id) {
    try {
        return await User.findByPk(id);
    }
    catch(error) {
        console.error('Database error in getById');
        throw new Error(`Failed to retrieve user with ID ${id}. Error: ${error.message}`);    
    }
}

export async function create(user) {
    try {
        return await User.create(user);
    }
    catch(error) {
        console.error('Database error in create');
        throw new Error(`Failed to create a user. Error: ${error.message}`);       
    }
}

export async function update(id, user) {
    try {
        return await User.update(user, {
            where: {
                userId: id
            }
        });
    }
    catch(error) {
        console.error('Database error in update');
        throw new Error(`Failed to update user with ID ${id}. Error: ${error.message}`);    
    }
}

export async function remove(id) {
    try {
        return await User.destroy({ 
            where: {
                userId: id
            }
        });
    }
    catch(error) {
        console.error('Database error in remove');
        throw new Error(`Failed to remove user with ID ${id}. Error: ${error.message}`);     
    }
}
