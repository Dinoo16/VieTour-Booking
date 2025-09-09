import classNames from 'classnames/bind';
import styles from './Tour.module.scss';
import { useNavigate } from 'react-router-dom';
import TextInput from '../components/Input/TextInput';
import TextareaField from '../components/Input/TextareaField';
import Select from '../components/Select/Select';
import Form from '../components/Form/Form';
import { useEffect, useState } from 'react';
import MultiSelect from '../components/Select/MultiSelec';
import { useCreateTour } from '~/hooks/useTours';
import { useDestinations } from '~/hooks/useDestinations';
import { useCategories } from '~/hooks/useCategories';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';
import AvailableTimes from '../components/AvailableTimes/AvailableTimes';

const cx = classNames.bind(styles);

function AddTour() {
    const navigate = useNavigate();
    // Fetch destinations
    const { data: destinationData = [], isDestinationLoading } = useDestinations();
    const [destinationName, setDestinationName] = useState('');
    const [destinationOptions, setDestinationOptions] = useState([]);

    useEffect(() => {
        setDestinationOptions(
            destinationData.map((d) => ({
                value: d.name,
                label: d.name,
            })),
        );
    }, [destinationData]);

    // Fetch categories
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [categoryNames, setCategoryNames] = useState([]);
    const { data: categoryData = [], isCategoryLoading } = useCategories();

    useEffect(() => {
        setCategoryOptions(
            categoryData.map((c) => ({
                id: c.id,
                name: c.name,
            })),
        );
    }, [categoryData]);

    // Other tour fields
    const [title, setTitle] = useState('');
    const [departure, setDeparture] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);
    const [duration, setDuration] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [backgroundImage, setBackgroundImage] = useState('');

    // hook call api create tour
    const { mutate: createTour, isLoading } = useCreateTour();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the data

        const tourData = {
            title,
            description,
            departure,
            availableTimes,
            duration,
            price,
            backgroundImage,
            destinationName,
            categoryNames,
        };

        // call api
        createTour(tourData, {
            onSuccess: () => {
                navigate('/admin/tour');
            },
        });
    };

    if (isDestinationLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    if (isCategoryLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    return (
        <Form
            title="Add Tour"
            onSubmit={handleSubmit}
            rightPanel={
                <>
                    <Select
                        label="Destination"
                        placeholder="Select a destination"
                        options={destinationOptions}
                        value={destinationName}
                        onChange={(e) => setDestinationName(e.target.value)}
                    />
                    <MultiSelect
                        label={'Category'}
                        options={categoryOptions}
                        selected={categoryNames}
                        setSelected={setCategoryNames}
                    />
                </>
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
                onChange={(e) => setDeparture(e.target.value)}
            />
            <AvailableTimes times={availableTimes} setTimes={setAvailableTimes} />
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
            <TextInput
                label="Image Url"
                placeholder="Insert Image Url"
                value={backgroundImage}
                onChange={(e) => setBackgroundImage(e.target.value)}
            />
        </Form>
    );
}

export default AddTour;
