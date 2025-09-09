import icons from '~/assets/icons';

const SERVICES_ITEMS = [
    {
        icon: icons.destination,
        title: 'DESTINATIONS',
        content: 'Choose  any destination you like, we have several country ratings',
    },
    {
        icon: icons.tour,
        title: 'TOURS',
        content: 'A large number of tours different countries for one or a family',
    },
    {
        icon: icons.medical,
        title: 'MEDICAL INSURANCE',
        content: 'Choose  any destination you like, we have several country ratings',
    },
    {
        icon: icons.assistance,
        title: 'ASSISTANCE',
        content: 'We are ready to solve all your questions and help to deal with problems',
    },
];

function Services() {
    return (
        <div className="flex flex-col justify-center items-center">
            {/* Label */}
            <h4 className="text-[var(--primary)] font-bold text-2xl mb-[14px] uppercase">SERVICES</h4>

            {/* Title */}
            <h1 className="text-center text-4xl sm:text-[48px] font-header mt-2 text-[var(--header-color)] mb-14 tracking-[0.5px]">
                We Offer Best Services
            </h1>

            {/* List Items */}
            <div className="w-full grid grid-cols-2 gap-6 mt-10 md:flex md:justify-between">
                {SERVICES_ITEMS.map((item, index) => (
                    <div className="flex flex-col items-center" key={index}>
                        {/* Icon wrapper */}
                        <div className="w-[120px] h-[120px] bg-[#fdded6] rounded-full flex items-center justify-center">
                            <div className="w-[90px] h-[90px] bg-[var(--primary)] rounded-full flex items-center justify-center">
                                <item.icon className="w-10 h-10 text-white" />
                            </div>
                        </div>

                        {/* Title + Content */}
                        <div className="mt-5 text-center">
                            <h2 className="text-base font-bold mb-2">{item.title}</h2>
                            <small className="text-[13px] leading-[1.4] text-[#555]">{item.content}</small>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
