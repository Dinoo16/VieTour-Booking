import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllTours, getTourById } from '~/apiServices/tourService';

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

// Hook create tour by admin

// Hook update tour by admin

// Hook delete tour by admin
