import classNames from 'classnames/bind';
import styles from './AdminDashboard.module.scss';
import icons from '~/assets/icons';
import Table from './components/Table/Table';
import { TOPTOUR_DATA, TOPTOUR_COLUMNS } from '~/data/Dashboard/TopTour';
import Calendar from './components/Calendar/Calendar';
import LineChart from './components/LineChart/LineChart';
import { useEffect, useState } from 'react';
import { getAllUsers } from '~/apiServices/adminUserService';
import { useBookings } from '~/hooks/useBooking';
import { useUsers } from '~/hooks/useUsers';

const cx = classNames.bind(styles);

const AdminDashboard = () => {
    // Fetch bookings
    const { data: bookings = [], isBookingsDataLoading } = useBookings();
    // Fetch users
    const { data: users = [], isUsersLoading } = useUsers();

    const [summaryItems, setSummaryItems] = useState([
        {
            icon: icons.booking,
            title: 'Total Bookings',
            value: isBookingsDataLoading ? 'Loading...' : bookings.length,
        },
        {
            icon: icons.user,
            title: 'Total Customers',
            value: isUsersLoading ? 'Loading...' : users.length,
        },
        {
            icon: icons.dollar,
            title: 'Total Earnings',
            value: '$1234.5',
        },
    ]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('summary')}>
                    {summaryItems.map((item, index) => (
                        <div className={cx('summary-item')} key={index}>
                            <item.icon />
                            <div className={cx('summary-item-info')}>
                                <span className={cx('summary-item-title')}>{item.title}</span>
                                <span className={cx('summary-item-value')}>
                                    <strong>{item.value}</strong>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={cx('chart')}>
                    <LineChart />
                </div>
                <div className={cx('table')}>
                    <Table data={TOPTOUR_DATA} columns={TOPTOUR_COLUMNS} />
                </div>
            </div>
            <div className={cx('calendar')}>
                <Calendar />
            </div>
        </div>
    );
};

export default AdminDashboard;
