import images from '~/assets/images';

export const DESTINATIONS = {
    Northern: [
        {
            id: 1,
            image: images.destination_1,
            name: 'Quang Ninh',
            duration: '3 days',
            tours: 123,
        },
        {
            id: 2,
            image: images.destination_2,
            name: 'Ha Giang',
            duration: '4 days',
            tours: 124,
        },
        {
            id: 3,
            image: images.destination_1,
            name: 'Lao Cai',
            duration: '2 days',
            tours: 125,
        },
        
    ],
    Central: [
        {
            id: 4,
            image: images.aboutusbg,
            name: 'Da Nang',
            duration: '5 days',
            tours: 126,
        },
        {
            id: 5,
            image: images.destination_2,
            name: 'Nghe An',
            duration: '5 days',
            tours: 127,
        },
    ],
    Southern: [
        {
            id: 6,
            image: images.destination_3,
            name: 'Ho Chi Minh',
            duration: '5 days',
            tours: 128,
        },
        {
            id: 7,
            image: images.aboutusbg,
            name: 'Can Tho',
            duration: '5 days',
            tours: 129,
        },
        {
            id: 8,
            image: images.aboutusbg,
            name: 'Binh Duong',
            duration: '5 days',
            tours: 129,
        },
    ],
};

export const REGIONS = ['Northern', 'Central', 'Southern'];