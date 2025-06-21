import classNames from 'classnames/bind';
import styles from './Tours.module.scss';
import PropTypes from 'prop-types';
import Button from '~/components/Button/Button';
import icons from '~/assets/icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Tours({ items = [], onclick }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div>
                    <h4 className={cx('label')}>TOUR</h4>
                    <h1 className={cx('title')}>Our Trending Tour Packages</h1>
                </div>
                <div className={cx('button')}>
                    <Button outline rounded to="/tour">
                        See More Tours <icons.arrow_right />
                    </Button>
                </div>
            </div>

            <div className={cx('list')}>
                {items.map((item, index) => (
                    <div key={index} className={cx('card')} onClick={() => onclick && onclick(item)}>
                        <div className={cx('image-wrapper')}>
                            <img src={item.image} alt={item.title} />
                            <div className={cx('overlay')}>
                                <Button primary small>
                                    Book Now
                                </Button>
                            </div>
                        </div>
                        <div className={cx('info')}>
                            <div className={cx('title-wrapper')}>
                                <h3 className={cx('tour-name')}>{item.title}</h3>
                                <span className={cx('rating')}>
                                    <icons.rating />
                                    {item.rating}
                                </span>
                            </div>

                            <div className={cx('meta')}>
                                <span className={cx('destination')}>
                                    <icons.location />
                                    {item.destination}
                                </span>
                                <div className={cx('price')}>
                                    <span className={cx('old-price')}>${item.oldPrice}</span>
                                    <span className={cx('new-price')}>${item.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

Tours.propTypes = {
    items: PropTypes.array.isRequired,
    onclick: PropTypes.func.isRequired,
};

export default Tours;
