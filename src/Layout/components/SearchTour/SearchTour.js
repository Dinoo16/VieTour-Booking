import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import icons from '~/assets/icons';
import Button from '~/components/Button/Button';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import boxMapping from './Box/BoxMapping';
import { useNavigate } from 'react-router-dom';
import { useSearchTours } from '~/hooks/useTours';

const SEARCH_ITEMS = [
    {
        icon: icons.location,
        title: 'Destination',
    },
    {
        icon: icons.clock,
        title: '0 Days - 6 Days',
    },
    {
        icon: icons.category,
        title: 'Choose Category',
    },
    {
        icon: icons.dollar,
        title: 'Select budget',
    },
];

function SearchTour() {
    const navigate = useNavigate();
    const [visibleIndex, setVisibleIndex] = useState(null);
    const [searchTitles, setSearchTitles] = useState(SEARCH_ITEMS.map((item) => item.title));

    // state để lưu giá trị thực tế để call API
    const [filters, setFilters] = useState({
        destination: null,
        days: null,
        category: null,
        minPrice: null,
        maxPrice: null,
    });

    const handleToggle = (index) => {
        setVisibleIndex((prev) => (prev === index ? null : index));
    };
    const handleSelect = (index, value) => {
        const updatedTitles = [...searchTitles];
        if (index === 1) {
            // index 1 is Days
            updatedTitles[index] = `${value}  ${value === 1 ? 'day' : 'days'}`;
        } else if (index === 3) {
            updatedTitles[index] = value.label;
        } else {
            updatedTitles[index] = value;
        }
        setSearchTitles(updatedTitles);
        setVisibleIndex(null);

        // update state filters by index
        if (index === 0) setFilters((prev) => ({ ...prev, destination: value }));
        if (index === 1) setFilters((prev) => ({ ...prev, days: value }));
        if (index === 2) setFilters((prev) => ({ ...prev, category: value }));
        if (index === 3) setFilters((prev) => ({ ...prev, minPrice: value.min || 0, maxPrice: value.max || null }));
    };

    const renderDropdown = (index) => {
        const BoxComponent = boxMapping[index];
        return BoxComponent ? <BoxComponent onSelect={(value) => handleSelect(index, value)} /> : null;
    };

    // Hook search tour
    const { data: tours, isLoading } = useSearchTours(
        filters.destination,
        filters.days,
        filters.category,
        filters.minPrice,
        filters.maxPrice,
    );

    const handleSearchTours = () => {
        // tạo query string từ filters
        const queryParams = new URLSearchParams();

        if (filters.destination) queryParams.append('destination', filters.destination);
        if (filters.days) queryParams.append('day', filters.days);
        if (filters.category) queryParams.append('category', filters.category);
        if (filters.minPrice) queryParams.append('minPrice', filters.minPrice);
        if (filters.maxPrice) queryParams.append('maxPrice', filters.maxPrice);

        navigate(`/tour?${queryParams.toString()}`);
    };

    return (
        <div className="w-full xl:w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-0 absolute bottom-0 left-0 translate-y-1/2 z-10">
            <div className="w-full h-auto flex flex-col md:flex-row justify-between rounded-2xl border-2 border-[var(--primary)] bg-white px-6 py-[27px]">
                {/* Grid layout cho items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 flex-1 w-full">
                    {SEARCH_ITEMS.map((item, index) => (
                        <Tippy
                            key={index}
                            interactive
                            visible={visibleIndex === index}
                            placement="bottom-start"
                            render={(attrs) => (
                                <div tabIndex="-1" {...attrs}>
                                    {renderDropdown(index)}
                                </div>
                            )}
                            onClickOutside={() => setVisibleIndex(null)}
                        >
                            <div
                                className="flex items-center justify-start cursor-pointer"
                                onClick={() => handleToggle(index)}
                            >
                                <MenuItem icon={item.icon} title={searchTitles[index]} />
                            </div>
                        </Tippy>
                    ))}
                </div>

                {/* Nút search */}
                <Button rounded onClick={handleSearchTours} className="mt-4 md:mt-0 md:ml-4">
                    Search
                </Button>
            </div>
        </div>
    );
}

export default SearchTour;
