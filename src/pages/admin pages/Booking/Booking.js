import styles from './Booking.module.scss';
import classNames from 'classnames/bind';
import Table from '../components/Table/Table';
import PieChart from '../components/PieChart/PieChart';
import Pagination from '../components/Pagination/Pagination';
import { BOOKING_COLUMNS } from '~/data/Dashboard/Booking';
import { useEffect, useState } from 'react';
import { useBookings } from '~/hooks/useBooking';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';

const cx = classNames.bind(styles);

function Booking() {
    //Fetch bookings
    const { data: bookingsData = [], isBookingsLoading } = useBookings();

    // State phân trang
    const [currentPage, setCurrentPage] = useState(1);
    const bookingsPerPage = 10;
    // Tính chỉ số slice
    const indexOfLastBooking = currentPage * bookingsPerPage;
    const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
    const currentBookings = bookingsData.slice(indexOfFirstBooking, indexOfLastBooking);

    const totalPages = Math.ceil(bookingsData.length / bookingsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (isBookingsLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Recent Bookings</h2>
            <div className={cx('content')}>
                <div className={cx('recent-bookings')}>
                    <Table columns={BOOKING_COLUMNS} data={currentBookings} />
                    {/* Phân trang */}
                    <div className={cx('pagination')}>
                        <button
                            className={cx('prev')}
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((prev) => prev - 1)}
                        >
                            Prev
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={cx('page-btn', { active: currentPage === i + 1 })}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            className={cx('next')}
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((prev) => prev + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>
                <div className={cx('top-tours')}>
                    <PieChart />
                </div>
            </div>
        </div>
    );
}
export default Booking;
