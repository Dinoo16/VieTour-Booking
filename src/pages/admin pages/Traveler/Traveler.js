import classNames from 'classnames/bind';
import styles from './Traveler.module.scss';
import Table from '~/pages/admin pages/components/Table/Table';
import { USERS, USER_COLUMNS } from '~/data/Dashboard/User';
import Pagination from '~/pages/admin pages/components/Pagination/Pagination';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Traveler() {
    const [page, setPage] = useState(1);
    return (
        <div className={cx('wrapper')}>
            <Table columns={USER_COLUMNS} data={USERS} />
            <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />
        </div>
    );
}

export default Traveler;
