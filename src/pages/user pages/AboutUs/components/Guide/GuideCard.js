import classNames from 'classnames/bind';
import styles from './Guide.module.scss';
import { SwiperSlide } from 'swiper/react';
import icons from '~/assets/icons';
import Button from '~/components/Button/Button';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function GuideCard({ avatar, name, role, social }) {
    return (
        <div className={cx('card')}>
            <img src={avatar} alt={name} className={cx('avatar')} />
            <div className={cx('info')}>
                <div className={cx('content')}>
                    <h5 className={cx('name')}>{name}</h5>
                    <p className={cx('role')}>{role}</p>
                    <div className={cx('socials')}>
                        <Button iconButton href={social.facebook} className={cx('social-link')}>
                            <icons.facebook />
                        </Button>
                        <Button iconButton href={social.twitter} className={cx('social-link')}>
                            <icons.twitter />
                        </Button>
                        <Button iconButton href={social.instagram} className={cx('social-link')}>
                            <icons.instagram />
                        </Button>
                        <Button iconButton href={social.youtube} className={cx('social-link')}>
                            <icons.youtube />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
GuideCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
};

export default GuideCard;
