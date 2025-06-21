import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Box.module.scss';
import Button from '~/components/Button/Button';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const cx = classNames.bind(styles);

function BudgetBox({ onSelect }) {
    const [range, setRange] = useState([0, 500]);

    const handleChange = (value) => {
        setRange(value);
    };
    const handleConfirm = () => {
        if (onSelect) {
            onSelect(`$${range[0]} - $${range[1]}`);
        }
    };

    return (
        <div className={cx('dropdown')}>
            <p className={cx('dropdown-title')}>Select your days</p>

            <div className={cx('slider-wrapper')}>
                <Slider
                    range
                    min={0}
                    max={500}
                    defaultValue={range}
                    onChange={handleChange}
                    trackStyle={[{ backgroundColor: 'var(--primary)', height: 6 }]}
                    handleStyle={[
                        { backgroundColor: 'var(--primary)', border: 'none', width: 20, height: 20 },
                        { backgroundColor: 'var(--primary)', border: 'none', width: 20, height: 20 },
                    ]}
                    railStyle={{ backgroundColor: '#ddd', height: 6 }}
                />
            </div>

            <div className={cx('budget-values')}>
                <div className={cx('budget-box')}>${range[0]}</div>
                <div className={cx('budget-box')}>${range[1]}</div>
            </div>
            <Button rounded className={cx('confirm-btn')} onClick={handleConfirm}>
                Confirm
            </Button>
        </div>
    );
}

export default BudgetBox;
