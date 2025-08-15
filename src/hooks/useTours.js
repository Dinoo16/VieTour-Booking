import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllTours, getTourById, sortTours, createTour, updateTour, deleteTour } from '~/apiServices/tourService';

// Hook get all Tours
export const useTours = () => {
    return useQuery({
        queryKey: ['tours'],
        queryFn: getAllTours,
        staleTime: 5 * 60 * 1000, // Cache 5 minutes
    });
};

// Hook get tour by id
export const useTour = (id) => {
    return useQuery({
        queryKey: ['tour', id],
        queryFn: () => getTourById(id),
        enabled: !!id, // chỉ chạy khi có id
        staleTime: 5 * 60 * 1000,
    });
};

// Hook get tours sort by top picks, lowest price, best reviewed
export const useToursSort = (sortBy) => {
    return useQuery({
        queryKey: ['tours', sortBy],
        queryFn: () => sortTours(sortBy),
        staleTime: 5 * 60 * 1000,
    });
};

// Hook create tour by admin
export const useCreateTour = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createTour,
        onSuccess: () => {
            queryClient.invalidateQueries(['tours']);
        },
    });
};

// Hook update tour by admin
export const useUpdateTour = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updateData) => updateTour(updateData.id, updateData),
        onSuccess: (_data, variables) => {
            queryClient.invalidateQueries(['tours']);
            queryClient.invalidateQueries(['tour', variables.id]);
        },
    });
};

// Hook delete tour by admin
export const useDeleteTour = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteTour,
        onSuccess: () => {
            queryClient.invalidateQueries(['tours']);
        },
    });
};
