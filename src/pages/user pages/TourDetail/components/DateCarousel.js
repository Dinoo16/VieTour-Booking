import { useState } from 'react';
import { Calendar, ChevronRight, ChevronLeft } from 'lucide-react';
import { format, addDays, isToday, startOfMonth, endOfMonth, eachDayOfInterval, subMonths, addMonths } from 'date-fns';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function generateDates(count) {
    const today = new Date();
    return Array.from({ length: count }, (_, i) => {
        const date = addDays(today, i + 1);
        return {
            day: format(date, 'EEE'),
            date: format(date, 'd'),
            month: format(date, 'MMM'),
            label: i === 0 ? 'Tomorrow' : null,
            fullDate: date,
        };
    });
}

export default function DateCarousel({ selected, onChange }) {
    const today = new Date();
    const tomorrow = addDays(today, 1);
    // const [selected, setSelected] = useState(tomorrow);
    const [showCalendar, setShowCalendar] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const endDate = addDays(today, 30);

    const dates = generateDates(10);

    // Calendar
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

    const handlePrevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    return (
        <div className="p-4 w-[420px] flex-shrink-0">
            <h2 className="font-semibold text-[var(--header-color)] text-lg pb-2">Tickets and prices</h2>
            <div className="flex items-center justify-between mb-3">
                <button
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="flex items-center gap-2 text-sm text-[var(--primary)] font-medium"
                >
                    {showCalendar ? 'Close calendar' : 'Show more dates'}
                </button>
            </div>

            {!showCalendar ? (
                // === Swiper Carousel ===
                <div className="relative ">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={4}
                        navigation={{
                            nextEl: '.next-btn',
                            prevEl: '.prev-btn',
                        }}
                        className="pb-[11px]"
                    >
                        {dates.map((d, idx) => (
                            <SwiperSlide key={idx}>
                                <div
                                    onClick={() => onChange(d.fullDate)}
                                    className={`
                                            relative flex flex-col items-center justify-center 
                                            w-[90px] h-[115px] rounded-md border cursor-pointer transition
                    ${
                        selected && selected.toDateString() === d.fullDate.toDateString()
                            ? 'border-[var(--primary)] bg-orange-50'
                            : 'border-gray-300 bg-white hover:border-[var(--primary)]'
                    }
                  `}
                                >
                                    <span
                                        className={`text-sm ${
                                            selected && selected.toDateString() === d.fullDate.toDateString()
                                                ? 'text-[var(--primary)]'
                                                : 'text-gray-500'
                                        }`}
                                    >
                                        {d.day}
                                    </span>
                                    <span
                                        className={`text-2xl font-bold ${
                                            selected && selected.toDateString() === d.fullDate.toDateString()
                                                ? 'text-[var(--primary)]'
                                                : 'text-black'
                                        }`}
                                    >
                                        {d.date}
                                    </span>
                                    <span
                                        className={`text-sm ${
                                            selected && selected.toDateString() === d.fullDate.toDateString()
                                                ? 'text-[var(--primary)]'
                                                : 'text-gray-500'
                                        }`}
                                    >
                                        {d.month}
                                    </span>
                                    {d.label && selected && selected.toDateString() === d.fullDate.toDateString() && (
                                        <span className="absolute bottom-[-10px] bg-orange-600 text-white text-xs px-2 py-0.5 rounded z-10">
                                            {d.label}
                                        </span>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button className="prev-btn absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center z-10">
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="next-btn absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center z-10">
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            ) : (
                // === Calendar ===
                <div className="w-full box-border border border-gray-300 rounded-md p-4 ">
                    <div className="w-full flex items-center justify-between mb-3">
                        <button
                            onClick={handlePrevMonth}
                            className="p-1 rounded hover:bg-gray-100"
                            disabled={startOfMonth(currentMonth) <= startOfMonth(today)}
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <h2 className="font-semibold text-lg">{format(currentMonth, 'MMMM yyyy')}</h2>
                        <button
                            onClick={handleNextMonth}
                            className="p-1 rounded hover:bg-gray-100"
                            disabled={startOfMonth(currentMonth) >= startOfMonth(endDate)}
                        >
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 w-full text-center text-gray-500 text-sm mb-2">
                        <span>Mo</span>
                        <span>Tu</span>
                        <span>We</span>
                        <span>Th</span>
                        <span>Fr</span>
                        <span>Sa</span>
                        <span>Su</span>
                    </div>
                    {/* Calendar day */}
                    <div className="grid w-full justify-items-center grid-cols-7 text-center">
                        {daysInMonth.map((d, i) => {
                            const isDisabled = d < today || d > endDate;
                            return (
                                <button
                                    key={i}
                                    onClick={() => !isDisabled && onChange(d)}
                                    disabled={isDisabled}
                                    className={`p-2 rounded transition
                    ${
                        isDisabled
                            ? 'text-gray-300 cursor-not-allowed'
                            : selected && selected.toDateString() === d.toDateString()
                            ? 'bg-[var(--primary)] text-white'
                            : 'hover:bg-gray-100'
                    }`}
                                >
                                    {format(d, 'd')}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
