import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function MenuItem({ icon: Icon, title }) {
    return (
        <div className="flex flex-1 items-center justify-start pl-[38px] gap-[10px] text-[var(--text-color)] border-b sm:border-r sm:border-b-0  border-[#e1e4e5] cursor-pointer">
            <Icon className="w-[21px] h-[21px] text-[var(--primary)] " />
            <span>{title}</span>
        </div>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
};

export default MenuItem;
