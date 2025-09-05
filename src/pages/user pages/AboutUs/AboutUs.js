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
        <div>
            <Intro />

            <WhyUs />

            <div className="mt-[120px] w-screen max-h-[550px] overflow-visible ml-[calc(-50vw+50%)] relative">
                <img src={images.gallery} alt="aboutus" className="object-cover w-full h-full " />
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(30, 30, 30, 0.24)] z-10"> </div>
                <Button iconButton className={cx('play-btn')}></Button>
            </div>

            <Achievement items={ACHIEVEMENTS} />

            <Guide items={GUIDES} />

            <Feedback />
        </div>
    );
}

export default AboutUs;
