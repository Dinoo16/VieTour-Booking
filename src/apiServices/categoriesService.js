import * as httpRequest from '~/utils/httpRequest';

// Get all categories
export const getAllCategories = async () => {
    try {
        const res = await httpRequest.get('/public/categories');
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
// Get category by id
export const getCategoryById = async (id) => {
    try {
        const res = await httpRequest.get(`/public/categories/${id}`);
        return res;
    } catch (error) {
        console.error(`Error fetching Category with ID ${id}:`, error);
        throw error;
    }
};

// Create category by Admin
export const createCategory = async (categoryData) => {
    try {
        const res = await httpRequest.post('/admin/categories', categoryData);
        return res.data;
    } catch (error) {
        console.error('Error creating Category:', error);
        throw error;
    }
};

// Update category by ID
export const updateCategoryAdmin = async (id, categoryData) => {
    try {
        return await httpRequest.put(`/admin/categories/${id}`, categoryData);
    } catch (error) {
        console.error(`Error updating category with ID ${id}:`, error);
        throw error;
    }
};

// Delete category by ID
export const deleteCategoryAdmin = async (id) => {
    try {
        return await httpRequest.del(`/admin/categories/${id}`);
    } catch (error) {
        console.error(`Error deleting category with ID ${id}:`, error);
        throw error;
    }
};
