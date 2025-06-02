import { Category } from "../models/category.js"; 

export async function getAll() {
    try {
        return await Category.findAll();
    }
    catch(error) {

    }

}



