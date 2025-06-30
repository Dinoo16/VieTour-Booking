import classNames from 'classnames/bind';
import styles from './HeaderMenu.module.scss';
import icons from '~/assets/icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function HeaderMenu() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('notification')}>
                <icons.notification />
            </div>
            <div className={cx('user-info')}>
                <div className={cx('avatar')}>
                    <img src={images.avatar} alt="avatar" />
                    {/* <icons.user /> */}
                </div>
                <div className={cx('user-name')}>
                    <span className={cx('name')}>Jonh Smith</span>
                    <span className={cx('role')}>Traveler</span>
                </div>
                <icons.arrow_down className={cx('arrow-down')} />
            </div>
        </div>
    );
}

export default HeaderMenu;  