// src/components/Loading/LoadingSpinner.jsx
import styles from './LoadingSpinner.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LoadingSpinner({ text = 'Loading...' }) {
    return (
        <div className={cx('loading-wrapper')}>
            <div className={cx('spinner')}></div>
            <span className={cx('loading-text')}>{text}</span>
        </div>
    );
}

export default LoadingSpinner;
