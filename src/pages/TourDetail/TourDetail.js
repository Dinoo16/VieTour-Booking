import classNames from 'classnames/bind';
import styles from './TourDetail.module.scss';
import { useParams } from 'react-router-dom';
import Menu from './Menu/Menu';
import icons from '~/assets/icons';
import { useState } from 'react';
import images from '~/assets/images';
import BookTour from './components/BookTour';
import Button from '~/components/Button/Button';
import FeedBack from '~/components/FeedBack/FeedBack';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: icons.info,
        title: 'Information',
    },
    {
        icon: icons.calendar,
        title: 'Tour Plan',
    },
    {
        icon: icons.location,
        title: 'Location',
    },
    {
        icon: icons.gallery,
        title: 'Gallery',
    },
];
const TOURS = [
    {
        id: 1,
        image: images.halongbay,
        title: 'Ha Long',
        destination: 'Quang Ninh',
        description:
            'Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam. Aut aspernatur consequuntur eum quaerat distinctio ut inventore aliquid et quasi alias ut rerum suscipit et nihil deleniti. Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam. Aut aspernatur consequuntur eum quaerat distinctio ut inventore aliquid et quasi alias ut rerum suscipit et nihil deleniti.',
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
                id: 1,
                avatar: images.avatar,
                name: 'Dino',
                role: 'Traveler',
                content:
                    'A home that perfectly blends sustainability with luxury until discovered Ecoland Residence. The moment I stepped community, I knew it was where I wanted to live.',
                rating: 5,
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
        ],
        gallery: [images.hanoi, images.hanoi, images.hanoi, images.hanoi, images.hanoi, images.hanoi, images.hanoi],
    },
];
function TourDetail() {
    const [activeMenu, setActiveMenu] = useState(MENU_ITEMS[0]);
    const { id } = useParams();
    const tour = TOURS.find((t) => t.id === parseInt(id));

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Menu items={MENU_ITEMS} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            </div>
            <div className={cx('content')}>
                {activeMenu.title === 'Information' && (
                    <>
                        <div className={cx('info')}>
                            <div className={cx('title-box')}>
                                <div className={cx('title-container')}>
                                    <h1 className={cx('title')}>{tour.title}</h1>
                                    <div className={cx('rating')}>
                                        {[...Array(5)].map((_, index) => (
                                            <icons.star key={index} className={cx('star')} />
                                        ))}
                                        <span>{tour.rating}</span>
                                    </div>
                                </div>
                                <div className={cx('price-container')}>
                                    <span className={cx('price')}>{tour.price} $ </span>
                                    <span className={cx('per-person')}>/ Per Person</span>
                                </div>
                            </div>
                            <p className={cx('description')}>{tour.description}</p>

                            <div className={cx('info-item')}>
                                <p>
                                    <strong>Destination:</strong> {tour.destination}
                                </p>

                                <p>
                                    <strong>Departure:</strong> {tour.departure}
                                </p>
                                <p>
                                    <strong>Departure Time:</strong> {tour.departureTime}
                                </p>
                                <p>
                                    <strong>Return Time:</strong> {tour.returnTime}
                                </p>
                                <p>
                                    <strong>Category:</strong> {tour.category}
                                </p>
                                <p>
                                    <strong>Duration:</strong> {tour.duration}
                                </p>
                            </div>
                        </div>
                        <BookTour />
                    </>
                )}

                {activeMenu.title === 'Tour Plan' && (
                    <>
                        <div className={cx('tour-plan')}>
                            {tour.tourPlans.map((plan, idx) => (
                                <div key={idx} className={cx('day')}>
                                    <h4>
                                        Day {plan.day}: {plan.title}
                                    </h4>
                                    <p>{plan.content}</p>
                                </div>
                            ))}
                        </div>
                        <BookTour />
                    </>
                )}

                {activeMenu.title === 'Location' && (
                    <>
                        <div className={cx('location')}>
                            <p>Map or location info here (if any)</p>
                        </div>
                        <BookTour />
                    </>
                )}

                {activeMenu.title === 'Gallery' && (
                    <>
                        <div className={cx('gallery')}>
                            {tour.gallery.map((img, idx) => (
                                <img key={idx} src={img} alt={`Gallery ${idx}`} className={cx('gallery-img')} />
                            ))}
                        </div>
                        <BookTour />
                    </>
                )}
            </div>
        </div>
    );
}

export default TourDetail;
