import ChatSidebar from './components/ChatSidebar/ChatSidebar';
import ChatWindow from './components/ChatWindow/ChatWindow';
import styles from './Message.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Message() {
    return (
        <div className={cx('wrapper')}>
            <ChatSidebar />
            <ChatWindow />
        </div>
    );
}

export default Message;
