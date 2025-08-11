import classNames from 'classnames/bind';
import styles from './Select.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function Select({ label, options, value, onChange, placeholder }) {
    return (
        <div className={cx('select-container')}>
            <label className={cx('label')}>{label}</label>
            <select className={cx('select')} value={value} onChange={onChange}>
                <option value="">{placeholder}</option>
                {options.map((opt) => (
                    <option key={opt.id} value={opt.name}>
                        {opt.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

Select.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string,
        }),
    ).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};

export default Select;
