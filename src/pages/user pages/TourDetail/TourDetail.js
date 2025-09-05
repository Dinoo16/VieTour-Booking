import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Menu from './Menu/Menu';
import icons from '~/assets/icons';
import images from '~/assets/images';
import BookTour from './components/BookTour';
import { useTour } from '~/hooks/useTours';

const MENU_ITEMS = [
    { icon: icons.info, title: 'Information' },
    { icon: icons.calendar, title: 'Tour Plan' },
    { icon: icons.location, title: 'Location' },
    { icon: icons.gallery, title: 'Gallery' },
];

function TourDetail() {
    const [activeMenu, setActiveMenu] = useState(MENU_ITEMS[0]);
    const { id } = useParams();
    const { data: tourData, isTourLoading } = useTour(id);
    const [tour, setTour] = useState(null);

    useEffect(() => {
        if (tourData) setTour(tourData);
    }, [tourData]);

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
                        <BookTour item={tour} />
                    </>
                )}

                {activeMenu.title === 'Tour Plan' && (
                    <>
                        <div className="pl-2">
                            <h1 className="text-[36px] font-header font-bold text-[var(--header-color)] mb-8">
                                Tour Plan
                            </h1>
                            {tour.tourPlans.map((plan, idx) => (
                                <div key={idx} className="relative flex items-start pb-[52px] min-h-[80px] pl-[52px]">
                                    {/* Vertical dashed line */}
                                    <div className="absolute left-0 top-0 translate-x-6 h-full border-l-2 border-dashed border-primary z-0 last:h-10"></div>
                                    {/* Day number */}
                                    <div className="absolute left-0 top-0 w-12 h-12 bg-primary text-white font-bold text-[18px] rounded-xl flex items-center justify-center shadow-sm border-2 border-white z-10">
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
                        <BookTour item={tour} />
                    </>
                )}

                {activeMenu.title === 'Location' && (
                    <>
                        <div>
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
                        <BookTour item={tour} />
                    </>
                )}

                {activeMenu.title === 'Gallery' && (
                    <>
                        <div className="flex flex-col gap-6">
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
                        <BookTour item={tour} />
                    </>
                )}
            </div>
        </div>
    );
}

export default TourDetail;
