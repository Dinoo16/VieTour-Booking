import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import {
    createBooking,
    savePendingOrder,
    markPaid,
    markFailed,
    updateBooking,
    getAllBookings,
    getBookingById,
    userGetAllBookings,
} from '~/apiServices/bookingService';

// Hook create booking
export const useCreateBooking = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createBooking,
        onSuccess: () => {
            queryClient.invalidateQueries(['bookings']);
        },
    });
};

// Hook save pending order
export const useSavePendingOrder = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ bookingId, orderId }) => savePendingOrder(bookingId, orderId),
        onSuccess: () => {
            queryClient.invalidateQueries(['bookings']);
        },
    });
};

// Hook mark paid
export const useMarkPaid = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ orderId, captureId }) => markPaid(orderId, captureId),
        onSuccess: () => {
            queryClient.invalidateQueries(['bookings']);
        },
    });
};

// Hook mark paid
export const useMarkFailed = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (orderId) => markFailed(orderId),
        onSuccess: () => {
            queryClient.invalidateQueries(['bookings']);
        },
    });
};

// Hook update booking (user)
export const useUpdateBooking = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updateData) => updateBooking(updateData.id, updateData),
        onSuccess: (_data, variables) => {
            queryClient.invalidateQueries(['bookings']);
            queryClient.invalidateQueries(['booking', variables.id]);
        },
    });
};

// Hook get all bookings (admin)
export const useBookings = () => {
    return useQuery({
        queryKey: ['adminbookings'],
        queryFn: getAllBookings,
        staleTime: 5 * 60 * 1000,
    });
};

// Hook get booking by id (user)
export const useBooking = (id) => {
    return useQuery({
        queryKey: ['booking', id],
        queryFn: () => getBookingById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
};

// Hook get all bookings (user)
export const useBookingsUser = () => {
    return useQuery({
        queryKey: ['userBookings'],
        queryFn: userGetAllBookings,
        staleTime: 5 * 60 * 1000,
    });
};
