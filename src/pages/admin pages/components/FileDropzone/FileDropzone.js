import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import classNames from 'classnames/bind';
import styles from './FileDropzone.module.scss';
import icons from '~/assets/icons';

const cx = classNames.bind(styles);

function FileDropzone({ onDrop, label = 'Upload Photo' }) {
    const handleDrop = useCallback(
        (acceptedFiles) => {
            onDrop(acceptedFiles);
        },
        [onDrop],
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });

    return (
        <div className={cx('wrapper')}>
            <label className={cx('label')}>{label}</label>
            <div {...getRootProps()} className={cx('dropzone', { active: isDragActive })}>
                <input {...getInputProps()} />
                <icons.upload />
                <span className={cx('text')}>Drop Your File Here</span>
            </div>
        </div>
    );
}

export default FileDropzone;
