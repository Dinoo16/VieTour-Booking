import * as httpRequest from '~/utils/httpRequest';

export const createPayment = async (bookingId) => {
    try {
        const res = httpRequest.post(`/payments/create/${bookingId}`);
        return res;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Create payment failed');
    }
};

export const capturePayment = async (bookingId, orderId) => {
    try {
        const res = httpRequest.post(`/payments/capture/${bookingId}/${orderId}`);
        return res;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Capture payment failed');
    }
};

// Admin get all payments

export const getAllPayments = async () => {
    try {
        const res = httpRequest.get('/admin/payments');
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Get all payments failed');
    }
};

// User get all payments

// User get payment by id

