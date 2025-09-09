import { useState } from 'react';

function AvailableTimes({ times, setTimes }) {
    const [newTime, setNewTime] = useState('');

    const addTime = () => {
        if (newTime && !times.includes(newTime)) {
            setTimes([...times, newTime]);
            setNewTime('');
        }
    };

    const removeTime = (index) => {
        setTimes(times.filter((_, i) => i !== index));
    };

    return (
        <div className="mt-6">
            <label className="block text-sm font-medium mb-2">Available Times</label>

            {/* Display slected times */}
            <div className="flex flex-wrap gap-2 mb-3">
                {times.map((time, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 border rounded-full flex items-center gap-2">
                        {time}
                        <button
                            type="button"
                            onClick={() => removeTime(index)}
                            className="text-red-500 hover:text-red-700"
                        >
                            ✕
                        </button>
                    </span>
                ))}
            </div>

            {/* Input + Add button */}
            <div className="flex gap-2">
                <input
                    type="time"
                    lang="en-GB"
                    className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                />
                <button
                    type="button"
                    onClick={addTime}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default AvailableTimes;
