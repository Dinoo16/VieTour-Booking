import classNames from 'classnames/bind';
import styles from './Gallery.module.scss';
import TextInput from '../components/Input/TextInput';
import Form from '../components/Form/Form';
import FileDropzone from '../components/FileDropzone/FileDropzone';

const cx = classNames.bind(styles);

function AddGallery() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the data
    };
    return (
        <Form title="Add Tour" onSubmit={handleSubmit}>
            <TextInput label="Tour title" placeholder="Tour title" />
            <FileDropzone />
        </Form>
    );
}

export default AddGallery;
