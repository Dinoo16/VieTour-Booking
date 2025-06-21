import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ icon: Icon, title }) {
    return (
        <div className={cx('menu-item')}>
            <Icon className={cx('icon')} />
            <span>{title}</span>
        </div>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
};

export default MenuItem;
