import classNames from 'classnames/bind';
import styles from './SecuritySetting.module.scss';
import icons from '~/assets/icons';
import TextInput from '~/pages/admin pages/components/Input/TextInput';
import TextareaField from '~/pages/admin pages/components/Input/TextareaField';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function SecuritySetting() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <icons.user />
                <h2 className={cx('title')}>Security Setting</h2>
            </div>

            <TextInput label="Current Password" placeholder="Current Password" />

            <TextInput label="New Password" placeholder="New Password" />

            <TextInput label="Password Confirm" placeholder="Password Confirm" />

            <div className={cx('save-btn')}>
                <Button primary>Save Update</Button>
            </div>
        </div>
    );
}

export default SecuritySetting;
