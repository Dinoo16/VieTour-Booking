import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { getUserInfo } from '~/apiServices/authService';

const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({
        username: '',
        role: '',
        email: '',
        phone: '',
        avatar: '',
        address: '',
        dateOfBirth: '',
        bio: '',
    });
    const [loading, setLoading] = useState(true);

    const fetchUser = useCallback(async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setUser({
                username: '',
                role: '',
                email: '',
                phone: '',
                avatar: '',
                address: '',
                dateOfBirth: '',
                bio: '',
            });
            setLoading(false);
            return;
        }
        try {
            const userData = await getUserInfo();
            if (userData) {
                // Nếu username không có, tạo từ email
                if (!userData.username && userData.email) {
                    userData.username = userData.email.split('@')[0];
                }
                setUser(userData);
            }
        } catch (error) {
            console.error('Failed to fetch user info:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return <UserContext.Provider value={{ user, loading, setUser, fetchUser }}>{children}</UserContext.Provider>;
}

export const useUser = () => useContext(UserContext);
export { UserContext, UserProvider };
