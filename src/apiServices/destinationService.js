import * as httpRequest from '~/utils/httpRequest';

export const getAllDestinations = async () => {
    try {
        const res = await httpRequest.get('/public/destinations');
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getDestinationById = async (id) => {
    try {
        const res = await httpRequest.get(`/public/destinations/${id}`);
        return res;
    } catch (error) {
        console.error(`Error fetching destination with ID ${id}:`, error);
        throw error;
    }
};

// Create destination by Admin
export const createDestination = async (destinationData) => {
    try {
        const res = await httpRequest.post('/admin/destinations', destinationData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.data;
    } catch (error) {
        console.error('Error creating destination:', error);
        throw error;
    }
};

// Update destination by ID
export const updateDestination = async (id, destinationData) => {
    try {
        return await httpRequest.put(`/admin/destinations/${id}`, destinationData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error(`Error updating destination with ID ${id}:`, error);
        throw error;
    }
};

// Delete destination by ID
export const deleteDestination = async (id) => {
    try {
        return await httpRequest.del(`/admin/destinations/${id}`);
    } catch (error) {
        console.error(`Error deleting destination with ID ${id}:`, error);
        throw error;
    }
};
