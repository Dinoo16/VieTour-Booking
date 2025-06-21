import classNames from 'classnames/bind';
import styles from './Destination.module.scss';
import icons from '~/assets/icons';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Button from '~/components/Button/Button';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Destination({ items = [], onclick }) {
    return (
        <div className={cx('destination')}>
            <h4 className={cx('destination-label')}>TOUR</h4>
            <h1 className={cx('destination-title')}>Popular Destinations</h1>
            <Swiper
                effect="coverflow"
                loop={true}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className={cx('swiper')}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index} className={cx('slide')}>
                        <img src={item.image} alt={item.name} className={cx('image')} />
                        <div className={cx('info')}>
                            <div className={cx('info-name')}>
                                <p className={cx('location')}>{item.name}</p>

                                <div className={cx('info-duration')}>
                                    <icons.calendar />
                                    <span className={cx('duration')}>{item.duration}</span>
                                </div>
                            </div>
                            <Button small rounded transparent onClick={() => onclick(item)}>
                                Explore Tours
                            </Button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

Destination.propTypes = {
    items: PropTypes.array.isRequired,
    onclick: PropTypes.func.isRequired,
};

export default Destination;
