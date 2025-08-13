import classNames from 'classnames/bind';
import styles from './Destination.module.scss';
import Button from '~/components/Button/Button';
import ConfirmDialog from '~/components/Dialog/ConfirmDialog';
import icons from '~/assets/icons';
import { CATEGORIES_COLUMN } from '~/data/Category/Category';
import Table from '../components/Table/Table';
import routesConfig from '~/config/routes';
import { useDestinations } from '~/hooks/useDestinations';
import { useCategories } from '~/hooks/useCategories';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDeleteDestination } from '~/hooks/useDestinations';
import { useDeleteCategory } from '~/hooks/useCategories';

const cx = classNames.bind(styles);

function Destination() {
    const navigate = useNavigate();
    const DESTINATION_COLUMNS = [
        {
            header: 'Id',
            accessor: 'id',
        },
        {
            header: 'Image',
            accessor: 'backgroundImage',
            render: (value) => (
                <img
                    src={value}
                    alt="destination"
                    style={{ width: 40, height: 40, borderRadius: 8, objectFit: 'cover' }}
                />
            ),
        },
        {
            header: 'Name',
            accessor: 'name',
        },
        {
            header: 'Region',
            accessor: 'regionId',
        },
        {
            header: 'Number Of Tours',
            accessor: 'tourIds',
            render: (tourIds) => tourIds?.length || 0,
        },
        {
            header: 'Edit',
            accessor: 'id',
            render: (id) => (
                <button onClick={() => handleEdit(id)} className={cx('edit-btn')}>
                    <icons.penIcon />
                </button>
            ),
        },
        {
            header: 'Delete',
            accessor: 'id',
            render: (id) => (
                <button onClick={() => handleDeleteClick(id)} className={cx('delete-btn')}>
                    <icons.remove />
                </button>
            ),
        },
    ];
    const CATEGORIES_COLUMN = [
        {
            header: 'Id',
            accessor: 'id',
        },
        {
            header: 'Image',
            accessor: 'image',
            render: (value) => (
                <img
                    src={value}
                    alt="category"
                    style={{ width: 40, height: 40, borderRadius: 8, objectFit: 'cover' }}
                />
            ),
        },
        {
            header: 'Name',
            accessor: 'name',
        },
        {
            header: 'Edit',
            accessor: 'id',
            render: (id) => (
                <button onClick={() => handleCategoryEdit(id)} style={{ backgroundColor: 'transparent' }}>
                    <icons.penIcon />
                </button>
            ),
        },
        {
            header: 'Delete',
            accessor: 'id',
            render: (id) => (
                <button onClick={() => handleDeleteCategoryClick(id)} style={{ backgroundColor: 'transparent' }}>
                    <icons.remove />
                </button>
            ),
        },
    ];

    const { data: destinations = [], isDestinationsLoading } = useDestinations();
    const { data: categories = [], isCategoriesLoading } = useCategories();
    const { mutate: deleteDestinationMutate } = useDeleteDestination();
    const { mutate: deleteCategoryMutate } = useDeleteCategory();
    const [deleteId, setDeleteId] = useState(null);
    const [categoryDeleteId, setCategoryDeleteId] = useState(null);
    // Handle delete Destination
    const handleDeleteClick = (id) => {
        setDeleteId(id);
    };
    const handleConfirmDelete = () => {
        deleteDestinationMutate(deleteId);
        setDeleteId(null);
    };

    const handleCancelDelete = () => {
        setDeleteId(null);
    };

    // Handle delete Category
    const handleDeleteCategoryClick = (id) => {
        setCategoryDeleteId(id);
    };
    const handleCategoryConfirmDelete = () => {
        deleteCategoryMutate(categoryDeleteId);
        setCategoryDeleteId(null);
    };

    const handleCategoryCancelDelete = () => {
        setCategoryDeleteId(null);
    };

    // Handle Update Destination
    const handleEdit = (id) => {
        console.log('Edit destination with id:', id);
        // Navigate to update destination
        navigate(`/admin/destination/edit/${id}`);
    };

    // Handle Update Category
    const handleCategoryEdit = (id) => {
        navigate(`/admin/category/edit/${id}`);
    };

    if (isDestinationsLoading) {
        return <p>Loading destinations...</p>;
    }
    if (isCategoriesLoading) {
        return <p>Loading categories...</p>;
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('add-destination')}>
                    <h2 className={cx('title')}>New Destination</h2>
                    <Button primary small leftIcon={<icons.add />} to={routesConfig.adminAddDestination}>
                        Add Destination
                    </Button>
                </div>
                <div className={cx('destination-list')}>
                    <Table columns={DESTINATION_COLUMNS} data={destinations} />
                </div>
            </div>

            <div className={cx('category')}>
                <div className={cx('add-category')}>
                    <h2 className={cx('title')}>Categories</h2>
                    <Button primary small leftIcon={<icons.add />} to={routesConfig.adminAddCategory}>
                        New
                    </Button>
                </div>
                <div className={cx('category-list')}>
                    <Table columns={CATEGORIES_COLUMN} data={categories} />
                </div>
            </div>
            <ConfirmDialog
                isOpen={!!deleteId}
                title="Confirm Delete"
                message="Are you sure you want to delete this destination? This action cannot be undone."
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
            />
            <ConfirmDialog
                isOpen={!!categoryDeleteId}
                title="Confirm Delete"
                message="Are you sure you want to delete this category? This action cannot be undone."
                onConfirm={handleCategoryConfirmDelete}
                onCancel={handleCategoryCancelDelete}
            />
        </div>
    );
}

export default Destination;
