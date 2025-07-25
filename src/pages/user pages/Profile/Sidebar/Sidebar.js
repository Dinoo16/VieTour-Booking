import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu from './Menu/Menu';
import PROFILE_SETTING_MENU from '~/data/MenuItem/ProfileSettingMenu';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <div className={cx('side-bar')}>
            <h2 className={cx('side-bar-header')}>Accout Setting</h2>

            {/* menu item */}
            <Menu items={PROFILE_SETTING_MENU} />
        </div>
    );
}

export default Sidebar;
