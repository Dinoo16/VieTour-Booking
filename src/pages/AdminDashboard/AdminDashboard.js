import classNames from 'classnames/bind';
import styles from './AdminDashboard.module.scss';
import icons from '~/assets/icons';
import Table from './components/Table/Table';
import { BOOKINGS, BOOKING_COLUMNS } from '~/data/Dashboard/Booking';
import Calendar from './components/Calendar/Calendar';

const cx = classNames.bind(styles);

const SUMMARY_ITEMS = [
    {
        icon: icons.booking,
        title: 'Total Bookings',
        value: 10001,
    },
    {
        icon: icons.booking,
        title: 'Total Customers',
        value: 1245,
    },
    {
        icon: icons.booking,
        title: 'Total Earnings',
        value: '$1234.5',
    },

];

const AdminDashboard = () => {
    return <div className={cx('wrapper')}>
        <div className={cx('content')}>
            <div className={cx('summary')}>
                {SUMMARY_ITEMS.map((item, index) => (
                    <div className={cx('summary-item')} key={index}>
                        <icons.booking />
                        <div className={cx('summary-item-info')}>
                            <span className={cx('summary-item-title')}>{item.title}</span>
                            <span className={cx('summary-item-value')}><strong>{item.value}</strong></span>
                        </div>
                    </div>
                ))}
            </div>

            <div className={cx('recent-bookings')}>
                <h2 className={cx('heading')}>Recent Bookings</h2>
                <Table columns={BOOKING_COLUMNS} data={BOOKINGS} />
            </div>
            
        </div>
        <div className={cx('calendar')}>
            <Calendar />
        </div>
    </div>;
};

export default AdminDashboard;