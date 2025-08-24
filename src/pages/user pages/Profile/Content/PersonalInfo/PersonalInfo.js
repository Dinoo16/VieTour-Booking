import classNames from 'classnames/bind';
import styles from './PersonalInfo.module.scss';
import icons from '~/assets/icons';
import TextInput from '~/pages/admin pages/components/Input/TextInput';
import TextareaField from '~/pages/admin pages/components/Input/TextareaField';
import Button from '~/components/Button/Button';
import images from '~/assets/images';
import { useState, useEffect } from 'react';
import { useUser } from '~/contexts/UserContext';
import { useUpdateUser } from '~/hooks/useUsers';

const cx = classNames.bind(styles);

function PersonalInfo() {
    const { user, loading } = useUser();
    const { mutate: updateUser, isLoading } = useUpdateUser();

    const [formData, setFormData] = useState({
        name: user?.name || '',
        dateOfBirth: user?.dateOfBirth || '',
        email: user?.email || '',
        phone: user?.phone || '',
        address: user?.address || '',
        bio: user?.bio || '',
        avatarFile: user?.avatar || null,
    });

    // Handle input change
    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setFormData((prev) => ({
                ...prev,
                avatarFile: file,
                avatarPreview: URL.createObjectURL(file),
            }));
        }
    };

    const handleUpdate = () => {
        const { email, ...userData } = formData;
        updateUser(
            { id: user.id, userData, avatarFile: formData.avatarFile },
            {
                onSuccess: () => {
                    alert('Update successful!');
                },
                onError: (err) => {
                    console.error(err);
                    alert('Update failed!');
                },
            },
        );
    };
    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || '',
                dateOfBirth: user.dateOfBirth || '',
                email: user.email || '',
                phone: user.phone || '',
                address: user.address || '',
                bio: user.bio || '',
                avatarFile: user.avatar,
            });
        }
    }, [user]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <icons.user />
                <h2 className={cx('title')}>Personal Information</h2>
            </div>
            <div className={cx('upload-avatar')}>
                {formData.avatarPreview || formData.avatarFile ? (
                    <>
                        <img
                            className={cx('img-avatar')}
                            src={
                                formData.avatarPreview // nếu có ảnh mới chọn thì show preview
                                    ? formData.avatarPreview
                                    : images[formData.avatarFile] || formData.avatarFile
                            }
                        />
                        <input type="file" accept="image/*" className={styles.input} onChange={handleFileChange} />
                    </>
                ) : (
                    <>
                        <icons.camera /> <span className={styles.text}>Upload avatar</span>
                        <input type="file" accept="image/*" className={styles.input} onChange={handleFileChange} />
                    </>
                )}
            </div>
            <div className={cx('row')}>
                <TextInput
                    label="Your Name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                />
                <TextInput
                    label="Birthday"
                    placeholder="Birthday"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                />
            </div>
            <div className={cx('row')}>
                <TextInput label="Email" placeholder="Email" value={formData.email} disabled />
                <TextInput
                    label="Phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                />
            </div>

            <TextInput
                label="Address"
                placeholder="Address"
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
            />
            <TextareaField
                label="Bio"
                placeholder="Your Bio"
                value={formData.bio}
                onChange={(e) => handleChange('bio', e.target.value)}
            />

            <div className={cx('save-btn')}>
                <Button primary onClick={handleUpdate}>
                    Save Update
                </Button>
            </div>
        </div>
    );
}

export default PersonalInfo;
