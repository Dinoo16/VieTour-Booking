import classNames from 'classnames/bind';
import styles from './Tour.module.scss';
import icons from '~/assets/icons';
import Menu from './Menu/Menu';
import TourCard from '~/components/TourCard/TourCard';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTours } from '~/hooks/useTours';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'Date',
        icon: icons.calendar,
    },
    {
        title: 'Price Low To High',
        icon: icons.upIcon,
    },
    {
        title: 'Price High To Low',
        icon: icons.downIcon,
    },
    {
        title: 'Name',
        icon: icons.penIcon,
    },
];

function Tour() {
    
    const { data: toursData, isTourLoading } = useTours();

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1200);

    const navigate = useNavigate();

    function handleTourClick(tourId) {
        navigate(`/tour/${tourId}`);
    }

    if (isTourLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('filter-bar')}>
                <Menu items={MENU_ITEMS} />
            </div>

            <div className={cx('content')}>
                <div className={cx('tour-list')}>
                    {toursData.map((tour, index) => (
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
