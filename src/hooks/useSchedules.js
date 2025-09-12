import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllTourSchedules, getTourScheduleById, userGetAllTourSchedule } from '~/apiServices/tourScheduleService';

// Hook get all Tour Schedule (Admin)
export const useTourSchedules = () => {
    return useQuery({
        queryKey: ['tourSchedules'],
        queryFn: getAllTourSchedules,
        staleTime: 5 * 60 * 1000,
    });
};

// Hook get tour schedule by id (admin)
export const useTourSchedule = (id) => {
    return useQuery({
        queryKey: ['tourSchedule', id],
        queryFn: () => getTourScheduleById,
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
};

// User get all tour schedule
export const useTourScheduleUser = () => {
    return useQuery({
        queryKey: ['tourSchedulesUser'],
        queryFn: userGetAllTourSchedule,
        staleTime: 5 * 60 * 1000,
    });
};
