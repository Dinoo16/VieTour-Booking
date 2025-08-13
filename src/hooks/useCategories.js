import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
} from '~/apiServices/categoriesService';

// Hook get all Categories
export const useCategories = () => {
    return useQuery({
        queryKey: ['Categories'],
        queryFn: getAllCategories,
        staleTime: 5 * 60 * 1000, // Cache 5 minutes
    });
};

// Hook get Category by id
export const useCategory = (id) => {
    return useQuery({
        queryKey: ['Category', id],
        queryFn: () => getCategoryById(id),
        enabled: !!id, // chỉ chạy khi có id
        staleTime: 5 * 60 * 1000,
    });
};

// Hook create Category by admin
export const useCreateCategory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createCategory,
        onSuccess: () => {
            queryClient.invalidateQueries(['categories']);
        },
    });
};

// Hook update Category by admin
export const useUpdateCategory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updateData) => updateCategory(updateData.categoryId, updateData),
        onSuccess: (_data, variables) => {
            queryClient.invalidateQueries(['categories']);
            queryClient.invalidateQueries(['category', variables.categoryId]);
        },
    });
};

// Hook delete Category by admin
export const useDeleteCategory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteCategory,
        onSuccess: () => {
            queryClient.invalidateQueries(['categories']);
        },
    });
};
