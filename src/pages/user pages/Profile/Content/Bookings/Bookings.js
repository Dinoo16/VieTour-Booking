import icons from '~/assets/icons';
import images from '~/assets/images';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';
import { useEffect, useState } from 'react';
import { useBookingsUser } from '~/hooks/useBooking';
import { getTourById } from '~/apiServices/tourService';
import { Link } from 'react-router-dom';

function Bookings() {
    const { data: bookings = [], isBookingsLoading } = useBookingsUser();
    const [myTours, setMyTours] = useState([]);
    const [loadingTours, setLoadingTours] = useState(false);

    useEffect(() => {
        if (bookings && bookings.length > 0) {
            const tourIds = [...new Set(bookings.map((b) => b.tourId))];
            setLoadingTours(true);

            Promise.all(tourIds.map((id) => getTourById(id)))
                .then((responses) => {
                    const tours = responses.map((r) => r.data || r);
                    setMyTours(tours);
                })
                .catch((err) => console.error('Error fetching tours:', err))
                .finally(() => setLoadingTours(false));
        }
    }, [bookings]);

    const groupedBookings = bookings.reduce((acc, booking) => {
        const tour = myTours.find((t) => t.id === booking.tourId);
        if (!tour) return acc;

        const dest = tour.destinationName;
        if (!acc[dest]) acc[dest] = [];

        acc[dest].push({ ...booking, tour });
        return acc;
    }, {});

    if (isBookingsLoading || loadingTours) return <LoadingSpinner />;

    return (
        <div className="w-full">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <icons.booking className="text-black" />
                <h2 className="text-[24px] font-medium text-[var(--title-color)]">Bookings and Trips</h2>
            </div>

            {/* Content */}
            <div>
                {bookings.length > 0 ? (
                    <div>
                        {Object.entries(groupedBookings).map(([destination, bookings]) => (
                            <div key={destination} className="mb-8">
                                <h3 className="text-lg font-medium text-[var(--title-color)] mb-3">{destination}</h3>

                                {bookings.map((booking) => (
                                    <div
                                        key={booking.id}
                                        className="border border-gray-300 rounded-md p-4 flex justify-between items-center flex-wrap mb-6"
                                    >
                                        {/* Tour info */}
                                        <div className="flex gap-4">
                                            <img
                                                src={booking.tour.backgroundImage}
                                                alt={`${booking.tour.title} tour`}
                                                className="w-[70px] h-[70px] s:w-[100px] s:h-[100px] rounded-lg object-cover"
                                            />
                                            <div className="flex flex-col justify-between">
                                                <div>
                                                    <span className="font-semibold text-[var(--header-color)] mr-2">
                                                        {booking.tour.title}
                                                    </span>
                                                    <span className="text-base text-black">{booking.date}</span>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <icons.location />
                                                    <span className="text-[var(--text-color)]">
                                                        {booking.tour.destinationName}
                                                    </span>
                                                </div>

                                                <div>
                                                    <span className="text-[var(--text-color)]">
                                                        Number of people:{' '}
                                                        {booking.numberOfPeople === 1
                                                            ? '1 person'
                                                            : `${booking.numberOfPeople} people`}
                                                    </span>
                                                </div>

                                                <div className="flex gap-3 font-semibold">
                                                    <span className="text-[var(--header-color)] font-medium">
                                                        Price: <strong>{booking.totalAmount}$</strong>
                                                    </span>
                                                    <span
                                                        className={`${
                                                            booking.status === 'EXPIRED'
                                                                ? 'text-gray-500'
                                                                : booking.status === 'PAID'
                                                                ? 'text-green-600'
                                                                : booking.status === 'FAILED'
                                                                ? 'text-red-500'
                                                                : booking.status === 'CANCELLED'
                                                                ? 'text-blue-500'
                                                                : booking.status === 'PENDING'
                                                                ? 'text-yellow-400'
                                                                : ''
                                                        }`}
                                                    >
                                                        {booking.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex flex-col gap-3 mt-4 sm:mt-0">
                                            <button className="px-4 py-2 rounded-md text-white bg-[var(--primary)]">
                                                View Detail
                                            </button>

                                            {booking.status === 'PENDING' ? (
                                                <Link
                                                    to={`/payment/${booking.id}`}
                                                    className="px-4 py-2 rounded-md border border-[var(--primary)] text-[var(--primary)] text-center"
                                                >
                                                    Continue Payment
                                                </Link>
                                            ) : booking.status === 'EXPIRED' ? (
                                                <button className="px-4 py-2 rounded-md border border-[var(--primary)] text-[var(--primary)]">
                                                    Book Again
                                                </button>
                                            ) : (
                                                <button className="px-4 py-2 rounded-md border border-[var(--primary)] text-[var(--primary)]">
                                                    View Receipt
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex gap-6">
                        <img src={images.trips} alt="No trips" className="w-[200px]" />
                        <div className="flex flex-col justify-center gap-3">
                            <h2 className="text-lg font-semibold text-black">Where to next?</h2>
                            <span className="text-base text-gray-600">
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
