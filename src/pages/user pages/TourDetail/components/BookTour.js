import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './BookTour.module.scss';
import icons from '~/assets/icons';
import Button from '~/components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '~/utils/isAuthenticated';
import { useCreateBooking } from '~/hooks/useBooking';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';
import Popup from '~/components/Popup/Popup';

const cx = classNames.bind(styles);

function BookTour({ item }) {
    const navigate = useNavigate();
    const tourId = item.id;
    // Contact infor
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [message, setMessage] = useState('');

    // Pop up state
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const { mutate: createBooking, isLoading } = useCreateBooking();

    const handleBookTour = (e) => {
        e.preventDefault();

        if (!name || !email || !phone || !date || !numberOfPeople || Number(numberOfPeople) <= 0) {
            setPopupMessage('Please fill all required fields before booking.');
            setShowPopup(true);
            return;
        }

        // Fill form data
        if (isAuthenticated()) {
            const bookingData = {
                tourId,
                contactName: name,
                contactEmail: email,
                contactPhone: phone,
                date,
                numberOfPeople: Number(numberOfPeople),
                message,
            };
            // Call api
            createBooking(bookingData, {
                onSuccess: (data) => {
                    if (!data || !data.id) {
                        setPopupMessage('Booking failed. Please try again.');
                        setShowPopup(true);
                        return;
                    }
                    navigate(`/payment/${data.id}`);
                },
                onError: (error) => {
                    console.error('Create booking error: ', error);
                    setPopupMessage(`Create failed: ${error.response?.data?.message || error.message}`);
                    setShowPopup(true);
                },
            });
        } else {
            navigate('/signin');
        }
    };

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Book This Tour</h1>
            <span className={cx('description')}>
                Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem
                neque iste expedita est dolo.
            </span>

            <form className={cx('form')} onSubmit={handleBookTour}>
                <div className={cx('form-item', 'input-box')}>
                    <icons.user className={cx('input-icon')} />
                    <input
                        type="text"
                        id="username"
                        placeholder="Name"
                        className={cx('input')}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className={cx('form-item', 'input-box')}>
                    <icons.email className={cx('input-icon')} />
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className={cx('input')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={cx('form-item', 'input-box')}>
                    <icons.phone className={cx('input-icon')} />
                    <input
                        type="text"
                        id="phone"
                        placeholder="Phone"
                        className={cx('input')}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className={cx('form-item', 'input-box')}>
                    <icons.calendar className={cx('input-icon')} />
                    <input
                        type="date"
                        id="date"
                        placeholder="dd/mm/yyyy"
                        className={cx('input')}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <div className={cx('form-item', 'input-box')}>
                    <icons.tag className={cx('input-icon')} />
                    <input
                        type="number"
                        id="tag"
                        placeholder="Number of tickets"
                        className={cx('input')}
                        value={numberOfPeople}
                        onChange={(e) => setNumberOfPeople(Number(e.target.value))}
                    />
                </div>
                <div className={cx('form-item', 'input-box')}>
                    <icons.message className={cx('input-icon')} />
                    <input
                        type="text"
                        id="message"
                        placeholder="Message"
                        className={cx('input')}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                <Button primary className={cx('button')}>
                    Book Now
                </Button>
                {showPopup && (
                    <Popup title="Notification" message={popupMessage} onConfirm={() => setShowPopup(false)} />
                )}
            </form>
        </div>
    );
}

export default BookTour;
