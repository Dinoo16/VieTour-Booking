import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    getAllTours,
    getTourById,
    searchTours,
    createTour,
    updateTour,
    deleteTour,
    getTrendingTours,
} from '~/apiServices/tourService';

// Hook get all Tours
export const useTours = (sortBy) => {
    return useQuery({
        queryKey: ['tours', sortBy],
        queryFn: () => getAllTours(sortBy),
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
// Hook get trending tours
export const useTrendingTours = () => {
    return useQuery({
        queryKey: ['trendingTours'],
        queryFn: getTrendingTours,
        staleTime: 5 * 60 * 1000, // Cache 5 minutes
    });
};

// Hook search tour
export const useSearchTours = (destination, days, category, minPrice, maxPrice, sortBy) => {
    return useQuery({
        queryKey: ['tours', destination, days, category, minPrice, maxPrice, sortBy],
        queryFn: () => searchTours(destination, days, category, minPrice, maxPrice, sortBy),
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
