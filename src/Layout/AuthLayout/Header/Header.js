import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { NavLink, Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

const MENU = [
    {
        title: 'Home',
        to: routesConfig.home,
    },
    {
        title: 'About Us',
        to: routesConfig.aboutus,
    },

    {
        title: 'Sign In',
        to: routesConfig.signin,
    },
    {
        title: 'Sign Up',
        to: routesConfig.signup,
    },
];

function Header() {
    return (
        <div className={cx('wrapper')}>
            <Link to={routesConfig.home} className={cx('logo-link')}>
                <img src={images.logo} alt="VieTour" />
            </Link>
            <div className={cx('menus')}>
                {MENU.map((menu, index) => (
                    <NavLink key={index} className={cx('menu-link')} to={menu.to}>
                        {menu.title}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Header;
