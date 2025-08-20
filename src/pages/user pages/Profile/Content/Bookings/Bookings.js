import classNames from 'classnames/bind';
import styles from './Bookings.module.scss';
import icons from '~/assets/icons';
import images from '~/assets/images';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';
import { useEffect, useState } from 'react';
import { useBookingsUser } from '~/hooks/useBooking';
import { useTour } from '~/hooks/useTours';
import { getTourById } from '~/apiServices/tourService';
const cx = classNames.bind(styles);

const BOOKINGS = [
    {
        bookingId: '1',
        userId: '1',
        destination: 'Quang Ninh',
        tourName: 'Ha Long Bay',
        tourImg: images.halongbay,
        date: 'July 27 - July 31',
        status: 'Past',
        totalAmount: '$1234',
    },
    {
        bookingId: '2',
        userId: '2',
        destination: 'Hanoi',
        tourName: 'Guom Lake',
        tourImg: images.hanoi,
        date: 'July 27 - July 31',
        status: 'Cancel',
        totalAmount: '$1234.5',
    },
    {
        bookingId: '3',
        userId: '3',
        destination: 'Quang Nam',
        tourName: 'Hoi An',
        tourImg: images.destination_1,
        date: 'August 1 - August 4',
        status: 'Past',
        totalAmount: '$1234.5',
    },
    {
        bookingId: '4',
        userId: '4',
        destination: 'Hanoi',
        tourName: 'Hanoi Coffee Lovers ',
        tourImg: images.destination_1,
        date: 'August 1 - August 4',
        status: 'Past',
        totalAmount: '$1234.5',
    },
];

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
                                    <div key={booking.bookingId} className={cx('card-box')}>
                                        <div className={cx('card-info')}>
                                            <img
                                                src={booking.tour.backgroundImage}
                                                alt={`${booking.tour.backgroundImage} tour`}
                                                className={cx('img')}
                                            />
                                            <div className={cx('details')}>
                                                <div>
                                                    <span className={cx('brand')}>{booking.tour.title}</span>
                                                    <span className={cx('date')}>{booking.date}</span>
                                                </div>
                                                <span className={cx('status', booking.status.toLowerCase())}>
                                                    {booking.status}
                                                </span>
                                            </div>
                                        </div>
                                        <span className={cx('price')}>{booking.totalAmount}$</span>
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
