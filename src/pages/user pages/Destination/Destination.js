import classNames from 'classnames/bind';
import styles from './Destination.module.scss';
import { DESTINATIONS } from '~/data/Destination/Destination';
import { useEffect, useState } from 'react';
import { getAllRegions } from '~/apiServices/regionService';
import { getAllDestinations } from '~/apiServices/destinationService';

const cx = classNames.bind(styles);

function Destination() {
    const [regions, setRegions] = useState([]);
    const [activeRegion, setActiveRegion] = useState(null);
    const [destinations, setDestinations] = useState([]);

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

    useEffect(() => {
        const fetchDestinationsApi = async () => {
            try {
                const data = await getAllDestinations();
                setDestinations(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching regions:', error);
            }
        };
        fetchDestinationsApi();
    }, []);

    const filteredDestinations = destinations.filter((item) => item.regionId === activeRegion);

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
                    <div key={index} className={cx('card')}>
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
