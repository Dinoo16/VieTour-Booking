import PropTypes from 'prop-types';
import Button from '~/components/Button/Button';
import icons from '~/assets/icons';
import TourCard from '~/components/TourCard/TourCard';

function Tours({ items = [], onclick }) {
    return (
        <div className="pt-[120px]">
            {/* Header */}
            <div className="flex justify-between items-center mb-14">
                <div>
                    <h4 className="text-[var(--primary)] font-bold text-2xl mb-[14px] uppercase">TOUR</h4>
                    <h1 className="text-4xl sm:text-[48px] font-[var(--font-family-header)] text-[var(--header-color)] tracking-[0.5px]">
                        Our Trending Tour Packages
                    </h1>
                </div>
                <div>
                    <Button outline rounded to="/tour" rightIcon={<icons.arrow_right />}>
                        See More Tours
                    </Button>
                </div>
            </div>

            {/* TOURS LIST */}
            <div className="grid grid-cols-1 s:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10">
                {items.map((item, index) => (
                    <TourCard
                        key={index}
                        images={item.backgroundImage}
                        title={item.title}
                        destination={item.destinationName}
                        rating={item.rating}
                        oldPrice={item.oldPrice}
                        price={item.price}
                        onclick={() => onclick(item)}
                    />
                ))}
            </div>
        </div>
    );
}

Tours.propTypes = {
    items: PropTypes.array.isRequired,
    onclick: PropTypes.func.isRequired,
};

export default Tours;
