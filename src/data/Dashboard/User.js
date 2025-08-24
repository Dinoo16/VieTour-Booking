import images from '~/assets/images';

export const USER_COLUMNS = [
    {
        header: 'ID',
        accessor: 'id',
    },
    {
        header: 'Name',
        accessor: 'name',
        render: (value, row) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={images[row.avatar] || row.avatar}
                    alt={value}
                    style={{ width: 40, height: 40, borderRadius: '50%', marginRight: 12 }}
                />
                {value || (row.email && row.email.split('@')[0])}
            </div>
        ),
    },
    {
        header: 'Date Of Birth',
        accessor: 'dateOfBirth',
    },
    {
        header: 'Phone No',
        accessor: 'phone',
    },
    {
        header: 'Email',
        accessor: 'email',
    },
    {
        header: 'Address',
        accessor: 'address',
    },

    {
        header: 'Membership',
        accessor: 'membership',
        render: (value) => (
            <span
                style={{
                    color:
                        value === 'Gold'
                            ? '#EFBF04'
                            : value === 'Silver'
                            ? '#c4c4c4'
                            : value === 'Bronze'
                            ? '#CE8946'
                            : 'var(--text-color)',
                }}
            >
                {value}
            </span>
        ),
    },
];

// export const USERS = [
//     {
//         id: '1',
//         name: 'John Doe',
//         phoneNo: '+1234567890',
//         email: 'john.doe@example.com',
//         avatar: images.avatar,
//         address: 'Anytown, USA',
//         tour: 'City Tour',
//         membership: 'Gold',
//     },
//     {
//         id: '2',
//         name: 'Jane Smith',
//         phoneNo: '+0987654321',
//         email: 'jane.smith@example.com',
//         avatar: images.avatar,
//         address: 'Othertown, USA',
//         tour: 'Nature Tour',
//         membership: 'Silver',
//     },
//     {
//         id: '3',
//         name: 'Dinosaur',
//         phoneNo: '+0987654321',
//         email: 'dinosaur@dino.com',
//         avatar: images.avatar,
//         address: 'Hanoi, Vietnam',
//         tour: 'Ha Long Bay',
//         membership: 'Bronze',
//     },
//     {
//         id: '4',
//         name: 'John Doe',
//         phoneNo: '+0987654321',
//         email: 'john.doe@example.com',
//         avatar: images.avatar,
//         address: 'Othertown, USA',
//         tour: 'Nature Tour',
//         membership: 'Silver',
//     },
//     {
//         id: '5',
//         name: 'Dinosaur',
//         phoneNo: '+0987654321',
//         email: 'dinosaur@dino.com',
//         avatar: images.avatar,
//         address: 'Hanoi, Vietnam',
//         tour: 'Ha Long Bay',
//         membership: 'Bronze',
//     },
//     {
//         id: '6',
//         name: 'Dinosaur',
//         phoneNo: '+0987654321',
//         email: 'dinosaur@dino.com',
//         avatar: images.avatar,
//         address: 'Hanoi, Vietnam',
//         tour: 'Ha Long Bay',
//         membership: 'default',
//     },
// ];
