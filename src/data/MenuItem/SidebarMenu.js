import config from '../../config/routes';
import icons from '../../assets/icons';

const SIDEBAR_MENU = [
    {
        title: 'Dashboard',
        icon: icons.category,
        to: config.admin,
    },
    {
        title: 'Destinations',
        icon: icons.location2,
        to: config.adminDestination,
    },
    {
        title: 'Tours',
        icon: icons.tour2,
        to: config.adminTour,
    },
    {
        title: 'Bookings',
        icon: icons.booking,
        to: config.adminBooking,
    },
    {
        title: 'Travelers',
        icon: icons.traveler,
        to: config.adminTraveler,
    },
    {
        title: 'Guides',
        icon: icons.guide,
        to: config.adminGuide,
    },
    {
        title: 'Gallery',
        icon: icons.image,
        to: config.adminGallery,
    },
    {
        title: 'Feedbacks',
        icon: icons.feedback,
        to: config.adminFeedback,
    },
    {
        title: 'Messages',
        icon: icons.message,
        to: config.adminMessage,
    },
];

export default SIDEBAR_MENU;
