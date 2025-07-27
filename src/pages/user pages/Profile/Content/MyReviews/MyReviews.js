import classNames from 'classnames/bind';
import styles from './MyReviews.module.scss';
import icons from '~/assets/icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function MyReviews() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <icons.booking />
                <h2 className={cx('title')}>My Reviews </h2>
            </div>
            <div className={cx('content')}>
                <img src={images.trips} alt={images.trips} />
                <div className={cx('desc')}>
                    <h2 className={cx('text')}>Where to next?</h2>
                    <span>You haven’t started any trips yet. When you’ve made a booking, it will appear here.</span>
                </div>
            </div>
        </div>
    );
}

export default MyReviews;
