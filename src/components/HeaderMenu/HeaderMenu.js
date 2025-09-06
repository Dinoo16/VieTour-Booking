import icons from '~/assets/icons';
import images from '~/assets/images';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import Box from './Box/Box';
import { useNavigate } from 'react-router-dom';
import { signOut } from '~/apiServices/authService';
import { useUser } from '~/contexts/UserContext';

function HeaderMenu({ color, border, isWrap }) {
    const { user, loading, setUser } = useUser();
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    if (loading) return null;

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
        { title: 'Profile', icon: icons.user, to: '/profile', action: 'profile' },
        { title: 'Schedule', icon: icons.booking, to: '/schedule', action: 'booking' },
        { title: 'Logout', icon: icons.logout, action: 'logout', className: 'logout' },
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
        <div className="h-full flex items-center justify-end gap-6">
            {/* Notification */}
            <div
                className={`relative w-10 h-10 rounded-lg cursor-pointer hidden sm:flex items-center justify-center ${
                    isWrap ? 'bg-[#ededed]' : ''
                }`}
            >
                <icons.notification className={`w-6 h-6 ${isWrap ? 'text-[#999999]' : 'text-white'}`} />
                <span className="absolute top-[6px] right-[9px] w-[10px] h-[10px] rounded-full bg-[var(--primary)]"></span>
            </div>

            {/* User info */}
            <Tippy
                interactive
                visible={visible}
                onClickOutside={() => setVisible(false)}
                placement="bottom-end"
                render={(attrs) => (
                    <div className="bg-transparent rounded-lg p-0 min-w-[200px]" tabIndex="-1" {...attrs}>
                        <Box
                            user={{ ...user, username, avatarSrc }}
                            menuItems={menuItems}
                            onItemClick={handleItemClick}
                            onLogout={handleLogout}
                        />
                    </div>
                )}
            >
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => setVisible(!visible)}>
                    {/* Avatar */}
                    <div className={`w-10 h-10 ${border ? 'rounded-lg' : 'rounded-full'} overflow-hidden`}>
                        <img
                            className={`w-full h-full object-cover ${border ? 'rounded-lg' : 'rounded-full'}`}
                            src={images[user.avatar] || user.avatar}
                            alt="avatar"
                        />
                    </div>

                    {/* User info */}
                    <div className={`flex flex-col s:pr-6 ${color ? 'text-black' : 'text-white'}`}>
                        <span className="text-base font-semibold">
                            {user.name || (user.email && user.email.split('@')[0])}
                        </span>
                        <span className="text-xs">{user.role}</span>
                    </div>

                    {/* Arrow */}
                    <icons.arrow_down
                        className={`w-[14px] h-[10px] cursor-pointer ${color ? 'text-black' : 'text-white'}`}
                    />
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
