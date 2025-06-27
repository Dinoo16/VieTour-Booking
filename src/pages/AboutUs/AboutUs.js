import classNames from 'classnames/bind';
import styles from './AboutUs.module.scss';
import images from '~/assets/images';
import Intro from './components/Intro/Intro';
import WhyUs from './components/WhyUs/WhyUs';
import Achievement from './components/Achievement/Achievement';
import Button from '~/components/Button/Button';
import Guide from './components/Guide/Guide';
import Feedback from './components/Feedback/Feedback';
const cx = classNames.bind(styles);

const ACHIEVEMENTS = [
    { number: '12', label: 'Years Experience' },
    { number: '97%', label: 'Retention Rate' },
    { number: '8k', label: 'Tour Completed' },
    { number: '19k', label: 'Happy Travellers' },
];
const GUIDES = [
    {
        name: 'Jane Cooper',
        avatar: images.avatar,
        role: 'Tour Guide',
        social: {
            facebook: 'https://www.facebook.com/jane.cooper',
            twitter: 'https://www.twitter.com/jane.cooper',
            instagram: 'https://www.instagram.com/jane.cooper',
            youtube: 'https://www.youtube.com/jane.cooper',
        },
    },
    {
        name: 'John Doe',
        avatar: images.avatar,
        role: 'Tour Guide',
        social: {
            facebook: 'https://www.facebook.com/jane.cooper',
            twitter: 'https://www.twitter.com/jane.cooper',
            instagram: 'https://www.instagram.com/jane.cooper',
            youtube: 'https://www.youtube.com/jane.cooper',
        },
    },
    {
        name: 'Jane Smith',
        avatar: images.avatar,
        role: 'Tour Guide',
        social: {
            facebook: 'https://www.facebook.com/jane.cooper',
            twitter: 'https://www.twitter.com/jane.cooper',
            instagram: 'https://www.instagram.com/jane.cooper',
            youtube: 'https://www.youtube.com/jane.cooper',
        },
    },
    {
        name: 'Jake Doe',
        avatar: images.avatar,
        role: 'Tour Guide',
        social: {
            facebook: 'https://www.facebook.com/jane.cooper',
            twitter: 'https://www.twitter.com/jane.cooper',
            instagram: 'https://www.instagram.com/jane.cooper',
            youtube: 'https://www.youtube.com/jane.cooper',
        },
    },
    {
        name: 'Lily Smith',
        avatar: images.avatar,
        role: 'Tour Guide',
        social: {
            facebook: 'https://www.facebook.com/jane.cooper',
            twitter: 'https://www.twitter.com/jane.cooper',
            instagram: 'https://www.instagram.com/jane.cooper',
            youtube: 'https://www.youtube.com/jane.cooper',
        },
    },
];
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
