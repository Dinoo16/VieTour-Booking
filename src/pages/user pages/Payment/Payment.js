import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createPortal } from 'react-dom';
import icons from '~/assets/icons';
import { useTour } from '~/hooks/useTours';
import { useBooking, useSavePendingOrder, useMarkPaid, useMarkFailed } from '~/hooks/useBooking';
import { useCreatePayment } from '~/hooks/usePayment';
import TextInput from '~/pages/admin pages/components/Input/TextInput';
import TextareaField from '~/pages/admin pages/components/Input/TextareaField';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';
import EditDetail from './components/EditDetail';
import { PayPalButtons } from '@paypal/react-paypal-js';

function Payment() {
    const { id: bookingId } = useParams();
    const [showError, setShowError] = useState(false);

    const [showEdit, setShowEdit] = useState(false);

    const { data: bookingData, isBookingLoading } = useBooking(bookingId);
    console.log(bookingData ? bookingData : '');
    const { data: tourData, isTourLoading } = useTour(bookingData?.tourId, {
        enabled: !!bookingData?.tourId,
    });

    const { mutateAsync: createPayment, isPending, error: paymentError } = useCreatePayment();
    const { mutateAsync: savePending } = useSavePendingOrder();
    const { mutateAsync: markPaid } = useMarkPaid();
    const { mutateAsync: markFailed } = useMarkFailed();

    useEffect(() => {
        if (paymentError) {
            setShowError(true);
        }
    }, [paymentError]);

    const handleCheckout = (e) => {
        e.preventDefault();
        setShowError(false);
        createPayment(bookingId);
    };

    if (isBookingLoading || isTourLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[300px] text-gray-700">
                <LoadingSpinner />
                <p>Loading booking information...</p>
            </div>
        );
    }

    return (
        <div className="w-full h-full shadow-[0px_4px_48px_rgba(0,0,0,0.25)] -translate-y-[70.5px]">
            {/* Header */}
            <div className="w-full h-[141px] bg-[#ededed] flex items-center px-14 gap-4">
                <icons.info />
                <span className=" text-base sm:text-lg font-bold text-[var(--title-color)]">Check Your Payment</span>
            </div>

            {/* Content */}
            <div className="w-full p-8 lg:p-14">
                <div className="flex flex-col md:flex-row w-full justify-between gap-10 lg:gap-14">
                    {/* Booking Info */}
                    <div className="flex flex-col mt-0 s:mt-8">
                        <h2 className="text-lg font-semibold text-[var(--header-color)]">Booking Information</h2>

                        <div className="mt-4 flex justify-between">
                            <h3 className="text-lg font-semibold text-[var(--header-color)]">Your Details</h3>
                            <button
                                onClick={() => setShowEdit(true)}
                                className="text-blue-700 p-2 rounded-md hover:bg-blue-50"
                            >
                                Edit Detail
                            </button>
                        </div>
                        <TextInput label="Contact name" value={bookingData?.contactName} placeholder="Contact name" />

                        <div className="flex flex-col lg:flex-row justify-between gap-6">
                            <div>
                                <TextInput
                                    label="Contact email"
                                    value={bookingData?.contactEmail}
                                    placeholder="Contact email"
                                />
                                <span className="text-sm">
                                    We'll send your confirmation details to <strong>{bookingData?.contactEmail}</strong>
                                </span>
                            </div>
                            <TextInput
                                label="Contact phone"
                                value={bookingData?.contactPhone}
                                placeholder="Contact phone"
                            />
                        </div>

                        <h3 className="mt-4 text-lg font-semibold text-[var(--header-color)]">Additional details</h3>
                        <TextareaField
                            label="Special requirements"
                            value={bookingData?.message}
                            placeholder="Enter a description..."
                        />
                    </div>

                    {/* Tour Info */}
                    <div className="flex flex-col mt-0 s:mt-8 pb-10 w-full lg:w-auto">
                        <h2 className="text-lg text-[var(--header-color)]">{tourData?.title}</h2>
                        <p className="flex items-center gap-2">
                            <icons.rating /> {tourData?.reviews} (123 reviews)
                        </p>

                        {/* Ảnh responsive */}
                        <img
                            src={tourData?.backgroundImage}
                            alt="tour-info"
                            className="w-full max-w-[300px] h-auto object-contain mx-auto"
                        />

                        <div className="flex flex-col mt-4 gap-3">
                            {/* Box info co responsive */}
                            <div className="text-center py-2 w-full max-w-[300px] border border-[#d9d9d9] rounded mx-auto">
                                Destination | {tourData?.departure}
                            </div>
                            <div className="text-center py-2 w-full max-w-[300px] border border-[#d9d9d9] rounded mx-auto">
                                Departure | {bookingData?.date}
                            </div>
                            <div className="text-center py-2 w-full max-w-[300px] border border-[#d9d9d9] rounded mx-auto">
                                Duration | {tourData?.duration}
                            </div>
                        </div>

                        {/* Price Details */}
                        <div className="mt-4 w-full max-w-[300px] mx-auto">
                            <h3 className="text-lg text-[var(--header-color)] mb-2">Price Details</h3>
                            <div className="w-full flex justify-between">
                                {bookingData?.numberOfPeople === 1
                                    ? `${bookingData?.numberOfPeople} Ticket x 1 tour`
                                    : `${bookingData?.numberOfPeople} Tickets x 1 tour`}
                                <span className="font-medium text-[var(--header-color)]">
                                    {bookingData?.totalAmount}$
                                </span>
                            </div>
                            <div className="flex justify-between">
                                Discount <span className="font-medium text-[var(--header-color)]">0</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between font-bold">
                                <span>Total Price</span>
                                <span>{bookingData?.totalAmount}$</span>
                            </div>
                            <span className="text-sm">Price include VAT</span>
                        </div>
                        <div>
                            <div className="mt-8">
                                <PayPalButtons
                                    style={{ layout: 'vertical' }}
                                    createOrder={async () => {
                                        try {
                                            const orderId = await createPayment(bookingId);
                                            await savePending({ bookingId, orderId });
                                            return orderId;
                                        } catch (err) {
                                            console.error('Error creating order:', err);
                                            setShowError(true);
                                            throw err;
                                        }
                                    }}
                                    onApprove={async (data, actions) => {
                                        try {
                                            const details = await actions.order.capture();
                                            const captureId = details.purchase_units[0].payments.captures[0].id;

                                            await markPaid({ orderId: data.orderID, captureId });
                                            alert('Payment successful!');
                                        } catch (err) {
                                            console.error('Error capturing order:', err);
                                            await markFailed(data.orderID);
                                            setShowError(true);
                                        }
                                    }}
                                    onError={async (err) => {
                                        console.error('PayPal error:', err);
                                        setShowError(true);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Popup */}
            {showEdit &&
                createPortal(
                    <EditDetail bookingData={bookingData} onClose={() => setShowEdit(false)} />,
                    document.body,
                )}

            {/* Error Dialog */}
            {showError &&
                paymentError &&
                createPortal(
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-[300px] text-center animate-[fadeIn_0.2s_ease-in-out]">
                            <h3 className="text-lg font-semibold">Notification</h3>
                            <p className="mt-2 text-sm text-gray-700">
                                {paymentError.response?.data?.error?.includes('Duplicate entry')
                                    ? 'This booking has already been paid. You cannot pay again.'
                                    : paymentError.response?.data?.message ||
                                      paymentError.message ||
                                      'Payment initialization failed. Please try again.'}
                            </p>
                            <button
                                className="mt-4 px-4 py-2 bg-[var(--primary)] text-white rounded cursor-pointer"
                                onClick={() => setShowError(false)}
                            >
                                OK
                            </button>
                        </div>
                    </div>,
                    document.body,
                )}
        </div>
    );
}

export default Payment;
