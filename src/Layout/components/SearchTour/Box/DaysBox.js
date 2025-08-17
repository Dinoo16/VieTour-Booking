import classNames from 'classnames/bind';
import styles from './Box.module.scss';

const cx = classNames.bind(styles);

function DaysBox({ onSelect }) {
    const DAYS = [1, 2, 3, 4, 5, 6];

    return (
        <div className={cx('dropdown')}>
            <p className={cx('dropdown-title')}>Select your days</p>
            {DAYS.map((day, index) => (
                <div
                    key={index}
                    className={cx('dropdown-item', 'daysbox', { selected: index === 0 })}
                    onClick={() => onSelect && onSelect(day)}
                >
                    {day == 1 ? `${day} day` : `${day} days`}
                </div>
            ))}
        </div>
    );
}

export default DaysBox;
