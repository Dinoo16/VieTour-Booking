import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Dialog.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function Dialog({ title, content, onAgree, onDisagree }) {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    if (!open) return null;

    return (
        <div className={cx('backdrop')}>
            <div className={cx('dialog')}>
                <h2 className={cx('title')}>{title}</h2>
                <p className={cx('description')}>{content}</p>
                <div className={cx('actions')}>
                    <button
                        className={cx('button')}
                        onClick={() => {
                            onDisagree?.();
                            handleClose();
                        }}
                    >
                        Disagree
                    </button>
                    {/* <Button

                        onClick={() => {
                            onDisagree?.();
                            handleClose();
                        }}
                    >
                        Disagree
                    </Button> */}
                    <button
                        className={cx('button')}
                        onClick={() => {
                            onAgree?.();
                            handleClose();
                        }}
                    >
                        Agree
                    </button>
                </div>
            </div>
        </div>
    );
}

Dialog.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onAgree: PropTypes.func,
    onDisagree: PropTypes.func,
};

export default Dialog;
