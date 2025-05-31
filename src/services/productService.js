export const getAllProducts = async () => {
    try {
        return "it works";
    }
    catch(error) {
        throw new Error('Error fetching products');
    }
}

export const findProductById = async (id) => {
    try {
        return "it works with id: " + id;
    }
    catch(error) {
        throw new Error('Error fetching product');
    }  
}  

export const saveProduct = async (product) => {
    try {
        return product;
    }
    catch(error) {
        throw new Error('Error saving the new product');
    }  
}

export const updateProductDetails = async (id, product) => {
    try {
        return product.name + " is the new value for the product with the id: " + id;
    }
    catch(error) {
        throw new Error('Error updating the product with the id: " + id');
    }
}

export const removeProduct = async (id) => {
    try {
        return "the product with the id " + id + " was removed";
    }
    catch(error) {
        throw new Error('Error fetching products');
    }   
}
