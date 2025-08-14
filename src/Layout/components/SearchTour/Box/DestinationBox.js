import classNames from 'classnames/bind';
import styles from './Box.module.scss';
import { useDestinations } from '~/hooks/useDestinations';

const cx = classNames.bind(styles);

function DestinationBox({ onSelect }) {
    const { data: destinationsData = [], isDestinationLoading } = useDestinations();

    return (
        <div className={cx('dropdown')}>
            <p className={cx('dropdown-title')}>Nearby destinations</p>
            {destinationsData.map((destination) => (
                <div
                    key={destination.name}
                    className={cx('dropdown-item')}
                    onClick={() => onSelect && onSelect(destination.name)}
                >
                    <img src={destination.backgroundImage} alt={destination.name} />
                    <div>
                        <p className={cx('dropdown-title')}>{destination.name}</p>
                        <small>{destination.tourIds.length} tours</small>   
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DestinationBox;
