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
