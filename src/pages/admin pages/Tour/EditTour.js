import classNames from 'classnames/bind';
import styles from './Tour.module.scss';
import TextInput from '../components/Input/TextInput';
import TextareaField from '../components/Input/TextareaField';
import Select from '../components/Select/Select';
import Form from '../components/Form/Form';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MultiSelect from '../components/Select/MultiSelec';
import { useTour } from '~/hooks/useTours';
import { useUpdateTour } from '~/hooks/useTours';
import { useDestinations } from '~/hooks/useDestinations';
import { useCategories } from '~/hooks/useCategories';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';

const cx = classNames.bind(styles);

function EditTour() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: tourData, isLoading } = useTour(id);
    const updateTour = useUpdateTour();

    // Fetch destinations
    const { data: destinationData } = useDestinations();
    const destinationOptions = destinationData ? destinationData.map((d) => ({ value: d.name, label: d.name })) : [];
    const [destinationName, setDestinationName] = useState('');

    // Fetch Categories
    const { data: categoryData } = useCategories();
    const categoryOptions = categoryData ? categoryData.map((c) => ({ id: c.id, name: c.name })) : [];
    const [categoryNames, setCategoryNames] = useState([]);
    // Other tour fields
    const [title, setTitle] = useState('');
    const [departure, setDeparture] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [returnTime, setReturnTime] = useState('');
    const [duration, setDuration] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        if (tourData) {
            setTitle(tourData.title);
            setDeparture(tourData.departure);
            setDepartureTime(tourData.departureTime);
            setReturnTime(tourData.returnTime);
            setDuration(tourData.duration);
            setPrice(tourData.price);
            setDescription(tourData.description);
            setBackgroundImage(tourData.backgroundImage);
            setDestinationName(tourData.destinationName);
            setCategoryNames(tourData.categoryNames);
        }
    }, [tourData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the data
        const updateData = {
            id,
            title,
            description,
            departure,
            departureTime,
            returnTime,
            duration,
            price,
            backgroundImage,
            destinationName,
            categoryNames,
        };

        updateTour.mutate(updateData, {
            onSuccess: (responseData) => {
                console.log('Update thành công:', responseData);
                navigate('/admin/tour');
            },
            onError: (error) => {
                console.error('Lỗi khi update:', error);
                alert(`Update failed: ${error.response?.data?.message || error.message}`);
            },
        });
    };

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    return (
        <Form
            title="Update Tour"
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
            <div className={cx('timeRow')}>
                <TextInput
                    label="Departure Time"
                    placeholder="Departure Time"
                    value={departureTime}
                    onChange={(e) => setDepartureTime(e.target.value)}
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
            <TextInput
                label="Image Url"
                placeholder="Insert Image Url"
                value={backgroundImage}
                onChange={(e) => setBackgroundImage(e.target.value)}
            />
        </Form>
    );
}

export default EditTour;
