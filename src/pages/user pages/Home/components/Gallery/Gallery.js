import images from '~/assets/images';
import Slider from './Slider';

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
        <div className="pt-[120px] text-center">
            <h4 className="text-[var(--primary)] font-bold text-2xl mb-2 uppercase">EXPLORE MORE</h4>
            <h1 className="text-4xl sm:text-[48px] font-[var(--font-family-header)] text-[var(--header-color)] mb-14">
                Recent Gallery
            </h1>

            {/* slider-container */}
            <div className="relative flex flex-col gap-6 before:content-[''] before:absolute before:left-0 before:top-0 before:w-5 before:h-full before:z-[1] before:bg-gradient-to-r before:from-white/50 before:to-transparent after:content-[''] after:absolute after:right-0 after:top-0 after:w-5 after:h-full after:z-[1] after:bg-gradient-to-l after:from-white/50 after:to-transparent">
                {PHOTOS.map((slider) => (
                    <Slider key={slider.id} id={slider.id} images={slider.images} direction={slider.direction} />
                ))}
            </div>
        </div>
    );
}

export default Gallery;
