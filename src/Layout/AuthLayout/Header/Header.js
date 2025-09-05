import images from '~/assets/images';
import { NavLink, Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

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
        <div className="flex">
            <Link to={routesConfig.home}>
                <img src={images.logo} alt="VieTour" />
            </Link>
            <div className="w-full hidden sm:flex gap-8 justify-center items-center mr-32">
                {MENU.map((menu, index) => (
                    <NavLink
                        key={index}
                        className="text-white text-lg font-normal hover:border-b-[1px] hover:border-[var(--primary)]"
                        to={menu.to}
                    >
                        {menu.title}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Header;
