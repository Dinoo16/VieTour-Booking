import PropTypes from 'prop-types';

function menu({ children }) {
    return <nav className="hidden lgx:flex">{children}</nav>;
}

menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default menu;
