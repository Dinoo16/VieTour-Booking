import React from 'react';
import { LineChart as ReLineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import classNames from 'classnames/bind';
import styles from './LineChart.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);

const stats = [
    { title: 'Users', value: '3.2K', change: '42.0%', positive: true, key: 'user' },
    { title: 'Bookings', value: '1.2K', change: '42.0%', positive: true, key: 'booking' },
    { title: 'Tours', value: '1.2K', change: '12.0%', positive: false, key: 'tour' },
    { title: 'Earnings', value: '3.3K', change: '12.0%', positive: false, key: 'earning' },
];

const userData = [
    { day: 'Sun', value: 100 },
    { day: 'Mon', value: 200 },
    { day: 'Tue', value: 80 },
    { day: 'Wed', value: 150 },
    { day: 'Thu', value: 250 },
    { day: 'Fri', value: 200 },
    { day: 'Sat', value: 70 },
];
const bookingData = [
    { day: 'Sun', value: 200 },
    { day: 'Mon', value: 100 },
    { day: 'Tue', value: 50 },
    { day: 'Wed', value: 150 },
    { day: 'Thu', value: 250 },
    { day: 'Fri', value: 300 },
    { day: 'Sat', value: 60 },
];
const tourData = [
    { day: 'Sun', value: 50 },
    { day: 'Mon', value: 100 },
    { day: 'Tue', value: 250 },
    { day: 'Wed', value: 150 },
    { day: 'Thu', value: 250 },
    { day: 'Fri', value: 100 },
    { day: 'Sat', value: 70 },
];
const earningData = [
    { day: 'Sun', value: 50 },
    { day: 'Mon', value: 100 },
    { day: 'Tue', value: 120 },
    { day: 'Wed', value: 200 },
    { day: 'Thu', value: 130 },
    { day: 'Fri', value: 100 },
    { day: 'Sat', value: 70 },
];
const chartMap = {
    user: userData,
    booking: bookingData,
    tour: tourData,
    earning: earningData,
};

export default function LineChart() {
    const [activeStat, setActiveStat] = useState(stats[0]);

    return (
        <div className={cx('dashboardCard')}>
            <div className={cx('statsRow')}>
                {stats.map((item, index) => (
                    <div
                        className={cx('statBox', { active: activeStat.key === item.key })}
                        key={index}
                        onClick={() => setActiveStat(item)}
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
                <ReLineChart data={chartMap[activeStat.key]} margin={{ top: 0, right: 20, left: 20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis interval={0} dataKey="day" />
                    <YAxis hide />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#5E72E4" strokeWidth={2} dot={false} />
                </ReLineChart>
            </ResponsiveContainer>

            <div className={cx('footerSelect')}>
                <button className={cx('selectBtn')}>Last 7 days ▼</button>
            </div>
        </div>
    );
}
