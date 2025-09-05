import { useEffect, useState } from 'react';
import { getAllRegions } from '~/apiServices/regionService';
import { useDestinations } from '~/hooks/useDestinations';
import { useNavigate } from 'react-router-dom';

function Destination() {
    const navigate = useNavigate();
    const [regions, setRegions] = useState([]);
    const [activeRegion, setActiveRegion] = useState(null);

    const { data: destinations = [], isLoading } = useDestinations();

    // Fetch regions api
    useEffect(() => {
        const fetchRegionsApi = async () => {
            try {
                const data = await getAllRegions();
                setRegions(data);
                if (data.length > 0) {
                    setActiveRegion(data[0].regionId); // default to first region
                }
            } catch (error) {
                console.error('Error fetching regions:', error);
            }
        };
        fetchRegionsApi();
    }, []);

    function handleDestinationClick(item) {
        const destinationId = item.id;
        navigate(`/tour?destinationId=${destinationId}`);
    }

    // Filter destinations with regions
    const filteredDestinations = destinations.filter((item) => item.regionId === activeRegion);

    if (isLoading) {
        return <p>Loading destinations...</p>;
    }

    return (
        <div>
            {/* Title */}
            <h1 className="font-[var(--font-family-header)] text-[32px] s:text-[42px] text-[var(--header-color)] mb-[14px]">
                Explore more destinations
            </h1>
            <span className="text-[16px]">Finds places to visit based on region of Vietnam</span>

            {/* Tabs */}
            <div className="flex gap-6 border-b border-[#999] my-14 ">
                {regions.map((region) => (
                    <button
                        key={region.regionId}
                        onClick={() => setActiveRegion(region.regionId)}
                        className={`font-[var(--font-family-header)] text-[16px] pb-2 border-b-2 transition-colors
                        ${
                            activeRegion === region.regionId
                                ? 'text-[var(--primary)] border-[var(--primary)] font-bold'
                                : 'text-black border-transparent font-medium'
                        }`}
                    >
                        {region.name}
                    </button>
                ))}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-2 s:grid-cols-3 md:grid-cols-5 gap-6 justify-center ">
                {filteredDestinations.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleDestinationClick(item)}
                        className="relative rounded-lg overflow-hidden cursor-pointer"
                    >
                        <img
                            src={item.backgroundImage}
                            alt={item.name}
                            className="w-full h-[160px] object-cover rounded-[10px] block"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                        <div className="absolute bottom-0 left-6 text-white py-4">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-sm">{item.tourIds.length} tours</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Destination;
