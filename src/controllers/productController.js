import { getAllProducts, findProductById, saveProduct, updateProductDetails, removeProduct } from "../services/productService.js"; 

export const getProducts = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
}

export const getProduct = async (req, res) => {
    try {
        const product = await findProductById(req.params.id);
        res.json(product);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to fetch the product' });
    }
}

export const createProduct = async (req, res) => {
    try {
        const response = await saveProduct(req.body);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to create the product' });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const response = await updateProductDetails(req.params.id, req.body);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to update the product' });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const response = await removeProduct(req.params.id);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to delete the product' });
    }
}
