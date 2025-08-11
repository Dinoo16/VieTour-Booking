import { Navigate } from 'react-router-dom';
import { useUser } from '~/contexts/UserContext';

function AdminRoute({ children }) {
    const { user, loading } = useUser();

    // Khi vẫn đang loading dữ liệu user
    if (loading) {
        return <div>Loading...</div>;
    }

    // Nếu chưa đăng nhập hoặc không phải admin => chặn
    if (user.role !== 'ADMIN') {
        return <Navigate to="/forbidden" replace />;
    }

    return children;
}

export default AdminRoute;
