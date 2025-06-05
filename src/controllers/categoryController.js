import { getAllCategories, findCategoryById, saveCategory, updateCategoryDetails, removeCategory, findCategoriesAndProducts } from "../services/categoryService.js";

export const getCategories = async (req, res) => {
    try {
        const categories = await getAllCategories();
        res.json(categories);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
}

export const getCategoriesAndProducts = async (req, res) => {
    try {
        const response = await findCategoriesAndProducts();
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to delete the category' });
    }
}

export const getCategory = async (req, res) => {
    try {
        const category = await findCategoryById(req.params.id);
        res.json(category);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to fetch the category' });
    }
}

export const createCategory = async (req, res) => {
    try {
        const response = await saveCategory(req.body);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to create the category' });
    }
}

export const updateCategory = async (req, res) => {
    try {
        const response = await updateCategoryDetails(req.params.id, req.body);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to update the category' });
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const response = await removeCategory(req.params.id);
        res.json(response);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to delete the category' });
    }
}


