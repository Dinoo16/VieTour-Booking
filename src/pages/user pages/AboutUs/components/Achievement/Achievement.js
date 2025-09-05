import PropTypes from 'prop-types';

function Achievement({ items = [] }) {
    return (
        <div className="py-[120px] text-center">
            <h4 className="text-[var(--primary)] font-bold text-xl s:text-2xl mb-[14px] uppercase">Achievement</h4>
            <h1 className="text-[24px] s:text-[32px] sm:text-[48px] font-[var(--font-family-header)] text-[var(--header-color)] pb-[56px]">
                Our Achievements
            </h1>

            <div className="flex flex-col sm:flex-row justify-between items-center flex-wrap gap-10 xl:gap-10">
                {items.map((item, index) => (
                    <div key={index} className={`relative ${index === 0 || index === 2 ? 'sm:translate-y-1/2' : ''}`}>
                        {/* Outer ring */}
                        <div className="relative w-[262px] h-[262px] rounded-full border border-[var(--primary)] flex items-center justify-center">
                            {/* Circle */}
                            <div className="w-[214px] h-[214px] rounded-full flex flex-col items-center justify-center bg-[rgba(223,105,81,0.3)]">
                                <span className="text-[32px] font-bold text-black">{item.number}</span>
                                <span className="mt-1 text-[15px] font-medium text-[#222]">{item.label}</span>
                            </div>

                            {/* Dot container */}
                            <div
                                className={`absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-[rgba(223,105,81,0.3)] flex items-center justify-center
                                    ${
                                        index === 0 || index === 2
                                            ? 'rotate-45 -translate-x-1/2 -translate-y-[131px]'
                                            : 'rotate-45 translate-x-[112px] -translate-y-1/2'
                                    }
                                `}
                            >
                                <span className="w-[10px] h-[10px] rounded-full bg-[var(--primary)]"></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

Achievement.propTypes = {
    items: PropTypes.array,
};

export default Achievement;
