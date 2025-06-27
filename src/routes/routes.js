import routesConfig from '~/config/routes';
import Home from '~/pages/Home/Home';
import AboutUs from '~/pages/AboutUs/AboutUs';
import Destination from '~/pages/Destination/Destination';
import Blog from '~/pages/Blog/Blog';
import Tour from '~/pages/Tour/Tour';
import TourDetail from '~/pages/TourDetail/TourDetail';
import DefaultLayout from '~/Layout/DefaultLayout/DefaultLayout';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './routes.module.scss';

const cx = classNames.bind(styles);
//Anonymous User
const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home,
        layout: (page) => (
            <DefaultLayout
                banner={{
                    image: images.homebg,
                    title: (
                        <>
                            <div>Explore Vietnam</div>
                            <div>
                                One <span className={cx('highlight')}>Journey</span> at a Time
                            </div>
                        </>
                    ),
                    subtitle: 'Discover new attractions and experiences to match your interests and travel style',
                    startTitle: true,
                }}
            >
                {page}
            </DefaultLayout>
        ),
    },

    {
        path: routesConfig.aboutus,
        component: AboutUs,
        layout: (page) => (
            <DefaultLayout
                banner={{
                    image: images.aboutusbg,
                    title: 'About Us',
                    subtitle: 'READ',
                }}
            >
                {page}
            </DefaultLayout>
        ),
    },

    {
        path: routesConfig.tour,
        component: Tour,
        layout: (page) => (
            <DefaultLayout
                banner={{
                    image: images.aboutusbg,
                    title: 'Travel With Us',
                    subtitle: 'SEARCH TOUR',
                }}
            >
                {page}
            </DefaultLayout>
        ),
    },
    {
        path: routesConfig.tourdetail,
        component: TourDetail,
        layout: (page) => (
            <DefaultLayout
                banner={{
                    image: images.aboutusbg,
                    title: 'Landscaper',
                    subtitle: 'EXPLORE',
                }}
                hideSearchTour
                noContentSpacing
            >
                {page}
            </DefaultLayout>
        ),
    },

    {
        path: routesConfig.destination,
        component: Destination,
        layout: (page) => (
            <DefaultLayout
                banner={{
                    image: images.aboutusbg,
                    title: 'Places To Go',
                    subtitle: 'EXPLORE',
                }}
            >
                {page}
            </DefaultLayout>
        ),
    },

    {
        path: routesConfig.blog,
        component: Blog,
        layout: (page) => (
            <DefaultLayout
                banner={{
                    image: images.aboutusbg,
                    title: 'Blog',
                    subtitle: 'READ',
                }}
            >
                {page}
            </DefaultLayout>
        ),
    },
];

// Registered User
const privateRoutes = [];

// Admin
const adminRoutes = [];

export { publicRoutes, privateRoutes };
