import classNames from 'classnames/bind';
import styles from './Destination.module.scss';
import { useEffect, useState } from 'react';
import { getAllRegions } from '~/apiServices/regionService';
import { useDestinations } from '~/hooks/useDestinations';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

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
                console.log('Regions api:', data);
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
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Explore more destinations</h1>
            <span className={cx('subtitle')}>Finds places to visit based on region of Vietnam</span>

            <div className={cx('region-tabs')}>
                {regions.map((region) => (
                    <button
                        key={region.regionId}
                        className={cx('tab', { active: activeRegion === region.regionId })}
                        onClick={() => setActiveRegion(region.regionId)}
                    >
                        {region.name}
                    </button>
                ))}
            </div>

            <div className={cx('content')}>
                {filteredDestinations.map((item, index) => (
                    <div key={index} className={cx('card')} onClick={() => handleDestinationClick(item)}>
                        <img src={item.backgroundImage} alt={item.name} className={cx('image')} />
                        <div className={cx('overlay')}></div>
                        <div className={cx('info')}>
                            <h3 className={cx('name')}>{item.name}</h3>
                            <p className={cx('tours')}>{item.tourIds.length} tours</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Destination;
