import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Menu({ items = [], activeMenu, setActiveMenu }) {
    return (
        <div className={cx('menu')}>
            {items.map((item, index) => (
                <MenuItem
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    active={activeMenu.title === item.title}
                    onClick={() => setActiveMenu(item)}
                />
            ))}
        </div>
    );
}

Menu.propTypes = {
    items: PropTypes.array.isRequired,
    activeMenu: PropTypes.object.isRequired,
    setActiveMenu: PropTypes.func.isRequired,
};

export default Menu;
