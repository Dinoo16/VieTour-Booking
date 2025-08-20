import * as httpRequest from '~/utils/httpRequest';

// Admin get all schedule
export const getAllTourSchedules = async () => {
    try {
        const res = await httpRequest.get('/admin/schedules');
        return res;
    } catch (error) {
        console.log(error);
    }
};

// User get tour schedule by id
export const getTourScheduleById = async () => {
    try {
        const res = await httpRequest.get('/user/tour-schedules');
        return res;
    } catch (error) {
        console.log(error);
    }
};

// User get all tour schedules
