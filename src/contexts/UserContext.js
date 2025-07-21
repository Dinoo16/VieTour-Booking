import { createContext, useContext, useState } from 'react';
import { userData } from '~/data/User/User';

const UserContext = createContext();
const currentUser = userData[0];
function UserProvider({ children }) {
    const [user, setUser] = useState(currentUser);

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
