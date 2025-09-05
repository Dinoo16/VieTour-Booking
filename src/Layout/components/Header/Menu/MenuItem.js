import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ title, to, onClick }) {
    const content = <span>{title}</span>;
    if (to) {
        return (
            <NavLink
                to={to}
                className={({ isActive }) =>
                    cx(
                        'flex items-center justify-between px-2 py-2 xl:mr-10 lg:mr-6 md:mr-3 text-white text-lg font-light transition-colors duration-200',
                        isActive ? 'border-b border-[var(--primary)]' : 'hover:border-b border-[var(--primary)]',
                    )
                }
            >
                {content}
            </NavLink>
        );
    }
    return (
        <div
            className="flex items-center justify-between px-2 py-2 mr-10 text-white text-lg font-light transition-colors duration-200 hover:border-b border-[var(--primary)]"
            onClick={onClick}
        >
            {content}
        </div>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string,
    onClick: PropTypes.func,
};

export default MenuItem;
