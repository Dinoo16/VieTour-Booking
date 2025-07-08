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
import { TOURS } from '~/data/Tour/Tour';
import { CATEGORIES } from '~/data/Category/Category';
import { DESTINATIONS } from '~/data/Destination/Destination';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function handleCategoryClick(item) {
    console.log(item);
}
function handleDestinationClick(item) {
    console.log(item);
}


function Home() {
    const navigate = useNavigate();
    const handleTourClick = (item) => {
        navigate(`/tour/${item.id}`);
    };

    return (
        <div className={cx('wrapper')}>
            {/* SERVICES */}
            <Services />

            {/* CATEGORY */}
            <Categories items={CATEGORIES} onclick={handleCategoryClick} />

            {/* DESTINATION */}
            <Destination items={DESTINATIONS} onclick={handleDestinationClick} />

            {/* PROMOTION */}
            <Promotion />

            {/* TOURS */}
            <Tours items={TOURS} onclick={handleTourClick}/>

            {/* GALLERY */}
            <Gallery />
        </div>
    );
}

export default Home;
