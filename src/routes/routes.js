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
import Payment from '~/pages/Payment/Payment';
import AdminDashboard from '~/adminpages/AdminDashboard';
import AdminLayout from '~/Layout/AdminLayout/AdminLayout';
import AdminDestination from '~/adminpages/Destination/Destination';
import AdminTour from '~/adminpages/Tour/Tour';
import AdminBooking from '~/adminpages/Booking/Booking';
import AdminTraveler from '~/adminpages/Traveler/Traveler';
import AdminGuide from '~/adminpages/Guide/Guide';
import AdminGallery from '~/adminpages/Gallery/Gallery';
import AdminFeedback from '~/adminpages/Feedback/Feedback';
import AdminMessage from '~/adminpages/Message/Message';

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
    {
        path: routesConfig.payment,
        component: Payment,
        layout: (page) => (
            <DefaultLayout
                banner={{
                    image: images.aboutusbg,
                    title: 'Thanks For Choosing Us',
                    subtitle: 'READ',
                }}
                hideSearchTour
                noContentSpacing
            >
                {page}
            </DefaultLayout>
        ),
    },
];

// Logged in User
const privateRoutes = [];

// Admin
const adminRoutes = [
    {
        path: routesConfig.admin,
        component: AdminDashboard,
        layout: (page) => (
            <AdminLayout>
                {page}
            </AdminLayout>
        ),
    },
    {
        path: routesConfig.adminDestination,
        component: AdminDestination,
        layout: (page) => (
            <AdminLayout>
                {page}
            </AdminLayout>
        ),
    },
    {
        path: routesConfig.adminTour,
        component: AdminTour,
        layout: (page) => (
            <AdminLayout>
                {page}
            </AdminLayout>
        ),
    },
    {
        path: routesConfig.adminBooking,
        component: AdminBooking,
        layout: (page) => (
            <AdminLayout>
                {page}
            </AdminLayout>
        ),
    },
    {
        path: routesConfig.adminTraveler,
        component: AdminTraveler,
        layout: (page) => (
            <AdminLayout>
                {page}
            </AdminLayout>
        ),
    },  
    {
        path: routesConfig.adminGuide,
        component: AdminGuide,
        layout: (page) => (
            <AdminLayout>
                {page}
            </AdminLayout>
        ),
    },
    {
        path: routesConfig.adminGallery,
        component: AdminGallery,
        layout: (page) => (
            <AdminLayout>
                {page}
            </AdminLayout>
        ),
    },
    {
        path: routesConfig.adminFeedback,
        component: AdminFeedback,
        layout: (page) => (
            <AdminLayout>
                {page}
            </AdminLayout>
        ),
    },
    {
        path: routesConfig.adminMessage,
        component: AdminMessage,
        layout: (page) => (
            <AdminLayout>
                {page}
            </AdminLayout>
        ),
    },

];

export { publicRoutes, privateRoutes, adminRoutes };
