import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Button from '~/components/Button/Button';
import Header from '../components/Header/Header';
import SearchTour from '../components/SearchTour/SearchTour';
import Footer from '../components/Footer/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children, banner, hideSearchTour = false, noContentSpacing = false }) {
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
                        <div className={cx('banner-content', { 'start-title': banner.startTitle })}>
                            {banner.subtitle && <span className={cx('subtitle')}>{banner.subtitle}</span>}
                            <h1>{banner.title}</h1>
                            <Button rounded transparent>
                                Expore Tours
                            </Button>
                        </div>
                        {!hideSearchTour && <SearchTour />}
                    </div>
                </div>
            )}
            <div className={cx('content', { 'no-padding': noContentSpacing })}>{children}</div>
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    banner: PropTypes.node.isRequired,
    hideSearchTour: PropTypes.bool,
};
export default DefaultLayout;
