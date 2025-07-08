import classNames from 'classnames/bind';
import styles from './AuthLayout.module.scss';
import PropTypes from 'prop-types';
import Header from './Header/Header';

const cx = classNames.bind(styles);

function AuthLayout({ children, banner }) {
    return (
        <div className={cx('wrapper')}>
            {banner && (
                <div
                    className={cx('banner')}
                    style={{
                        backgroundImage: `url(${banner.image})`,
                    }}
                >
                    <div className={cx('overlay')} />
                    <div className={cx('inner')}>
                        <Header />
                        <div className={cx('banner-content')}>
                            <h1>{banner.title}</h1>
                            {banner.subtitle && <span className={cx('subtitle')}>{banner.subtitle}</span>}
                        </div>
                    </div>
                </div>
            )}
            <div className={cx('content')}> {children} </div>
            <div className={cx('footer')}>
                <span>Copyright @Dino 2025.</span>
                <span>All Rights Reserved.</span>
                <span>Terms & Conditions</span>
            </div>
        </div>
    );
}

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
    banner: PropTypes.node.isRequired,
};

export default AuthLayout;
