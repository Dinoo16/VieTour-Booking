import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

function Menu({ items = [], onTitleChange }) {
    return (
        <nav className="flex flex-col">
            {items.map((item, index) => (
                <MenuItem key={index} title={item.title} icon={item.icon} to={item.to} onTitleChange={onTitleChange} />
            ))}
        </nav>
    );
}

Menu.propTypes = {
    items: PropTypes.array.isRequired,
    onTitleChange: PropTypes.func,
};

export default Menu;
