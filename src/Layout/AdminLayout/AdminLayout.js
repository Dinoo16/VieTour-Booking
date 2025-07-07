import classNames from 'classnames/bind';
import styles from './AdminLayout.module.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import PropTypes from 'prop-types';
import HeaderMenu from '~/components/HeaderMenu/HeaderMenu';
import icons from '~/assets/icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    const [title, setTitle] = useState('Dashboard');

    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className={cx('layout')}>
            <Sidebar onTitleChange={setTitle} className={cx({ hidden: !isExpanded })} />

            <div className={cx('main')}>
                <div className={cx('header')}>
                    <div className={cx('header-left')}>
                        <button className={cx('expand-button')} onClick={() => setIsExpanded(!isExpanded)}>
                            {isExpanded ? <icons.expand /> : <icons.expandOpen />}
                        </button>
                        <h2 className={cx('heading')}>{title}</h2>
                    </div>
                    <HeaderMenu color border isWrap />
                </div>

                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

AdminLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdminLayout;
