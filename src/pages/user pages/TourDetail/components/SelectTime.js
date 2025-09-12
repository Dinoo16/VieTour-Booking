import { useState, useEffect } from 'react';

function SelectTime({ tour, selected, onChange }) {
    // const [selected, setSelected] = useState('');

    useEffect(() => {
        if (tour?.availableTimes?.length > 0) {
            onChange(tour.availableTimes[0]);
        }
    }, [tour]);

    return (
        <div className="p-4 w-[420px] flex-shrink-0">
            <p className="font-semibold text-[var(--header-color)] text-base pb-4">Select Time</p>
            <div className="flex gap-3 flex-wrap">
                {tour.availableTimes.map((time, idx) => {
                    const isActive = selected === time;
                    return (
                        <button
                            key={idx}
                            onClick={() => onChange(time)}
                            className={`font-semibold px-6 py-2 rounded-[999px] border transition 
                                    ${
                                        isActive
                                            ? 'bg-orange-50 text-[var(--primary)] border-[var(--primary)]'
                                            : 'text-[var(--title-color)] border-gray-300 hover:bg-orange-50 hover:border-[var(--primary)]'
                                    }
                                `}
                        >
                            {time.slice(0, 5)}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default SelectTime;
