import classNames from 'classnames/bind';
import styles from './Guide.module.scss';
import images from '~/assets/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import GuideCard from './GuideCard';

const cx = classNames.bind(styles);

function Guide({ items = [] }) {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('label')}>Tour Guide</h4>
            <h1 className={cx('title')}>Meet Our Tour Guide</h1>
            <Swiper
                modules={[Pagination]}
                spaceBetween={24}
                loop={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    425: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                className={cx('slider')}
            >
                {items.map((guide, index) => (
                    <SwiperSlide key={guide.id || index}>
                        <GuideCard {...guide} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Guide;
