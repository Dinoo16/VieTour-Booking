export const BOOKINGS = [
    {
        bookingId: 'bk_1',
        name: 'John Doe',
        tourname: 'Tour 1',
        duration: '1 day',
        date: '2021-01-01',
        price: '$100',
        status: 'Pending',
    },
    {
        bookingId: 'bk_2',
        name: 'John Doe',
        tourname: 'Tour 1',
        duration: '1 day',
        date: '2021-01-01',
        price: '$100',
        status: 'Confirmed',
    },
    {
        bookingId: 'bk_3',
        name: 'John Doe',
        tourname: 'Tour 1',
        duration: '1 day',
        date: '2021-01-01',
        price: '$100',
        status: 'Cancelled',
    },
    {
        bookingId: 'bk_4',
        name: 'John Doe',
        tourname: 'Tour 1',
        duration: '1 day',
        date: '2021-01-01',
        price: '$100',
        status: 'Confirmed',
    },
    {
        bookingId: 'bk_5',
        name: 'John Doe',
        tourname: 'Tour 1',
        duration: '1 day',
        date: '2021-01-01',
        price: '$100',
        status: 'Confirmed',
    },
    {
        bookingId: 'bk_6',
        name: 'John Doe',
        tourname: 'Tour 1',
        duration: '1 day',
        date: '2021-01-01',
        price: '$100',
        status: 'Confirmed',
    },
    {
        bookingId: 'bk_7',
        name: 'John Doe',
        tourname: 'Tour 1',
        duration: '1 day',
        date: '2021-01-01',
        price: '$100',
        status: 'Confirmed',
    },
    {
        bookingId: 'bk_8',
        name: 'John Doe',
        tourname: 'Tour 1',
        duration: '1 day',
        date: '2021-01-01',
        price: '$100',
        status: 'Pending',
    },
    {
        bookingId: 'bk_9',
        name: 'John Doe',
        tourname: 'Tour 1',
        duration: '1 day',
        date: '2021-01-01',
        price: '$100',
        status: 'Cancelled',
    },
    {
        bookingId: 'bk_10',
        name: 'John Doe',
        tourname: 'Tour 1',
        duration: '1 day',
        date: '2021-01-01',
        price: '$100',
        status: 'Cancelled',
    },
];

export const BOOKING_COLUMNS = [
    {
        header: 'Booking ID',
        accessor: 'id',
    },
    {
        header: 'User id',
        accessor: 'userId',
    },
    {
        header: 'Tour Id',
        accessor: 'tourId',
    },
    {
        header: 'Number of People',
        accessor: 'numberOfPeople',
    },
    {
        header: 'Date',
        accessor: 'date',
    },
    {
        header: 'Total amout',
        accessor: 'totalAmount',
    },
    {
        header: 'Status',
        accessor: 'status',
        render: (value) => (
            <span style={{ color: value === 'Cancelled' ? '#FF002E' : value === 'Pending' ? '#4674FF' : '#00B871' }}>
                {value}
            </span>
        ),
    },
];
