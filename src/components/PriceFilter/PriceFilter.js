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
                    max={1200}
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className={cx('slider')}
                    style={{ zIndex: minPrice > 1200 - 100 ? 5 : 3 }}
                />
                <input
                    type="range"
                    min={0}
                    max={1200}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className={cx('slider')}
                    style={{ zIndex: 4 }}
                />
            </div>
            <div className={cx('price-filter-value')}>
                Price: ${minPrice} – ${maxPrice}
            </div>
        </div>
    );
}

export default PriceFilter;
