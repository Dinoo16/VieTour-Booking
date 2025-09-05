import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

function Menu({ items = [], activeMenu, setActiveMenu }) {
    return (
        <div className="h-full bg-[#EDEDED] flex items-center">
            {items.map((item, index) => (
                <MenuItem
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    active={activeMenu.title === item.title}
                    onClick={() => setActiveMenu(item)}
                />
            ))}
        </div>
    );
}

Menu.propTypes = {
    items: PropTypes.array.isRequired,
    activeMenu: PropTypes.object.isRequired,
    setActiveMenu: PropTypes.func.isRequired,
};

export default Menu;
