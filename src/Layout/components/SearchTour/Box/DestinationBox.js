import classNames from 'classnames/bind';
import styles from './Box.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function DestinationBox({ onSelect }) {
    const LOCATIONS = [
        {
            image: images.hanoi,
            title: 'Hanoi',
            subtitle: 'Vietnam',
        },
        {
            image: images.halongbay,
            title: 'Quang Ninh',
            subtitle: 'Vietnam',
        },
    ];

    return (
        <div className={cx('dropdown')}>
            <p className={cx('dropdown-title')}>Nearby destinations</p>
            {LOCATIONS.map((loc) => (
                <div key={loc.title} className={cx('dropdown-item')} onClick={() => onSelect && onSelect(loc.title)}>
                    <img src={loc.image} alt={loc.title} />
                    <div>
                        <p className={cx('dropdown-title')}>{loc.title}</p>
                        <small>{loc.subtitle}</small>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DestinationBox;
