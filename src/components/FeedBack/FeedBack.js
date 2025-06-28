import classNames from 'classnames/bind';
import styles from './FeedBack.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function FeedBack({item}) {    
    return (
        <div className={cx('card')}>
        <div className={cx('avatar')}>
            <img src={item.avatar} alt={item.name} />
        </div>
        <div className={cx('content')}>
            <div className={cx('stars')}>{'★'.repeat(item.stars)}</div>
            <p className={cx('feedback')}>“{item.content}”</p>
            <p className={cx('author')}>
                {item.name} - {item.role}
            </p>
        </div>
    </div>
    )
}

FeedBack.propTypes = {
    item: PropTypes.object.isRequired,
};


export default FeedBack;