import classNames from 'classnames/bind';
import styles from './Destination.module.scss';
import Calendar from '../components/Calendar/Calendar';
import Button from '~/components/Button/Button';
import icons from '~/assets/icons';
import { DESTINATIONS, DESTINATION_COLUMNS } from '~/data/Dashboard/Destination';
import Table from '../components/Table/Table';

const cx = classNames.bind(styles);

function Destination() {
    return <div className={cx('wrapper')}>
        <div className={cx('content')}>
            <div className={cx('add-destination')}>
                <h2>New Destination</h2>
                <Button primary small leftIcon={<icons.add />}> Add Destination</Button>
            </div>
            <div className={cx('destination-list')}>
                <Table columns={DESTINATION_COLUMNS} data={DESTINATIONS} />
            </div>
        </div>

        <div className={cx('calendar')}>
            <Calendar />
            <div className={cx('recent-activities')}>
                <h3 className={cx('heading')}>Recent Activities</h3>
            </div>
        </div>

    </div>;
}

export default Destination;