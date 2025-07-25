import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import icons from '~/assets/icons';
import { act, useContext, useState } from 'react';
import { UserContext } from '~/contexts/UserContext';
import Sidebar from './Sidebar/Sidebar';
import RewardSection from './RewardSection/RewardSection';
import PROFILE_SETTING_MENU from '~/data/MenuItem/ProfileSettingMenu';
import PersonalInfo from './Content/PersonalInfo/PersonalInfo';
import SecuritySetting from './Content/SecuritySetting/SecuritySetting';
import PaymentMethod from './Content/Payment/Payment';

const cx = classNames.bind(styles);

function Profile() {
    const context = useContext(UserContext);
    const [activeMenu, setActiveMenu] = useState(PROFILE_SETTING_MENU[0]);
    const renderContent = () => {
        switch (activeMenu.title) {
            case 'Personal Information':
                return <PersonalInfo />;
            case 'Security Setting':
                return <SecuritySetting />;
            case 'Payment Method':
                return <PaymentMethod />;
            case 'Notification & Alerts':
                return <div>Notification Preferences</div>;
            case 'Bookings & Trips':
                return <div>Booking History</div>;
            case 'My Reviews':
                return <div>User Reviews List</div>;
            default:
                return <div>Coming soon...</div>;
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src={context.avatar} alt={context.avatar} />
                <div className={cx('info')}>
                    <h3 className={cx('name')}>Hi {context.username} !</h3>
                    <span className={cx('role')}>{context.membership}</span>
                </div>
            </div>

            <div className={cx('membership')}>
                <div className={cx('rewards')}>
                    <h3 className={cx('title')}> You have 3 rewards</h3>
                    <span className={cx('desc')}>
                        Enjoy rewards and discounts on select stays and rental cars worldwide
                    </span>

                    {/* swipper */}

                    <RewardSection />
                    <a className={cx('learn-more')} href="#">
                        Learn more about your rewards
                    </a>
                </div>
                <div className={cx('extra')}>
                    <div className={cx('target')}>
                        <div className={cx('title')}>
                            <icons.target />
                            <span>You're 5 bookings away from Golden</span>
                        </div>

                        <a href="#" className={cx('check-progress')}>
                            Check your progress
                        </a>
                    </div>
                    <div className={cx('vouchers')}>
                        <div className={cx('title')}>
                            <icons.discount />
                            <span>No Credits or ouchers yet</span>
                        </div>

                        <a href="#" className={cx('check-progress')}>
                            More detail
                        </a>
                    </div>
                </div>
            </div>

            <div className={cx('account-setting')}>
                <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                <div className={cx('content')}>{renderContent()}</div>
            </div>
        </div>
    );
}

export default Profile;
