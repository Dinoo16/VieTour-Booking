import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { createBooking, getAllBookings, getBookingById, userGetAllBookings } from '~/apiServices/bookingService';

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
