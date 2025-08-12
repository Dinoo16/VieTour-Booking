import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    getAllDestinations,
    getDestinationById,
    createDestination,
    updateDestination,
    deleteDestination,
} from '~/apiServices/destinationService';

// Hook get all destinations
export const useDestinations = () => {
    return useQuery({
        queryKey: ['destinations'],
        queryFn: getAllDestinations,
        staleTime: 5 * 60 * 1000, // Cache 5 minutes
    });
};

// Hook get destination by id
export const useDestination = (id) => {
    return useQuery({
        queryKey: ['destination', id],
        queryFn: () => getDestinationById(id),
        enabled: !!id, // chỉ chạy khi có id
        staleTime: 5 * 60 * 1000,
    });
};

// Hook create destination by admin
export const useCreateDestination = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createDestination,
        onSuccess: () => {
            // Refresh list after create
            queryClient.invalidateQueries(['destinations']);
        },
    });
};

// Hook update destination by admin
export const useUpdateDestination = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedData) => updateDestination(updatedData.id, updatedData),
        onSuccess: (data) => {
            // Refresh cache
            queryClient.invalidateQueries(['destinations']);
            queryClient.invalidateQueries(['destination', data.id]);
        },
    });
};

// Hook delete destination by admin
export const useDeleteDestination = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteDestination,
        onSuccess: () => {
            queryClient.invalidateQueries(['destinations']);
        },
    });
};

// Cách dùng cho get create update delete

// GET
// import { useDestinations } from '~/hooks/useDestinations';
// const { data, isLoading } = useDestinations();

// CREATE
// import { useCreateDestination } from '~/hooks/useDestinations';
// const { mutate: createDest } = useCreateDestination();

// const handleCreate = () => {
//     createDest({ name: 'New Place', description: 'Nice view' });
// };

// UPDATE
// const { mutate: updateDest } = useUpdateDestination();

// const handleUpdate = () => {
//     updateDest({ id: 1, data: { name: 'Updated Name' } });
// };

// DELETE
// const { mutate: deleteDest } = useDeleteDestination();

// const handleDelete = () => {
//     deleteDest(1);
// };
