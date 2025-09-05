import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function MenuItem({ title, icon: Icon, to, onTitleChange }) {
    // Routes that should only be active when exactly matched
    const exactMatchRoutes = ['/admin'];
    const isExactMatch = exactMatchRoutes.includes(to);

    return (
        <NavLink
            to={to}
            end={isExactMatch}
            className={({ isActive }) => {
                if (isActive && onTitleChange) {
                    onTitleChange(title);
                }
                return [
                    'flex items-center gap-[14px] px-6 py-2.5 mb-6 rounded-[10px] font-medium transition-colors',
                    isActive ? 'bg-[var(--primary)] text-white' : 'text-[var(--text-color)] hover:bg-gray-100',
                ].join(' ');
            }}
        >
            <Icon />
            <span>{title}</span>
        </NavLink>
    );
}
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    to: PropTypes.string.isRequired,
    onTitleChange: PropTypes.func,
};

export default MenuItem;
