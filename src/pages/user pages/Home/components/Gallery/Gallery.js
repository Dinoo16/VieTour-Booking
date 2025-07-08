import classNames from 'classnames/bind';
import styles from './Gallery.module.scss';
import images from '~/assets/images';
import Slider from './Slider';

const cx = classNames.bind(styles);

const PHOTOS = [
    {
        id: 'slider1',
        images: [images.aboutusbg, images.aboutusbg, images.aboutusbg, images.aboutusbg, images.aboutusbg],
        direction: 'left',
    },

    {
        id: 'slider2',
        images: [images.gallery, images.gallery, images.gallery, images.gallery, images.gallery],
        direction: 'right',
    },
    {
        id: 'slider3',
        images: [images.homebg, images.homebg, images.homebg, images.homebg, images.homebg],
        direction: 'left',
    },
];

function Gallery() {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('label')}>EXPLORE MORE</h4>
            <h1 className={cx('title')}>Recent Gallery</h1>

            <div className={cx('slider-container')}>
                {PHOTOS.map((slider) => {
                    return <Slider key={slider.id} images={slider.images} direction={slider.direction} />;
                })}
            </div>
        </div>
    );
}

export default Gallery;
