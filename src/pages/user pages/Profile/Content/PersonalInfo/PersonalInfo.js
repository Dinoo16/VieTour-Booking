import icons from '~/assets/icons';
import TextInput from '~/pages/admin pages/components/Input/TextInput';
import TextareaField from '~/pages/admin pages/components/Input/TextareaField';
import Button from '~/components/Button/Button';
import images from '~/assets/images';
import { useState, useEffect } from 'react';
import { useUser } from '~/contexts/UserContext';
import { useUpdateUser } from '~/hooks/useUsers';

function PersonalInfo() {
    const { user } = useUser();
    const { mutate: updateUser, isLoading } = useUpdateUser();

    const [formData, setFormData] = useState({
        name: user?.name || '',
        dateOfBirth: user?.dateOfBirth || '',
        email: user?.email || '',
        phone: user?.phone || '',
        address: user?.address || '',
        bio: user?.bio || '',
        avatarFile: user?.avatar || null,
        avatarPreview: null,
    });

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
                onSuccess: () => alert('Update successful!'),
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
                avatarPreview: null,
            });
        }
    }, [user]);

    return (
        <div className="w-full">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <icons.user className="text-black" />
                <h2 className="text-[24px] font-medium text-[var(--title-color)]">Personal Information</h2>
            </div>

            {/* Upload avatar */}
            <div className="w-[140px] h-[140px] mx-auto rounded-full relative bg-[#d9d9d9] flex flex-col items-center justify-center cursor-pointer overflow-hidden text-center text-sm transition-colors duration-300 hover:bg-[#c9c9c9]">
                {formData.avatarPreview || formData.avatarFile ? (
                    <>
                        <img
                            className="w-full h-full object-cover"
                            src={
                                formData.avatarPreview
                                    ? formData.avatarPreview
                                    : images[formData.avatarFile] || formData.avatarFile
                            }
                            alt="avatar"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                        />
                    </>
                ) : (
                    <>
                        <icons.camera className="text-2xl mb-1" />
                        <span className="pointer-events-none">Upload avatar</span>
                        <input
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                        />
                    </>
                )}
            </div>

            {/* Form rows */}
            <div className="flex flex-col sm:flex-row gap-6 mt-6">
                <div className="flex-1">
                    <TextInput
                        label="Your Name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                    />
                </div>
                <div className="flex-1">
                    <TextInput
                        label="Birthday"
                        placeholder="Birthday"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                    />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-6">
                <div className="flex-1">
                    <TextInput label="Email" placeholder="Email" value={formData.email} disabled />
                </div>
                <div className="flex-1">
                    <TextInput
                        label="Phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                    />
                </div>
            </div>

            <div className="mt-6">
                <TextInput
                    label="Address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                />
            </div>

            <div className="mt-6">
                <TextareaField
                    label="Bio"
                    placeholder="Your Bio"
                    value={formData.bio}
                    onChange={(e) => handleChange('bio', e.target.value)}
                />
            </div>

            {/* Save button */}
            <div className="flex justify-end pt-6">
                <Button primary onClick={handleUpdate} disabled={isLoading}>
                    {isLoading ? 'Saving...' : 'Save Update'}
                </Button>
            </div>
        </div>
    );
}

export default PersonalInfo;
