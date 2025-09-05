import Button from '~/components/Button/Button';
import { Link, NavLink } from 'react-router-dom';
import config from '~/config/routes';
import images from '~/assets/images';
import icons from '~/assets/icons';
import MenuItem from './Menu/MenuItem';
import Menu from './Menu/menu';
import HeaderMenu from '~/components/HeaderMenu/HeaderMenu';
import Tippy from '@tippyjs/react/headless';
import { useRef, useState } from 'react';
import { isAuthenticated } from '~/utils/isAuthenticated';

function Header() {
    // const token = localStorage.getItem('token');
    const currentUser = isAuthenticated();
    const [isOpen, setIsOpen] = useState(false);
    const tippyRef = useRef();

    const handleClose = () => {
        // Close the Tippy manually
        tippyRef.current?.hide();
    };

    // Toggle menu
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <header className="w-full relative mx-auto xl:w-[1200px] px-4 sm:px-6 lg:px-6 xl:px-0">
            <div className="flex items-center justify-between py-3 px-0">
                <div className="flex items-center gap-[8px]">
                    <icons.location className="w-[20px] h-[20px]" />
                    <span className="text-sm">126 Phung Khoang, Trung Van</span>
                    <span className="text-white font-normal mx-[8px] my-0">|</span>
                    <icons.time />
                    <span className="text-sm"> 7.00 am, Hanoi</span>
                </div>
                <div>
                    <Button iconButton>
                        <icons.star className="w-[20px] h-[20px] text-[#FFDA44]" />
                    </Button>
                </div>
            </div>
            <div className="absolute left-1/2 w-screen -translate-x-1/2">
                <div className="h-[1px] w-full bg-white"></div>
            </div>

            <div className="flex justify-between items-center">
                <Link to={config.home}>
                    <img src={images.logo} alt="VieTour" className="w-[110px] h-[70px] s:w-auto s:h-auto" />
                </Link>
                <Menu>
                    <MenuItem title="Home" to={config.home} />
                    <MenuItem title="Places to go" to={config.destination} />
                    <Tippy
                        interactive
                        delay={[0, 200]}
                        onCreate={(instance) => {
                            tippyRef.current = instance;
                        }}
                        placement="bottom-end"
                        render={(attrs) => (
                            <div
                                className="flex flex-col bg-white px-3 py-2 rounded-md border border-[#ddd] text-[var(--text-color)] shadow-lg"
                                tabIndex="-1"
                                {...attrs}
                            >
                                <NavLink
                                    className="px-0 py-[6px] hover:text-[var(--primary)]"
                                    to={config.tour}
                                    onClick={handleClose}
                                >
                                    Tour Packages
                                </NavLink>
                                <span className="px-0 py-[6px] hover:text-[var(--primary)]">Build Package</span>
                            </div>
                        )}
                    >
                        <div>
                            <MenuItem title="Service" />
                        </div>
                    </Tippy>
                    <MenuItem title="Blog" to={config.blog} />
                    <MenuItem title="About Us" to={config.aboutus} />
                </Menu>
                {currentUser ? (
                    <HeaderMenu />
                ) : (
                    <div>
                        <div className="hidden lgx:block">
                            <Button primary to={config.signin}>
                                Sign in
                            </Button>
                        </div>

                        {/* Menu nav */}
                        <div className="lgx:hidden flex items-center">
                            <button onClick={toggleMenu}>
                                {isOpen ? (
                                    <icons.expand className="w-8 h-8" />
                                ) : (
                                    <icons.expandOpen className="w-8 h-8" />
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black/50 z-50" onClick={toggleMenu}>
                    <div
                        className={`absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-4 flex flex-col gap-4 transform transition-transform duration-300 ${
                            isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <icons.expand
                            onClick={toggleMenu}
                            className="text-[var(--text-color)] w-7 h-7 hover:cursor-pointer hover:text-black"
                        />
                        <NavLink to={config.home} onClick={toggleMenu} className="hover:text-[var(--primary)]">
                            Home
                        </NavLink>
                        <NavLink to={config.destination} onClick={toggleMenu} className="hover:text-[var(--primary)]">
                            Places to go
                        </NavLink>
                        <NavLink to={config.tour} onClick={toggleMenu} className="hover:text-[var(--primary)]">
                            Tour Packages
                        </NavLink>
                        <NavLink to={config.blog} onClick={toggleMenu} className="hover:text-[var(--primary)]">
                            Blog
                        </NavLink>
                        <NavLink to={config.aboutus} onClick={toggleMenu} className="hover:text-[var(--primary)]">
                            About Us
                        </NavLink>
                        <hr className="border-t border-gray-300 my-2" />
                        {!currentUser && (
                            <>
                                <NavLink
                                    to={config.signin}
                                    onClick={toggleMenu}
                                    className="hover:text-[var(--primary)]"
                                >
                                    Sign in
                                </NavLink>
                                <NavLink
                                    to={config.signup}
                                    onClick={toggleMenu}
                                    className="hover:text-[var(--primary)]"
                                >
                                    Sign Up
                                </NavLink>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
