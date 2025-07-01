import classNames from 'classnames/bind';
import styles from './AdminDashboard.module.scss';

const cx = classNames.bind(styles);

const AdminDashboard = () => {
    return <div className={cx('wrapper')}>
        <h1>AdminDashboard content</h1>
    </div>;
};

export default AdminDashboard;