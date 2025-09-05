import PropTypes from 'prop-types';

function MenuItem({ icon: Icon, title }) {
    return (
        <div className="flex justify-center items-center flex-1 gap-[14px] cursor-pointer">
            <Icon className="text-black w-6 h-6" />
            <span className="bg-black font-bold text-[20px]">{title}</span>
        </div>
    );
}
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
};

export default MenuItem;
