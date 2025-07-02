import classNames from 'classnames/bind';
import styles from './HeaderMenu.module.scss';
import icons from '~/assets/icons';
import images from '~/assets/images';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import Box from './Box/Box';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function HeaderMenu({ color, border, isWrap }) {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    
    const userData = {
        name: 'Dinosaur',
        role: 'Admin',
        avatar: images.avatar
    };

    // Build menu items based on role
    const menuItems = [
        ...(userData.role === 'Admin' ? [{
            title: 'Dashboard',
            icon: icons.category,
            to: '/admin',
            action: 'dashboard',
        }] : []),
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
            to: '/logout',
            action: 'logout',
            className: 'logout',
        },
    ];

    const handleLogout = () => {
        // Add logout logic here
        console.log('Logout clicked');
        setVisible(false);
    };

    const handleItemClick = (item) => {
        console.log('Menu item clicked:', item);
        setVisible(false);
        navigate(item.to);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('notification', isWrap && 'wrap')}>
                <icons.notification />
                <span className={cx('badge')}></span>
            </div>

            <Tippy
                interactive={true}
                visible={visible}
                onClickOutside={() => setVisible(false)}
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('popover')} tabIndex="-1" {...attrs}>
                       <Box 
                           user={userData}
                           menuItems={menuItems}
                           onItemClick={handleItemClick}
                           onLogout={handleLogout}
                       />
                    </div>
                )}
            >
                <div className={cx('user-info')} onClick={() => setVisible(!visible)}>
                    <div className={cx('avatar', border && 'border')}>
                        <img className={cx('avatar-img', border && 'border')} src={images.avatar} alt="avatar" />
                        {/* <icons.user /> */}
                    </div>
                    <div className={cx('user-name', color && 'black-color')}>
                        <span className={cx('name')}>{userData.name}</span>
                        <span className={cx('role')}>{userData.role}</span>
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
