import React from 'react';
import { LineChart as ReLineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import classNames from 'classnames/bind';
import styles from './LineChart.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);

// Last 7 days data
const userData7 = [
    { day: 'Sun', value: 100 },
    { day: 'Mon', value: 200 },
    { day: 'Tue', value: 80 },
    { day: 'Wed', value: 150 },
    { day: 'Thu', value: 250 },
    { day: 'Fri', value: 200 },
    { day: 'Sat', value: 70 },
];
const bookingData7 = [
    { day: 'Sun', value: 200 },
    { day: 'Mon', value: 100 },
    { day: 'Tue', value: 50 },
    { day: 'Wed', value: 150 },
    { day: 'Thu', value: 250 },
    { day: 'Fri', value: 300 },
    { day: 'Sat', value: 60 },
];
const tourData7 = [
    { day: 'Sun', value: 50 },
    { day: 'Mon', value: 100 },
    { day: 'Tue', value: 250 },
    { day: 'Wed', value: 150 },
    { day: 'Thu', value: 250 },
    { day: 'Fri', value: 100 },
    { day: 'Sat', value: 70 },
];
const earningData7 = [
    { day: 'Sun', value: 50 },
    { day: 'Mon', value: 100 },
    { day: 'Tue', value: 120 },
    { day: 'Wed', value: 200 },
    { day: 'Thu', value: 130 },
    { day: 'Fri', value: 100 },
    { day: 'Sat', value: 70 },
];
const userData30 = Array.from({ length: 30 }, (_, i) => ({
    day: `Day ${i + 1}`,
    value: Math.floor(Math.random() * 300),
}));
const bookingData30 = Array.from({ length: 30 }, (_, i) => ({
    day: `Day ${i + 1}`,
    value: Math.floor(Math.random() * 300),
}));
const tourData30 = Array.from({ length: 30 }, (_, i) => ({
    day: `Day ${i + 1}`,
    value: Math.floor(Math.random() * 300),
}));
const earningData30 = Array.from({ length: 30 }, (_, i) => ({
    day: `Day ${i + 1}`,
    value: Math.floor(Math.random() * 300),
}));

const chartMap = {
    user: {
        'Last 7 days': userData7,
        'Last 30 days': userData30,
    },
    booking: {
        'Last 7 days': bookingData7,
        'Last 30 days': bookingData30,
    },
    tour: {
        'Last 7 days': tourData7,
        'Last 30 days': tourData30,
    },
    earning: {
        'Last 7 days': earningData7,
        'Last 30 days': earningData30,
    },
};

export default function LineChart() {
    const [activeStatKey, setActiveStatKey] = useState('user');

    const [selectedRange, setSelectedRange] = useState('Last 7 days');
    const ranges = ['Last 7 days', 'Last 30 days'];

    const totalUsers = chartMap.user[selectedRange].reduce((sum, item) => sum + item.value, 0);
    const totalBookings = chartMap.booking[selectedRange].reduce((sum, item) => sum + item.value, 0);
    const totalTours = chartMap.tour[selectedRange].reduce((sum, item) => sum + item.value, 0);
    const totalEarnings = chartMap.earning[selectedRange].reduce((sum, item) => sum + item.value, 0);
    // Format value into short (K) string
    const formatValue = (value) =>
        value >= 1000 ? (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K' : value.toString();

    const stats = [
        { title: 'Users', value: formatValue(totalUsers), change: '42.0%', positive: true, key: 'user' },
        { title: 'Bookings', value: formatValue(totalBookings), change: '42.0%', positive: true, key: 'booking' },
        { title: 'Tours', value: formatValue(totalTours), change: '12.0%', positive: false, key: 'tour' },
        { title: 'Earnings', value: formatValue(totalEarnings), change: '12.0%', positive: false, key: 'earning' },
    ];

    return (
        <div className={cx('dashboardCard')}>
            <div className={cx('statsRow')}>
                {stats.map((item, index) => (
                    <div
                        className={cx('statBox', { active: activeStatKey === item.key })}
                        key={index}
                        onClick={() => setActiveStatKey(item.key)}
                    >
                        <div className={cx('statTitle')}>{item.title}</div>
                        <div className={cx('statValue')}>{item.value}</div>
                        <div className={cx('statChange', item.positive ? 'up' : 'down')}>
                            {item.positive ? '▲' : '▼'} {item.change}
                        </div>
                    </div>
                ))}
            </div>

            <div className={cx('content')}>{}</div>

            <ResponsiveContainer width="100%" minHeight={250} className={cx('chartContainer')}>
                <ReLineChart
                    data={chartMap[activeStatKey][selectedRange]}
                    margin={{ top: 0, right: 20, left: 20, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis interval={selectedRange === 'Last 7 days' ? 0 : 2} dataKey="day" />
                    <YAxis hide />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#5E72E4" strokeWidth={2} dot={false} />
                </ReLineChart>
            </ResponsiveContainer>

            <div className={cx('footerSelect')}>
                <select
                    className={cx('selectDropdown')}
                    value={selectedRange}
                    onChange={(e) => setSelectedRange(e.target.value)}
                >
                    {ranges.map((range) => (
                        <option key={range} value={range}>
                            {range}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
