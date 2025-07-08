import styles from './Booking.module.scss';
import classNames from 'classnames/bind';
import Table from '../components/Table/Table';
import { BOOKINGS, BOOKING_COLUMNS } from '~/data/Dashboard/Booking';
import PieChart from '../components/PieChart/PieChart';
import Pagination from '../components/Pagination/Pagination';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Booking() {
    const [page, setPage] = useState(1);
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Recent Bookings</h2>
            <div className={cx('content')}>
                <div className={cx('recent-bookings')}>
                    <Table columns={BOOKING_COLUMNS} data={BOOKINGS} />
                    <Pagination currentPage={page} totalPages={8} onPageChange={setPage} />
                </div>
                <div className={cx('top-tours')}>
                    <PieChart />
                </div>
            </div>
        </div>
    );
}
export default Booking;
