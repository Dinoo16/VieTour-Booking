import classNames from 'classnames/bind';
import styles from './Feedback.module.scss';
import images from '~/assets/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Button from '~/components/Button/Button';
import FeedBack from '~/components/FeedBack/FeedBack';
const cx = classNames.bind(styles);

const FEEDBACKS = [
    {
        id: 1,
        avatar: images.avatar,
        name: 'Dino',
        role: 'Traveler',
        content:
            'A home that perfectly blends sustainability with luxury until discovered Ecoland Residence. The moment I stepped community, I knew it was where I wanted to live.',
        rating: 5,
    },
    {
        id: 2,
        avatar: images.avatar,
        name: 'John Smith',
        role: 'Traveler',
        content:
            'A home that perfectly blends sustainability with luxury until discovered Ecoland Residence. The moment I stepped community, I knew it was where I wanted to live.',
        rating: 5,
    },
    {
        id: 3,
        avatar: images.avatar,
        name: 'Jane Smith',
        role: 'Traveler',
        content:
            'A home that perfectly blends sustainability with luxury until discovered Ecoland Residence. The moment I stepped community, I knew it was where I wanted to live.',
        rating: 5,
    },
];

const Feedback = () => {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('label')}>TESTIMONIAL</h4>
            <h1 className={cx('title')}>What Clients Say About Us</h1>
            <Swiper modules={[Navigation, Pagination]} slidesPerView={1} loop={true} className={cx('slider')}>
                {FEEDBACKS.map((feedback) => (
                    <SwiperSlide key={feedback.id}>
                        <FeedBack item={feedback} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Button text href="#!" className={cx('view-more')}>
                View More
            </Button>
        </div>
    );
};

export default Feedback;
