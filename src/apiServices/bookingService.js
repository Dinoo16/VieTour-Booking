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

// Save pending order
export const savePendingOrder = async (bookingId, orderId) => {
    try {
        const res = await httpRequest.post(`/user/bookings/${bookingId}/pending`, null, {
            params: { orderId },
        });
        return res.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Save pending order failed');
    }
};
// Mark paid order
export const markPaid = async (orderId, captureId) => {
    try {
        const res = await httpRequest.post(`/user/bookings/paid`, null, {
            params: { orderId, captureId },
        });
        return res.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Mark paid failed');
    }
};

// Mark failed order
export const markFailed = async (orderId) => {
    try {
        const res = await httpRequest.post(`/user/bookings/failed`, null, {
            params: { orderId },
        });
        return res.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Mark failed failed');
    }
};


// Update booking
export const updateBooking = async (id, bookingData) => {
    try {
        return await httpRequest.put(`/user/bookings/${id}`, bookingData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Update Booking failed');
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
