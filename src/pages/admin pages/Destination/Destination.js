import classNames from 'classnames/bind';
import styles from './Destination.module.scss';
import Calendar from '../components/Calendar/Calendar';
import Button from '~/components/Button/Button';
import icons from '~/assets/icons';
import { DESTINATIONS, DESTINATION_COLUMNS } from '~/data/Dashboard/Destination';
import { CATEGORIES, CATEGORIES_COLUMN } from '~/data/Category/Category';
import Table from '../components/Table/Table';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

function Destination() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('add-destination')}>
                    <h2>New Destination</h2>
                    <Button primary small leftIcon={<icons.add />} to={routesConfig.adminAddDestination}>
                        Add Destination
                    </Button>
                </div>
                <div className={cx('destination-list')}>
                    <Table columns={DESTINATION_COLUMNS} data={DESTINATIONS} />
                </div>
            </div>

            <div className={cx('category')}>
                <div className={cx('add-category')}>
                    <h2>Categories</h2>
                    <Button primary small leftIcon={<icons.add />} to={routesConfig.adminAddDestination}>
                        New
                    </Button>
                </div>
                <div className={cx('category-list')}>
                    <Table columns={CATEGORIES_COLUMN} data={CATEGORIES} />
                </div>
            </div>
        </div>
    );
}

export default Destination;
