import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Box.module.scss';
import icons from '~/assets/icons';
import images from '~/assets/images';
import { userData } from '~/data/User/User';
const cx = classNames.bind(styles);

/**
 * Box Component - User Menu Dropdown
 *
 * Usage Examples:
 *
 * // Basic usage with default menu items
 * <Box onLogout={handleLogout} />
 *
 * // Custom user data
 * <Box
 *     user={{ name: 'John Doe', role: 'User', avatar: '/path/to/avatar.jpg' }}
 *     onLogout={handleLogout}
 * />
 *
 * // Custom menu items
 * <Box
 *     menuItems={[
 *         { title: 'Dashboard', icon: icons.dashboard, action: 'dashboard' },
 *         { title: 'Settings', icon: icons.settings, action: 'settings' },
 *         { title: 'Logout', icon: icons.logout, action: 'logout', className: 'logout' }
 *     ]}
 *     onItemClick={handleItemClick}
 *     onLogout={handleLogout}
 * />
 */
function Box({ user, menuItems = [], onItemClick, onLogout }) {
    // Default menu items if none provided
    const defaultMenuItems = [
        {
            title: 'Profile',
            icon: icons.user,
            to: '/profile',
            action: 'profile',
        },
        {
            title: 'Booking',
            icon: icons.booking,
            to: '/booking',
            action: 'booking',
        },
        {
            title: 'Logout',
            icon: icons.logout,
            to: '/signout',
            action: 'logout',
            className: 'logout',
        },
    ];

    const items = menuItems.length > 0 ? menuItems : defaultMenuItems;

    const handleItemClick = (item) => {
        if (item.action === 'logout' && onLogout) {
            onLogout(item);
        } else if (onItemClick) {
            onItemClick(item);
        }
    };

    return (
        <div className={cx('box')}>
            <div className={cx('user-menu')}>
                <div className={cx('menu-header')}>
                    <div className={cx('menu-avatar')}>
                        <img src={user.avatar} alt="avatar" />
                    </div>
                    <div className={cx('menu-user-info')}>
                        <span className={cx('menu-name')}>{user.username}</span>
                        <span className={cx('menu-role')}>{user.role}</span>
                    </div>
                </div>
                <div className={cx('menu-items')}>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={cx('menu-item', item.className)}
                            onClick={() => handleItemClick(item)}
                        >
                            <item.icon />
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

Box.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        role: PropTypes.string,
        avatar: PropTypes.string,
    }),
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            icon: PropTypes.elementType.isRequired,
            to: PropTypes.string,
            action: PropTypes.string,
            className: PropTypes.string,
        }),
    ),
    onItemClick: PropTypes.func,
    onLogout: PropTypes.func,
};

export default Box;
