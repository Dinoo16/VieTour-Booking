import styles from './Tour.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Tour() {
    return <div className={cx('wrapper')}> Tour</div>;
}

export default Tour; 