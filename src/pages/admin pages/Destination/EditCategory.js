import TextInput from '../components/Input/TextInput';
import TextareaField from '../components/Input/TextareaField';
import Form from '../components/Form/Form';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCategory, useUpdateCategory } from '~/hooks/useCategories';

function EditCategory() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: categoryData, isCategoryLoading } = useCategory(id);
    const updateCategory = useUpdateCategory();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        if (categoryData) {
            setName(categoryData.name || '');
            setDescription(categoryData.description || '');
            setImage(categoryData.image || '');
        }
    }, [categoryData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Fill form data
        const updateData = {
            categoryId: id,
            name,
            description,
            image,
        };

        // Call api
        updateCategory.mutate(updateData, {
            onSuccess: (responseData) => {
                console.log('Update succsessfully: ', responseData);
                navigate('/admin/destination');
            },
            onError: (error) => {
                console.error('Lỗi khi update:', error);
                alert(`Update failed: ${error.response?.data?.message || error.message}`);
            },
        });
    };
    if (isCategoryLoading) return <p>Loading...</p>;
    return (
        <Form title="Update Category" onSubmit={handleSubmit}>
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

export default EditCategory;
