import classNames from 'classnames/bind';
import styles from './GuideInfo.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function GuideInfo({ guide }) {
    if (!guide) return <div className="guide-info">No guide selected</div>;
    return (
        <div className={cx('guide-info')}>
            <div className={cx('background')}></div>
            <div className={cx('content')}>
                <img src={guide.avatar} alt={guide.title} className={cx('image')} />
                <div className={cx('guide-details')}>
                    <div className={cx('guide-header')}>
                        <h3 className={cx('name')}>{guide.name}</h3>
                        <span className={cx('role')}>{guide.role}</span>
                    </div>
                    <div className={cx('contacts')}>
                        <p className={cx('email')}>{guide.email}</p>
                        <p className={cx('phone')}>{guide.phoneNo}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

GuideInfo.propTypes = {
    guide: PropTypes.string.isRequired,
};

export default GuideInfo;
