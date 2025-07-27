import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import icons from '~/assets/icons';
import images from '~/assets/images';
import { useState } from 'react';
import Button from '~/components/Button/Button';

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

const userCards = [
    {
        id: 'paypal',
        name: 'PayPal',
        cardholdername: 'Dino',
        cardNumber: '**** **** **** 8899',
        expires: '11/21',
        cvc: '123',
        img: images.paypal,
    },
    {
        id: 'applepay',
        name: 'Apple Pay',
        cardholdername: 'Alice',
        cardNumber: '**** **** **** 8866',
        expires: '11/25',
        cvc: '456',
        img: images.applepay,
    },
];

function PaymentMethod() {
    const [showForm, setShowForm] = useState(false);
    const [selected, setSelected] = useState(paymentMethods[0].id);

    const [showEditForm, setShowEditForm] = useState(null);

    const [editForm, setEditForm] = useState({
        cardholdername: '',
        cardNumber: '',
        expires: '',
        cvc: '',
    });

    const handleAddCard = () => {
        setShowForm((prev) => !prev);
    };

    const handleEdit = (card) => {
        if (showEditForm?.id === card.id) {
            setShowEditForm(null);
        } else {
            setShowEditForm(card);
            setEditForm({
                cardholdername: card.cardholdername,
                cardNumber: card.cardNumber,
                expires: card.expires,
                cvc: card.cvc,
            });
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('title')}>
                    <icons.wallet />
                    <h2 className={cx('title')}>Payment Method</h2>
                </div>
                <span>
                    Update your payment methods. Add credit cards, and securely save multiple payment methods for fast
                    and convenient transactions.
                </span>
            </div>
            <h3 className={cx('card-title')}>Payment Cards</h3>
            {userCards.map((card) => (
                <div className={cx('card')}>
                    <div className={cx('card-box')}>
                        <div className={cx('card-info')}>
                            <img src={card.img} alt={card.img} className={cx('logo')} />
                            <div className={cx('details')}>
                                <div>
                                    <span className={cx('brand')}>{card.name}</span>
                                    <span className={cx('number')}>{card.cardNumber}</span>
                                </div>
                                <span className={cx('expires')}>Expires: {card.expires}</span>
                            </div>
                        </div>
                        <div className={cx('actions')}>
                            <button className={cx('edit')} onClick={() => handleEdit(card)}>
                                {showEditForm?.id === card.id ? 'Cancel' : 'Edit info'}
                            </button>
                            <button className={cx('remove')}>Remove Card</button>
                        </div>
                    </div>
                    {/* edit payment card form */}
                    {showEditForm?.id === card.id && (
                        <div className={cx('form-wrapper')}>
                            <div className={cx('card-fiels')}>
                                <div className={cx('form-group')}>
                                    <label>
                                        Cardholder name <span className={cx('required')}>*</span>
                                        <div className={cx('input-icon')}>
                                            <icons.user />
                                            <input
                                                type="text"
                                                value={editForm.cardholdername}
                                                onChange={(e) =>
                                                    setEditForm({ ...editForm, cardholdername: e.target.value })
                                                }
                                                placeholder="Cardholder name"
                                                required
                                            />
                                        </div>
                                    </label>
                                </div>
                                <div className={cx('form-group')}>
                                    <label>
                                        Card number <span className={cx('required')}>*</span>
                                        <div className={cx('input-icon')}>
                                            <icons.card />
                                            <input
                                                type="text"
                                                value={editForm.cardNumber}
                                                onChange={(e) =>
                                                    setEditForm({ ...editForm, cardNumber: e.target.value })
                                                }
                                                placeholder="Card number"
                                                required
                                            />
                                        </div>
                                    </label>
                                </div>
                                <div className={cx('form-row')}>
                                    <div className={cx('form-group', 'half')}>
                                        <label>
                                            Expiration date <span className={cx('required')}>*</span>
                                            <div className={cx('input-icon')}>
                                                <icons.calendar />
                                                <input
                                                    type="text"
                                                    value={editForm.expires}
                                                    onChange={(e) =>
                                                        setEditForm({ ...editForm, expires: e.target.value })
                                                    }
                                                    placeholder="MM/YY"
                                                    required
                                                />
                                            </div>
                                        </label>
                                    </div>
                                    <div className={cx('form-group', 'half')}>
                                        <label>
                                            CVC <span className={cx('required')}>*</span>
                                            <div className={cx('input-icon')}>
                                                <icons.card />
                                                <input
                                                    type="text"
                                                    value={editForm.cvc}
                                                    onChange={(e) => setEditForm({ ...editForm, cvc: e.target.value })}
                                                    placeholder="CVC"
                                                    required
                                                />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className={cx('save-btn')}>
                                    <Button primary>Save</Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            <div className={cx('add-card-wrapper')}>
                <div className={cx('add-card')}>
                    <div className={cx('add-card-title')}>
                        Payment cards
                        <span>Pay with new card</span>
                    </div>
                    <button className={cx('add')} onClick={handleAddCard}>
                        {showForm ? 'Cancel' : 'Add card'}
                    </button>
                </div>

                {showForm && (
                    <div className={cx('form-wrapper')}>
                        <div className={cx('card-brands')}>
                            {paymentMethods.map((method) => (
                                <label
                                    key={method.id}
                                    className={cx('card-brands-logo', { active: selected === method.id })}
                                >
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
                        <div className={cx('card-fiels')}>
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
                            <div className={cx('save-btn')}>
                                <Button primary>Save</Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PaymentMethod;
