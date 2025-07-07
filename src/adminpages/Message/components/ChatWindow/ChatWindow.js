import styles from './ChatWindow.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import icons from '~/assets/icons';
import Button from '~/components/Button/Button';
import { useState } from 'react';
const cx = classNames.bind(styles);

function ChatWindow() {
    const [messages, setMessages] = useState([
        { sender: 'user', text: 'Could you please help me.', time: '2:17 PM' },
        { sender: 'bot', text: 'Hello, I Had An Amazing Time On The Ha Long Bay Package!', time: '2:17 PM' },
        { sender: 'user', text: 'booking a similar trip to Hanoi for next winter?', time: '2:17 PM' },
        { sender: 'bot', text: 'Got It! Thank You!!! Got It! Thank You!!!', time: '2:17 PM' },
        { sender: 'bot', text: 'Got It! Thank You!!!', time: '2:17 PM' },
        { sender: 'user', text: 'You’re Welcome!', time: '2:17 PM' },
    ]);

    return (
        <div className={cx('chat')}>
            <div className={cx('topbar')}>
                <div className={cx('info')}>
                    <img src={images.avatar} alt="avatar" />
                    <div>
                        <div className={cx('name')}>Dino</div>
                        <div className={cx('status')}>● Active Now</div>
                    </div>
                </div>
                <div className={cx('more')}>⋮</div>
            </div>

            <div className={cx('body')}>
                <div className={cx('date')}>Today</div>
                {messages.map((msg, i) => (
                    <div key={i} className={cx('message', msg.sender)}>
                        {msg.sender === 'bot' && <img src={images.avatar} alt="avatar" />}
                        <div className={cx('bubble')}>
                            <div>{msg.text}</div>
                            <span className={cx('time')}>{msg.time}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className={cx('input')}>
                <input placeholder="Type A Message..." />
                <Button iconRoudedButton className={cx('send')}>
                    {<icons.plane />}
                </Button>
            </div>
        </div>
    );
}

export default ChatWindow;
