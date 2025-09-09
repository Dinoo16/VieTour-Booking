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
        header: 'Num of people',
        accessor: 'numberOfPeople',
    },
    {
        header: 'Departure Date',
        accessor: 'date',
    },
    // {
    //     header: 'Booking Time',
    //     accessor: 'createdAt',
    // },
    {
        header: 'Total',
        accessor: 'totalAmount',
    },
    {
        header: 'Status',
        accessor: 'status',
        render: (value) => (
            <span
                style={{
                    color:
                        value === 'CANCELLED'
                            ? '#FF002E'
                            : value === 'PENDING'
                            ? '#fbbf24'
                            : value === 'EXPIRED'
                            ? '#6b7280'
                            : '#34a853',
                }}
            >
                {value}
            </span>
        ),
    },
];
