import { useParams, useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { isAuthenticated } from '~/utils/isAuthenticated';
import Menu from './Menu/Menu';
import icons from '~/assets/icons';
import images from '~/assets/images';
import { useTour } from '~/hooks/useTours';
import DateCarousel from './components/DateCarousel';
import SelectTime from './components/SelectTime';
import Ticket from './components/Ticket';
import { useCreateBooking } from '~/hooks/useBooking';
import Popup from '~/components/Popup/Popup';
import { addDays } from 'date-fns';

const MENU_ITEMS = [
    { icon: icons.info, title: 'Information' },
    { icon: icons.calendar, title: 'Tour Plan' },
    { icon: icons.location, title: 'Location' },
    { icon: icons.gallery, title: 'Gallery' },
];

function TourDetail() {
    const [activeMenu, setActiveMenu] = useState(MENU_ITEMS[0]);
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: tour, isTourLoading } = useTour(id);

    // Departure date and time state
    const today = new Date();
    const tomorrow = addDays(today, 1);
    const [selectedDate, setSelectedDate] = useState(tomorrow);
    const [selectedTime, setSelectedTime] = useState(null);

    // Hook create booking api
    const { mutate: createBooking, isLoading } = useCreateBooking();

    // Pop up state
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const handleBookTour = (bookingData) => {
        if (!bookingData.date || !bookingData.time) {
            setPopupMessage('Please fill all required fields before booking.');
            setShowPopup(true);
            return;
        }

        const finalBookingData = {
            ...bookingData,
            tourId: tour.id,
        };

        if (isAuthenticated()) {
            createBooking(finalBookingData, {
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

    if (isTourLoading) return <div className="text-center py-10">Loading...</div>;
    if (!tour) return <div className="text-center py-10">Tour not found</div>;

    return (
        <div className="w-full top-0 shadow-[0px_4px_48px_rgba(0,0,0,0.25)] -translate-y-[70.5px]">
            {/* Header */}
            <div className="w-full h-[70px] sm:h-[141px] bg-[#ededed]">
                <Menu items={MENU_ITEMS} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            </div>

            {/* Content */}
            <div className="px-6 s:px-14 py-[42px] flex flex-col md:flex-row justify-between gap-10 has-[.gallery]:gap-6">
                {activeMenu.title === 'Information' && (
                    <>
                        {/* Info */}
                        <div className="w-full h-full">
                            <div className="flex gap-[30px]">
                                {/* Title + Rating */}
                                <div>
                                    <h1 className="font-header text-[28px] s:text-[32px] md:text-[42px] text-[var(--header-color)] m-0">
                                        {tour.title}
                                    </h1>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <icons.star key={i} className="w-[18px] h-[18px] text-[#ffba0a]" />
                                        ))}
                                        <span className="pl-2 text-[16px]">{tour.rating}</span>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="pt-3">
                                    <span className="text-[22px] s:text-[28px] text-[var(--primary)]">
                                        {tour.price} $
                                    </span>
                                    <span className="text-[16px] text-[var(--text-color)] ml-1">/ Per Person</span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-[14px] s:text-[16px] py-[18px] pb-[32px] s:pb-[56px]">
                                {tour.description}
                            </p>

                            {/* Info items */}
                            <div className="flex flex-col gap-[42px]">
                                <p>
                                    <strong className="text-[16px] s:text-[20px] text-[var(--primary)] mr-6">
                                        Destination:
                                    </strong>
                                    {tour.destinationName}
                                </p>
                                <p>
                                    <strong className="text-[16px] s:text-[20px] text-[var(--primary)] mr-6">
                                        Departure:
                                    </strong>
                                    {tour.departure}
                                </p>
                                <p>
                                    <strong className="text-[16px] s:text-[20px] text-[var(--primary)] mr-6">
                                        Category:
                                    </strong>
                                    {tour.categoryNames.join(', ')}
                                </p>
                                <p>
                                    <strong className="text-[16px] s:text-[20px] text-[var(--primary)] mr-6">
                                        Duration:
                                    </strong>
                                    {tour.duration}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <DateCarousel selected={selectedDate} onChange={setSelectedDate} />
                            <SelectTime tour={tour} selected={selectedTime} onChange={setSelectedTime} />
                            <Ticket
                                price={tour.price}
                                tourId={tour.id}
                                selectedDate={selectedDate}
                                selectedTime={selectedTime}
                                onCreateBooking={handleBookTour}
                            />
                        </div>
                    </>
                )}

                {activeMenu.title === 'Tour Plan' && (
                    <>
                        <div className="pl-2 w-full h-full">
                            <h1 className="text-[36px] font-header font-bold text-[var(--header-color)] mb-8">
                                Tour Plan
                            </h1>

                            {tour.tourPlans.map((plan, idx) => (
                                <div
                                    key={idx}
                                    className={`
                                    relative flex items-start min-h-[80px] pl-[52px] pb-[52px]
                                    before:content-[''] before:absolute before:left-0 before:top-0 
                                    before:translate-x-[24px] before:h-full before:border-l-2 before:border-dashed 
                                    before:border-[var(--primary)] before:z-0
                                    last:before:h-[40px]`}
                                >
                                    {/* Day number */}
                                    <div
                                        className="
                                        absolute left-0 top-0 w-[48px] h-[48px] bg-[var(--primary)] text-white 
                                        font-bold text-[18px] rounded-[12px] flex items-center justify-center 
                                        shadow-md z-[1] 
                                        "
                                    >
                                        {plan.day}
                                    </div>

                                    {/* Content */}
                                    <div className="ml-8">
                                        <h3 className="font-header text-[24px] font-semibold mb-2 text-[var(--header-color)]">
                                            Day {plan.day}: {plan.title}
                                        </h3>
                                        <p className="text-[16px] text-[var(--header-color)] leading-7">
                                            {plan.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col">
                            {/* <DateCarousel />
                            <SelectTime tour={tour} />
                            <Ticket price={tour.price} /> */}
                        </div>
                    </>
                )}

                {activeMenu.title === 'Location' && (
                    <>
                        <div className="w-full h-full">
                            <h1 className="text-[42px] font-header text-[var(--header-color)]">Location</h1>
                            <p className="text-[16px] py-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            </p>
                            <img src={images.mapdemo} alt="map" className="w-full h-[567px] object-cover" />
                            <p className="text-[16px] py-6">
                                Sit quasi soluta non temporibus voluptas non necessitatibus tempore sit deleniti...
                            </p>
                            <div className="flex flex-col gap-4 pt-6">
                                <span className="text-[16px] text-[var(--header-color)]">
                                    Click the image below for a 360-degree tour of Ha Long Bay
                                </span>
                                <img src={images.halongbay} alt="halongbay" className="w-full h-[228px] object-cover" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            {/* <DateCarousel />
                            <SelectTime tour={tour} />
                            <Ticket price={tour.price} /> */}
                        </div>
                    </>
                )}

                {activeMenu.title === 'Gallery' && (
                    <>
                        <div className="flex flex-col gap-6 w-full h-full">
                            {/* Box 1 */}
                            <div className="flex gap-6">
                                <div className="flex flex-col gap-6">
                                    {tour.gallery.slice(0, 3).map((img, idx) => (
                                        <img
                                            key={idx}
                                            src={img}
                                            alt={`Gallery ${idx}`}
                                            className="w-[215px] h-[215px] object-cover"
                                        />
                                    ))}
                                </div>
                                <div>
                                    <img
                                        src={tour.gallery[3]}
                                        alt="Gallery 3"
                                        className="w-full h-[693px] object-cover"
                                    />
                                </div>
                            </div>
                            {/* Box 2 */}
                            <div className="flex flex-col gap-6">
                                <div className="flex gap-6">
                                    {tour.gallery.slice(4, 6).map((img, idx) => (
                                        <img
                                            key={idx + 4}
                                            src={img}
                                            alt={`Gallery ${idx + 4}`}
                                            className={
                                                idx === 1
                                                    ? 'w-[215px] h-[215px] object-cover'
                                                    : 'h-[215px] object-cover'
                                            }
                                        />
                                    ))}
                                </div>
                                <div>
                                    <img
                                        src={tour.gallery[6]}
                                        alt="Gallery 6"
                                        className="w-full h-[215px] object-cover"
                                    />
                                </div>
                            </div>
                            {/* Optional bottom banner */}
                            {tour.gallery[7] && (
                                <div>
                                    <img src={tour.gallery[7]} alt="Gallery 7" className="w-full object-cover" />
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col">
                            {/* <DateCarousel />
                            <SelectTime tour={tour} />
                            <Ticket price={tour.price} /> */}
                        </div>
                    </>
                )}
            </div>

            {showPopup &&
                createPortal(
                    <Popup title="Notification" message={popupMessage} onConfirm={() => setShowPopup(false)} />,
                    document.body,
                )}
        </div>
    );
}

export default TourDetail;
