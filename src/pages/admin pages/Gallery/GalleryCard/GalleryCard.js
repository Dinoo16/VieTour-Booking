import classNames from 'classnames/bind';
import styles from './GalleryCard.module.scss';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import icons from '~/assets/icons';

const cx = classNames.bind(styles);

const options = [{ label: 'View' }, { label: 'Edit' }, { label: 'Delete' }];

function GalleryCard({ gallery }) {
    const [visible, setVisible] = useState(false);
    return (
        <div className={cx('card')}>
            <img src={gallery.src} alt={gallery.title} className={cx('image')} />
            <div className={cx('info')}>
                <div className={cx('title')}>{gallery.title}</div>
                <div className={cx('location')}>
                    <span className={cx('icon')}>
                        <icons.location2 />
                    </span>
                    <span>{gallery.title}</span>
                </div>
            </div>

            <Tippy
                interactive={true}
                visible={visible}
                onClickOutside={() => setVisible(false)}
                placement="bottom-end"
                appendTo={document.body}
                render={(attrs) => (
                    <div className={cx('popover')} tabIndex="-1" {...attrs}>
                        <div className={cx('options')}>
                            <span>View</span>
                            <span>Edit</span>
                            <span>Delete</span>
                        </div>
                    </div>
                )}
            >
                <div className={cx('more')} onClick={() => setVisible(!visible)}>
                    <icons.more />
                </div>
            </Tippy>
        </div>
    );
}

GalleryCard.propTypes = {
    image: PropTypes.object.isRequired,
};

export default GalleryCard;
