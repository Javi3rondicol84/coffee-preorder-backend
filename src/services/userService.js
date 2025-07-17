import { getUserByEmail, create, getAll, getById, remove, update } from "../repositories/userRepository.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generateToken, verifyToken } from "../utils/token.js";

export const getAllUsers = async () => {
    try {
        return await getAll();
    } catch (error) {
        throw new Error(`Failed to retrieve users. Reason: ${error.message}`);
    }
};

export const findUserById = async (id) => {
    try {
        return await getById(id);
    } catch (error) {
        throw new Error(`Unable to fetch user with ID ${id}. Error: ${error.message}`);
    }  
};  

export const saveUser = async (user) => {
    const saltRounds = 10;
    
    try {
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        const userHashed = {...user, password: hashedPassword};
        const response = await create(userHashed);
        console.log(response);
        return response;
    } catch (error) {
        throw new Error(`Could not save the new user (${user.name}). Error: ${error.message}`);
    }  
};

export const updateUserDetails = async (id, user) => {
    try {
        return await update(id, user);
    } catch (error) {
        throw new Error(`Update failed for user ID ${id}. Error details: ${error.message}`);
    }
};

export const removeUser = async (id) => {
    try {
        return await remove(id);
    } catch (error) {
        throw new Error(`Failed to delete user with ID ${id}. Error: ${error.message}`);
    }   
};

export const verifyUser = async (data) => {
    try {

       const response = await getUserByEmail(data.email);
       const user = response.dataValues;

       if(!user) {
         return null;
       }

       const match = await bcrypt.compare(data.password, user.password);

       if(!match) {
           console.log("password do not match!");

           return null;
       }

       console.log("logged!");
       return generateToken(user);
    }
    catch(error) {
        console.error("Error verifying user: "+error.message);
        throw new Error("Verification failed!");
    }
}