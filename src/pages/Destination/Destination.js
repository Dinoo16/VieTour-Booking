import classNames from 'classnames/bind';
import styles from './Destination.module.scss';
import { DESTINATIONS, REGIONS } from '~/data/Destination/Destination';
import { useState } from 'react';

const cx = classNames.bind(styles);


function Destination() {
    const [activeRegion, setActiveRegion] = useState('Northern');

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Explore more destinations</h1>
            <span className={cx('subtitle')}>Finds places to visit based on region of Vietnam</span>

            <div className={cx('region-tabs')}>
                {REGIONS.map((region) => (
                    <button
                        key={region}
                        className={cx('tab', { active: activeRegion === region })}
                        onClick={() => setActiveRegion(region)}
                    >
                        {region}
                    </button>
                ))}
            </div>

            <div className={cx('content')}>
                {DESTINATIONS[activeRegion].map((item, index) => (
                    <div key={index} className={cx('card')}>
                        <img src={item.image} alt={item.name} className={cx('image')} />
                        <div className={cx('overlay')}></div>
                        <div className={cx('info')}>
                            <h3 className={cx('name')}>{item.name}</h3>
                            <p className={cx('tours')}>{item.tours} tours</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Destination;
