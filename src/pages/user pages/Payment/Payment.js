import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import icons from '~/assets/icons';
import { useEffect, useState } from 'react';
import Button from '~/components/Button/Button';
import { useParams, useNavigate } from 'react-router-dom';
import { useTour } from '~/hooks/useTours';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';
import { useBooking } from '~/hooks/useBooking';
import { useCreatePayment } from '~/hooks/usePayment';

const cx = classNames.bind(styles);

function Payment() {
    const { id: bookingId } = useParams();
    const navigate = useNavigate();

    // Fetch booking info
    const { data: bookingData, isBookingLoading } = useBooking(bookingId);

    // Fetch tour info
    const { data: tourData, isTourLoading } = useTour(bookingData?.tourId, {
        enabled: !!bookingData?.tourId,
    });

    // Call api create payment
    const { mutate: createPayment, isLoading, error: paymentError } = useCreatePayment();

    const handleCheckout = (e) => {
        e.preventDefault();

        // call api
        createPayment(bookingId);
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

            <Button primary onClick={handleCheckout}>
                {isLoading ? (
                    <>
                        <LoadingSpinner />
                        Processing...
                    </>
                ) : (
                    'Check out'
                )}
            </Button>
            {paymentError && (
                <div className={cx('error-banner')}>
                    {/* <icons /> */}
                    <span>Payment initialization failed. Please try again.</span>
                </div>
            )}
        </div>
    );
}

export default Payment;
