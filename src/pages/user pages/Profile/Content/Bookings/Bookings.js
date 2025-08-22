import classNames from 'classnames/bind';
import styles from './Bookings.module.scss';
import icons from '~/assets/icons';
import images from '~/assets/images';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';
import { useEffect, useState } from 'react';
import { useBookingsUser } from '~/hooks/useBooking';
import { useTour } from '~/hooks/useTours';
import { getTourById } from '~/apiServices/tourService';
import Button from '~/components/Button/Button';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Bookings() {
    // Fetch bookings
    const { data: bookings = [], isBookingsLoading } = useBookingsUser();
    const [myTours, setMyTours] = useState([]);
    const [loadingTours, setLoadingTours] = useState(false);

    useEffect(() => {
        if (bookings && bookings.length > 0) {
            const tourIds = [...new Set(bookings.map((b) => b.tourId))];

            setLoadingTours(true);
            Promise.all(tourIds.map((id) => getTourById(id)))
                .then((responses) => {
                    // set tours to myTours
                    const tours = responses.map((r) => r.data || r);
                    setMyTours(tours);
                })
                .catch((err) => console.error('Error fetching tours:', err))
                .finally(() => setLoadingTours(false));
        }
    }, [bookings]);

    // Group bookings by destination
    const groupedBookings = bookings.reduce((acc, booking) => {
        const tour = myTours.find((t) => t.id === booking.tourId);

        if (!tour) return acc;

        const dest = tour.destinationName;
        if (!acc[dest]) {
            acc[dest] = [];
        }

        // Add tour into booking
        acc[dest].push({
            ...booking,
            tour,
        });

        return acc;
    }, {});
    console.log(groupedBookings);

    if (isBookingsLoading || loadingTours) return <LoadingSpinner />;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <icons.booking />
                <h2 className={cx('title')}>Bookings and Trips</h2>
            </div>
            <div className={cx('content')}>
                {bookings.length > 0 ? (
                    <div>
                        {Object.entries(groupedBookings).map(([destination, bookings]) => (
                            <div key={destination} className={cx('bookings')}>
                                <h3 className={cx('card-title')}>{destination}</h3>
                                {bookings.map((booking) => (
                                    <div key={booking.id} className={cx('card-box')}>
                                        <div className={cx('card-info')}>
                                            <img
                                                src={booking.tour.backgroundImage}
                                                alt={`${booking.tour.backgroundImage} tour`}
                                                className={cx('img')}
                                            />
                                            <div className={cx('details')}>
                                                <div>
                                                    <span className={cx('tour-title')}>{booking.tour.title}</span>
                                                    <span className={cx('date')}>{booking.date}</span>
                                                </div>
                                                <div className={cx('destination')}>
                                                    <icons.location />
                                                    <span className={cx('tour-destination')}>
                                                        {booking.tour.destinationName}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className={cx('tour-destination')}>
                                                        Number of people:{' '}
                                                        {booking.numberOfPeople === 1
                                                            ? `${booking.numberOfPeople} person`
                                                            : `${booking.numberOfPeople} people`}
                                                    </span>
                                                </div>

                                                <div className={cx('status-price')}>
                                                    <span className={cx('price')}>
                                                        Price: <strong>{booking.totalAmount}$</strong>
                                                    </span>
                                                    <span className={cx('status', booking.status.toLowerCase())}>
                                                        {booking.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('actions')}>
                                            <button className={cx('button', 'view-detail')}>View Detail</button>
                                            {booking.status === 'PENDING' ? (
                                                <Link className={cx('button', 'payment')} to={`/payment/${booking.id}`}>
                                                    Continue Payment
                                                </Link>
                                            ) : booking.status === 'EXPIRED' ? (
                                                <button className={cx('button', 'book-again')}>Book Again</button>
                                            ) : (
                                                <button className={cx('button', 'view-receipt')}>View Receipt</button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={cx('no-booking')}>
                        <img src={images.trips} alt="No trips" />
                        <div className={cx('desc')}>
                            <h2 className={cx('text')}>Where to next?</h2>
                            <span>
                                You haven’t started any trips yet. When you’ve made a booking, it will appear here.
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Bookings;
