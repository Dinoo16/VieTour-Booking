import * as httpRequest from '~/utils/httpRequest';

export const signup = async (userData) => {
    try {
        const res = await httpRequest.post('auth/signup', userData);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const signin = async (credentials) => {
    try {
        const res = await httpRequest.post('auth/signin', credentials);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const signOut = () => {
    localStorage.removeItem('token');
    window.location.href = '/signout';
};

// get user infor base on JWT
export const getUserInfo = async () => {
    try {
        const response = await httpRequest.get('/auth/me');
        return response;
    } catch (error) {
        console.error('Failed to get user info:', error);
        throw error;
    }
};
