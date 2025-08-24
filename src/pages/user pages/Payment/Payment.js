import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import icons from '~/assets/icons';
import { useEffect, useState } from 'react';
import Button from '~/components/Button/Button';
import { useParams, useNavigate } from 'react-router-dom';
import { useTour } from '~/hooks/useTours';
import { useBooking } from '~/hooks/useBooking';
import { useCreatePayment } from '~/hooks/usePayment';
import TextInput from '~/pages/admin pages/components/Input/TextInput';
import TextareaField from '~/pages/admin pages/components/Input/TextareaField';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';

const cx = classNames.bind(styles);

function Payment() {
    const { id: bookingId } = useParams();
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);

    // Fetch booking info
    const { data: bookingData, isBookingLoading } = useBooking(bookingId);

    // Fetch tour info
    const { data: tourData, isTourLoading } = useTour(bookingData?.tourId, {
        enabled: !!bookingData?.tourId,
    });

    // Update booking info
    // const [name, setName] = useState(bookingData?.contactName);
    // const [email, setEmail] = useState(bookingData?.contactEmail);
    // const [phone, setPhone] = useState(bookingData?.contactPhone);
    // const [message, setMessage] = useState(bookingData?.message);

    // Call api create payment
    const { mutate: createPayment, isPending, error: paymentError } = useCreatePayment();

    useEffect(() => {
        if (paymentError) {
            setShowError(true);
            // Auto hide error after 5 seconds
            // const timer = setTimeout(() => {
            //     setShowError(false);
            // }, 10000);

            // return () => clearTimeout(timer);
        }
    }, [paymentError]);

    const handleCheckout = (e) => {
        e.preventDefault();
        setShowError(false);
        // call api
        createPayment(bookingId);
    };

    const handleClose = () => {
        setShowError(false);
    };

    if (isBookingLoading || isTourLoading) {
        return (
            <div className={cx('loading-container')}>
                <LoadingSpinner />
                <p>Loading booking information...</p>
            </div>
        );
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <icons.info />
                <span>Check Your Payment</span>
            </div>

            <div className={cx('content')}>
                <div className={cx('checkout')}>
                    <div className={cx('booking-info')}>
                        <h2 className={cx('booking-info-header')}>Booking Information</h2>

                        <h3 className={cx('booking-info-title')}>Your Details</h3>
                        <TextInput
                            label="Contact name"
                            placeholder="Contact name"
                            value={bookingData?.contactName}
                            // onChange={(e) => setName(e.target.value)}
                        />

                        <div className={cx('booking-contact')}>
                            <TextInput
                                label="Contact email"
                                placeholder="Contact email"
                                value={bookingData?.contactEmail}
                                // onChange={(e) => setEmail(e.target.value)}
                            />

                            <TextInput
                                label=" Contact phone"
                                placeholder=" Contact phone"
                                value={bookingData?.contactPhone}
                                // onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <span>
                            We'll send your confirmation details to <strong>{bookingData?.contactEmail}</strong>
                        </span>
                        <div className={cx('booking-contact')}>
                            <TextInput
                                label="Date"
                                placeholder="Date"
                                value={bookingData?.date}
                                // onChange={(e) => setEmail(e.target.value)}
                            />

                            <TextInput
                                label="Number of tickets"
                                placeholder="Number"
                                value={bookingData?.numberOfPeople}
                                // onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <h3 className={cx('booking-info-title')}> Additional details</h3>
                        <TextareaField
                            label="Special requirements"
                            placeholder="Enter a description..."
                            value={bookingData?.message}
                            // onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className={cx('tour-info-right')}>
                        <h2>{tourData?.title}</h2>
                        <p>
                            <icons.rating /> {tourData?.reviews} (123 reviews)
                        </p>

                        <img src={tourData?.backgroundImage} alt="tour-info" />
                        <div className={cx('tour-info-content')}>
                            <div className={cx('tour-info')}> Destination | {tourData?.departure}</div>
                            <div className={cx('tour-info')}>Departure | {bookingData?.date}</div>
                            <div className={cx('tour-info')}>Duration | {tourData?.duration}</div>
                        </div>
                        <div className={cx('tour-info-price')}>
                            <h3>Price Details</h3>
                            <div className={cx('price-list')}>
                                {bookingData?.numberOfPeople === 1
                                    ? `${bookingData?.numberOfPeople} Ticket x 1 tour`
                                    : `${bookingData?.numberOfPeople} Tickets x 1 tour`}
                                <span>{bookingData?.totalAmount}$</span>
                            </div>
                            <div className={cx('price-list')}>
                                Discount
                                <span>0</span>
                            </div>
                            <hr></hr>
                            <div className={cx('price-list')}>
                                <span className={cx('total-price')}>Total Price</span>
                                <span className={cx('total-price')}>{bookingData?.totalAmount}$</span>
                            </div>
                            <span>Price include VAT</span>
                        </div>

                        <div className={cx('checkout-btn')}>
                            <Button primary onClick={handleCheckout} isLoading={isPending} disabled={isPending}>
                                Check out
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {showError && paymentError && (
                <div className={cx('dialog-overlay')}>
                    <div className={cx('dialog-box')}>
                        <h3>Notification</h3>
                        <p>
                            {paymentError.response?.data?.error?.includes('Duplicate entry')
                                ? 'This booking has already been paid. You cannot pay again.'
                                : paymentError.response?.data?.message ||
                                  paymentError.message ||
                                  'Payment initialization failed. Please try again.'}
                        </p>
                        <button onClick={handleClose}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Payment;
