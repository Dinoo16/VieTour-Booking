import classNames from 'classnames/bind';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function TextInput({ label, placeholder, value, onChange }) {
    return (
        <div className={cx('input-container')}>
            <label className={cx('label')} for={placeholder}>
                {label}
            </label>
            <input
                className={cx('text-input')}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default TextInput;
