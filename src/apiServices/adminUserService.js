import * as httpRequest from '~/utils/httpRequest';

// Admin get all users
export const getAllUsers = async () => {
    try {
        const res = await httpRequest.get('/admin/users');
        return res;
    } catch (error) {
        console.log(error);
    }
};
// Get user by id
export const getUserById = async (id) => {
    try {
        const res = await httpRequest.get('/admin/users', id);
        return res;
    } catch (error) {
        console.log(error);
    }
};
// Delete user
export const deleteUser = async (id) => {
    try {
        const res = await httpRequest.del('/admin/users', id);
        return res;
    } catch (error) {
        console.log(error);
    }
};
// Create guide account

// Update user
export const updateUser = async (id, userData, avatarFile) => {
    try {
        const formData = new FormData();
        formData.append('user', new Blob([JSON.stringify(userData)], { type: 'application/json' }));
        if (avatarFile) {
            formData.append('avatar', avatarFile);
        }

        const res = await httpRequest.put(`/user/users/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
