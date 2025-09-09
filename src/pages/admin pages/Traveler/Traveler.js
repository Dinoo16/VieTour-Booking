import classNames from 'classnames/bind';
import styles from './Traveler.module.scss';
import Table from '~/pages/admin pages/components/Table/Table';
import { USERS, USER_COLUMNS } from '~/data/Dashboard/User';
import Pagination from '~/pages/admin pages/components/Pagination/Pagination';
import { useState } from 'react';
import { useUsers } from '~/hooks/useUsers';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';

const cx = classNames.bind(styles);

function Traveler() {
    const [page, setPage] = useState(1);
    const { data: usersData, isUserLoading } = useUsers();

    return (
        <div className={cx('wrapper')}>
            {isUserLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <Table columns={USER_COLUMNS} data={usersData} />
                    <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />
                </>
            )}
        </div>
    );
}

export default Traveler;
