import classNames from 'classnames/bind';
import styles from './Destination.module.scss';

const cx = classNames.bind(styles);

function AddDestination() {
    return (
        <div className={cx('add-destination-wrapper')}>
            <div className={cx('add-destination-info')}>
                <div className={cx('add-destination-details')}></div>
                <div className={cx('other-info')}></div>
            </div>
            <div className={cx('add-destination-save')}></div>
        </div>
    );
}

export default AddDestination;
