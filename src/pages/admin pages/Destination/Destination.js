import classNames from 'classnames/bind';
import styles from './Destination.module.scss';
import Button from '~/components/Button/Button';
import icons from '~/assets/icons';
import { CATEGORIES_COLUMN } from '~/data/Category/Category';
import Table from '../components/Table/Table';
import routesConfig from '~/config/routes';
import { useEffect, useState } from 'react';
import { getAllCategories } from '~/apiServices/categoriesService';
import { getAllDestinations } from '~/apiServices/destinationService';

const cx = classNames.bind(styles);

function Destination() {
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
            accessor: 'edit',
            render: (id) => (
                <button onClick={() => handleEdit(id)}>
                    <icons.penIcon />
                </button>
            ),
        },
        {
            header: 'Delete',
            accessor: 'delete',
            render: (id) => (
                <button onClick={() => handleDelete(id)}>
                    <icons.remove />
                </button>
            ),
        },
    ];

    const handleEdit = (id) => {
        console.log('Edit destination with id:', id);
        // Điều hướng hoặc mở modal sửa destination
    };

    const handleDelete = (id) => {
        console.log('Delete destination with id:', id);
        // Gọi API xóa rồi cập nhật lại danh sách destinations
    };
    const [categories, setCategories] = useState([]);
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getAllCategories();
                console.log('Categories: ', data);
                setCategories(data);
            } catch (error) {
                console.log('Failed to fetch all categories:', error);
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const data = await getAllDestinations();
                console.log('Destinations: ', data);
                setDestinations(data);
            } catch (error) {
                console.log('Failed to fetch all destinations:', error);
            }
        };
        fetchDestinations();
    }, []);

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
        </div>
    );
}

export default Destination;
