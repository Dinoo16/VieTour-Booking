import styles from './LoadingSpinner.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LoadingSpinner({ text, small }) {
    return (
        <div className={cx('loading-wrapper')}>
            <div className={cx('spinner', { 'small': small })}></div>
            {text && <span className={cx('loading-text')}>{text}</span>}
        </div>
    );
}

export default LoadingSpinner;
