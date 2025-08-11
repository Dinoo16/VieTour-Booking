import * as httpRequest from '~/utils/httpRequest';

// USER Get all Tour
export const getAllTours = async () => {
    try {
        const res = await httpRequest.get('/public/tours');
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
