export const getAllCategories = async () => {
    try {
        return "it works";
    }
    catch(error) {
        throw new Error('Error fetching categories');
    }
}

export const getCategoryById = async (id) => {
    try {
        return "it works with id: "+id;
    }
    catch(error) {
        throw new Error('Error fetching categories');
    }  
}  
