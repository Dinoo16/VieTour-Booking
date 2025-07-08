import styles from './Intro.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Intro() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('intro')}>
                <div>
                    <h4 className={cx('label')}>ABOUT US</h4>
                    <h1 className={cx('title')}>The best travel agency for you</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum sit libero, placerat nibh
                        facilisis in rutrum. Risus, gravida purus nunc suspendisse. Sit elementum mi, netus in sit.
                        Massa posuere ac auctor quis elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In elementum sit libero, placerat nibh facilisis in rutrum. Risus, gravida purus nunc
                        suspendisse. Sit elementum mi, netus in sit. Massa posuere ac auctor quis elementum.
                    </p>
                </div>
                <img src={images.destination_1} alt="aboutus" />
            </div>
        </div>
    );
}

export default Intro;