import images from "~/assets/images";
import icons from "~/assets/icons";

export const DESTINATIONS = [
    {
        id: 1,
        name: 'Ha noi',
        image: images.hanoi,
        region: 'Northern',
        numberOfTours: 10,
        edit: <icons.penIcon />,
        delete: <icons.remove />,
    },
    {
        id: 2,
        name: 'Quang Ninh',
        image: images.destination_1,
        region: 'Northern',
        numberOfTours: 15,
        edit: <icons.penIcon />,
        delete: <icons.remove />,
    },
    {
        id: 3,
        name: 'Nghe An',
        image: images.destination_2,
        region: 'Central',
        numberOfTours: 15,
        edit: <icons.penIcon />,
        delete: <icons.remove />,
    },
    {
        id: 4,
        name: 'Hue',
        image: images.destination_3,
        region: 'Central',
        numberOfTours: 15,
        edit: <icons.penIcon />,
        delete: <icons.remove />,
    },
    {
        id: 5,
        name: 'Hue',
        image: images.destination_2,
        region: 'Central',
        numberOfTours: 15,
        edit: <icons.penIcon />,
        delete: <icons.remove />,
    },
    {
        id: 4,
        name: 'Hue',
        image: images.destination_3,
        region: 'Central',
        numberOfTours: 15,
        edit: <icons.penIcon />,
        delete: <icons.remove />,
    },
    {
        id: 6,
        name: 'Hue',
        image: images.destination_3,
        region: 'Central',
        numberOfTours: 15,
        edit: <icons.penIcon />,
        delete: <icons.remove />,
    },

];

export const DESTINATION_COLUMNS = [
    {
        header: 'Id',
        accessor: 'id',
    },
    {
        header: 'Image',
        accessor: 'image', render: (value) => (
            <img src={value} alt="destination"  style={{ width: 40, height: 40, borderRadius: 8, objectFit: 'cover' }} />
        )
    },
    {
        header: 'Name',
        accessor: 'name',
    },
    {
        header: 'Region',
        accessor: 'region',
    },
    {
        header: 'Number Of Tours',
        accessor: 'numberOfTours',
    },
    {
        header: 'Edit',
        accessor: 'edit',
    },
    {
        header: 'Delete',
        accessor: 'delete',
    },
];      