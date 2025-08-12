import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Save.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function Save() {
    return (
        <div className={cx('save-container')}>
            <h3 className={cx('title')}>Nice Job! You're almost done</h3>
            <Button outline type="submit">
                Save
            </Button>
        </div>
    );
}

Save.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default Save;
