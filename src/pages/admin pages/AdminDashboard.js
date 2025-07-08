import classNames from 'classnames/bind';
import styles from './AdminDashboard.module.scss';
import icons from '~/assets/icons';
import Table from './components/Table/Table';
import { TOPTOUR_DATA, TOPTOUR_COLUMNS } from '~/data/Dashboard/TopTour';
import Calendar from './components/Calendar/Calendar';
import LineChart from './components/LineChart/LineChart';

const cx = classNames.bind(styles);

const SUMMARY_ITEMS = [
    {
        icon: icons.booking,
        title: 'Total Bookings',
        value: 10001,
    },
    {
        icon: icons.user,
        title: 'Total Customers',
        value: 1245,
    },
    {
        icon: icons.dollar,
        title: 'Total Earnings',
        value: '$1234.5',
    },
];

const AdminDashboard = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('summary')}>
                    {SUMMARY_ITEMS.map((item, index) => (
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
