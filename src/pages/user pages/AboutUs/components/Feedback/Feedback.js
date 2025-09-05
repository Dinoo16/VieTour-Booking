import classNames from 'classnames/bind';
import styles from './Feedback.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Button from '~/components/Button/Button';
import FeedBack from '~/components/FeedBack/FeedBack';
import { FEEDBACKS } from '~/data/Tour/Tour';

const cx = classNames.bind(styles);

const Feedback = () => {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('label')}>TESTIMONIAL</h4>
            <h1 className={cx('title')}>What Clients Say About Us</h1>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                loop={true}
                className={cx('slider')}
            >
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
