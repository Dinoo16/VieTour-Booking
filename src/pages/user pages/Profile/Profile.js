import icons from '~/assets/icons';
import images from '~/assets/images';
import { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import RewardSection from './RewardSection/RewardSection';
import PROFILE_SETTING_MENU from '~/data/MenuItem/ProfileSettingMenu';
import PersonalInfo from './Content/PersonalInfo/PersonalInfo';
import SecuritySetting from './Content/SecuritySetting/SecuritySetting';
import PaymentMethod from './Content/Payment/Payment';
import Bookings from './Content/Bookings/Bookings';
import MyReviews from './Content/MyReviews/MyReviews';
import { useUser } from '~/contexts/UserContext';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';

function Profile() {
    const { user, loading } = useUser();
    const [activeMenu, setActiveMenu] = useState(PROFILE_SETTING_MENU[0]);
    const username = user?.name || (user?.email ? user.email.split('@')[0] : 'User');

    const renderContent = () => {
        switch (activeMenu.title) {
            case 'Personal Information':
                return <PersonalInfo />;
            case 'Security Setting':
                return <SecuritySetting />;
            case 'Payment Method':
                return <PaymentMethod />;
            case 'Notification & Alerts':
                return <div> Notifications and Alerts </div>;
            case 'Bookings & Trips':
                return <Bookings />;
            case 'My Reviews':
                return <MyReviews />;
            default:
                return <div>Coming soon...</div>;
        }
    };

    if (loading) return <LoadingSpinner />;

    return (
        <div className="relative top-0 -translate-y-[500px]">
            {/* Header */}
            <div className="flex gap-3 text-white mb-6">
                <img
                    className="w-[60px] h-[60px] rounded-full"
                    src={images[user.avatar] || user.avatar}
                    alt={user.avatar}
                />
                <div>
                    <h3 className="text-2xl font-semibold">Hi {username} !</h3>
                    <span>{user.membership}</span>
                </div>
            </div>

            {/* Membership */}
            <div className="w-full h-[320px] flex gap-6">
                {/* Rewards */}
                <div className="flex flex-col justify-between p-6 rounded-lg bg-white flex-[2] shadow-[0_6px_30px_rgba(0,0,0,0.1)] overflow-hidden">
                    <h3 className="text-[var(--header-color)] font-bold">You have 3 rewards</h3>
                    <span className="text-sm">
                        Enjoy rewards and discounts on select stays and rental cars worldwide
                    </span>

                    <RewardSection />

                    <a href="#" className="text-base font-semibold text-[var(--header-color)]">
                        Learn more about your rewards
                    </a>
                </div>

                {/* Extra */}
                <div className="flex flex-1 flex-col gap-6">
                    {/* Target */}
                    <div className="flex flex-col justify-between flex-1 p-6 rounded-lg shadow-[0_6px_30px_rgba(0,0,0,0.1)] bg-white text-[var(--header-color)] font-semibold">
                        <div className="flex gap-3">
                            <icons.target />
                            <span>You're 5 bookings away from Golden</span>
                        </div>
                        <a href="#" className="text-sm text-[#4674FF]">
                            Check your progress
                        </a>
                    </div>

                    {/* Vouchers */}
                    <div className="flex flex-col justify-between flex-1 p-6 rounded-lg shadow-[0_6px_30px_rgba(0,0,0,0.1)] bg-white text-[var(--header-color)] font-semibold">
                        <div className="flex gap-3">
                            <icons.discount />
                            <span>No Credits or vouchers yet</span>
                        </div>
                        <a href="#" className="text-sm text-[#4674FF]">
                            More detail
                        </a>
                    </div>
                </div>
            </div>

            {/* Account setting */}
            <div className="flex flex-col md:flex-row gap-6 mt-10">
                <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                <div className="flex-[2] p-6 bg-white min-h-[500px] rounded-lg shadow-[0_6px_30px_rgba(0,0,0,0.1)]">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default Profile;
