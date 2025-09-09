import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Box.module.scss';
import Button from '~/components/Button/Button';
import PriceFilter from '~/components/PriceFilter/PriceFilter';

const cx = classNames.bind(styles);

function BudgetBox({ onSelect }) {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1200);
    const handleConfirm = () => {
        if (onSelect) {
            onSelect({
                label: `$${minPrice} - $${maxPrice}`,
                min: minPrice,
                max: maxPrice,
            });
        }
    };
    return (
        <div className={cx('dropdown')}>
            <p className={cx('dropdown-title')}>Select your budget</p>

            <PriceFilter minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} />
            <Button rounded className={cx('confirm-btn')} onClick={handleConfirm}>
                Confirm
            </Button>
        </div>
    );
}

export default BudgetBox;
