import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'http://localhost:8080/api',
});

httpRequest.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Auto logout when token is outdate
httpRequest.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            localStorage.removeItem('token');
            window.location.href = '/signin';
        }
        return Promise.reject(error);
    },
);

// GET request
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};
//POST request
export const post = async (path, data = {}, config = {}) => {
    const response = await httpRequest.post(path, data, config);
    return response.data;
};
// PUT request

export default httpRequest;
