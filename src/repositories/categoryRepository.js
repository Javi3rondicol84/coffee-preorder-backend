import { Category } from "../models/category.js"; 
import { Product } from "../models/product.js";

export async function getAll() {
    try {
        return await Category.findAll();
    }
    catch(error) {
        console.error('Database error in getAll', error);
        throw new Error('Failed to retrieve categories');
    }
}

export async function getAllWithProducts() {
    try {
        return await Category.findAll({
            include: {
                model: Product
            }
        });
    }
    catch(error) {
        console.error('Database error in getAll', error);
        throw new Error('Failed to retrieve categories');
    }
}

export async function getById(id) {
    try {
        return await Category.findByPk(id);
    }
    catch(error) {
        console.error('Database error in getById', error);
        throw new Error('Failed to retrieve categories');
    }
}

export async function create(category) {
    try {
        return await Category.create(category);
    }
    catch(error) {
        console.error('Database error in create', error);
        throw new Error('Failed to retrieve a category');
    }
}

export async function update(id, category) {
    try {
        return await Category.update( 
            category,
            {
                where: {
                    categoryId: id
                }
            }
        );
    }
    catch(error) {
        console.error('Database error in update', error);
        throw new Error('Failed to update a category');
    }
}

export async function remove(id) {
    try {
        return await Category.destroy(
            {
                where: {
                    categoryId: id
                }
            }
        )
    }   
    catch(error) {
        console.error('Database error in remove', error);
        throw new Error('Failed to remove a category');
    }
}



