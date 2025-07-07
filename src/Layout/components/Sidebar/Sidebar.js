import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu from './Menu/Menu';
import SIDEBAR_MENU from '../../../data/MenuItem/SidebarMenu';
import images from '../../../assets/images';
import { Link } from 'react-router-dom';
import config from '../../../config/routes';
import PropTypes from 'prop-types';
import icons from '../../../assets/icons';

const cx = classNames.bind(styles);

function Sidebar({ onTitleChange, className }) {
    return (
        <div className={cx('wrapper', className)}>
            <Link to={config.home} className={cx('logo-link')}>
                <img src={images.logo_black} alt="VieTour" />
            </Link>
            <div className={cx('menu-scroll')}>
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
