import icons from '~/assets/icons';
import TextInput from '~/pages/admin pages/components/Input/TextInput';
import Button from '~/components/Button/Button';

function SecuritySetting() {
    return (
        <div>
            <div className="flex items-center gap-4 mb-9">
                <icons.user className="text-black" />
                <h2 className="text-[var(--title-color)] text-2xl text-medium">Security Setting</h2>
            </div>

            <TextInput label="Current Password" placeholder="Current Password" />

            <TextInput label="New Password" placeholder="New Password" />

            <TextInput label="Password Confirm" placeholder="Password Confirm" />

            <div className="flex justify-end pt-6">
                <Button primary>Save Update</Button>
            </div>
        </div>
    );
}

export default SecuritySetting;
