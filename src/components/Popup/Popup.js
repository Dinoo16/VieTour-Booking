import classNames from 'classnames/bind';
import styles from './Popup.module.scss';

const cx = classNames.bind(styles);

function Popup({ title, message, onConfirm }) {
    return (
        <div className={cx('overlay')}>
            <div className={cx('popup')}>
                <h2 className={cx('title')}>{title}</h2>
                <p className={cx('message')}>{message}</p>
                <div className={cx('actions')}>
                    <button onClick={onConfirm} className={cx('confirm-btn')}>
                        Ok
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Popup;
