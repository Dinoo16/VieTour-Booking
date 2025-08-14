import TextInput from '../components/Input/TextInput';
import TextareaField from '../components/Input/TextareaField';
import Form from '../components/Form/Form';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TOURS } from '~/data/Tour/Tour';

function EditTourPlan() {
    const { id } = useParams();
    const tour = TOURS.find((t) => t.id === parseInt(id));

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the data
    };
    return (
        <Form title="Update Tour Plan" onSubmit={handleSubmit}>
            <TextInput label="Day 1" placeholder="Number" />
            <TextInput label="Title" placeholder="Title" />
            <TextareaField label="Content" placeholder="Enter content..." />
        </Form>
    );
}

export default EditTourPlan;
