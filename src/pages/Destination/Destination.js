import classNames from 'classnames/bind';
import styles from './Destination.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

const REGIONS = ['Northern', 'Central', 'Southern'];

const DESTINATIONS = {
    Northern: [
        { title: 'Hanoi', tours: 123, image: images.aboutusbg },
        { title: 'Hanoi', tours: 124, image: images.destination_1 },
        { title: 'Hanoi', tours: 125, image: images.destination_2 },
        { title: 'Hanoi', tours: 126, image: images.destination_3 },
        { title: 'Hanoi', tours: 127, image: images.hanoi },
    ],
    Central: [
        { title: 'Hanoi', tours: 123, image: images.aboutusbg },
        { title: 'Hanoi', tours: 123, image: images.destination_2 },
    ],
    Southern: [
        { title: 'Hanoi', tours: 123, image: images.destination_3 },
        { title: 'Hanoi', tours: 123, image: images.aboutusbg },
    ],
};

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
                        <img src={item.image} alt={item.title} className={cx('image')} />
                        <div className={cx('overlay')}></div>
                        <div className={cx('info')}>
                            <h3 className={cx('name')}>{item.title}</h3>
                            <p className={cx('tours')}>{item.tours} tours</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Destination;
