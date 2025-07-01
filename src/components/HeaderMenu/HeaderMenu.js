import classNames from 'classnames/bind';
import styles from './HeaderMenu.module.scss';
import icons from '~/assets/icons';
import images from '~/assets/images';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function HeaderMenu({color, border, isWrap}) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('notification', isWrap && 'wrap')}>
                <icons.notification />
            </div>
            <div className={cx('user-info')}>
                <div className={cx('avatar', border && 'border')}>
                    <img className={cx('avatar-img', border && 'border')} src={images.avatar} alt="avatar" />
                    {/* <icons.user /> */}
                </div>
                <div className={cx('user-name', color && 'black-color')}>
                    <span className={cx('name')}>Jonh Smith</span>
                    <span className={cx('role')}>Traveler</span>
                </div>
                <icons.arrow_down className={cx('arrow-down', color && 'black-color')} />
            </div>
        </div>
    );
}

HeaderMenu.propTypes = {
    color: PropTypes.bool,
    border: PropTypes.bool,
    isWrap: PropTypes.bool,
};

export default HeaderMenu;  