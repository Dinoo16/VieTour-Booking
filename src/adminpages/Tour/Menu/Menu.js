import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Menu({ items, activeItem, onItemClick }) {
  return (
    <div className={cx('wrapper')}>
        {items.map((item, index) => (
            <MenuItem key={index} item={item} isActive={item === activeItem} onClick={() => onItemClick(item)} />
        ))}
    </div>
  )
}

Menu.propTypes = {
    items: PropTypes.array.isRequired,
}

export default Menu;