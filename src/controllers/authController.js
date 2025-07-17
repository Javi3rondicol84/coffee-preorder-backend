import { loginUser, registerUser } from "../services/authService.js";

export const login = async (req, res) => {
    try {
        const data = req.body;
        const response = await loginUser(data);
        res.status(200).json(response);
    }
    catch(error) {
        console.error(error);
    }

}
export const register = async (req, res) => {
    try {
        const data = req.body;
        const response = await registerUser(data);
        res.status(200).json(response);
    }
    catch(error) {
        console.error(error);
    }

}