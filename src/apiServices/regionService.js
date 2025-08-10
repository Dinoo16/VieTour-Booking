import * as httpRequest from '~/utils/httpRequest';

// Get all regions
export const getAllRegions = async () => {
    try {
        const res = await httpRequest.get('/public/regions');
        return res;
    } catch (error) {
        console.log(error);
    }
};
