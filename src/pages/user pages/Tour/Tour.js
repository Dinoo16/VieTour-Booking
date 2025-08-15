import classNames from 'classnames/bind';
import styles from './Tour.module.scss';
import icons from '~/assets/icons';
import TourCard from '~/components/TourCard/TourCard';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToursSort } from '~/hooks/useTours';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';

const cx = classNames.bind(styles);

const options = [
    { value: 'top', label: 'Our top picks' },
    { value: 'lowest', label: 'Lowest price' },
    { value: 'reviewed', label: 'Best reviewed' },
];

function Tour() {
    const [tours, setTours] = useState([]);
    const navigate = useNavigate();

    // Set default tours list sort by top picks
    const [selected, setSelected] = useState(options[0]);
    const [open, setOpen] = useState(false);

    const { data: toursData = [], isTourLoading } = useToursSort(selected.value);

    // Handle select sort options
    const handleSelect = (option) => {
        setSelected(option);
        setOpen(false);
    };

    // call api
    useEffect(() => {
        if (toursData) {
            setTours(toursData);
        }
    }, [toursData]);

    function handleTourClick(tourId) {
        navigate(`/tour/${tourId}`);
    }

    if (isTourLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3 className={cx('header-result')}>Our Tours: {tours.length} results</h3>

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
