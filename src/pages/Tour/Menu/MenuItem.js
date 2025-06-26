import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ icon: Icon, title }) {
    return (
        <div className={cx('menu-item')}>
            <Icon className={cx('icon')} />
            <span className={cx('title')}>{title}</span>
        </div>
    );
}
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
};

export default MenuItem;
