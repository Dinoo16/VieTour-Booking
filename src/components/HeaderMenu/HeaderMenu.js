import classNames from 'classnames/bind';
import styles from './HeaderMenu.module.scss';
import icons from '~/assets/icons';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import Box from './Box/Box';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '~/contexts/UserContext';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function HeaderMenu({ color, border, isWrap }) {
    const context = useContext(UserContext);

    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    // Build menu items based on role
    const menuItems = [
        ...(context.role === 'Admin'
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
            to: '/signout',
            action: 'logout',
            className: 'logout',
        },
    ];

    const handleLogout = (item) => {
        // Add logout logic here
        setVisible(false);
        navigate(item.to);
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
                            user={context}
                            menuItems={menuItems}
                            onItemClick={handleItemClick}
                            onLogout={handleLogout}
                        />
                    </div>
                )}
            >
                <div className={cx('user-info')} onClick={() => setVisible(!visible)}>
                    <div className={cx('avatar', border && 'border')}>
                        <img className={cx('avatar-img', border && 'border')} src={context.avatar} alt="avatar" />
                        {/* <icons.user /> */}
                    </div>
                    <div className={cx('user-name', color && 'black-color')}>
                        <span className={cx('name')}>{context.username}</span>
                        <span className={cx('role')}>{context.role}</span>
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
