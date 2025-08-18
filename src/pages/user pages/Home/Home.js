import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import Services from './components/Services/Services';
import Categories from './components/Category/Categories';
import Destination from './components/Destination/Destination';
import Promotion from './components/Promotion/Promotion';
import Tours from './components/Tours/Tours';
import Gallery from './components/Gallery/Gallery';
import { useNavigate } from 'react-router-dom';
import { useCategories } from '~/hooks/useCategories';
import { useTours } from '~/hooks/useTours';
import { usePopularDestinations } from '~/hooks/useDestinations';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
    const { data: CategoriesData = [], isCategoriesLoading } = useCategories();
    const { data: ToursData = [], isToursLoading } = useTours();
    const [popularDestinations, setPopularDestinations] = useState([]);

    const { data: PopularDestinations = [], isPopularDestinationsLoading } = usePopularDestinations();
    const navigate = useNavigate();

    useEffect(() => {
        if (Array.isArray(PopularDestinations)) {
            setPopularDestinations(PopularDestinations);
        } else {
            setPopularDestinations([]);
        }
    }, [PopularDestinations]);

    const handleTourClick = (item) => {
        navigate(`/tour/${item.id}`);
    };

    function handleCategoryClick(item) {
        const categoryId = item.id;
        navigate(`/tour?categoryId=${categoryId}`);
    }

    function handleDestinationClick(item) {
        const destinationId = item.id;
        navigate(`/tour?destinationId=${destinationId}`);
    }

    if (isCategoriesLoading || isPopularDestinationsLoading || isToursLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div className={cx('wrapper')}>
            {/* SERVICES */}
            <Services />

            {/* CATEGORY */}
            <Categories items={CategoriesData} onclick={handleCategoryClick} />

            {/* POPULAR DESTINATION */}
            <Destination items={popularDestinations} onclick={handleDestinationClick} />

            {/* PROMOTION */}
            <Promotion />

            {/* TOURS */}
            <Tours items={ToursData} onclick={handleTourClick} />

            {/* GALLERY */}
            <Gallery />
        </div>
    );
}

export default Home;
