import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Slider({ id, images, direction }) {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        setSlides([...images, ...images, ...images]); // nhân 3 lần để scroll mượt
    }, [images]);

    return (
        <div id={id} className="relative w-full h-[calc(150px+10px)] overflow-hidden">
            <div
                className={`absolute top-0 flex ${
                    direction === 'right' ? 'animate-scrollRight' : 'animate-scrollLeft'
                }`}
            >
                {slides.map((src, index) => (
                    <div key={index} className="w-[320px] h-[150px] rounded-lg mx-[10px] shadow-md overflow-hidden">
                        <img
                            src={src}
                            alt={`slider-${index + 1}`}
                            className="w-full h-full object-cover object-center rounded-lg transition-transform duration-500 ease-in-out select-none hover:rotate-2 hover:scale-120"
                        />
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
