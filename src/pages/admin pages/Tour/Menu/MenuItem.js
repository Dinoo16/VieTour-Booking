import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import icons from '~/assets/icons';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function MenuItem({ item, isActive, onClick }) {
    return (
        <div className={cx('item', { active: isActive })} onClick={onClick}>
            <img src={item.backgroundImage} alt={item.title} />
            <div className={cx('info')}>
                <h3 className={cx('title')}>{item.title}</h3>
                <div className={cx('meta')}>
                    <span className={cx('destination')}>
                        <icons.location2 />
                        {item.destination}
                    </span>
                    <span className={cx('duration')}>{item.duration}</span>
                </div>
                <div className={cx('price-rating')}>
                    <span className={cx('rating')}>
                        <icons.star />
                        {item.rating}
                    </span>
                    <span className={cx('price')}>
                        {' '}
                        <span className={cx('unit')}>$</span>
                        {item.price}
                    </span>
                </div>
            </div>
        </div>
    );
}

MenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    isActive: PropTypes.bool.isRequired,
};

export default MenuItem;
