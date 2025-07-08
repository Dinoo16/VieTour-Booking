import classNames from 'classnames/bind';
import styles from './Guide.module.scss';
import { GUIDES } from '~/data/Dashboard/Guide';
import Menu from './Menu/Menu';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '~/components/Button/Button';
import icons from '~/assets/icons';
import SearchInput from '~/components/Search/SearchInput';
import GuideInfo from './GuideInfo/GuideInfo';

const cx = classNames.bind(styles);

function Guide() {
    const [activeGuide, setActiveGuide] = useState(null);

    useEffect(() => {
        if (GUIDES.length > 0) {
            setActiveGuide(GUIDES[0]);
        }
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('guide-list')}>
                <div className={cx('header')}>
                    <SearchInput onChange={(e) => console.log(e.target.value)} />

                    <div className={cx('actions')}>
                        <Button primary small to="/admin/guide/add" leftIcon={<icons.add />}>
                            Add Guide
                        </Button>
                    </div>
                </div>
                <div className={cx('menu-scroll')}>
                    <Menu guides={GUIDES} activeGuide={activeGuide} onGuideSelect={setActiveGuide} />
                </div>
            </div>
            <GuideInfo guide={activeGuide} />
        </div>
    );
}

export default Guide;
