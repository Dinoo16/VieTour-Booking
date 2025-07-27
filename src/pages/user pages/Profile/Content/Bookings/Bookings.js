import classNames from 'classnames/bind';
import styles from './Bookings.module.scss';
import icons from '~/assets/icons';
import images from '~/assets/images';

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
    // 1. Group bookings by destination
    const groupedBookings = BOOKINGS.reduce((acc, booking) => {
        if (!acc[booking.destination]) {
            acc[booking.destination] = [];
        }
        acc[booking.destination].push(booking);
        return acc;
    }, {});

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <icons.booking />
                <h2 className={cx('title')}>Bookings and Trips</h2>
            </div>
            <div className={cx('content')}>
                {BOOKINGS.length > 0 ? (
                    <div>
                        {Object.entries(groupedBookings).map(([destination, bookings]) => (
                            <div key={destination} className={cx('bookings')}>
                                <h3 className={cx('card-title')}>{destination}</h3>
                                {bookings.map((booking) => (
                                    <div key={booking.bookingId} className={cx('card-box')}>
                                        <div className={cx('card-info')}>
                                            <img
                                                src={booking.tourImg}
                                                alt={`${booking.tourName} tour`}
                                                className={cx('img')}
                                            />
                                            <div className={cx('details')}>
                                                <div>
                                                    <span className={cx('brand')}>{booking.tourName}</span>
                                                    <span className={cx('date')}>{booking.date}</span>
                                                </div>
                                                <span
                                                    className={cx('status', booking.status.toLowerCase())}
                                                >
                                                    {booking.status}
                                                </span>
                                            </div>
                                        </div>
                                        <span className={cx('price')}>{booking.totalAmount}</span>
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
