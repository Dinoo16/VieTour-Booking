import classNames from 'classnames/bind';
import styles from './PriceFilter.module.scss';

const cx = classNames.bind(styles);

function PriceFilter({ minPrice, setMinPrice, maxPrice, setMaxPrice }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('price-filter-bar')}>
                <input
                    type="range"
                    min={0}
                    max={maxPrice}
                    value={minPrice}
                    onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice))}
                    className={cx('slider')}
                />
                <input
                    type="range"
                    min={minPrice}
                    max={1200}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice))}
                    className={cx('slider')}
                />
            </div>
            <div className={cx('price-filter-value')}>
                Price: ${minPrice} – ${maxPrice}
            </div>
        </div>
    );
}

export default PriceFilter;
