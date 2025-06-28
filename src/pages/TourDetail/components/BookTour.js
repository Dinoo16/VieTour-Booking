import React from 'react';
import classNames from 'classnames/bind';
import styles from './BookTour.module.scss';
import icons from '~/assets/icons';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function BookTour() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Book This Tour</h1>
            <span className={cx('description')}>
                Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem
                neque iste expedita est dolo.
            </span>

            <div className={cx('form')}>
                <div className={cx('form-item', 'input-box')}>
                    <icons.user className={cx('input-icon')} />
                    <input type="text" id="username" placeholder="Name" className={cx('input')} />
                </div>
                <div className={cx('form-item', 'input-box')}>
                    <icons.email className={cx('input-icon')} />
                    <input type="email" id="email" placeholder="Email" className={cx('input')} />
                </div>
                <div className={cx('form-item', 'input-box')}>
                    <icons.phone className={cx('input-icon')} />
                    <input type="text" id="phone" placeholder="Phone" className={cx('input')} />
                </div>
                <div className={cx('form-item', 'input-box')}>
                    <icons.calendar className={cx('input-icon')} />
                    <input type="date" id="date" placeholder="dd/mm/yyyy" className={cx('input')} />
                </div>

                <div className={cx('form-item', 'input-box')}>
                    <icons.tag className={cx('input-icon')} />
                    <input type="number" id="tag" placeholder="Number of tickets" className={cx('input')} />
                </div>
                <div className={cx('form-item', 'input-box')}>
                    <icons.message className={cx('input-icon')} />
                    <input type="text" id="message" placeholder="Message" className={cx('input')} />
                </div>

                <Button primary className={cx('button')}>
                    Book Now
                </Button>
            </div>
        </div>
    );
}

export default BookTour;
