import { createContext, useContext, useEffect, useState } from 'react';
import { getUserInfo } from '~/apiServices/authService';

const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({
        username: '',
        avatar: '',
        role: '',
    });

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const data = await getUserInfo();
                    setUser(data);
                } catch (err) {
                    console.error('Failed to fetch user info:', err);
                    localStorage.removeItem('token');
                }
            }
        };

        fetchUser();
    }, []);

    return <UserContext.Provider value={{ ...user, setUser }}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
