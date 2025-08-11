import classNames from 'classnames/bind';
import styles from './HeaderMenu.module.scss';
import icons from '~/assets/icons';
import images from '~/assets/images';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import Box from './Box/Box';
import { useNavigate } from 'react-router-dom';
import { signOut } from '~/apiServices/authService';
import { useUser } from '~/contexts/UserContext';

const cx = classNames.bind(styles);

function HeaderMenu({ color, border, isWrap }) {
    const { user, loading, setUser } = useUser();
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    if (loading) return null;

    // Sử dụng fallback data
    const username = user.username || (user.email ? user.email.split('@')[0] : 'User');
    const avatarSrc = user.avatar ? images[user.avatar] : images.defaultAvatar;

    const menuItems = [
        ...(user.role === 'ADMIN'
            ? [
                  {
                      title: 'Dashboard',
                      icon: icons.category,
                      to: '/admin',
                      action: 'dashboard',
                  },
              ]
            : []),
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
            action: 'logout',
            className: 'logout',
        },
    ];

    const handleLogout = () => {
        setVisible(false);
        signOut();
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
        navigate('/signout');
    };

    const handleItemClick = (item) => {
        setVisible(false);
        if (item.action === 'logout') {
            handleLogout();
        } else {
            navigate(item.to);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('notification', isWrap && 'wrap')}>
                <icons.notification />
                <span className={cx('badge')}></span>
            </div>

            <Tippy
                interactive
                visible={visible}
                onClickOutside={() => setVisible(false)}
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('popover')} tabIndex="-1" {...attrs}>
                        <Box
                            user={{ ...user, username, avatarSrc }}
                            menuItems={menuItems}
                            onItemClick={handleItemClick}
                            onLogout={handleLogout}
                        />
                    </div>
                )}
            >
                <div className={cx('user-info')} onClick={() => setVisible(!visible)}>
                    <div className={cx('avatar', border && 'border')}>
                        <img
                            className={cx('avatar-img', border && 'border')}
                            src={images[user.avatar] || images.defaultAvatar}
                            alt="avatar"
                        />
                    </div>
                    <div className={cx('user-name', color && 'black-color')}>
                        <span className={cx('name')}> {user.username || (user.email && user.email.split('@')[0])}</span>
                        <span className={cx('role')}>{user.role}</span>
                    </div>
                    <icons.arrow_down className={cx('arrow-down', color && 'black-color')} />
                </div>
            </Tippy>
        </div>
    );
}

HeaderMenu.propTypes = {
    color: PropTypes.bool,
    border: PropTypes.bool,
    isWrap: PropTypes.bool,
};

export default HeaderMenu;
