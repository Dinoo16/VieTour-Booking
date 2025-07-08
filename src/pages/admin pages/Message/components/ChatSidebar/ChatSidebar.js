import styles from './ChatSidebar.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import SearchInput from '~/components/Search/SearchInput';

const cx = classNames.bind(styles);

const messages = new Array(8).fill({
    name: 'Dino',
    message: 'Hello, I had an amazing time...',
    date: 'Yesterday',
    unread: true,
    avatar: images.avatar,
});

function ChatSidebar() {
    return (
        <div className={cx('sidebar')}>
            <div className={cx('search')}>
                <SearchInput />
            </div>
            <div className={cx('list')}>
                {messages.map((msg, index) => (
                    <div key={index} className={cx('item', { active: index === 0 })}>
                        <img src={msg.avatar} alt="avatar" />
                        <div className={cx('content')}>
                            <div className={cx('top')}>
                                <span className={cx('name')}>{msg.name}</span>
                                <span className={cx('time')}>{msg.date}</span>
                            </div>
                            <div className={cx('text')}>{msg.message}</div>
                        </div>
                        {msg.unread && <span className={cx('badge')}>3</span>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChatSidebar;
