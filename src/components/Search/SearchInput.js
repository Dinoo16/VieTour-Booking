import classNames from 'classnames/bind';
import styles from './SearchInput.module.scss';
import icons from '~/assets/icons';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function SearchInput({ value, onChange }) {
    return (
        <div className={cx('search-box')}>
            <icons.search className={cx('icon')} />
            <input
                type="text"
                placeholder="Search Name, Email, Etc..."
                value={value}
                onChange={onChange}
                className={cx('input')}
            />
        </div>
    );
}

SearchInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SearchInput;
