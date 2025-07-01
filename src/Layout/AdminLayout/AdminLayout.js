import classNames from 'classnames/bind';
import styles from './AdminLayout.module.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import PropTypes from 'prop-types';
import HeaderMenu from '~/components/HeaderMenu/HeaderMenu';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    const [title, setTitle] = useState('Dashboard');

    return <div className={cx('wrapper')}>
        <Sidebar onTitleChange={setTitle} />
        <div className={cx('content')}>
            <div className={cx('header')}>
                <h2 className={cx('heading')}>{title}</h2>
               <HeaderMenu color border isWrap/>
            </div>
            {children}
        </div>
    </div>;
}

AdminLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdminLayout;