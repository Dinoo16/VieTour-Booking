import classNames from 'classnames/bind';
import styles from './Gallery.module.scss';
import images from '~/assets/images';
import icons from '~/assets/icons';
import GalleryCard from './GalleryCard/GalleryCard';
import SearchInput from '~/components/Search/SearchInput';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

const GALLERY = [
    {
        src: images.gallery,
        title: 'Hanoi',
    },
    {
        src: images.gallery_1,
        title: 'Hanoi',
    },
    {
        src: images.gallery_2,
        title: 'Hanoi',
    },
    {
        src: images.gallery_3,
        title: 'Hanoi',
    },
    {
        src: images.gallery,
        title: 'Hanoi',
    },
    {
        src: images.gallery_1,
        title: 'Hanoi',
    },
    {
        src: images.gallery_2,
        title: 'Hanoi',
    },
    {
        src: images.gallery_3,
        title: 'Hanoi',
    },
    {
        src: images.gallery,
        title: 'Hanoi',
    },
    {
        src: images.gallery_1,
        title: 'Hanoi',
    },
    {
        src: images.gallery_2,
        title: 'Hanoi',
    },
    {
        src: images.gallery_3,
        title: 'Hanoi',
    },
];

function Gallery() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('topbar')}>
                <div className={cx('left')}>
                    <SearchInput placeholder="Search Tour, Destination..." />
                </div>
                <div className={cx('right')}>
                    <div className={cx('sort')}>
                        Sort By:
                        {/* <Dropdown label="Name" /> */}
                    </div>
                    <Button leftIcon={<icons.add />} primary small>
                        Add Image
                    </Button>
                </div>
            </div>

            <div className={cx('grid')}>
                {GALLERY.map((img, index) => (
                    <GalleryCard key={index} gallery={img} />
                ))}
            </div>
        </div>
    );
}

export default Gallery;
