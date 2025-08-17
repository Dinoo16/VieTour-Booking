import * as httpRequest from '~/utils/httpRequest';

// USER Get all Tour
export const getAllTours = async (sortBy) => {
    try {
        const res = await httpRequest.get(`/public/tours?sortBy=${sortBy}`);
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

// USER get tour by id
export const getTourById = async (id) => {
    try {
        const res = await httpRequest.get(`/public/tours/${id}`);
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

// Search tour by destination, category, days, budget
export const searchTours = async (destination, days, category, minPrice, maxPrice) => {
    try {
        const params = new URLSearchParams();
        if (destination) params.append('destination', destination);
        if (days) params.append('days', days);
        if (category) params.append('category', category);
        if (minPrice) params.append('minPrice', minPrice);
        if (maxPrice) params.append('maxPrice', maxPrice);

        const res = await httpRequest.get(`/public/tours/search?${params.toString()}`);
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

// Admin add tour
export const createTour = async (data) => {
    try {
        const res = await httpRequest.post(`/admin/tours`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.data;
    } catch (error) {
        console.error(`Error adding tour:`, error);
        throw error;
    }
};
// Admin update tour
export const updateTour = async (id, data) => {
    try {
        const res = await httpRequest.put(`/admin/tours/${id}`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.data;
    } catch (error) {
        console.error(`Error updating tour with ID ${id}:`, error);
        throw error;
    }
};

// Admin delete tour
export const deleteTour = async (id) => {
    try {
        return await httpRequest.del(`/admin/tours/${id}`);
    } catch (error) {
        console.error(`Error deleting tour with ID ${id}:`, error);
        throw error;
    }
};
