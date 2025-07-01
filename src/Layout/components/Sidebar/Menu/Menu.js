import MenuItem from './MenuItem';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ items = [], onTitleChange }) {
    return (
        <nav className={cx('menu')}>
            {items.map((item, index) => (
                <MenuItem key={index} title={item.title} icon={item.icon} to={item.to} onTitleChange={onTitleChange}/>
            ))}
        </nav>
    )
}

Menu.propTypes = {
    items: PropTypes.array.isRequired,
    onTitleChange: PropTypes.func,
};

export default Menu;