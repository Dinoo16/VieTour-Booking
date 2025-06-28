import PropTypes from 'prop-types';
import Button from '~/components/Button/Button';
import icons from '~/assets/icons';
import styles from './Tours.module.scss';
import classNames from 'classnames/bind';
import TourCard from '~/components/TourCard/TourCard';

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
            {/* TOURS LIST */}
            <div className={cx('list')}>
                {items.map((item, index) => (
                    <TourCard
                        key={index}
                        images={item.image}
                        title={item.title}
                        destination={item.destination}
                        rating={item.rating}
                        oldPrice={item.oldPrice}
                        price={item.price}
                        onclick={onclick}
                    />
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
