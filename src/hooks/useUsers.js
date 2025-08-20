import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { getAllUsers } from '~/apiServices/adminUserService';

// Hook get all users
export const useUsers = () => {
    return useQuery({
        queryKey: ['adminUsers'],
        queryFn: getAllUsers,
        staleTime: 5 * 60 * 1000,
    });
};
