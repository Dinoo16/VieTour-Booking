import classNames from 'classnames/bind';
import styles from './Categories.module.scss';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const cx = classNames.bind(styles);

function Categories({ items = [], onclick }) {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('label')}>CATEGORY</h4>
            <h1 className={cx('title')}>Tour Categories</h1>
            <Swiper
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={3}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
                className={cx('slider')}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className={cx('card')} onClick={() => onclick(item)}>
                            <img src={item.image} alt={item.title} className={cx('image')} />
                            <h3 className={cx('card-title')}>{item.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

Categories.propTypes = {
    items: PropTypes.array.isRequired,
    onclick: PropTypes.func.isRequired,
};

export default Categories;
