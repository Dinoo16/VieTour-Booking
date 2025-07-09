import classNames from 'classnames/bind';
import styles from './Destination.module.scss';
import TextInput from '../components/Input/TextInput';
import TextareaField from '../components/Input/TextareaField';
import FileDropzone from '../components/FileDropzone/FileDropzone';
import Select from '../components/Select/Select';
import Form from '../components/Form/Form';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { DESTINATIONS } from '~/data/Dashboard/Destination';

const cx = classNames.bind(styles);

const regionOptions = [
    { title: 'Northern', value: 'northern' },
    { title: 'Central', value: 'central' },
    { title: 'Southern', value: 'southern' },
];

function EditDestination() {
    const { id } = useParams();
    const destination = DESTINATIONS.find((t) => t.id === parseInt(id));

    const [name, setName] = useState(destination?.name || '');
    const [description, setDescription] = useState(destination?.description || '');
    const [region, setRegion] = useState(destination?.region || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the data
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
            <FileDropzone />
        </Form>
    );
}

export default EditDestination;
