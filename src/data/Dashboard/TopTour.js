import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from '~/adminpages/components/Table/Table.module.scss';
const cx = classNames.bind(styles);

export const TOPTOUR_DATA = [
    {
        name: 'Ha Long Bay',
        image: images.halongbay,
        orders: 100,
        revenue: 1234,
        percent: 30,
    },
    {
        name: 'Guom Lake',
        image: images.hanoi,
        orders: 150,
        revenue: 1234,
        percent: 21,
    },
    {
        name: 'Ha Long Bay',
        orders: 100,
        image: images.halongbay,
        revenue: 1234,
        percent: 30,
    },
    {
        name: 'Guom Lake',
        orders: 150,
        image: images.hanoi,
        revenue: 1234,
        percent: 21,
    },
];

export const TOPTOUR_COLUMNS = [
    {
        header: 'Best Selling Tour',
        accessor: 'name',
        render: (value, row) => (
            <div className={cx('tour-cell')}>
                <img src={row.image} alt={value} />
                <span>{value}</span>
            </div>
        ),
    },
    {
        header: 'Orders',
        accessor: 'orders',
    },
    {
        header: 'Revenue($)',
        accessor: 'revenue',
        render: (value) => `$${value}`,
    },
    {
        header: 'Revenue(%)',
        accessor: 'percent',
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
