import classNames from 'classnames/bind';
import styles from './MyReviews.module.scss';
import icons from '~/assets/icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const REVIEWS = [
    {
        id: '1',
        tourId: '1',
        destination: 'Quang Ninh',
        tourName: 'Ha Long Bay',
        tourImg: images.halongbay,
        date: 'July 27 - July 31',
        status: 'Review Posted',
        comment: 'The destination so beautiful!',
    },
    {
        id: '2',
        tourId: '2',
        destination: 'Hanoi',
        tourName: 'Guom Lake',
        tourImg: images.hanoi,
        date: 'July 27 - July 31',
        status: 'Review Denied',
        comment: 'The destination so beautiful!',
    },
    {
        id: '3',
        tourId: '3',
        destination: 'Hanoi',
        tourName: 'The Coffee Lovers',
        tourImg: images.destination_1,
        date: 'July 27 - July 31',
        status: 'Review Denied',
        comment: 'The destination so beautiful!',
    },
];

function MyReviews() {
    // 1. Group reviews by destination
    const groupedReviews = REVIEWS.reduce((acc, review) => {
        if (!acc[review.destination]) {
            acc[review.destination] = [];
        }
        acc[review.destination].push(review);
        return acc;
    }, {});

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <icons.like />
                <h2 className={cx('title')}>My Reviews </h2>
            </div>
            <div className={cx('content')}>
                {REVIEWS.length > 0 ? (
                    <div>
                        {Object.entries(groupedReviews).map(([destination, reviews]) => (
                            <div key={destination} className={cx('bookings')}>
                                <h3 className={cx('card-title')}>{destination}</h3>
                                {reviews.map((review) => (
                                    <div key={review.id} className={cx('card-box')}>
                                        <div className={cx('card-info')}>
                                            <img
                                                src={review.tourImg}
                                                alt={`${review.tourName} tour`}
                                                className={cx('img')}
                                            />
                                            <div className={cx('details')}>
                                                <span className={cx('brand')}>{review.tourName}</span>
                                                <span className={cx('date')}>{review.date}</span>
                                            </div>
                                            <div
                                                className={cx('status', {
                                                    success: review.status === 'Review Posted',
                                                    denied: review.status === 'Review Denied',
                                                })}
                                            >
                                                {' '}
                                                {review.status}
                                            </div>
                                        </div>
                                        <div className={cx('actions')}>
                                            <button className={cx('view')}>View</button>
                                            <button className={cx('remove')}>Delete</button>
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

export default MyReviews;
