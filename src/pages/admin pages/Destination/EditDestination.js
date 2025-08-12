import classNames from 'classnames/bind';
import styles from './Destination.module.scss';
import TextInput from '../components/Input/TextInput';
import TextareaField from '../components/Input/TextareaField';
import Select from '../components/Select/Select';
import Form from '../components/Form/Form';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDestination, useUpdateDestination } from '~/hooks/useDestinations';
import { useRegions } from '~/hooks/useRegions';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function EditDestination() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: destinationData } = useDestination(id);
    const { data: regions } = useRegions();
    const updateDestination = useUpdateDestination();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [regionId, setRegionId] = useState('');
    const [backgroundImage, setBackgroundImage] = useState('');

    const regionOptions = regions ? regions.map((r) => ({ value: r.regionId, label: r.name })) : [];

    useEffect(() => {
        if (destinationData) {
            setName(destinationData.name || '');
            setDescription(destinationData.description || '');
            setRegionId(destinationData.regionId || '');
            setBackgroundImage(destinationData.backgroundImage || '');
        }
    }, [destinationData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updateData = {
            id: id,
            name,
            description,
            regionId,
            backgroundImage,
        };

        // call api
        updateDestination.mutate(updateData, {
            onSuccess: (responseData) => {
                console.log('Update thành công:', responseData);
                navigate('/admin/destination');
            },
            onError: (error) => {
                console.error('Lỗi khi update:', error);
                // Thêm thông báo lỗi cụ thể hơn
                alert(`Update failed: ${error.response?.data?.message || error.message}`);
            },
        });
    };
    return (
        <Form
            title="Edit Destination"
            onSubmit={handleSubmit}
            rightPanel={
                <Select
                    label="Region"
                    placeholder="Select a region"
                    options={regionOptions}
                    value={regionId}
                    onChange={(e) => setRegionId(e.target.value)}
                />
            }
        >
            <TextInput
                label="Destination name"
                placeholder="Destination name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextareaField
                label="Description"
                placeholder="Enter a description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <TextInput
                label="Image Url"
                placeholder="Insert image url"
                value={backgroundImage}
                onChange={(e) => setBackgroundImage(e.target.value)}
            />
        </Form>
    );
}

export default EditDestination;
