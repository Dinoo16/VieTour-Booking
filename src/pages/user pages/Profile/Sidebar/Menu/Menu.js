import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ items }) {
    return (
        <div className={cx('menu')}>
            {items.map((item, index) => {
                <MenuItem key={index} icon={item.icon} title={item.title} />;
            })}
        </div>
    );
}

export default Menu;
