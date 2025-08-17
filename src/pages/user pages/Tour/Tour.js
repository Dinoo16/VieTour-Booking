import classNames from 'classnames/bind';
import styles from './Tour.module.scss';
import icons from '~/assets/icons';
import TourCard from '~/components/TourCard/TourCard';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useToursByCategoryId } from '~/hooks/useCategories';
import { useToursByDestinationId } from '~/hooks/useDestinations';
import { useTours, useSearchTours } from '~/hooks/useTours';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';

const cx = classNames.bind(styles);

const options = [
    { value: 'top', label: 'Our top picks' },
    { value: 'lowest', label: 'Lowest price' },
    { value: 'reviewed', label: 'Best reviewed' },
];

function Tour() {
    const [searchParams] = useSearchParams();

    // Search tour
    const destination = searchParams.get('destination');
    const day = searchParams.get('day');
    const category = searchParams.get('category');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const { data: toursSearch, isLoading } = useSearchTours(destination, day, category, minPrice, maxPrice);

    // Genaral Tours list
    const [tours, setTours] = useState([]);
    const navigate = useNavigate();

    // Set default tours list sort by top picks
    const [selected, setSelected] = useState(options[0]);
    const [open, setOpen] = useState(false);

    const { data: toursData = [], isTourLoading } = useTours(selected.value);

    // Get categoryId from URL
    const categoryId = searchParams.get('categoryId');

    const { data: toursByCategoryId = [], isToursByCategoryIdLoading } = useToursByCategoryId(
        categoryId,
        selected.value,
    );

    // Get destinationId from URL
    const destinationId = searchParams.get('destinationId');

    const { data: toursByDestinationId = [], isToursByDestinationIdLoading } = useToursByDestinationId(
        destinationId,
        selected.value,
    );

    // Handle select sort options
    const handleSelect = (option) => {
        setSelected(option);
        setOpen(false);
    };

    // call api
    useEffect(() => {
        if (toursSearch) {
            setTours(toursSearch);
        } else if (categoryId && toursByCategoryId) {
            setTours(toursByCategoryId);
        } else if (destinationId && toursByDestinationId) {
            setTours(toursByDestinationId);
        } else if (toursData) {
            setTours(toursData);
        }
    }, [categoryId, destinationId, toursByCategoryId, toursByDestinationId, toursData, toursSearch]);

    function handleTourClick(tourId) {
        navigate(`/tour/${tourId}`);
    }

    if (isTourLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    if (isToursByCategoryIdLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    if (isToursByDestinationIdLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3 className={cx('header-result')}>Result search: {tours.length}</h3>

                <div className={cx('sortDropdown')}>
                    <button className={cx('sortButton')} onClick={() => setOpen(!open)}>
                        <icons.arrow className={cx('icon')} />
                        Sort by: {selected.label}
                    </button>

                    {open && (
                        <ul className={cx('dropdownMenu')}>
                            {options.map((option) => (
                                <li
                                    key={option.value}
                                    onClick={() => handleSelect(option)}
                                    className={`${cx('dropdownItem')} ${
                                        selected.value === option.value ? cx('active') : ''
                                    }`}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className={cx('content')}>
                <div className={cx('tour-list')}>
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
                    <div className={cx('pagination')}> </div>
                </div>
            </div>
        </div>
    );
}

export default Tour;
