import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ title, to, onClick }) {
    const content = <span className={cx('title')}>{title}</span>;
    if (to) {
        return (
            <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
                {content}
            </NavLink>
        );
    }
    return (
        <div className={cx('menu-item')} onClick={onClick}>
            {content}
        </div>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string,
    onClick: PropTypes.func,
};

export default MenuItem;
