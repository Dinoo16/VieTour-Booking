import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Dropdown.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Dropdown({
    label,
    icon: Icon,
    options = [],
    onSelect = () => {},
    trigger = 'click', // 'click' | 'hover'
}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        if (trigger === 'click') {
            setIsOpen(!isOpen);
        }
    };

    const handleSelect = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    const wrapperProps =
        trigger === 'hover'
            ? {
                  onMouseEnter: () => setIsOpen(true),
                  onMouseLeave: () => setIsOpen(false),
              }
            : {};

    return (
        <div className={cx('dropdown')} {...wrapperProps}>
            <button className={cx('toggle')} onClick={toggleDropdown}>
                {Icon && <Icon className={cx('icon')} />}
                <span>{label}</span>
            </button>

            {isOpen && (
                <ul className={cx('menu')}>
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleSelect(option)}>
                            {option.icon && <option.icon className={cx('icon')} />}
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

Dropdown.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.elementType, // SVG component
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            icon: PropTypes.elementType, // optional icon
        }),
    ),
    onSelect: PropTypes.func,
    trigger: PropTypes.oneOf(['click', 'hover']),
};

export default Dropdown;
