import classNames from 'classnames/bind';
import styles from './Gallery.module.scss';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Slider({ id, images, direction }) {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        setSlides([...images, ...images, ...images]);
    }, [images]);

    return (
        <div className={cx('slider')} id={id}>
            <div className={cx('slider-track', direction === 'right' ? 'scrollRight' : 'scrollLeft')}>
                {slides.map((src, index) => (
                    <div key={index} className={cx('slide')}>
                        <img src={src} alt={`slider-${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
Slider.propTypes = {
    id: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    direction: PropTypes.string.isRequired,
};

export default Slider;
