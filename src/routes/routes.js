import images from '~/assets/images';
import routesConfig from '~/config/routes';
import Home from '~/pages/user pages/Home/Home';
import AboutUs from '~/pages/user pages/AboutUs/AboutUs';
import Destination from '~/pages/user pages/Destination/Destination';
import Blog from '~/pages/user pages/Blog/Blog';
import Tour from '~/pages/user pages/Tour/Tour';
import TourDetail from '~/pages/user pages/TourDetail/TourDetail';
import DefaultLayout from '~/Layout/DefaultLayout/DefaultLayout';
import AuthLayout from '~/Layout/AuthLayout/AuthLayout';
import Payment from '~/pages/user pages/Payment/Payment';
import Profile from '~/pages/user pages/Profile/Profile';
import AdminDashboard from '~/pages/admin pages/AdminDashboard';
import AdminLayout from '~/Layout/AdminLayout/AdminLayout';
import AdminDestination from '~/pages/admin pages/Destination/Destination';
import AdminAddDestination from '~/pages/admin pages/Destination/AddDestination';
import AdminAddCategory from '~/pages/admin pages/Destination/AddCategory';
import AdminEditDestination from '~/pages/admin pages/Destination/EditDestination';
import AdminEditCategory from '~/pages/admin pages/Destination/EditCategory';
import AdminTour from '~/pages/admin pages/Tour/Tour';
import AdminAddTour from '~/pages/admin pages/Tour/AddTour';
import AdminEditTour from '~/pages/admin pages/Tour/EditTour';
import AdminBooking from '~/pages/admin pages/Booking/Booking';
import AdminTraveler from '~/pages/admin pages/Traveler/Traveler';
import AdminGuide from '~/pages/admin pages/Guide/Guide';
import AdminGallery from '~/pages/admin pages/Gallery/Gallery';
import AdminAddGallery from '~/pages/admin pages/Gallery/AddGallery';
import AdminFeedback from '~/pages/admin pages/Feedback/Feedback';
import AdminMessage from '~/pages/admin pages/Message/Message';
import SignIn from '~/pages/authentication/SignIn/SignIn';
import SignUp from '~/pages/authentication/SignUp/SignUp';
import SignOut from '~/pages/authentication/SignOut/SignOut';
import AdminRoute from '~/config/AdminRoute';

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
    {
        path: routesConfig.signin,
        component: SignIn,
        layout: (page) => (
            <AuthLayout
                banner={{
                    image: images.signup_cover,
                    title: 'Welcome!',
                    subtitle: '"Uncover Hidden Gems Around the World — Start Here."',
                }}
            >
                {page}
            </AuthLayout>
        ),
    },
    {
        path: routesConfig.signup,
        component: SignUp,
        layout: (page) => (
            <AuthLayout
                banner={{
                    image: images.signup_cover,
                    title: 'Welcome!',
                    subtitle: '"Create Your Account, Create Your Adventures."',
                }}
            >
                {page}
            </AuthLayout>
        ),
    },
    {
        path: routesConfig.signout,
        component: SignOut,
        layout: (page) => (
            <AuthLayout
                banner={{
                    image: images.signup_cover,
                    title: 'Good Bye!',
                    subtitle: '“Adventure awaits when you return.”',
                }}
            >
                {page}
            </AuthLayout>
        ),
    },
];

// Logged in User
const privateRoutes = [
    {
        path: routesConfig.profile,
        component: Profile,
        layout: (page) => (
            <DefaultLayout
                banner={{
                    image: images.signup_cover,
                }}
                halfHeightBanner
                hideSearchTour
                noContentSpacing
                hideExploreBtn
            >
                {page}
            </DefaultLayout>
        ),
    },
];

// Admin
const adminRoutes = [
    {
        path: routesConfig.admin,
        component: AdminDashboard,
        layout: (page) => (
            <AdminRoute>
                <AdminLayout>{page}</AdminLayout>
            </AdminRoute>
        ),
    },
    {
        path: routesConfig.adminDestination,
        component: AdminDestination,
        layout: (page) => (
            <AdminRoute>
                <AdminLayout>{page}</AdminLayout>
            </AdminRoute>
        ),
    },
    {
        path: routesConfig.adminAddDestination,
        component: AdminAddDestination,
        layout: (page) => (
            <AdminRoute>
                <AdminLayout>{page}</AdminLayout>
            </AdminRoute>
        ),
    },
    {
        path: routesConfig.adminAddCategory,
        component: AdminAddCategory,
        layout: (page) => (
            <AdminRoute>
                <AdminLayout>{page}</AdminLayout>
            </AdminRoute>
        ),
    },
    {
        path: routesConfig.adminEditDestination,
        component: AdminEditDestination,
        layout: (page) => (
            <AdminRoute>
                <AdminLayout>{page}</AdminLayout>
            </AdminRoute>
        ),
    },
    {
        path: routesConfig.adminEditCategory,
        component: AdminEditCategory,
        layout: (page) => (
            <AdminRoute>
                <AdminLayout>{page}</AdminLayout>
            </AdminRoute>
        ),
    },
    {
        path: routesConfig.adminTour,
        component: AdminTour,
        layout: (page) => (
            <AdminRoute>
                <AdminLayout>{page}</AdminLayout>
            </AdminRoute>
        ),
    },
    {
        path: routesConfig.adminAddTour,
        component: AdminAddTour,
        layout: (page) => (
            <AdminRoute>
                <AdminLayout>{page}</AdminLayout>
            </AdminRoute>
        ),
    },
    {
        path: routesConfig.adminEditTour,
        component: AdminEditTour,
        layout: (page) => (
            <AdminRoute>
                <AdminLayout>{page}</AdminLayout>
            </AdminRoute>
        ),
    },
    {
        path: routesConfig.adminBooking,
        component: AdminBooking,
        layout: (page) => (
            <AdminRoute>
                <AdminLayout>{page}</AdminLayout>
            </AdminRoute>
        ),
    },
    {
        path: routesConfig.adminTraveler,
        component: AdminTraveler,
        layout: (page) => (
            <AdminRoute>
                <AdminLayout>{page}</AdminLayout>
            </AdminRoute>
        ),
    },
    {
        path: routesConfig.adminGuide,
        component: AdminGuide,
        layout: (page) => (
            <AdminRoute>
                <AdminLayout>{page}</AdminLayout>
            </AdminRoute>
        ),
    },
    {
        path: routesConfig.adminGallery,
        component: AdminGallery,
        layout: (page) => (
            <AdminRoute>
                <AdminLayout>{page}</AdminLayout>
            </AdminRoute>
        ),
    },
    {
        path: routesConfig.adminAddGallery,
        component: AdminAddGallery,
        layout: (page) => (
            <AdminRoute>
                <AdminLayout>{page}</AdminLayout>
            </AdminRoute>
        ),
    },
    {
        path: routesConfig.adminFeedback,
        component: AdminFeedback,
        layout: (page) => (
            <AdminRoute>
                <AdminLayout>{page}</AdminLayout>
            </AdminRoute>
        ),
    },
    {
        path: routesConfig.adminMessage,
        component: AdminMessage,
        layout: (page) => (
            <AdminRoute>
                <AdminLayout>{page}</AdminLayout>
            </AdminRoute>
        ),
    },
];

export { publicRoutes, privateRoutes, adminRoutes };
