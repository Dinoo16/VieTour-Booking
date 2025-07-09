import classNames from 'classnames/bind';
import styles from './Tour.module.scss';
import TextInput from '../components/Input/TextInput';
import TextareaField from '../components/Input/TextareaField';
import FileDropzone from '../components/FileDropzone/FileDropzone';
import Select from '../components/Select/Select';
import Form from '../components/Form/Form';
import TourPlan from '../components/TourPlan/TourPlan';
import { CATEGORIES } from '~/data/Category/Category';
import { DESTINATIONS } from '~/data/Dashboard/Destination';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AddTour() {
    const [destination, setDestination] = useState('');
    const [category, setCategory] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the data
    };
    return (
        <Form
            title="Add Tour"
            onSubmit={handleSubmit}
            rightPanel={
                <>
                    <Select
                        label="Destination"
                        placeholder="Select a destination"
                        options={DESTINATIONS}
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                    <Select
                        label="Category"
                        placeholder="Select categories"
                        options={CATEGORIES}
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </>
            }
            bottomRightPanel={
                <TourPlan title={'Tour Plan'}>
                    <TextInput label="Day 1" placeholder="Title" />
                    <TextareaField label="Description" placeholder="Enter a description..." />
                </TourPlan>
            }
        >
            <TextInput label="Tour title" placeholder="Tour title" />
            <TextInput label="Departure" placeholder="Departure" />
            <div className={cx('timeRow')}>
                <TextInput label="Departure Time" placeholder="Departure Time" />
                <TextInput label="Return Time" placeholder="Return Time" />
            </div>
            <div className={cx('timeRow')}>
                <TextInput label="Price" placeholder="Price" />
                <TextInput label="Duration" placeholder="Duration" />
            </div>
            <TextareaField label="Description" placeholder="Enter a description..." />
            <FileDropzone />
        </Form>
    );
}

export default AddTour;
