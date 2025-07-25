import classNames from 'classnames/bind';
import styles from './PersonalInfo.module.scss';
import icons from '~/assets/icons';
import TextInput from '~/pages/admin pages/components/Input/TextInput';
import TextareaField from '~/pages/admin pages/components/Input/TextareaField';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function PersonalInfo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <icons.user />
                <h2 className={cx('title')}>Personal Information</h2>
            </div>
            <div className={cx('upload-avatar')}>
                <icons.camera />
                <span className={styles.text}>Upload avatar</span>
                <input type="file" accept="image/*" className={styles.input} />
            </div>
            <div className={cx('row')}>
                <TextInput label="First Name" placeholder="First Name" />
                <TextInput label="Last Name" placeholder="Last Name" />
            </div>
            <div className={cx('row')}>
                <TextInput label="Email" placeholder="Email" />
                <TextInput label="Phone" placeholder="Phone" />
            </div>
            <div className={cx('row')}>
                <TextInput label="Birthday" placeholder="Birthday" />
                <TextInput label="Gender" placeholder="Gender" />
            </div>

            <TextInput label="Adress" placeholder="Adress" />
            <TextareaField label="Bio" placeholder="Your Bio" />

            <div className={cx('save-btn')}>
                <Button  primary>
                    Save Update
                </Button>
            </div>
        </div>
    );
}

export default PersonalInfo;
