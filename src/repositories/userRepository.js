import { User } from "../models/user.js";
import {create as createNewCart} from "./cartRepository.js";

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
    let message = "failed to create a user";
    try {
        const response = await User.create(user);

        let newUserId = response.dataValues.userId;

        let newCart = {
            userIdFk: newUserId
        }

        let cartCreationResponse = await createNewCart(newCart);

        if(response !== null && cartCreationResponse !== null) {
            message = "user created successfuly"
        }
        return message;
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

export async function getUserByEmail(email) {
    try {
        return await User.findOne({
            where: {
                email: email
            }
        });
    }
    catch(error) {
        console.error('Database error in getUserByEmail');
        throw new Error('Failed to retrieve user. Reason: ' + error.message);
    }
}