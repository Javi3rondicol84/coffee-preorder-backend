import { getAllCategories, getCategoryById } from "../services/categoryService.js";

export const getCategories = async (req, res) => {
    try {
        const categories = await getAllCategories();
        res.json(categories);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
}

export const getCategory = async (req, res) => {
    try {
        const category = await getCategoryById(req.params.id);
        res.json(category);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to fetch the category' });
        
    }
}
