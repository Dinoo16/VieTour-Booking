import TextInput from '../components/Input/TextInput';
import TextareaField from '../components/Input/TextareaField';
import Form from '../components/Form/Form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCreateCategory } from '~/hooks/useCategories';

function AddCategory() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const { mutate: createCategory, isLoading } = useCreateCategory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Fill form data
        const categoryData = {
            name,
            description,
            image,
        };

        // Call api
        createCategory(categoryData, {
            onSuccess: () => {
                navigate('/admin/destination');
            },
        });
    };
    if (isLoading) return <p>Loading...</p>;
    return (
        <Form title="Add Category" onSubmit={handleSubmit}>
            <TextInput
                label="Category name"
                placeholder="Category name"
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
                placeholder="Insert Image Url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
        </Form>
    );
}

export default AddCategory;
