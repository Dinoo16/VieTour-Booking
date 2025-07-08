import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '~/components/Button/Button';
import { Link } from 'react-router-dom';
import config from '~/config/routes';
import images from '~/assets/images';
import icons from '~/assets/icons';
import MenuItem from './Menu/MenuItem';
import Menu from './Menu/menu';
import HeaderMenu from '~/components/HeaderMenu/HeaderMenu';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;
    const userMenu = [
        {
            icon: icons.user,
            title: 'View profile',
            to: '/@dino',
        },
        {
            icon: icons.dollar,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: icons.info,
            title: 'Settings',
            to: '/settings',
        },
        {
            icon: icons.logout,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('top')}>
                <div className={cx('location')}>
                    <icons.location className={cx('icon')} />
                    <span>126 Phung Khoang, Trung Van</span>
                    <span className={cx('separator')}>|</span>
                    <icons.time className={cx('icon')} />
                    <span> 7.00 am, Hanoi</span>
                </div>
                <div className={cx('language')}>
                    <Button iconButton>
                        <icons.star className={cx('star-icon')} />
                    </Button>
                </div>
            </div>
            <div className={cx('break-line-container')}>
                <div className={cx('break-line')}></div>
            </div>

            <div className={cx('bottom')}>
                <Link to={config.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="VieTour" />
                </Link>
                <Menu>
                    <MenuItem title="Home" to={config.home} />
                    <MenuItem title="Places to go" to={config.destination} />
                    <MenuItem title="Service" to={config.tour} />
                    <MenuItem title="Blog" to={config.blog} />
                    <MenuItem title="About Us" to={config.aboutus} />
                </Menu>
                {currentUser ? (
                    <HeaderMenu />
                ) : (
                    <Button primary to={config.signin}>
                        Sign in
                    </Button>
                )}
            </div>
        </header>
    );
}

export default Header;
