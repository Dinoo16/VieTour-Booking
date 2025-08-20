import * as httpRequest from '~/utils/httpRequest';

// Create bookings
export const createBooking = async (userData) => {
    try {
        const res = await httpRequest.post('/user/bookings', userData);
        return res;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Booking failed');
    }
};

// Get all bookings (admin)
export const getAllBookings = async () => {
    try {
        const res = await httpRequest.get('/admin/bookings');
        return res;
    } catch (error) {
        console.log(error);
    }
};

// User get booking by id
export const getBookingById = async (id) => {
    try {
        const res = await httpRequest.get(`/user/bookings/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

// User get all bookings
export const userGetAllBookings = async () => {
    try {
        const res = httpRequest.get('/user/bookings');
        return res;
    } catch (error) {
        console.log(error);
    }
};

// User get tours from 
