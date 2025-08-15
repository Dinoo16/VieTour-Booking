import styles from './Tour.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
// import { TOURS } from '~/data/Tour/Tour';
import Menu from './Menu/Menu';
import Button from '~/components/Button/Button';
import icons from '~/assets/icons';
import routesConfig from '~/config/routes';
import { useTours } from '~/hooks/useTours';
import LoadingSpinner from '~/components/Loading/LoadingSpinner';

const cx = classNames.bind(styles);

function Tour() {
    const [activeTour, setActiveTour] = useState(null);

    const { data: tourData = [], isTourDataLoading } = useTours();

    // State phân trang
    const [currentPage, setCurrentPage] = useState(1);
    const toursPerPage = 10;

    // Tính chỉ số slice
    const indexOfLastTour = currentPage * toursPerPage;
    const indexOfFirstTour = indexOfLastTour - toursPerPage;
    const currentTours = tourData.slice(indexOfFirstTour, indexOfLastTour);

    useEffect(() => {
        if (!activeTour && tourData.length > 0) {
            setActiveTour(tourData[0]);
        }
    }, [tourData, activeTour]);

    const handleTourClick = (tour) => {
        setActiveTour(tour);
    };

    const totalPages = Math.ceil(tourData.length / toursPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (isTourDataLoading) {
        return <LoadingSpinner text="Fetching tours..." />;
    }
    if (!activeTour) {
        return <LoadingSpinner text="Fetching tours..." />;
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('tour-list')}>
                <h3 className={cx('title')}>All Tours</h3>
                <Menu items={currentTours} activeItem={activeTour} onItemClick={handleTourClick} />

                <Button to={routesConfig.adminAddTour} className={cx('add-tour-btn')} primary leftIcon={<icons.add />}>
                    Add Tour
                </Button>
                {/* Phân trang */}
                <div className={cx('pagination')}>
                    <button
                        className={cx('prev')}
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                    >
                        Prev
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => handlePageChange(i + 1)}
                            className={cx('page-btn', { active: currentPage === i + 1 })}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        className={cx('next')}
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
            <div className={cx('tour-detail')}>
                <div className={cx('tour-info')}>
                    <img src={activeTour.backgroundImage} alt={activeTour.title} />
                    <div className={cx('info')}>
                        <h2>{activeTour.title}</h2>
                        <Button
                            to={routesConfig.adminEditTour.replace(':id', activeTour.id)}
                            primary
                            small
                            leftIcon={<icons.penIcon />}
                        >
                            Edit Tour
                        </Button>
                    </div>
                    <div className={cx('meta')}>
                        <div className={cx('meta-item')}>
                            <span className={cx('label')}>Destination</span>
                            <span className={cx('value')}>{activeTour.destinationName}</span>
                        </div>
                        <div className={cx('meta-item')}>
                            <span className={cx('label')}>Departure</span>
                            <span className={cx('value')}>{activeTour.departure}</span>
                        </div>
                        <div className={cx('meta-item')}>
                            <span className={cx('label')}>Departure Time</span>
                            <span className={cx('value')}>{activeTour.departureTime}</span>
                        </div>
                        <div className={cx('meta-item')}>
                            <span className={cx('label')}>Return Time</span>
                            <span className={cx('value')}>{activeTour.returnTime}</span>
                        </div>
                        <div className={cx('meta-item')}>
                            <span className={cx('label')}>Category</span>
                            <span className={cx('value')}>{activeTour.categoryNames.map((cat) => cat).join(', ')}</span>
                        </div>
                        <div className={cx('meta-item')}>
                            <span className={cx('label')}>Duration</span>
                            <span className={cx('value')}>{activeTour.duration}</span>
                        </div>
                        <div className={cx('meta-item')}>
                            <span className={cx('label')}>Price</span>
                            <span className={cx('value')}>${activeTour.price}/person</span>
                        </div>
                    </div>

                    <div className={cx('about')}>
                        <h3>About</h3>
                        <p>{activeTour.description}</p>
                    </div>
                </div>

                <div className={cx('tour-plan')}>
                    <h3 className={cx('tour-plan-title')}>Tour Plan</h3>
                    {activeTour.tourPlans.map((plan, idx) => (
                        <div key={idx} className={cx('day-item')}>
                            <div className={cx('day-number')}></div>
                            <div className={cx('day-content')}>
                                <h3>
                                    Day {plan.day}: {plan.title}
                                </h3>
                                <p className={cx('day-description')}>{plan.content}</p>
                            </div>
                        </div>
                    ))}

                    {activeTour.tourPlans.length === 0 ? (
                        <div className={cx('add-btn')}>
                            <Button
                                to={routesConfig.adminAddTourPlan.replace(':id', activeTour.id)}
                                primary
                                small
                                leftIcon={<icons.penIcon />}
                            >
                                Add Tour Plan
                            </Button>
                        </div>
                    ) : (
                        <div className={cx('add-btn')}>
                            <Button
                                to={routesConfig.adminEditTourPlan.replace(':id', activeTour.id)}
                                primary
                                small
                                leftIcon={<icons.penIcon />}
                            >
                                Update Tour Plan
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Tour;
