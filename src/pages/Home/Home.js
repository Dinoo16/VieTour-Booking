import images from '~/assets/images';
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

const cx = classNames.bind(styles);

const CATEGORIES = [
    { title: 'Wildlife', image: images.halongbay },
    { title: 'Walking', image: images.aboutusbg },
    { title: 'Cruises', image: images.homebg },
    { title: 'Hiking', image: images.hanoi },
    { title: 'Airbirds', image: images.aboutusbg },
    { title: 'Airbirds', image: images.aboutusbg },
    { title: 'Cruises', image: images.homebg },
    { title: 'Hiking', image: images.hanoi },
];

const DESTINATIONS = [
    {
        image: images.destination_1,
        name: 'Quang Ninh',
        duration: '3 days',
    },
    {
        image: images.destination_2,
        name: 'Ha Giang',
        duration: '4 days',
    },
    {
        image: images.destination_1,
        name: 'Sapa',
        duration: '2 days',
    },
    {
        image: images.aboutusbg,
        name: 'Da Nang',
        duration: '5 days',
    },
    {
        image: images.destination_3,
        name: 'Sapa',
        duration: '2 days',
    },
    {
        image: images.destination_2,
        name: 'Da Nang',
        duration: '5 days',
    },
    {
        image: images.aboutusbg,
        name: 'Sapa',
        duration: '2 days',
    },
    {
        image: images.homebg,
        name: 'Da Nang',
        duration: '5 days',
    },
    {
        image: images.destination_3,
        name: 'Sapa',
        duration: '2 days',
    },
    {
        image: images.aboutusbg,
        name: 'Da Nang',
        duration: '5 days',
    },
];
const TOURS = [
    {
        image: images.halongbay,
        title: 'Ha Long',
        destination: 'Quang Ninh',
        rating: 4.8,
        oldPrice: 950,
        price: 850,
    },
    {
        image: images.hanoi,
        title: 'Guom Lake',
        destination: 'Hanoi',
        rating: 4.5,
        oldPrice: 950,
        price: 850,
    },
    {
        image: images.halongbay,
        title: 'Ha Long',
        destination: 'Quang Ninh',
        rating: 4.8,
        oldPrice: 950,
        price: 850,
    },
    {
        image: images.halongbay,
        title: 'Ha Long',
        destination: 'Quang Ninh',
        rating: 4.8,
        oldPrice: 950,
        price: 850,
    },
];

function handleCategoryClick(item) {
    console.log(item);
}
function handleDestinationClick(item) {
    console.log(item);
}
function handleTourClick(item) {
    console.log(item);
}
function Home() {
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
            <Tours items={TOURS} onclick={handleTourClick} />

            {/* GALLERY */}
            <Gallery />
        </div>
    );
}

export default Home;
