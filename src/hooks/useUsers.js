import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useUser } from '~/contexts/UserContext';
import { getAllUsers, updateUser } from '~/apiServices/adminUserService';

// Hook get all users
export const useUsers = () => {
    return useQuery({
        queryKey: ['adminUsers'],
        queryFn: getAllUsers,
        staleTime: 5 * 60 * 1000,
    });
};

// Hook update user
export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    const { fetchUser } = useUser();
    return useMutation({
        mutationFn: ({ id, userData, avatarFile }) => updateUser(id, userData, avatarFile),

        onSuccess: async () => {
            queryClient.invalidateQueries(['users']);
            await fetchUser();
        },
        onError: (error) => {
            console.error('Update user error:', error);
        },
    });
};
