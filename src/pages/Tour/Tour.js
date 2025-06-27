import classNames from 'classnames/bind';
import styles from './Tour.module.scss';
import icons from '~/assets/icons';
import Menu from './Menu/Menu';
import TourCard from '~/components/TourCard/TourCard';
import images from '~/assets/images';
import Button from '~/components/Button/Button';
import PriceFilter from '~/components/PriceFilter/PriceFilter';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        id: 1,
        image: images.halongbay,
        title: 'Ha Long',
        destination: 'Quang Ninh',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        departure: 'Hanoi',
        departureTime: 'Approximately 08 : 10 AM',
        returnTime: 'Approximately 07 : 20 PM',
        category: 'Cruise, nature and romantic',
        rating: 4.8,
        oldPrice: 950,
        price: 850,
        duration: '4 days',
        tourPlans: [
            {
                day: 1,
                title: 'Departure',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 2,
                title: 'Visiting Zurich, Geneva and Zermatt',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 3,
                title: 'Rest',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 4,
                title: 'Historical Tour',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 5,
                title: 'Return',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
        ],
        review: [
            {
                name: 'John Doe',
                rating: 5,
                comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                name: 'Jane Smith',
                rating: 4.8,
                comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
        ],
        gallery: [
            images.halongbay,
            images.halongbay,
            images.halongbay,
            images.halongbay,
            images.halongbay,
            images.halongbay,
            images.halongbay,
        ],
    },
    {
        id: 2,
        image: images.hanoi,
        title: 'Guom Lake',
        destination: 'Hanoi',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        departure: 'Hanoi',
        departureTime: 'Approximately 08 : 10 AM',
        returnTime: 'Approximately 07 : 20 PM',
        category: 'Cruise, nature and romantic',
        rating: 4.8,
        oldPrice: 950,
        price: 850,
        duration: '4 days',
        tourPlans: [
            {
                day: 1,
                title: 'Departure',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 2,
                title: 'Visiting Zurich, Geneva and Zermatt',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 3,
                title: 'Rest',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 4,
                title: 'Historical Tour',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 5,
                title: 'Return',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
        ],
        review: [
            {
                name: 'John Doe',
                rating: 5,
                comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                name: 'Jane Smith',
                rating: 4.8,
                comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
        ],
        gallery: [images.hanoi, images.hanoi, images.hanoi, images.hanoi, images.hanoi, images.hanoi, images.hanoi],
    },
    {
        id: 3,
        image: images.hanoi,
        title: 'Hoi An',
        destination: 'Hoi An',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        departure: 'Hanoi',
        departureTime: 'Approximately 08 : 10 AM',
        returnTime: 'Approximately 07 : 20 PM',
        category: 'Cruise, nature and romantic',
        rating: 4.8,
        oldPrice: 950,
        price: 850,
        duration: '4 days',
        tourPlans: [
            {
                day: 1,
                title: 'Departure',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 2,
                title: 'Visiting Zurich, Geneva and Zermatt',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 3,
                title: 'Rest',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 4,
                title: 'Historical Tour',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 5,
                title: 'Return',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
        ],
        review: [
            {
                name: 'John Doe',
                rating: 5,
                comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                name: 'Jane Smith',
                rating: 4.8,
                comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
        ],
        gallery: [
            images.halongbay,
            images.halongbay,
            images.halongbay,
            images.halongbay,
            images.halongbay,
            images.halongbay,
            images.halongbay,
        ],
    },
    {
        id: 4,
        image: images.hanoi,
        title: 'Hoi An',
        destination: 'Hoi An',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        departure: 'Hanoi',
        departureTime: 'Approximately 08 : 10 AM',
        returnTime: 'Approximately 07 : 20 PM',
        category: 'Cruise, nature and romantic',
        rating: 4.8,
        oldPrice: 950,
        price: 850,
        duration: '4 days',
        tourPlans: [
            {
                day: 1,
                title: 'Departure',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 2,
                title: 'Visiting Zurich, Geneva and Zermatt',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 3,
                title: 'Rest',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 4,
                title: 'Historical Tour',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 5,
                title: 'Return',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
        ],
        review: [
            {
                name: 'John Doe',
                rating: 5,
                comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                name: 'Jane Smith',
                rating: 4.8,
                comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
        ],
        gallery: [images.hanoi, images.hanoi, images.hanoi, images.hanoi, images.hanoi, images.hanoi, images.hanoi],
    },
    {
        id: 5,
        image: images.hanoi,
        title: 'Hoi An',
        destination: 'Hoi An',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        departure: 'Hanoi',
        departureTime: 'Approximately 08 : 10 AM',
        returnTime: 'Approximately 07 : 20 PM',
        category: 'Cruise, nature and romantic',
        rating: 4.8,
        oldPrice: 950,
        price: 850,
        duration: '4 days',
        tourPlans: [
            {
                day: 1,
                title: 'Departure',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 2,
                title: 'Visiting Zurich, Geneva and Zermatt',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 3,
                title: 'Rest',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 4,
                title: 'Historical Tour',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 5,
                title: 'Return',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
        ],
        review: [
            {
                name: 'John Doe',
                rating: 5,
                comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                name: 'Jane Smith',
                rating: 4.8,
                comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
        ],
        gallery: [
            images.halongbay,
            images.halongbay,
            images.halongbay,
            images.halongbay,
            images.halongbay,
            images.halongbay,
            images.halongbay,
        ],
    },
    {
        id: 6,
        image: images.hanoi,
        title: 'Hoi An',
        destination: 'Hoi An',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        departure: 'Hanoi',
        departureTime: 'Approximately 08 : 10 AM',
        returnTime: 'Approximately 07 : 20 PM',
        category: 'Cruise, nature and romantic',
        rating: 4.8,
        oldPrice: 950,
        price: 850,
        duration: '4 days',
        tourPlans: [
            {
                day: 1,
                title: 'Departure',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 2,
                title: 'Visiting Zurich, Geneva and Zermatt',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 3,
                title: 'Rest',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 4,
                title: 'Historical Tour',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                day: 5,
                title: 'Return',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
        ],
        review: [
            {
                name: 'John Doe',
                rating: 5,
                comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                name: 'Jane Smith',
                rating: 4.8,
                comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
        ],
        gallery: [images.hanoi, images.hanoi, images.hanoi, images.hanoi, images.hanoi, images.hanoi, images.hanoi],
    },
];

function Tour() {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1200);

    const navigate = useNavigate();

    function handleTourClick(item) {
        navigate(`/tour/${item.id}`);
    }

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
                        <PriceFilter
                            minPrice={minPrice}
                            setMinPrice={setMinPrice}
                            maxPrice={maxPrice}
                            setMaxPrice={setMaxPrice}
                        />
                    </div>

                    <Button primary>Book Now</Button>
                </div>
            </div>
        </div>
    );
}

export default Tour;
