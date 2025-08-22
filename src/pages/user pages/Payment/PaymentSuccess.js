import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCapturePayment } from '~/hooks/usePayment';
import Button from '~/components/Button/Button';
import icons from '~/assets/icons';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';

const cx = classNames.bind(styles);

function PaymentSuccess() {
    const [searchParams] = useSearchParams();
    const { bookingId } = useParams();
    const navigate = useNavigate();
    const [status, setStatus] = useState('processing');
    const [errorMessage, setErrorMessage] = useState('');

    const token = searchParams.get('token');
    const PayerID = searchParams.get('PayerID');

    const { mutate: capturePayment, isLoading } = useCapturePayment();

    useEffect(() => {
        // Kiểm tra nếu có token và PayerID từ PayPal
        if (token && PayerID && bookingId) {
            capturePayment(
                { bookingId, orderId: token },
                {
                    onSuccess: () => {
                        setStatus('success');
                        // Xóa pending payment từ sessionStorage
                        sessionStorage.removeItem('pendingPayment');
                    },
                    onError: (error) => {
                        setStatus('error');
                        setErrorMessage(
                            error.response?.data?.error || 'Payment capture failed. Please contact support.',
                        );
                        console.error('Capture payment error:', error);
                    },
                },
            );
        } else {
            setStatus('error');
            setErrorMessage('Invalid payment response from PayPal.');
        }
    }, [bookingId, token, PayerID, capturePayment]);

    if (status === 'processing' || isLoading) {
        return (
            <div className={cx('container')}>
                <div className={cx('processing')}>
                    <LoadingSpinner />
                    <h2>Processing Your Payment</h2>
                    <p>Please wait while we confirm your payment with PayPal...</p>
                </div>
            </div>
        );
    }
    if (status === 'success') {
        return (
            <div className={cx('container')}>
                <div className={cx('success')}>
                    <div className={cx('icon')}>
                        {/* <icons.success /> */}
                    </div>
                    <h2>Payment Successful!</h2>
                    <p>Your payment has been processed successfully. Thank you for your booking!</p>
                    <div className={cx('actions')}>
                        <Button primary onClick={() => navigate('/my-bookings')}>
                            View My Bookings
                        </Button>
                        <Button secondary onClick={() => navigate('/')}>
                            Back to Home
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
    if (status === 'error') {
        return (
            <div className={cx('container')}>
                <div className={cx('error')}>
                    <div className={cx('icon')}>
                        {/* <icons.error /> */}
                    </div>
                    <h2>Payment Failed</h2>
                    <p>{errorMessage}</p>
                    <div className={cx('actions')}>
                        <Button primary onClick={() => navigate(`/payment/${bookingId}`)}>
                            Try Again
                        </Button>
                        <Button secondary onClick={() => navigate('/')}>
                            Back to Home
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaymentSuccess;
