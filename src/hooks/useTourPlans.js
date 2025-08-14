import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllTourPlans, createTourPlans, updateTourPlans } from '~/apiServices/tourPlanService';

// Hook get all Tour PLans
export const useTourPlans = () => {
    return useQuery({
        queryKey: ['tourPlans'],
        queryFn: getAllTourPlans,
        staleTime: 5 * 60 * 1000, // Cache 5 minutes
    });
};

// Hook create TourPlans by admin
export const useCreateTourPlans = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createTourPlans,
        onSuccess: () => {
            queryClient.invalidateQueries(['tourPlans', 'admin']);
        },
    });
};

// Hook update TourPlans by admin
export const useUpdateTourPlans = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateTourPlans,
        onSuccess: () => {
            queryClient.invalidateQueries(['tourPlans', 'admin']);
        },
    });
};
