import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import icons from '~/assets/icons';
import { useEffect, useState } from 'react';
import images from '~/assets/images';
import Button from '~/components/Button/Button';
import { useParams } from 'react-router-dom';
import { useTour } from '~/hooks/useTours';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';
import { useBooking } from '~/hooks/useBooking';

const cx = classNames.bind(styles);

const paymentMethods = [
    {
        id: 'applepay',
        name: 'Apple Pay',
        img: images.applepay,
    },
    {
        id: 'paypal',
        name: 'PayPal',
        img: images.paypal,
    },
];

function Payment() {
    const [selected, setSelected] = useState('applepay');
    const { id: bookingId } = useParams();

    // Fetch booking info
    const { data: bookingData, isBookingLoading } = useBooking(bookingId);

    // Fetch tour info
    const { data: tourData, isTourLoading } = useTour(bookingData?.tourId, {
        enabled: !!bookingData?.tourId,
    });

    if (isBookingLoading) {
        return <LoadingSpinner />;
    }

    if (!bookingData?.tourId) {
        return <LoadingSpinner />;
    }

    if (isTourLoading) {
        return <LoadingSpinner />;
    }

    if (!tourData) {
        return <div>No tour data found</div>;
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <icons.info />
                <span>Check Your Payment</span>
            </div>

            <div className={cx('content')}>
                <div className={cx('payment-method')}>
                    <h2>Choose payment method</h2>
                    <div className={cx('payment-container')}>
                        {paymentMethods.map((method) => (
                            <label key={method.id} className={cx('card', { active: selected === method.id })}>
                                <input
                                    type="radio"
                                    name="payment"
                                    checked={selected === method.id}
                                    onChange={() => setSelected(method.id)}
                                />
                                <img src={method.img} alt={method.name} />
                                <p>{method.name}</p>
                            </label>
                        ))}
                    </div>
                    <form className={cx('card-form')}>
                        <div className={cx('form-group')}>
                            <label>
                                Cardholder name <span className={cx('required')}>*</span>
                                <div className={cx('input-icon')}>
                                    <icons.user />
                                    <input type="text" placeholder="Cardholder name" required />
                                </div>
                            </label>
                        </div>
                        <div className={cx('form-group')}>
                            <label>
                                Card number <span className={cx('required')}>*</span>
                                <div className={cx('input-icon')}>
                                    <icons.card />
                                    <input type="text" placeholder="Card number" required />
                                </div>
                            </label>
                        </div>
                        <div className={cx('form-row')}>
                            <div className={cx('form-group', 'half')}>
                                <label>
                                    Expiration date <span className={cx('required')}>*</span>
                                    <div className={cx('input-icon')}>
                                        <icons.calendar />
                                        <input type="text" placeholder="MM/YY" required />
                                    </div>
                                </label>
                            </div>
                            <div className={cx('form-group', 'half')}>
                                <label>
                                    CVC <span className={cx('required')}>*</span>
                                    <div className={cx('input-icon')}>
                                        <icons.card />
                                        <input type="text" placeholder="CVC" required />
                                    </div>
                                </label>
                            </div>
                        </div>
                        <Button primary>Complete order</Button>
                    </form>
                </div>

                <div className={cx('tour-info')}>
                    <div className={cx('tour-info-top')}>
                        <img src={tourData?.backgroundImage} alt="tour-info" />
                        <div className={cx('tour-info-content')}>
                            <h2>{tourData?.title}</h2>
                            <p>
                                <icons.location />
                                {tourData?.destinationName}
                            </p>
                        </div>
                    </div>
                    <div className={cx('tour-info-bottom')}>
                        <h2 className={cx('tour-info-bottom-header')}>Booking Information</h2>
                        <span>
                            Contact name: <strong>{bookingData?.contactName}</strong>
                        </span>
                        <span>
                            Contact email: <strong>{bookingData?.contactEmail}</strong>
                        </span>

                        <span>
                            Contact phone: <strong>{bookingData?.contactPhone}</strong>
                        </span>

                        <span>
                            Departure: <strong>{tourData?.departure}</strong>
                        </span>
                        <span>
                            Departure time: <strong>{bookingData?.date}</strong>
                        </span>
                        <span>
                            Number of tickets: <strong>{bookingData?.numberOfPeople}</strong>
                        </span>
                        <span>
                            Total price: <strong>{bookingData?.totalAmount}</strong>
                        </span>
                        <span>Prices include VAT</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
