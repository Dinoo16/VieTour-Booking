import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import icons from '~/assets/icons';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ guide, isActive, onClick }) {
    return (
        <div className={cx('item', { active: isActive })} onClick={onClick}>
            <div className={cx('details')}>
                <img src={guide.avatar} alt={guide.name} className={cx('avatar')} />
                <div className={cx('info')}>
                    <h4>{guide.name}</h4>
                    <div className={cx('contact')}>
                        <icons.email className={cx('icon')} />
                        <span>{guide.email}</span>
                        <icons.phone className={cx('icon')} />
                        <span>{guide.phoneNo}</span>
                    </div>
                </div>
            </div>
            <div className={cx('role')}>
                <span>{guide.role}</span>
            </div>
        </div>
    );
}

MenuItem.propTypes = {
    guide: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phoneNo: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
    }).isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
};

export default MenuItem;
