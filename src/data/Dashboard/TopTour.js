import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from '~/pages/admin pages/components/Table/Table.module.scss';
const cx = classNames.bind(styles);


export const TOPTOUR_COLUMNS = [
    {
        header: 'Best Selling Tour',
        accessor: 'title',
        render: (value, row) => (
            <div className={cx('tour-cell')}>
                <img src={row.backgroundImage} alt={value} />
                <span>{value}</span>
            </div>
        ),
    },
    {
        header: 'Orders',
        accessor: 'count',
    },
    {
        header: 'Revenue($)',
        accessor: 'totalAmount',
        render: (value) => `$${value}`,
    },
    {
        header: 'Revenue(%)',
        accessor: 'revenuePercent',
        render: (value) => (
            <div className={cx('percent-wrapper')}>
                <div className={cx('progress-bar')}>
                    <div className={cx('fill')} style={{ width: `${value}%` }}></div>
                </div>
                <span>{value}%</span>
            </div>
        ),
    },
];
