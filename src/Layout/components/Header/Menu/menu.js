import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function menu({ children }) {
    return <nav className={cx('wrapper')}>{children}</nav>;
}

menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default menu;
