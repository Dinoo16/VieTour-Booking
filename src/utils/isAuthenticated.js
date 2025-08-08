import { jwtDecode } from 'jwt-decode';

export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000; // tính theo giây

        // Kiểm tra token hết hạn chưa
        return decoded.exp > currentTime;
    } catch (err) {
        return false;
    }
};
