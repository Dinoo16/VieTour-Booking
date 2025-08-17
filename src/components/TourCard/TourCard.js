import classNames from 'classnames/bind';
import styles from './TourCard.module.scss';
import PropTypes from 'prop-types';
import Button from '~/components/Button/Button';
import icons from '~/assets/icons';

const cx = classNames.bind(styles);

function TourCard({ images, title, destination, rating, oldPrice, price, onclick }) {
    return (
        <div className={cx('card')} onClick={() => onclick && onclick()}>
            <div className={cx('image-wrapper')}>
                <img src={images} alt={title} />
                <div className={cx('overlay')}>
                    <Button primary small>
                        Book Now
                    </Button>
                </div>
            </div>
            <div className={cx('info')}>
                <div className={cx('title-wrapper')}>
                    <h3 className={cx('tour-name')}>{title}</h3>
                    <span className={cx('rating')}>
                        <icons.rating />
                        {rating}
                        (123 reviews)
                    </span>
                </div>

                <div className={cx('meta')}>
                    <span className={cx('destination')}>
                        <icons.location />
                        {destination}
                    </span>
                    <div className={cx('price')}>
                        <span className={cx('old-price')}>${oldPrice}</span>
                        <span className={cx('new-price')}>${price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

TourCard.propTypes = {
    images: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    oldPrice: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
};

export default TourCard;
