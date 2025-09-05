import PropTypes from 'prop-types';

function MenuItem({ icon: Icon, title, active, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`w-full h-full flex flex-1 justify-center items-center gap-[14px] cursor-pointer 
        ${active ? 'bg-white' : ''}`}
        >
            <Icon className="hidden s:block text-black w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <span className="text-black font-bold text-xs sm:text-base md:text-xl">{title}</span>
        </div>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    active: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

export default MenuItem;
