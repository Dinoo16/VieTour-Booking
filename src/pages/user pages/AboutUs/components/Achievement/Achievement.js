import classNames from 'classnames/bind';
import styles from './Achievement.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Achievement({items =[]}) {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('label')}>Achievement</h4>
            <h1 className={cx('title')}>Our Achievements</h1>

            <div className={cx('content')}>
            {items.map((item, index) => (
          <div key={index} className={cx('item')}>
            <div className={cx('outer-ring')}>
    <div className={cx('circle')}>
      <span className={cx('number')}>{item.number}</span>
      <span className={cx('text')}>{item.label}</span>
    </div>
    <div className={cx('dot-container')}><span className={cx('dot')} /></div>
  </div>
          </div>
        ))}
            </div>
        </div>
    );
}
Achievement.propTypes = {
    items: PropTypes.array,
};
export default Achievement;