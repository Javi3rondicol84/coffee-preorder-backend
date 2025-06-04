import { Product } from "../models/product.js";

export async function getAll(offset, limit) {
    try {
        return await Product.findAll( {offset: offset, limit: limit, order: [['product_id', 'ASC']]} );
    }
    catch(error) {
        console.error('Database error in getAll');
        throw new Error('Failed to retrieve products');
    }
}

export async function getById(id) {
    try {
        return await Product.findByPk(id);
    }
    catch(error) {
        console.error('Database error in getById');
        throw new Error('Failed to retrieve product');    
    }
}

export async function create(product) {
    try {
        return await Product.create(product);
    }
    catch(error) {
         console.error('Database error in create');
        throw new Error('Failed to create a product');       
    }
}

export async function update(id, product) {
    try {
        return await Product.update(product,
            {
                where: {
                    productId: id
                }
            }
        );
    }
    catch(error) {
        console.error('Database error in update');
        throw new Error('Failed to update a product');    
    }
}

export async function remove(id) {
    try {
        return await Product.destroy( 
            { 
                where: {
                    productId: id
                }
            } );
    }
    catch(error) {
        console.error('Database error in remove');
        throw new Error('Failed to remove a product');     
    }
}