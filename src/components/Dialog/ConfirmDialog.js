import React from 'react';
import classNames from 'classnames/bind';
import styles from './ConfirmDialog.module.scss';

const cx = classNames.bind(styles);

function ConfirmDialog({ isOpen, title, message, onConfirm, onCancel }) {
    if (!isOpen) return null;

    return (
        <div className={cx('overlay')}>
            <div className={cx('dialog')}>
                <h2 className={cx('title')}>{title}</h2>
                <p className={cx('message')}>{message}</p>
                <div className={cx('actions')}>
                    <button onClick={onCancel} className={cx('cancel-btn')}>
                        Cancel
                    </button>
                    <button onClick={onConfirm} className={cx('delete-btn')}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDialog;
