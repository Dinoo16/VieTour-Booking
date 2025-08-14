import * as httpRequest from '~/utils/httpRequest';

// Get all Tour plans
export const getAllTourPlans = async () => {
    try {
        const res = await httpRequest.get('/public/tour-plans');
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

// Create multiple tour plan by admin
export const createTourPlans = async (tourPlanDatas) => {
    try {
        const res = await httpRequest.post('/admin/tour-plans/multiple', tourPlanDatas, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res;
    } catch (error) {
        console.error('Error creating tour plan:', error);
        throw error;
    }
};

// Update multiple tour plan by admin

export const updateTourPlans = async (tourPlanDatas) => {
    try {
        return await httpRequest.put('/admin/tour-plans/multiple', tourPlanDatas, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error(`Error updating tour plan:`, error);
        throw error;
    }
};
