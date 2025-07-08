import classNames from 'classnames/bind';
import styles from './GuideInfo.module.scss';
import PropTypes from 'prop-types';
import icons from '~/assets/icons';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

const metaFields = [
    {
        key: 'workExperience',
        label: 'Work Experience',
        icon: <icons.work />,
    },
    {
        key: 'experienceLevel',
        label: 'Experience Level',
        icon: <icons.level />,
    },
    {
        key: 'jobStatus',
        label: 'Job Status',
        icon: <icons.jobStatus />,
    },
    {
        key: 'jobAchievements',
        label: 'Job Achievement',
        icon: <icons.cup />,
    },
];

function GuideInfo({ guide }) {
    if (!guide) return <div className="guide-info">No guide selected</div>;

    return (
        <div className={cx('guide-info')}>
            <div className={cx('background')}></div>
            <div className={cx('content')}>
                <img src={guide.avatar} alt={guide.name} className={cx('image')} />
                <div className={cx('guide-details')}>
                    <div className={cx('guide-header')}>
                        <h3 className={cx('name')}>{guide.name}</h3>
                        <span className={cx('role')}>{guide.role}</span>
                    </div>
                    <div className={cx('contacts')}>
                        <p className={cx('email')}>
                            <icons.email />
                            {guide.email}
                        </p>
                        <p className={cx('phone')}>
                            <icons.phone />
                            {guide.phoneNo}
                        </p>
                    </div>
                </div>

                <div className={cx('guide-meta')}>
                    {metaFields.map((field, index) => (
                        <div key={index} className={cx('stat-item')}>
                            <div className={cx('icon')}>{field.icon}</div>
                            <div className={cx('info')}>
                                <div className={cx('label')}>{field.label}</div>
                                <div className={cx('value')}>{guide[field.key]}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={cx('skills')}>
                    {guide.skills.map((skill, index) => (
                        <div key={index} className={cx('skill-item')}>
                            <icons.check className={cx('check-icon')} />
                            <span className={cx('text')}>{skill}</span>
                        </div>
                    ))}
                </div>

                <Button primary className={cx('edit-button')}>
                    Edit Profile
                </Button>
            </div>
        </div>
    );
}

GuideInfo.propTypes = {
    guide: PropTypes.object.isRequired,
};

export default GuideInfo;
