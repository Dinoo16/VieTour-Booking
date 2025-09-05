import PropTypes from 'prop-types';

function Menu({ children, hideOnClick = false }) {
    return <nav className="w-full flex py-3 pr-6">{children}</nav>;
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Menu;
