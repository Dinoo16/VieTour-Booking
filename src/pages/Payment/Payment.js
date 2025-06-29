import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import icons from '~/assets/icons';
import { useState } from 'react';
import images from '~/assets/images';
import Button from '~/components/Button/Button';
import { useParams } from 'react-router-dom';
import { TOURS } from '~/data/Tour/Tour';

const cx = classNames.bind(styles);

const paymentMethods = [
    {
        id: 'applepay',
        name: 'Apple Pay',
        img: images.applepay,
    },
    {
        id: 'paypal',
        name: 'PayPal',
        img: images.paypal,
    },
];


function Payment() {
    const [selected, setSelected] = useState('applepay');
    const { id } = useParams();
    const tour = TOURS.find((t) => t.id === parseInt(id));

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <icons.info />
                <span>Check Your Payment</span>
            </div>

            <div className={cx('content')}>
                <div className={cx('payment-method')}>
                    <h2>Choose payment method</h2>
                    <div className={cx('payment-container')}>
                        {paymentMethods.map((method) => (
                            <label key={method.id} className={cx('card', { active: selected === method.id })}>
                                <input
                                    type="radio"
                                    name="payment"
                                    checked={selected === method.id}
                                    onChange={() => setSelected(method.id)}
                                />
                                <img src={method.img} alt={method.name} />
                                <p>{method.name}</p>
                            </label>
                        ))}
                    </div>
                    <form className={cx('card-form')}>
                    <div className={cx('form-group')}>
                        <label>
                            Cardholder name <span className={cx('required')}>*</span>
                            <div className={cx('input-icon')}>
                                <icons.user />
                                <input type="text" placeholder="Cardholder name" required />
                            </div>
                        </label>
                    </div>
                    <div className={cx('form-group')}>
                        <label>
                            Card number <span className={cx('required')}>*</span>
                            <div className={cx('input-icon')}>
                                <icons.card />
                                <input type="text" placeholder="Card number" required />
                            </div>
                        </label>
                    </div>
                    <div className={cx('form-row')}>
                        <div className={cx('form-group', 'half')}>
                            <label>
                                Expiration date <span className={cx('required')}>*</span>
                                <div className={cx('input-icon')}>
                                    <icons.calendar />
                                    <input type="text" placeholder="MM/YY" required />
                                </div>
                            </label>
                        </div>
                        <div className={cx('form-group', 'half')}>
                            <label>
                                CVC <span className={cx('required')}>*</span>
                                <div className={cx('input-icon')}>
                                    <icons.card />
                                    <input type="text" placeholder="CVC" required />
                                </div>
                            </label>
                        </div>
                    </div>
                    <Button primary>Complete order</Button>
                </form>
                </div>

                <div className={cx('tour-info')}>
                    <div className={cx('tour-info-top')}>
                        <img src={tour.image} alt="tour-info" />
                        <div className={cx('tour-info-content')}>
                        <h2>{tour.title}</h2>
                            
                        </div>
                    </div>
                    <div className={cx('tour-info-bottom')}>

                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Payment;
