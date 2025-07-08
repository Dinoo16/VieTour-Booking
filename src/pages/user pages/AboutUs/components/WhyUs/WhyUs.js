import styles from './WhyUs.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function WhyUs() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-2')}>
                <div className={cx('who-we-are')}>
                <h4 className={cx('label')}>W  h o W e A r e</h4>
                <h1 className={cx('title')}>Who We Are</h1>
                <p>Established in [Year of Establishment], [Your Travel Agency Name] has been dedicated to creating unforgettable travel experiences. Our journey started with a simple idea: to make travel extraordinary. Today, we continue to turn dreams into reality</p>
                <div className={cx('img-container')}>
                    <img className={cx('content-2-img')} src={images.aboutus} alt="aboutus" />
                </div>
                </div>
                <div className={cx('why-us')}>
                <h4 className={cx('label')}>W h y U s</h4>
                <h1 className={cx('title')}>Why Us</h1>
                <p>Established in [Year of Establishment], [Your Travel Agency Name] has been dedicated to creating unforgettable travel experiences. Our journey started with a simple idea: to make travel extraordinary. Today, we continue to turn dreams into reality</p>
                <div className={cx('img-container')}>
                    <img className={cx('content-2-img')} src={images.whyus} alt="why-us" />
                </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;