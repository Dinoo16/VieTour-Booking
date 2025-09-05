import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

function Menu({ items = [] }) {
    return (
        <div className="max-h-[141px] bg-[#EDEDED] flex items-center">
            {items.map((item, index) => (
                <MenuItem key={index} icon={item.icon} title={item.title} />
            ))}
        </div>
    );
}

Menu.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Menu;
