import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import icons from '~/assets/icons';
import TextInput from '~/pages/admin pages/components/Input/TextInput';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function PaymentMethod() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <icons.wallet />
                <h2 className={cx('title')}>Payment Method</h2>
            </div>

            <div className={cx('save-btn')}>
                <Button primary>Add new payment method</Button>
            </div>
        </div>
    );
}

export default PaymentMethod;
