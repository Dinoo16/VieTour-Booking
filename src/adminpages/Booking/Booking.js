import styles from './Booking.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Booking() {
    return (
        <div className={cx('wrapper')}> Booking</div>
    )
}
export default Booking; 