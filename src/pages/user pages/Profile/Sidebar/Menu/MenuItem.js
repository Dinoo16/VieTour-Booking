import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ icon: Icon, title, isActive, onClick }) {

    return (
        <div className={cx('item', { active: isActive })} onClick={onClick}>
            <Icon className={cx('icon')} />
            <span className={cx('title')}>{title}</span>
        </div>
    );
}

MenuItem.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

export default MenuItem;
