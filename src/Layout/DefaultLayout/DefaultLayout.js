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
        <div className="overflow-hidden">
            {banner && (
                <div
                    className={`relative w-full h-[500px] sm:min-h-[700px] bg-cover bg-center flex flex-col text-white ${
                        halfHeightBanner ? 'h-[500px]' : 'h-[450px] s:h-[500px] sm:h-screen'
                    }`}
                    style={{
                        backgroundImage: `url(${banner.image})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/25" />
                    <div className="h-full w-full xl:w-[1200px] mx-auto flex flex-col relative px-4 sm:px-6 lg:px-12 xl:px-0">
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
            <div
                className={` [&>*]:w-full relative w-full xl:w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-0 my-[54px] pt-[120px] flex flex-col ${
                    noContentSpacing ? 'mx-auto pt-[0]' : ''
                }`}
            >
                {children}
            </div>
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
