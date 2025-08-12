import classNames from 'classnames/bind';
import styles from './Destination.module.scss';
import TextInput from '../components/Input/TextInput';
import TextareaField from '../components/Input/TextareaField';
import Select from '../components/Select/Select';
import PropTypes from 'prop-types';
import Form from '../components/Form/Form';
import { useState, useEffect } from 'react';
import { getAllRegions } from '~/apiServices/regionService';
import { useCreateDestination } from '~/hooks/useDestinations';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function AddDestination() {
    const navigate = useNavigate();
    const [regionOptions, setRegionOptions] = useState([]);
    const [region, setRegion] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [backgroundImage, setBackgroundImage] = useState('');

    const { mutate: createDestination, isLoading } = useCreateDestination();

    useEffect(() => {
        const fetchRegions = async () => {
            try {
                const data = await getAllRegions();
                console.log('Regions: ', data);
                setRegionOptions(data.map((r) => ({ value: r.regionId, label: r.name })));
            } catch (error) {
                console.log('Failed to fetch all Regions:', error);
            }
        };
        fetchRegions();
    }, []);

    // add destination info
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const destinationData = {
            name,
            description,
            regionId: region,
            backgroundImage,
        };

        // call api
        createDestination(destinationData, {
            onSuccess: () => {
                navigate('/admin/destination');
            },
        });
    };

    if (isLoading) return <p>Loading...</p>;
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
                    onChange={(e) => setRegion(Number(e.target.value))}
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
                placeholder="Insert Image url"
                value={backgroundImage}
                onChange={(e) => setBackgroundImage(e.target.value)}
            />
        </Form>
    );
}
Select.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        }),
    ).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};
export default AddDestination;
