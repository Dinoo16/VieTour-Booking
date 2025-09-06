import images from '~/assets/images';
import { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import PROFILE_SETTING_MENU from '~/data/MenuItem/ProfileSettingMenu';
import PersonalInfo from './Content/PersonalInfo/PersonalInfo';
import SecuritySetting from './Content/SecuritySetting/SecuritySetting';
import PaymentMethod from './Content/Payment/Payment';
import Bookings from './Content/Bookings/Bookings';
import MyReviews from './Content/MyReviews/MyReviews';
import { useUser } from '~/contexts/UserContext';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';
import { isAuthenticated } from '~/utils/isAuthenticated';

function Profile() {
    const currentUser = isAuthenticated();
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
    if (loading) {
        return <LoadingSpinner />;
    }
    return (
        <div className="relative top-0 -translate-y-[500px]">
            {!currentUser ? (
                <div className="flex justify-center items-center h-[500px]">
                    <img src={images.no_result} alt="no result" className="w-[300px] h-auto" />
                </div>
            ) : (
                <div>
                    {/* Header */}
                    <div className="flex gap-3 text-white mb-6">
                        <img
                            className="w-[60px] h-[60px] rounded-full"
                            src={images[user.avatar] || user.avatar}
                            alt={user.avatar}
                        />
                        <div>
                            <h3 className="text-2xl font-semibold">Hi {username} !</h3>
                            <span>{user.email}</span>
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
            )}
        </div>
    );
}

export default Profile;
