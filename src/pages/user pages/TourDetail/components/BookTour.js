import React, { useState } from 'react';
import icons from '~/assets/icons';
import Button from '~/components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '~/utils/isAuthenticated';
import { useCreateBooking } from '~/hooks/useBooking';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';
import Popup from '~/components/Popup/Popup';

function BookTour({ item }) {
    const navigate = useNavigate();
    const tourId = item.id;

    // Contact infor
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [message, setMessage] = useState('');

    // Pop up state
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const { mutate: createBooking, isLoading } = useCreateBooking();

    const handleBookTour = (e) => {
        e.preventDefault();

        if (!name || !email || !phone || !date || !numberOfPeople || Number(numberOfPeople) <= 0) {
            setPopupMessage('Please fill all required fields before booking.');
            setShowPopup(true);
            return;
        }

        if (isAuthenticated()) {
            const bookingData = {
                tourId,
                contactName: name,
                contactEmail: email,
                contactPhone: phone,
                date,
                numberOfPeople: Number(numberOfPeople),
                message,
            };
            createBooking(bookingData, {
                onSuccess: (data) => {
                    if (!data || !data.id) {
                        setPopupMessage('Booking failed. Please try again.');
                        setShowPopup(true);
                        return;
                    }
                    navigate(`/payment/${data.id}`);
                },
                onError: (error) => {
                    console.error('Create booking error: ', error);
                    setPopupMessage(`Create failed: ${error.response?.data?.message || error.message}`);
                    setShowPopup(true);
                },
            });
        } else {
            navigate('/signin');
        }
    };

    if (isLoading) return <LoadingSpinner />;

    return (
        <div className="w-full md:max-w-[300px] max-h-[880px] lg:max-w-[444px] bg-[#ededed] flex flex-col flex-shrink-0 p-9">
            <h1 className="text-center mt-0 text-[32px] lg:text-[42px] text-[var(--header-color)] font-header mb-3">
                Book This Tour
            </h1>

            <form className="w-full flex flex-col gap-3 mt-6" onSubmit={handleBookTour}>
                {/* Name */}
                <div className="h-[50px] md:h-[76px] flex items-center relative w-full focus-within:text-[var(--text-color)]">
                    <icons.user className="absolute left-3 w-5 h-5 opacity-40 peer-focus:opacity-100" />
                    <input
                        type="text"
                        placeholder="Name"
                        className="peer w-full h-full pl-10 pr-3 py-2 text-base md:text-[18px] text-black/60 border border-transparent focus:border-primary outline-none transition"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* Email */}
                <div className="h-[50px] md:h-[76px] flex items-center relative w-full">
                    <icons.email className="absolute left-3 w-5 h-5 opacity-40 peer-focus:opacity-100" />
                    <input
                        type="email"
                        placeholder="Email"
                        className="peer w-full h-full pl-10 pr-3 py-2 text-base md:text-[18px] text-black/60 border border-transparent focus:border-primary outline-none transition"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Phone */}
                <div className="h-[50px] md:h-[76px] flex items-center relative w-full">
                    <icons.phone className="absolute left-3 w-5 h-5 opacity-40 peer-focus:opacity-100" />
                    <input
                        type="text"
                        placeholder="Phone"
                        className="peer w-full h-full pl-10 pr-3 py-2 text-base md:text-[18px] text-black/60 border border-transparent focus:border-primary outline-none transition"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                {/* Date */}
                <div className="h-[50px] md:h-[76px] flex items-center relative w-full">
                    <icons.calendar className="absolute left-3 w-5 h-5 opacity-40 peer-focus:opacity-100" />
                    <input
                        type="date"
                        className="peer w-full h-full pl-10 pr-3 py-2 text-base md:text-[18px] text-black/60 border border-transparent focus:border-primary outline-none transition appearance-none"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                {/* Number of tickets */}
                <div className="h-[50px] md:h-[76px] flex items-center relative w-full">
                    <icons.tag className="absolute left-3 w-5 h-5 opacity-40 peer-focus:opacity-100" />
                    <input
                        type="number"
                        placeholder="Number of tickets"
                        className="peer w-full h-full pl-10 pr-3 py-2 text-base md:text-[18px] text-black/60 border border-transparent focus:border-primary outline-none transition"
                        value={numberOfPeople}
                        onChange={(e) => setNumberOfPeople(Number(e.target.value))}
                    />
                </div>

                {/* Message */}
                <div className="h-[50px] md:h-[76px] flex items-center relative w-full">
                    <icons.message className="absolute left-3 w-5 h-5 opacity-40 peer-focus:opacity-100" />
                    <input
                        type="text"
                        placeholder="Message"
                        className="peer w-full h-full pl-10 pr-3 py-2 text-base md:text-[18px] text-black/60 border border-transparent focus:border-primary outline-none transition"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                <Button primary className="mt-5">
                    Book Now
                </Button>

                {showPopup && (
                    <Popup title="Notification" message={popupMessage} onConfirm={() => setShowPopup(false)} />
                )}
            </form>
        </div>
    );
}

export default BookTour;
