import classNames from 'classnames/bind';
import TextInput from '../components/Input/TextInput';
import TextareaField from '../components/Input/TextareaField';
import FileDropzone from '../components/FileDropzone/FileDropzone';
import Form from '../components/Form/Form';

function AddCategory() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the data
    };
    return (
        <Form title="Add Category" onSubmit={handleSubmit}>
            <TextInput label="Category name" placeholder="Category name" />

            <TextareaField label="Description" placeholder="Enter a description..." />

            <FileDropzone />
        </Form>
    );
}

export default AddCategory;
