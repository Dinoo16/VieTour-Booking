import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createPayment, capturePayment, getAllPayments } from '~/apiServices/paymentService';
import { useNavigate } from 'react-router-dom';

// Hook create payments
export const useCreatePayment = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: createPayment,
        onSuccess: (data) => {
            // Paypal return approvalLink
            const approvalLink = data.approvalUrl;
            if (approvalLink) {
                sessionStorage.setItem('pendingPayment', data.bookingId);
                window.location.href = approvalLink; // redirect to PayPal
            } else {
                console.error('Approval Link not found');
            }
        },
        onError: (error) => {
            console.error('Create payment failed:', error);
        },
    });
};

// Hook capture payments
export const useCapturePayment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ bookingId, orderId }) => capturePayment(bookingId, orderId),
        onSuccess: (data) => {
            // Invalidate queries để refresh dữ liệu booking
            queryClient.invalidateQueries(['booking']);
            queryClient.invalidateQueries(['bookings']);
        },
        onError: (error) => {
            console.error('Capture payment failed:', error);
            throw error;
        },
    });
};

// Hook get all payments (admin)
export const usePayments = () => {
    return useQuery({
        queryKey: ['adminPayments'],
        queryFn: getAllPayments,
        staleTime: 5 * 60 * 1000,
    });
};
