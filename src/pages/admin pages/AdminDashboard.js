import classNames from 'classnames/bind';
import styles from './AdminDashboard.module.scss';
import icons from '~/assets/icons';
import Table from './components/Table/Table';
import { TOPTOUR_DATA, TOPTOUR_COLUMNS } from '~/data/Dashboard/TopTour';
import Calendar from './components/Calendar/Calendar';
import LineChart from './components/LineChart/LineChart';
import { useEffect, useState, useMemo } from 'react';
import { useBookings } from '~/hooks/useBooking';
import { useUsers } from '~/hooks/useUsers';
import { useTours } from '~/hooks/useTours';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';

const cx = classNames.bind(styles);

const AdminDashboard = () => {
    // Fetch tour
    const { data: tours = [] } = useTours();

    // Fetch bookings
    const { data: bookings = [], isBookingsDataLoading } = useBookings();
    // Fetch users
    const { data: users = [], isUsersLoading } = useUsers();

    // Filter bookings status PAID
    const paidBookings = useMemo(() => bookings.filter((b) => b.status === 'PAID'), [bookings]);

    // Total earnings (tính tổng tiền từ bookings PAID)
    const totalEarning = useMemo(() => paidBookings.reduce((sum, b) => sum + (b.totalAmount || 0), 0), [paidBookings]);

    const bookingsCount = useMemo(() => bookings.length, [bookings]);
    const usersCount = useMemo(() => users.length, [users]);

    const bestSellingTours = useMemo(() => {
        // Đếm số lượng booking theo tourId + tổng tiền
        const tourCountMap = paidBookings.reduce((acc, booking) => {
            if (!acc[booking.tourId]) {
                acc[booking.tourId] = { count: 0, totalAmount: 0 };
            }
            acc[booking.tourId].count += 1;
            acc[booking.tourId].totalAmount += booking.totalAmount;
            return acc;
        }, {});

        // Convert sang array để sort
        const sortedTours = Object.entries(tourCountMap)
            .map(([tourId, data]) => {
                const tour = tours.find((t) => t.id === Number(tourId));
                return {
                    tourId: Number(tourId),
                    count: data.count,
                    totalAmount: data.totalAmount,
                    revenuePercent: ((data.totalAmount / totalEarning) * 100).toFixed(0),
                    ...tour,
                };
            })
            .sort((a, b) => b.count - a.count) // sort giảm dần theo số lượng booking
            .slice(0, 5);
        return sortedTours;
    }, [paidBookings, tours]);

    console.log('Best Selling Tours:', bestSellingTours);

    const summaryItems = useMemo(
        () => [
            {
                icon: icons.booking,
                title: 'Total Bookings',
                value: bookingsCount,
            },
            {
                icon: icons.user,
                title: 'Total Customers',
                value: usersCount,
            },
            {
                icon: icons.dollar,
                title: 'Total Earnings',
                value: totalEarning,
            },
        ],
        [bookingsCount, usersCount],
    );
    if (isBookingsDataLoading || isUsersLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }
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
                    <Table data={bestSellingTours} columns={TOPTOUR_COLUMNS} />
                </div>
            </div>
            <div className={cx('calendar')}>
                <Calendar />
            </div>
        </div>
    );
};

export default AdminDashboard;
