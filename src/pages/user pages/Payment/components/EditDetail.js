import { useState } from 'react';
import TextInput from '~/pages/admin pages/components/Input/TextInput';
import TextareaField from '~/pages/admin pages/components/Input/TextareaField';
import { useUpdateBooking } from '~/hooks/useBooking';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';

function EditDetail({ bookingData, onClose }) {
    const updateBooking = useUpdateBooking();

    const [contactName, setContactName] = useState(bookingData?.contactName || '');
    const [contactEmail, setContactEmail] = useState(bookingData?.contactEmail || '');
    const [contactPhone, setContactPhone] = useState(bookingData?.contactPhone || '');
    const [message, setMessage] = useState(bookingData?.message || '');

    const handleSaveEdit = (e) => {
        e.preventDefault();

        const updateData = {
            id: bookingData?.id,
            contactName,
            contactEmail,
            contactPhone,
            message,
        };

        // call hook api
        updateBooking.mutate(updateData, {
            onSuccess: () => {
                onClose();
            },
        });
    };
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]">
            <div className="bg-white p-6 rounded-lg shadow-lg min-w-[400px]">
                <h3 className="text-lg font-semibold text-[var(--header-color)]">Edit Booking Details</h3>
                <form onSubmit={handleSaveEdit} className="flex flex-col">
                    <TextInput
                        label="Contact name"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Contact name"
                    />

                    <div className="flex flex-col lg:flex-row justify-between gap-6">
                        <div>
                            <TextInput
                                label="Contact email"
                                value={contactEmail}
                                onChange={(e) => setContactEmail(e.target.value)}
                                placeholder="Contact email"
                            />
                        </div>
                        <TextInput
                            label="Contact phone"
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)}
                            placeholder="Contact phone"
                        />
                    </div>

                    <TextareaField
                        label="Special requirements"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter a description..."
                    />
                    <div className="flex justify-end gap-2 mt-6">
                        <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[var(--primary)] text-white rounded disabled:opacity-50"
                            disabled={updateBooking.isPending}
                        >
                            {updateBooking.isPending ? <LoadingSpinner small /> : 'Save'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditDetail;
