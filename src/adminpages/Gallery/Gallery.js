import classNames from 'classnames/bind';
import styles from './Gallery.module.scss';
const cx = classNames.bind(styles); 

function Gallery() {
  return (
    <div className={cx('wrapper')}>
        Gallery
    </div>
  )
}

export default Gallery;