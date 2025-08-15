import classNames from 'classnames/bind';
import styles from './TourDetail.module.scss';
import { useParams } from 'react-router-dom';
import Menu from './Menu/Menu';
import icons from '~/assets/icons';
import { useEffect, useState } from 'react';
import images from '~/assets/images';
import BookTour from './components/BookTour';
import { useTour } from '~/hooks/useTours';
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

function TourDetail() {
    const [activeMenu, setActiveMenu] = useState(MENU_ITEMS[0]);
    const { id } = useParams();

    const { data: tourData, isTourLoading } = useTour(id);

    const [tour, setTour] = useState(null);

    useEffect(() => {
        if (tourData) {
            setTour(tourData);
        }
    }, [tourData]);

    if (isTourLoading) {
        return <div className={cx('loading')}>Loading...</div>;
    }

    if (!tour) {
        return <div className={cx('not-found')}>Tour not found</div>;
    }

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
                                    <strong>Category:</strong> {tour.categoryNames.map((cat) => cat.title).join(', ')}
                                </p>
                                <p>
                                    <strong>Duration:</strong> {tour.duration}
                                </p>
                            </div>
                        </div>
                        <BookTour item={tour} />
                    </>
                )}

                {activeMenu.title === 'Tour Plan' && (
                    <>
                        <div className={cx('tour-plan')}>
                            <h1 className={cx('tour-plan-title')}>Tour Plan</h1>
                            {tour.tourPlans.map((plan, idx) => (
                                <div key={idx} className={cx('day-item')}>
                                    <div className={cx('day-number')}>{plan.day}</div>
                                    <div className={cx('day-content')}>
                                        <h3>
                                            Day {plan.day}: {plan.title}
                                        </h3>
                                        <p className={cx('day-description')}>{plan.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <BookTour item={tour} />
                    </>
                )}

                {activeMenu.title === 'Location' && (
                    <>
                        <div className={cx('location')}>
                            <h1 className={cx('location-title')}>Location</h1>
                            <p className={cx('location-description')}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            </p>
                            <img src={images.mapdemo} alt="map" className={cx('map-demo')} />
                            <p className={cx('location-description')}>
                                Sit quasi soluta non temporibus voluptas non necessitatibus tempore sit deleniti
                                praesentium aut velit nostrum ut itaque atque ad expedita veniam. Hic deleniti officiis
                                est sapiente explicabo non eaque corporis aut voluptatum iusto At facere enim id
                                voluptas reprehenderit. Ut voluptas laudantium et molestias voluptatem ex doloremque
                                omnis est ipsum nihil.
                            </p>
                            <div className={cx('view')}>
                                <span>Click the image below for a 360-degree tour of Ha Long Bay</span>
                                <img src={images.halongbay} alt="halongbay" />
                            </div>
                        </div>
                        <BookTour item={tour} />
                    </>
                )}

                {activeMenu.title === 'Gallery' && (
                    <>
                        <div className={cx('gallery')}>
                            <div className={cx('gallery-box-1')}>
                                <div className={cx('gallery-box-1-left')}>
                                    {tour.gallery.slice(0, 3).map((img, idx) => (
                                        <img key={idx} src={img} alt={`Gallery ${idx}`} className={cx('gallery-img')} />
                                    ))}
                                </div>
                                <div className={cx('gallery-box-1-right')}>
                                    <img src={tour.gallery[3]} alt="Gallery 3" className={cx('gallery-img')} />
                                </div>
                            </div>

                            <div className={cx('gallery-box-2')}>
                                <div className={cx('gallery-box-2-top')}>
                                    {tour.gallery.slice(4, 6).map((img, idx) => (
                                        <img
                                            key={idx + 4}
                                            src={img}
                                            alt={`Gallery ${idx + 4}`}
                                            className={cx('gallery-img')}
                                        />
                                    ))}
                                </div>
                                <div className={cx('gallery-box-2-bottom')}>
                                    <img src={tour.gallery[6]} alt="Gallery 6" className={cx('gallery-img')} />
                                </div>
                            </div>

                            {/* Optional bottom banner image (8th image) */}
                            {tour.gallery[7] && (
                                <div className={cx('gallery-banner')}>
                                    <img src={tour.gallery[7]} alt="Gallery 7" className={cx('gallery-img')} />
                                </div>
                            )}
                        </div>

                        <BookTour item={tour} />
                    </>
                )}
            </div>
        </div>
    );
}

export default TourDetail;
