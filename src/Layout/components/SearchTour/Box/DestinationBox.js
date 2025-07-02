import classNames from 'classnames/bind';
import styles from './Box.module.scss';
import { DESTINATIONS } from '~/data/Destination/Destination';

const cx = classNames.bind(styles);

function DestinationBox({ onSelect }) {
    let flatItems = DESTINATIONS;
    if (!Array.isArray(DESTINATIONS) && DESTINATIONS && typeof DESTINATIONS === 'object') {
        flatItems = Object.values(DESTINATIONS).flat();
    }
    return (
        <div className={cx('dropdown')}>
            <p className={cx('dropdown-title')}>Nearby destinations</p>
            {flatItems.map((destination) => (
                <div key={destination.name} className={cx('dropdown-item')} onClick={() => onSelect && onSelect(destination.name)}>
                    <img src={destination.image} alt={destination.name} />
                    <div>
                        <p className={cx('dropdown-title')}>{destination.name}</p>
                        <small>{destination.tours} tours</small>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DestinationBox;
