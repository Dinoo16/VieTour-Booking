import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import classNames from 'classnames/bind';
import styles from './Box.module.scss';

const cx = classNames.bind(styles);

function CalendarBox({ onSelect }) {
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (date) => {
        setStartDate(date);
        if (onSelect) {
            onSelect(date);
        }
    };
    return (
        <div className={cx('dropdown')}>
            <DatePicker
                selected={startDate}
                onChange={handleChange}
                inline
                calendarClassName={cx('calendar')}
                dayClassName={() => cx('calendar-day')}
            />
        </div>
    );
}

export default CalendarBox;
