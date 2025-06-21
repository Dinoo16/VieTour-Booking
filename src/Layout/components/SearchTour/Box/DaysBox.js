import classNames from 'classnames/bind';
import styles from './Box.module.scss';

const cx = classNames.bind(styles);

function DaysBox({ onSelect }) {
    const DAYS = ['1 day', '2 days', '3 days', '4 days', '5 days', '6 days'];

    return (
        <div className={cx('dropdown')}>
            <p className={cx('dropdown-title')}>Select your days</p>
            {DAYS.map((day, index) => (
                <div
                    key={index}
                    className={cx('dropdown-item', 'daysbox', { selected: index === 0 })}
                    onClick={() => onSelect && onSelect(day)}
                >
                    {day}
                </div>
            ))}
        </div>
    );
}

export default DaysBox;
