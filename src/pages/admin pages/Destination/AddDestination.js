import classNames from 'classnames/bind';
import styles from './Destination.module.scss';
import TextInput from '../components/Input/TextInput';
import TextareaField from '../components/Input/TextareaField';
import FileDropzone from '../components/FileDropzone/FileDropzone';
import Select from '../components/Select/Select';
import Form from '../components/Form/Form';
import { useState } from 'react';

const cx = classNames.bind(styles);

const regionOptions = [
    { title: 'Northern', value: 'northern' },
    { title: 'Central', value: 'central' },
    { title: 'Southern', value: 'southern' },
];
function AddDestination() {
    const [region, setRegion] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the data
    };
    return (
        <Form
            title="Add Destination"
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
            <TextInput label="Destination name" placeholder="Destination name" />
            <TextareaField label="Description" placeholder="Enter a description..." />
            <FileDropzone />
        </Form>
    );
}

export default AddDestination;
