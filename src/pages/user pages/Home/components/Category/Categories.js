import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function Categories({ items = [], onclick }) {
    return (
        <div className="text-center pt-[120px]">
            {/* Label */}
            <h4 className="text-[var(--primary)] font-bold text-2xl mb-[14px] uppercase">CATEGORY</h4>

            {/* Title */}
            <h1 className="text-4xl sm:text-[48px] font-header text-[var(--header-color)] mb-14 tracking-[0.5px]">
                Tour Categories
            </h1>

            {/* Slider */}
            <Swiper
                loop={true}
                spaceBetween={40}
                slidesPerView={3}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    425: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
                className="w-full max-w-[1200px] mx-auto pb-[74px]"
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="flex flex-col items-center justify-start transition-all duration-300 cursor-pointer p-5 -m-5"
                            onClick={() => onclick(item)}
                        >
                            {/* Card Image */}
                            <div className="w-[200px] h-[200px] rounded-3xl overflow-hidden mb-8 relative z-[1]">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover rounded-3xl bg-white transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </div>

                            {/* Card Title */}
                            <h3 className="mt-0 font-[var(--font-family-header)] font-bold text-2xl text-[var(--title-color)] tracking-[0.2px] text-center relative z-[2]">
                                {item.name}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

Categories.propTypes = {
    items: PropTypes.array.isRequired,
    onclick: PropTypes.func.isRequired,
};

export default Categories;
