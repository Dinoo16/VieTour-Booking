import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Button from '~/components/Button/Button';
import Header from '../components/Header/Header';
import SearchTour from '../components/SearchTour/SearchTour';
import Footer from '../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function DefaultLayout({
    children,
    banner,
    halfHeightBanner = false,
    hideSearchTour = false,
    hideExploreBtn = false,
    noContentSpacing = false,
}) {
    const navigate = useNavigate();
    return (
        <div className={cx('wrapper')}>
            {banner && (
                <div
                    className={cx('banner', { 'banner-custom': halfHeightBanner })}
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
                            {!hideExploreBtn && (
                                <Button rounded transparent onClick={() => navigate('/tour')}>
                                    Expore Tours
                                </Button>
                            )}
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
