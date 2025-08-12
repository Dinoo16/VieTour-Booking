import { useQuery } from '@tanstack/react-query';
import { getAllRegions } from '~/apiServices/regionService';

// Hook get all Regions
export const useRegions = () => {
    return useQuery({
        queryKey: ['Regions'],
        queryFn: getAllRegions,
        staleTime: 5 * 60 * 1000, // Cache 5 minutes
    });
};
