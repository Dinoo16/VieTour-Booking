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

    // Add a state to track if user data is loading
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                setLoading(true);
                const data = await getUserInfo();
                // if username is empty, get prefix email to set username
                const username = data.username?.trim() ? data.username : data.email?.split('@')[0] || '';

                setUser({
                    ...data,
                    username,
                });
            } catch (err) {
                console.error('Failed to fetch user info:', err);
                localStorage.removeItem('token');
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return <UserContext.Provider value={{ ...user, loading, setUser, fetchUser }}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
