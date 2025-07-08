import icons from '~/assets/icons';
import classNames from 'classnames/bind';
import styles from './Services.module.scss';
const cx = classNames.bind(styles);

const SERVICES_ITEMS = [
    {
        icon: icons.destination,
        title: 'DESTINATIONS',
        content: 'Choose  any destination you like, we have several country ratings',
    },
    {
        icon: icons.tour,
        title: 'TOURS',
        content: 'A large number of tours different countries for one or a family',
    },
    {
        icon: icons.medical,
        title: 'MEDICAL INSURANCE',
        content: 'Choose  any destination you like, we have several country ratings',
    },
    {
        icon: icons.assistance,
        title: 'ASSISTANCE',
        content: 'We are ready to solve all your questions and help to deal with problems',
    },
];

function Services() {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('label')}>SERVICES</h4>
            <h1 className={cx('title')}>We Offer Best Services</h1>
            <div className={cx('list-items')}>
                {SERVICES_ITEMS.map((item, index) => (
                    <div className={cx('item')} key={index}>
                        <div className={cx('icon-wrapper')}>
                            <div className={cx('icon-inner')}>
                                <item.icon className={cx('icon')} />
                            </div>
                        </div>
                        <div className={cx('services-title')}>
                            <h2>{item.title}</h2>
                            <small>{item.content}</small>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
