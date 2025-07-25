import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import images from '~/assets/images';
import icons from '~/assets/icons';
import { useContext } from 'react';
import { UserContext } from '~/contexts/UserContext';
import Sidebar from './Sidebar/Sidebar';


const cx = classNames.bind(styles);

function Profile() {
    const context = useContext(UserContext);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src={context.avatar} alt={context.avatar} />
                <div className={cx('info')}>
                    <h3 className={cx('name')}>{context.username}</h3>
                    <span className={cx('role')}>{context.membership}</span>
                </div>
            </div>

            <div className={cx('membership')}>
                <div className={cx('rewards')}>
                    <h3 className={cx('title')}> You have 3 rewards</h3>
                    <span>Enjoy rewards and discounts on select stays and rental cars worldwide</span>

                    {/* swipper */}
                    <div className={cx('card')}>
                        <img src={images.avatar_10}></img>
                        <span>5% of booking</span>
                    </div>
                    <a className={cx('learn-more')} href="#">
                        Learn more about your rewards
                    </a>
                </div>
                <div className={cx('extra')}>
                    <div className={cx('target')}>
                        <div>
                            <icons.booking />
                            <span>You're 5 bookings away from Golden</span>
                        </div>

                        <a href="#">Check your progress</a>
                    </div>
                    <div className={cx('vouchers')}>
                        <div>
                            <icons.booking />
                            <span>No Credits or ouchers yet</span>
                        </div>

                        <a href="#">More detail</a>
                    </div>
                </div>
            </div>

            <div className={cx('account-setting')}>
                <Sidebar />
                <div className={cx('content')}></div>
            </div>
        </div>
    );
}

export default Profile;
