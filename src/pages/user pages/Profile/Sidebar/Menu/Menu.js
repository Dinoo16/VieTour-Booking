import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ items = [], activeMenu, onClick }) {
    return (
        <div className={cx('menu')}>
            {items.map((item, index) => {
                return (
                    <MenuItem
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        isActive={item.title === activeMenu.title}
                        onClick={() => onClick(item)}
                    />
                );
            })}
        </div>
    );
}

export default Menu;
