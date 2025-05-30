import { getAllCategories } from "../services/categoryService.js";

export const getCategories = async (req, res) => {
    try {
        const categories = await getAllCategories();
        res.json(categories);
    }
    catch(error) {
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
}
