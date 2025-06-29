import classNames from 'classnames/bind';
import styles from './AboutUs.module.scss';
import images from '~/assets/images';
import Intro from './components/Intro/Intro';
import WhyUs from './components/WhyUs/WhyUs';
import Achievement from './components/Achievement/Achievement';
import Button from '~/components/Button/Button';
import Guide from './components/Guide/Guide';
import Feedback from './components/Feedback/Feedback';
import { ACHIEVEMENTS, GUIDES } from '~/data/Guide/Guide';


const cx = classNames.bind(styles);

function AboutUs() {
    return (
        <div className={cx('wrapper')}>
            <Intro />

            <WhyUs />

            <div className={cx('gallery')}>
                <img src={images.gallery} alt="aboutus" className={cx('gallery-img')} />
                <div className={cx('overlay')}> </div>
                <Button iconButton className={cx('play-btn')}></Button>
            </div>

            <Achievement items={ACHIEVEMENTS} />

            <Guide items={GUIDES} />

            <Feedback />
        </div>
    );
}

export default AboutUs;
