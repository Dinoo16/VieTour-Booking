import Save from '../Save/Save';

import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Form({ children, title, rightPanel, onSubmit }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <div className={cx('details')}>
                    <h3>{title}</h3>
                    {children}
                </div>
                {rightPanel && (
                    <div className={cx('other-info')}>
                        <h3>Other info</h3>
                        {rightPanel}
                    </div>
                )}
            </div>
            <div className={cx('save')}>
                <Save />
            </div>
        </div>
    );
}

Form.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    rightPanel: PropTypes.node,
    onSubmit: PropTypes.func,
};

export default Form;
