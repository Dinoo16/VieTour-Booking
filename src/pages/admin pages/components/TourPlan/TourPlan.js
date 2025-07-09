import classNames from 'classnames/bind';
import styles from './TourPlan.module.scss';
import PropTypes from 'prop-types';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function TourPlan({ title, children }) {
    return (
        <div>
            <h3>{title}</h3>
            {children}
            <div className={cx('navigator')}>
                <Button outline small>Back</Button>
                <Button outline small>Next</Button>
            </div>
        </div>
    );
}

TourPlan.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default TourPlan;
