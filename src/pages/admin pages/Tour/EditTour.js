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
import { useParams } from 'react-router-dom';
import { TOURS } from '~/data/Tour/Tour';

const cx = classNames.bind(styles);

function EditTour() {
    const { id } = useParams();
    const tour = TOURS.find((t) => t.id === parseInt(id));

    const [destination, setDestination] = useState(tour?.destination || '');
    const [category, setCategory] = useState(tour?.category || '');
    const [title, setTitle] = useState(tour?.title || '');
    const [departure, setDepature] = useState(tour?.departure || '');
    const [departureTime, setDepatureTime] = useState(tour?.departureTime || '');
    const [returnTime, setReturnTime] = useState(tour?.returnTime || '');
    const [price, setPrice] = useState(tour?.price || '');
    const [duration, setDuration] = useState(tour?.duration || '');
    const [description, setDescription] = useState(tour?.description || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the data
    };
    return (
        <Form
            title="Edit Tour"
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
            <TextInput
                label="Tour title"
                placeholder="Tour title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextInput
                label="Departure"
                placeholder="Departure"
                value={departure}
                onChange={(e) => setDepature(e.target.value)}
            />
            <div className={cx('timeRow')}>
                <TextInput
                    label="Departure Time"
                    placeholder="Departure Time"
                    value={departureTime}
                    onChange={(e) => setDepatureTime(e.target.value)}
                />
                <TextInput
                    label="Return Time"
                    placeholder="Return Time"
                    value={returnTime}
                    onChange={(e) => setReturnTime(e.target.value)}
                />
            </div>
            <div className={cx('timeRow')}>
                <TextInput label="Price" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <TextInput
                    label="Duration"
                    placeholder="Duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
            </div>
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

export default EditTour;
