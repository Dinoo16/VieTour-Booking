import images from '~/assets/images';
import { useState } from 'react';
import { useUser } from '~/contexts/UserContext';
import icons from '~/assets/icons';

import { isAuthenticated } from '~/utils/isAuthenticated';
import Button from '~/components/Button/Button';
const tabs = [
    { id: 'upcoming', label: 'Upcoming Tours' },
    { id: 'done', label: 'Done Tours' },
    { id: 'cancel', label: 'Cancel' },
];
function Schedule() {
    const { user, loading } = useUser();
    const currentUser = isAuthenticated();
    const [activeTab, setActiveTab] = useState('upcoming');

    const username = user?.name || (user?.email ? user.email.split('@')[0] : 'User');

    return (
        <div className="relative top-0 -translate-y-[60px]">
            {!currentUser ? (
                <div className="flex justify-center items-center h-[500px]">
                    <img src={images.no_result} alt="no result" className="w-[300px] h-auto" />
                </div>
            ) : (
                <div>
                    {/* Header */}
                    <div className="flex flex-col gap-3 text-black mb-6 justify-center items-center">
                        <img
                            className="w-[120px] h-[120px] rounded-full "
                            src={images[user.avatar] || user.avatar}
                            alt={user.avatar}
                        />
                        <div>
                            <h3 className="text-2xl font-semibold text-center">{username}</h3>
                            <span className="text-center">{user.email}</span>
                        </div>
                    </div>

                    {/* Menu Tab */}
                    <div className="w-full bg-white rounded-lg shadow-[0_4px_16px_0_rgba(17,34,17,0.1)] flex">
                        {tabs.map((tab, idx) => (
                            <div
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 text-center py-4 cursor-pointer relative font-medium ${
                                    activeTab === tab.id ? 'text-black' : 'text-gray-500'
                                } ${idx !== 0 ? 'border-l border-gray-200' : ''}`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[var(--primary)] rounded-full"></span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="w-full h-full mt-10 ">
                        <div className="flex items-center justify-between w-full px-6 py-8 rounded-lg shadow-[0_4px_16px_0_rgba(17,34,17,0.1)]">
                            <div className="flex">
                                {/* logo */}
                                <img src={images.destination_1} className="w-20 h-20 rounded-lg" />
                                {/* time detail */}
                                <div class="flex items-center gap-6 mx-6">
                                    <div class="text-center">
                                        <p class="text-sm text-gray-600">Newark (EWR)</p>
                                        <p class="text-xl font-semibold">12:00 pm</p>
                                    </div>
                                    <span class="text-gray-500 text-xl">—</span>
                                    <div class="text-center">
                                        <p class="text-sm text-gray-600">Newark (EWR)</p>
                                        <p class="text-xl font-semibold">6:00 pm</p>
                                    </div>
                                    <div class="border-l h-10 border-gray-300"></div>
                                </div>
                                {/* detail info */}
                                <div class="grid grid-cols-2 gap-x-6 gap-y-2">
                                    {/* Date info*/}
                                    <div class="flex items-center gap-3">
                                        <div class="p-2 rounded-lg bg-[#DF6951]/20">
                                            <icons.calendar className="w-5 h-5 text-[var(--primary)]" />
                                        </div>
                                        <div>
                                            <p class="text-sm">Date</p>
                                            <p class="font-semibold">12-11-22</p>
                                        </div>
                                    </div>
                                    {/* Tour Guide info*/}
                                    <div class="flex items-center gap-3">
                                        <div class="p-2 rounded-lg bg-[#DF6951]/20">
                                            <icons.user className="w-5 h-5 text-[var(--primary)]" />
                                        </div>
                                        <div>
                                            <p class="text-sm text-gray-600">Tour Guide</p>
                                            <p class="font-semibold">Jonh Doe</p>
                                        </div>
                                    </div>
                                    {/* Time info*/}
                                    <div class="flex items-center gap-3">
                                        <div class="p-2 rounded-lg bg-[#DF6951]/20">
                                            <icons.time className="w-5 h-5 text-[var(--primary)]" />
                                        </div>
                                        <div>
                                            <p class="text-sm text-gray-600">Duration</p>
                                            <p class="font-semibold">2 days</p>
                                        </div>
                                    </div>
                                    {/* Number of people*/}
                                    <div class="flex items-center gap-3">
                                        <div class="p-2 rounded-lg bg-[#DF6951]/20">
                                            <icons.group_user className="w-5 h-5 text-[var(--primary)]" />
                                        </div>
                                        <div>
                                            <p class="text-sm text-gray-600">People</p>
                                            <p class="font-semibold">2</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="">
                                <Button primary>Dowload Ticket</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Schedule;
