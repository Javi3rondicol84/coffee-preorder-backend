import { saveUser, verifyUser } from './userService.js';
import {generateToken} from "../utils/token.js";

export const loginUser = async (data) => {
    try {
        let user = await verifyUser(data);
        console.log(user);
        return user;
    }
    catch(error) {
        return "error: "+error;
    }
}

export const registerUser = async (data) => {
    try {
        const response = await saveUser(data);

        if(response === null) {
            return null;
        }

        return response;
    }
    catch(error) {
        return "error: "+error;
    }
}