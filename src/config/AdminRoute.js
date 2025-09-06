import { Navigate } from 'react-router-dom';
import { useUser } from '~/contexts/UserContext';

function AdminRoute({ children }) {
    const { user, loading } = useUser();

    // Loading user
    if (loading) {
        return <div>Loading...</div>;
    }

    // Admin role
    if (user.role !== 'ADMIN') {
        return <Navigate to="/forbidden" replace />;
    }

    return children;
}

export default AdminRoute;
