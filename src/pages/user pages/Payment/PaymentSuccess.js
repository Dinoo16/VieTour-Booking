import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCapturePayment } from '~/hooks/usePayment';
import Button from '~/components/Button/Button';
import images from '~/assets/images';
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
                    <h2 className={cx('payment-status')}>Payment Successful!</h2>
                    <div className={cx('payment-messsage')}>
                        <img className={cx('img-status')} src={images.success} />
                        <p>Your payment has been processed successfully. Thank you for your booking!</p>
                    </div>
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
                    <div className={cx('icon')}></div>
                    <h2 className={cx('payment-status')}>Payment Failed</h2>
                    <div className={cx('payment-messsage')}>
                        <img className={cx('img-status')} src={images.failed} />
                        <p>{errorMessage}</p>
                    </div>
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
