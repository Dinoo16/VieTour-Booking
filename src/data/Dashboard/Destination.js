import images from '~/assets/images';
import icons from '~/assets/icons';
import { Link } from 'react-router-dom';

export const DESTINATIONS = [
    {
        id: 1,
        title: 'Ha noi',
        image: images.hanoi,
        region: 'Northern',
        numberOfTours: 10,
        description: 'Hanoi, the capital of Vietnam, is a vibrant city with a rich history and culture.',
        edit: (
            <Link to="/admin/destination/edit/1">
                <icons.penIcon />
            </Link>
        ),
        delete: <icons.remove />,
    },
    {
        id: 2,
        title: 'Quang Ninh',
        image: images.destination_1,
        region: 'Northern',
        numberOfTours: 15,
        description: 'Quang Ninh, the capital of Vietnam, is a vibrant city with a rich history and culture.',
        edit: (
            <Link to="/admin/destination/edit/2">
                <icons.penIcon />
            </Link>
        ),
        delete: <icons.remove />,
    },
    {
        id: 3,
        title: 'Nghe An',
        image: images.destination_2,
        region: 'Central',
        numberOfTours: 15,
        description: 'Nghe An, the capital of Vietnam, is a vibrant city with a rich history and culture.',
        edit: (
            <Link to="/admin/destination/edit/3">
                <icons.penIcon />
            </Link>
        ),
        delete: <icons.remove />,
    },
    {
        id: 4,
        title: 'Hue',
        image: images.destination_3,
        region: 'Central',
        numberOfTours: 15,
        description: 'Hue, the capital of Vietnam, is a vibrant city with a rich history and culture.',
        edit: (
            <Link to="/admin/destination/edit/4">
                <icons.penIcon />
            </Link>
        ),
        delete: <icons.remove />,
    },
    {
        id: 5,
        title: 'Hue',
        image: images.destination_2,
        region: 'Central',
        numberOfTours: 15,
        description: 'Hue, the capital of Vietnam, is a vibrant city with a rich history and culture.',
        edit: (
            <Link to="/admin/destination/edit/5">
                <icons.penIcon />
            </Link>
        ),
        delete: <icons.remove />,
    },
    {
        id: 6,
        title: 'Hue',
        image: images.destination_3,
        region: 'Central',
        numberOfTours: 15,
        description: 'Hue, the capital of Vietnam, is a vibrant city with a rich history and culture.',
        edit: (
            <Link to="/admin/destination/edit/6">
                <icons.penIcon />
            </Link>
        ),
        delete: <icons.remove />,
    },
    {
        id: 7,
        title: 'Hue',
        image: images.destination_3,
        region: 'Central',
        numberOfTours: 15,
        description: 'Hue, the capital of Vietnam, is a vibrant city with a rich history and culture.',
        edit: (
            <Link to="/admin/destination/edit/7">
                <icons.penIcon />
            </Link>
        ),
        delete: <icons.remove />,
    },
];
