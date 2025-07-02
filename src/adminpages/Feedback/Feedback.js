import styles from './Feedback.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Feedback() {
    return <div className={cx('wrapper')}>FeedBack</div>;
}

export default Feedback; 