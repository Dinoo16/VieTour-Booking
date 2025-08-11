import classNames from 'classnames/bind';
import styles from './Destination.module.scss';
import TextInput from '../components/Input/TextInput';
import TextareaField from '../components/Input/TextareaField';
import Select from '../components/Select/Select';
import Form from '../components/Form/Form';
import { useState, useEffect } from 'react';
import { getAllRegions } from '~/apiServices/regionService';
import { createDestination } from '~/apiServices/destinationService';
const cx = classNames.bind(styles);

function AddDestination() {
    const [regionOptions, setRegionOptions] = useState([]);
    const [region, setRegion] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        const fetchRegions = async () => {
            try {
                const data = await getAllRegions();
                console.log('Regions: ', data);
                setRegionOptions(data);
            } catch (error) {
                console.log('Failed to fetch all Regions:', error);
            }
        };
        fetchRegions();
    }, []);

    // add destination info
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('regionId', region);
        if (image) formData.append('backgroundImage', image);
        try {
            const res = await createDestination(formData);
            console.log('Create destination success:', res);
            // Có thể clear form hoặc chuyển hướng
        } catch (error) {
            console.error('Failed to create destination:', error);
        }
    };


    return (
        <Form
            title="Add Destination"
            onSubmit={handleFormSubmit}
            rightPanel={
                <Select
                    label="Region"
                    placeholder="Select a region"
                    options={regionOptions}
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
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
                label="Image url"
                placeholder="Image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
        </Form>
    );
}

export default AddDestination;
