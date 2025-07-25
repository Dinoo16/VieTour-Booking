import React from 'react';
import classNames from 'classnames/bind';
import styles from './RewardSection.module.scss';
import icons from '~/assets/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const cx = classNames.bind(styles);

const rewards = {
    Silver: [
        { id: 1, locked: false },
        { id: 2, locked: false },
        { id: 3, locked: false },
        { id: 4, locked: false },
    ],
    Golden: [
        { id: 5, locked: true },
        { id: 6, locked: true },
        { id: 7, locked: true },
    ],
};

function RewardSection() {
    return (
        <div className={cx('wrapper')}>
            {Object.entries(rewards).map(([tier, items]) => (
                <div className={cx('tierGroup')} key={tier}>
                    <div className={cx('tierLabel')}>
                        <icons.lock />
                        <span>{tier}</span>
                    </div>

                    <Swiper
                        spaceBetween={16}
                        slidesPerView={'auto'}
                        className={cx('cardSwiper')}
                        pagination={{ clickable: true }}
                    >
                        {items.map((item) => (
                            <SwiperSlide key={item.id} className={cx('slide')} style={{ width: '130px' }}>
                                <div className={cx('card', { locked: item.locked })}>
                                    <icons.gift />
                                    <p className={cx('cardText')}>5% of booking</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ))}
        </div>
    );
}

export default RewardSection;
