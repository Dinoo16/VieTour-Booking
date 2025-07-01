import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ title, icon: Icon, to, onTitleChange }) {
    // Routes that should only be active when exactly matched
    const exactMatchRoutes = ['/admin'];
    const isExactMatch = exactMatchRoutes.includes(to);
    const handleNavLinkClass = (nav) => {
        if (nav.isActive && onTitleChange) {
            onTitleChange(title);
        }
        return cx('menu-item', { active: nav.isActive });
    };
    
    return (
        <NavLink 
            to={to} 
            className={handleNavLinkClass}
            end={isExactMatch}
        >
            <Icon className={cx('icon')} />
            <span className={cx('title')}>{title}</span>
        </NavLink>
    )
}
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    to: PropTypes.string.isRequired,
    onTitleChange: PropTypes.func,
};

export default MenuItem;