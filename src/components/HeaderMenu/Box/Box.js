import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Box.module.scss';
import icons from '~/assets/icons';
import images from '~/assets/images';
const cx = classNames.bind(styles);

function Box({ user, menuItems = [], onItemClick, onLogout }) {
    // Default menu items if none provided
    const items = menuItems.length > 0 ? menuItems : [];

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
                        <img src={images[user.avatar] || user.avatar} alt="avatar" />
                    </div>
                    <div className={cx('menu-user-info')}>
                        <span className={cx('menu-name')}>{user.name || user.username}</span>
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
