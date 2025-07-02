import styles from './Message.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Message() {
    return <div className={cx('wrapper')}>Message</div>;
}

export default Message; 