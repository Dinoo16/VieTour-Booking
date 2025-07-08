import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function TextareaField({ label, placeholder, value, onChange }) {
    return (
        <div className={cx('input-container')}>
            <label className={cx('label')}>{label}</label>
            <textarea className={cx('textarea')} placeholder={placeholder} value={value} onChange={onChange} rows={5} />
        </div>
    );
}

TextareaField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default TextareaField;
