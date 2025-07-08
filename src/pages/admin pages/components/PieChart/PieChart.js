import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import styles from './PieChart.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const data = [
    { name: 'Ha Long Bay', value: 36 },
    { name: 'Guom Lake', value: 30 },
    { name: 'Phong Nha', value: 22 },
    { name: 'My Khe Beach', value: 12 },
];

const COLORS = ['#DF6951', 'rgba(223, 105, 81, 0.7)', 'rgba(223, 105, 81, 0.5)', 'rgba(223, 105, 81, 0.3)'];

export default function TopTours() {
    const totalCustomers = 123;
    const ranges = ['This Week', 'Last Week'];
    const [selectedRange, setSelectedRange] = useState(ranges[0]);

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Top Tours</h3>

            <div className={cx('chartWrapper')}>
                <ResponsiveContainer width={180} height={180}>
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={3}
                            dataKey="value"
                            startAngle={90}
                            endAngle={-270}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className={cx('centerText')}>
                    <select
                        className={cx('dropdown')}
                        value={selectedRange}
                        onChange={(e) => {
                            setSelectedRange(e.target.value);
                        }}
                    >
                        {ranges.map((range) => (
                            <option key={range} value={range}>
                                {range}
                            </option>
                        ))}
                    </select>
                    <div className={cx('number')}>{totalCustomers}</div>
                    <div className={cx('label')}>Total Customer</div>
                </div>
            </div>

            <div className={cx('tourList')}>
                {data.map((tour, index) => (
                    <div className={cx('tourItem')} key={index}>
                        <div className={cx('badge')} style={{ backgroundColor: COLORS[index] }}>
                            {tour.value}%
                        </div>
                        <div className={cx('tourInfo')}>
                            <div className={cx('name')}>{tour.name}</div>
                            <div className={cx('customers')}>50 Customers</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
