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
import { usePopularDestinations } from '~/hooks/useDestinations';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';
import { useEffect, useState } from 'react';
import { useTrendingTours } from '~/hooks/useTours';

function Home() {
    // Fetch category
    const { data: CategoriesData = [], isLoading: isCategoriesLoading } = useCategories();
    // Fetch Trending tour (8 slots)
    const { data: trendingToursData, isLoading: isTrendingTourLoading } = useTrendingTours();
    const [popularDestinations, setPopularDestinations] = useState([]);

    const { data: PopularDestinations = [], isLoading: isPopularDestinationsLoading } = usePopularDestinations();
    const navigate = useNavigate();

    useEffect(() => {
        if (Array.isArray(PopularDestinations)) {
            setPopularDestinations(PopularDestinations);
        } else {
            setPopularDestinations([]);
        }
    }, [popularDestinations]);

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

    return (
        <div>
            {/* SERVICES */}
            <Services />

            {/* CATEGORY */}
            {isCategoriesLoading ? (
                <LoadingSpinner text={'Loading categories'}></LoadingSpinner>
            ) : (
                <Categories items={CategoriesData} onclick={handleCategoryClick} />
            )}

            {/* POPULAR DESTINATION */}
            {isPopularDestinationsLoading ? (
                <LoadingSpinner text={'Loading destinations'}></LoadingSpinner>
            ) : (
                <Destination items={popularDestinations} onclick={handleDestinationClick} />
            )}

            {/* PROMOTION */}
            <Promotion />

            {/* TOURS */}
            {isTrendingTourLoading ? (
                <LoadingSpinner text={'Loading tours'}></LoadingSpinner>
            ) : (
                <Tours items={trendingToursData} onclick={handleTourClick} />
            )}

            {/* GALLERY */}
            <Gallery />
        </div>
    );
}

export default Home;
