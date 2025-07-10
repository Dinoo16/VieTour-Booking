import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MultiSelect.module.scss';

const cx = classNames.bind(styles);

function MultiSelect({ label, options, selected, setSelected, placeholder = 'Select options...' }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOption = (option) => {
        if (selected.includes(option.title)) {
            setSelected(selected.filter((item) => item !== option.title));
        } else {
            setSelected([...selected, option.title]);
        }
    };

    return (
        <div className={cx('wrapper')} tabIndex={0} onBlur={() => setIsOpen(false)}>
            <label className={cx('label')}>{label}</label>
            <div className={cx('input')} onClick={() => setIsOpen(!isOpen)}>
                {selected.length > 0 ? selected.join(', ') : placeholder}
                {/* <span className={cx('arrow')}>▼</span> */}
            </div>

            {isOpen && (
                <div className={cx('dropdown')}>
                    {options.map((option) => (
                        <div
                            key={option.id}
                            className={cx('option', { selected: selected.includes(option.title) })}
                            onClick={() => toggleOption(option)}
                        >
                            <input type="checkbox" checked={selected.includes(option.title)} readOnly />
                            <span>{option.title}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

MultiSelect.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.array.isRequired,
    setSelected: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};

export default MultiSelect;
