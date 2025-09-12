import { useState } from 'react';
import { format } from "date-fns";


function Ticket({ price, tourId, selectedDate, selectedTime, onCreateBooking }) {
    const [count, setCount] = useState(0);
    const [notSelected, setNotSelected] = useState(false);
    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count > 0 ? count - 1 : 0);

    const handleNext = () => {
        if (count <= 0) {
            setNotSelected(true);
            return;
        }

        onCreateBooking({
            tourId,
            numberOfPeople: count,
            date: format(selectedDate, "yyyy-MM-dd"),
            time: selectedTime,
            currency: 'USD',
        });
    };

    return (
        <div className="p-4">
            {notSelected ? <span className="text-sm text-red-500">Please select at least one ticket</span> : ''}
            <div className="p-4 mt-3 w-[420px] flex-shrink-0 rounded-lg border border-[var(--primary)] flex flex-col gap-3 ">
                {/* Title */}
                <h2 className="text-[var(--title-color)] font-semibold text-lg">Book this tour</h2>

                {/* Language options */}
                <div className="flex flex-col gap-1">
                    <span className="font-semibold text-sm text-[var(--title-color)]">Language options</span>
                    <select className="border border-gray-400 rounded-md px-2 py-1 text-sm text-[var(--title-color)]">
                        <option>English - Tour guide</option>
                        <option>Vietnamese - Tour guide</option>
                    </select>
                </div>
                {/* Tickets */}
                <div className="flex flex-col gap-2 ">
                    <span className="font-medium text-sm text-[var(--title-color)]">How many tickets?</span>
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex flex-col">
                            <span className="text-[var(--title-color)]">Number of people</span>
                            <span className="text-[var(--title-color)]">${price}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={decrease} className="px-2 py-1 border rounded-md">
                                -
                            </button>
                            <span className="text-[var(--title-color)] font-medium">{count}</span>
                            <button onClick={increase} className="px-2 py-1 border rounded-md">
                                +
                            </button>
                        </div>
                    </div>
                </div>
                {/* Total */}
                <div className="flex flex-col gap-1">
                    <span className="font-medium text-[var(--title-color)]">Total: ${count * price}</span>
                    <span className="text-sm text-gray-500">Includes taxes and charges</span>
                </div>
                {/* Button */}
                <button onClick={handleNext} className="bg-[var(--primary)] text-white rounded-lg py-2 mt-2 ">
                    Next
                </button>
            </div>
        </div>
    );
}

export default Ticket;
