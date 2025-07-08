import classNames from 'classnames/bind';
import styles from './Promotion.module.scss';

import images from '~/assets/images';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function Promotion() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('promo-box')} style={{ backgroundImage: `url(${images.promotion_banner})` }}>
                <div className={cx('overlay')}>
                    <p className={cx('label')}>PROMOTION</p>
                    <h2 className={cx('title')}>Explore Nature</h2>
                    <div className={cx('button')}>
                        <Button transparent primary>
                            Explore Tours
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cx('promo-box')} style={{ backgroundImage: `url(${images.destination_3})` }}>
                <div className={cx('overlay')}>
                    <p className={cx('label')}>PROMOTION</p>
                    <h2 className={cx('title')}>Explore Cities</h2>
                    <div className={cx('button')}>
                        <Button transparent primary>
                            Explore Tours
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Promotion;
