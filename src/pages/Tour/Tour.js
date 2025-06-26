import classNames from 'classnames/bind';
import styles from './Tour.module.scss';
import icons from '~/assets/icons';
import Menu from './Menu/Menu';
import TourCard from '~/components/TourCard/TourCard';
import images from '~/assets/images';
import React, { useState } from 'react';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        title: 'Date',
        icon: icons.calendar,
    },
    {
        title: 'Price Low To High',
        icon: icons.upIcon,
    },
    {
        title: 'Price High To Low',
        icon: icons.downIcon,
    },
    {
        title: 'Name',
        icon: icons.penIcon,
    },
];

const TOURS = [
    {
        image: images.halongbay,
        title: 'Ha Long',
        destination: 'Quang Ninh',
        rating: 4.8,
        oldPrice: 950,
        price: 850,
    },
    {
        image: images.hanoi,
        title: 'Guom Lake',
        destination: 'Hanoi',
        rating: 4.5,
        oldPrice: 950,
        price: 850,
    },
    {
        image: images.halongbay,
        title: 'Ha Long',
        destination: 'Quang Ninh',
        rating: 4.8,
        oldPrice: 950,
        price: 850,
    },
    {
        image: images.hanoi,
        title: 'Guom Lake',
        destination: 'Hanoi',
        rating: 4.5,
        oldPrice: 950,
        price: 850,
    },
    {
        image: images.halongbay,
        title: 'Ha Long',
        destination: 'Quang Ninh',
        rating: 4.8,
        oldPrice: 950,
        price: 850,
    },
    {
        image: images.halongbay,
        title: 'Ha Long',
        destination: 'Quang Ninh',
        rating: 4.8,
        oldPrice: 950,
        price: 850,
    },
];

function handleTourClick(item) {
    console.log(item);
}

function Tour() {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1200);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('filter-bar')}>
                <Menu items={MENU_ITEMS} />
            </div>

            <div className={cx('content')}>
                <div className={cx('tour-list')}>
                    {TOURS.map((tour, index) => (
                        <TourCard
                            key={index}
                            images={tour.image}
                            title={tour.title}
                            destination={tour.destination}
                            rating={tour.rating}
                            oldPrice={tour.oldPrice}
                            price={tour.price}
                            onclick={() => handleTourClick(tour)}
                        />
                    ))}
                    <div className={cx('pagination')}> </div>
                </div>

                {/* component */}
                <div className={cx('book-tour')}>
                    <h1 className={cx('title')}>Plan Your Trip</h1>
                    <p className={cx('description')}>
                        Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo
                        quidem neque iste expedita est dolo.
                    </p>
                    <div className={cx('form')}>
                        <div className={cx('form-item', 'input-box')}>
                            <icons.search className={cx('input-icon')} />
                            <input type="text" id="tourname" placeholder="Search Tour" className={cx('input')} />
                        </div>
                        <div className={cx('form-item', 'input-box')}>
                            <icons.location className={cx('input-icon')} />
                            <input type="text" id="location" placeholder="Location" className={cx('input')} />
                        </div>
                        <div className={cx('form-item', 'input-box')}>
                            <icons.calendar className={cx('input-icon')} />
                            <input type="date" id="date" placeholder="Date" className={cx('input')} />
                        </div>
                    </div>

                    <div className={cx('price-filter')}>
                        <h2 className={cx('price-filter-title')}>Filter By Price</h2>
                        <div className={cx('price-filter-bar')}>
                            <input
                                type="range"
                                min={0}
                                max={1200}
                                value={minPrice}
                                onChange={(e) => setMinPrice(Number(e.target.value))}
                                className={cx('slider')}
                                style={{ zIndex: minPrice > 1200 - 100 ? 5 : 3 }}
                            />
                            <input
                                type="range"
                                min={0}
                                max={1200}
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                                className={cx('slider')}
                                style={{ zIndex: 4 }}
                            />
                        </div>
                        <div className={cx('price-filter-value')}>
                            Price: ${minPrice} – ${maxPrice}
                        </div>
                    </div>

                    <Button primary>Book Now</Button>
                </div>
            </div>
        </div>
    );
}

export default Tour;
