import classNames from 'classnames/bind';
import styles from './PriceFilter.module.scss';

const cx = classNames.bind(styles);

function PriceFilter({ minPrice, setMinPrice, maxPrice, setMaxPrice }) {
    const MAX_LIMIT = 1200;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('price-filter-bar')}>
                <input
                    type="range"
                    min={0}
                    max={MAX_LIMIT}
                    value={minPrice}
                    onChange={(e) => {
                        const value = Number(e.target.value);
                        setMinPrice(Math.min(value, maxPrice - 1));
                    }}
                    className={cx('slider')}
                />
                <input
                    type="range"
                    min={0}
                    max={MAX_LIMIT}
                    value={maxPrice}
                    onChange={(e) => {
                        const value = Number(e.target.value);
                        setMaxPrice(Math.max(value, minPrice + 1));
                    }}
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
