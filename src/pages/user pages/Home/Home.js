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
import { DESTINATIONS } from '~/data/Destination/Destination';
import { useNavigate } from 'react-router-dom';
import { useCategories } from '~/hooks/useCategories';
import { useTours } from '~/hooks/useTours';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';

const cx = classNames.bind(styles);

function handleCategoryClick(item) {
    console.log(item);
}
function handleDestinationClick(item) {
    console.log(item);
}

function Home() {
    const { data: CategoriesData = [], isCategoriesLoading } = useCategories();
    const { data: ToursData = [], isToursLoading } = useTours();
    const navigate = useNavigate();
    const handleTourClick = (item) => {
        navigate(`/tour/${item.id}`);
    };

    if (isCategoriesLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    return (
        <div className={cx('wrapper')}>
            {/* SERVICES */}
            <Services />

            {/* CATEGORY */}
            <Categories items={CategoriesData} onclick={handleCategoryClick} />

            {/* DESTINATION */}
            <Destination items={DESTINATIONS} onclick={handleDestinationClick} />

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
