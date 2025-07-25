import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ icon: Icon, title, isActive }) {
    return (
        <div className={cx('item', { active: isActive })}>
            <Icon className={cx('icon')} />
            <span className={cx('title')}>{title}</span>
        </div>
    );
}

export default MenuItem;
