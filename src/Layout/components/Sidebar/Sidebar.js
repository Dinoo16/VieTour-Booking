import Menu from './Menu/Menu';
import SIDEBAR_MENU from '../../../data/MenuItem/SidebarMenu';
import images from '../../../assets/images';
import { Link } from 'react-router-dom';
import config from '../../../config/routes';
import PropTypes from 'prop-types';

function Sidebar({ onTitleChange, className }) {
    return (
        <div
            className={[
                'max-w-[260px] h-screen px-8 py-3 flex flex-col z-20',
                'shadow-[0px_2.4px_28px_0px_rgba(33,40,50,0.15)]',
                'box-border overflow-y-hidden hover:overflow-y-auto scrollbar-gutter-stable',
                className,
            ].join(' ')}
        >
            <Link to={config.home} className="pointer-events-none">
                <img src={images.logo_black} alt="VieTour" className="mb-6 pointer-events-auto" />
            </Link>
            <div>
                <Menu items={SIDEBAR_MENU} onTitleChange={onTitleChange} />
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    onTitleChange: PropTypes.func,
    className: PropTypes.string,
};

export default Sidebar;
