import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './SearchTour.module.scss';
import icons from '~/assets/icons';
import Button from '~/components/Button/Button';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import boxMapping from './Box/BoxMapping';
import { useNavigate } from 'react-router-dom';
import { useSearchTours } from '~/hooks/useTours';

const cx = classNames.bind(styles);

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
        <div className={cx('wrapper')}>
            <Menu>
                {SEARCH_ITEMS.map((item, index) => (
                    <Tippy
                        key={index}
                        interactive
                        visible={visibleIndex === index}
                        placement="bottom-start"
                        render={(attrs) => (
                            <div className={cx('popover')} tabIndex="-1" {...attrs}>
                                {renderDropdown(index)}
                            </div>
                        )}
                        onClickOutside={() => setVisibleIndex(null)}
                    >
                        <div className={cx('menu-wrapper')} onClick={() => handleToggle(index)}>
                            <MenuItem icon={item.icon} title={searchTitles[index]} />
                        </div>
                    </Tippy>
                ))}
            </Menu>

            <Button rounded onClick={handleSearchTours}>
                Search
            </Button>
        </div>
    );
}

export default SearchTour;
