import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import icons from '~/assets/icons';

const rewards = {
    Silver: [
        { id: 1, locked: false },
        { id: 2, locked: false },
        { id: 3, locked: false },
        { id: 4, locked: false },
    ],
    Golden: [
        { id: 5, locked: true },
        { id: 6, locked: true },
        { id: 7, locked: true },
    ],
};

function RewardSection() {
    return (
        <div className="flex items-start gap-3">
            {Object.entries(rewards).map(([tier, items]) => (
                <div key={tier} className="min-w-fit">
                    {/* Tier Label */}
                    <div className="inline-flex items-center gap-1.5 text-xs bg-[var(--secondary)] text-[var(--header-color)] px-2 py-0.5 rounded-full mb-3">
                        <icons.lock className="w-3 h-3" />
                        <span>{tier}</span>
                    </div>

                    {/* Card Swiper */}
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={'auto'}
                        className="w-full"
                        pagination={{ clickable: true }}
                    >
                        {items.map((item) => (
                            <SwiperSlide key={item.id} style={{ width: '130px' }}>
                                <div
                                    className={`w-[130px] h-[130px] bg-white rounded-xl border border-[#EDEDED] p-4 text-center flex flex-col items-center justify-center gap-1 transition-colors ${
                                        item.locked ? 'bg-[#f0f0f0] grayscale' : ''
                                    }`}
                                >
                                    <icons.gift className="w-12 h-12 mb-2" />
                                    <p className="text-sm font-normal">5% of booking</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ))}
        </div>
    );
}

export default RewardSection;
