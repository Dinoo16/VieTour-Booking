import icons from '~/assets/icons';
import TourCard from '~/components/TourCard/TourCard';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useToursByCategoryId } from '~/hooks/useCategories';
import { useToursByDestinationId } from '~/hooks/useDestinations';
import { useTours, useSearchTours } from '~/hooks/useTours';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';

const options = [
    { value: 'top', label: 'Our top picks' },
    { value: 'lowest', label: 'Lowest price' },
    { value: 'reviewed', label: 'Best reviewed' },
];

function Tour() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [selected, setSelected] = useState(options[0]);
    const [open, setOpen] = useState(false);
    const [tours, setTours] = useState([]);

    const { data: toursData = [], isTourLoading } = useTours(selected.value);

    // Search filters
    const destination = searchParams.get('destination');
    const day = searchParams.get('day');
    const category = searchParams.get('category');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');

    const { data: toursSearch = [], isLoading } = useSearchTours(
        destination,
        day,
        category,
        minPrice,
        maxPrice,
        selected.value,
    );

    // Category filter
    const categoryId = searchParams.get('categoryId');
    const { data: toursByCategoryId = [], isToursByCategoryIdLoading } = useToursByCategoryId(
        categoryId,
        selected.value,
    );

    // Destination filter
    const destinationId = searchParams.get('destinationId');
    const { data: toursByDestinationId = [], isToursByDestinationIdLoading } = useToursByDestinationId(
        destinationId,
        selected.value,
    );

    // Handle select
    const handleSelect = (option) => {
        setSelected(option);
        setOpen(false);
    };

    useEffect(() => {
        let toursToDisplay = [];

        if (destination || day || category || minPrice || maxPrice) {
            toursToDisplay = toursSearch || [];
        } else if (categoryId) {
            toursToDisplay = toursByCategoryId || [];
        } else if (destinationId) {
            toursToDisplay = toursByDestinationId || [];
        } else {
            toursToDisplay = toursData || [];
        }

        setTours(toursToDisplay);
    }, [
        destination,
        day,
        category,
        minPrice,
        maxPrice,
        categoryId,
        destinationId,
        toursSearch,
        toursByCategoryId,
        toursByDestinationId,
        toursData,
    ]);

    function handleTourClick(tourId) {
        navigate(`/tour/${tourId}`);
    }

    const isLoadingAny = isLoading || isTourLoading || isToursByCategoryIdLoading || isToursByDestinationIdLoading;

    if (isLoadingAny) {
        return <LoadingSpinner />;
    }

    return (
        <div className="min-h-[900px] bg-white flex flex-col py-6 px-4 sm:px-8 md:px-14 shadow-[0_4px_48px_rgba(0,0,0,0.25)]">
            {/* Header */}
            <div className="flex justify-between mb-8">
                <h3 className="text-xl sm:text-[28px] font-semibold text-[var(--title-color)]">
                    Result search: {tours.length}
                </h3>

                <div className="relative inline-block font-sans">
                    <button
                        onClick={() => setOpen(!open)}
                        className="bg-white border border-[#ccc] rounded-full px-3 py-2 flex items-center gap-1 cursor-pointer text-sm font-medium hover:border-[#888]"
                    >
                        <icons.arrow className="text-[10px]" />
                        Sort by: {selected.label}
                    </button>

                    {open && (
                        <ul className="absolute top-[110%] left-0 bg-white rounded-lg w-[180px] shadow-[0_2px_8px_rgba(26,26,26,0.16)] z-[100] py-1">
                            {options.map((option) => (
                                <li
                                    key={option.value}
                                    onClick={() => handleSelect(option)}
                                    className={`px-3 py-2 cursor-pointer text-sm text-[var(--title-color)] hover:bg-[#f0f0f0] ${
                                        selected.value === option.value ? 'font-bold bg-[#f9f9f9]' : ''
                                    }`}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="flex justify-between">
                <div className="grid grid-cols-1 s:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {tours.map((tour, index) => (
                        <TourCard
                            key={index}
                            images={tour.backgroundImage}
                            title={tour.title}
                            destination={tour.destinationName}
                            rating={tour.rating}
                            oldPrice={tour.oldPrice}
                            price={tour.price}
                            onclick={() => handleTourClick(tour.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tour;
