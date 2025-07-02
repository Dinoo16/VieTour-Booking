import classNames from 'classnames/bind';
import styles from './Traveler.module.scss';
const cx = classNames.bind(styles); 

function Traveler() {
  return (
    <div className={cx('wrapper')}>
        Traveler
    </div>
  )
}

export default Traveler;