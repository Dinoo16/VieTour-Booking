import images from '~/assets/images';

export const CATEGORIES = [
    {
        id: 1,
        title: 'Wildlife',
        value: 'wildlife',
        image: images.halongbay,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
        id: 2,
        title: 'Walking',
        value: 'walking',
        image: images.aboutusbg,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
        id: 3,
        title: 'Cruises',
        value: 'cruises',
        image: images.homebg,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
        id: 4,
        title: 'Hiking',
        value: 'hiking',
        image: images.hanoi,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
        id: 5,
        title: 'Airbirds',
        value: 'airbirds',
        image: images.aboutusbg,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
        id: 6,
        title: 'Airbirds',
        value: 'airbirds',
        image: images.aboutusbg,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
        id: 7,
        title: 'Airbirds',
        value: 'airbirds',
        image: images.aboutusbg,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
        id: 8,
        title: 'Airbirds',
        value: 'airbirds',
        image: images.aboutusbg,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
        id: 9,
        title: 'Airbirds',
        value: 'airbirds',
        image: images.aboutusbg,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
        id: 10,
        title: 'Airbird',
        value: 'airbirds',
        image: images.aboutusbg,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
];

export const CATEGORIES_COLUMN = [
    {
        header: 'Id',
        accessor: 'id',
    },
    {
        header: 'Image',
        accessor: 'image',
        render: (value) => (
            <img src={value} alt="destination" style={{ width: 40, height: 40, borderRadius: 8, objectFit: 'cover' }} />
        ),
    },
    {
        header: 'Name',
        accessor: 'name',
    },
];
