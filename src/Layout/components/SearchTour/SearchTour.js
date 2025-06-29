import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './SearchTour.module.scss';
import icons from '~/assets/icons';
import Button from '~/components/Button/Button';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import boxMapping from './Box/BoxMapping';
import { format } from 'date-fns';

const cx = classNames.bind(styles);

const SEARCH_ITEMS = [
    {
        icon: icons.location,
        title: 'Destination',
    },
    {
        icon: icons.clock,
        title: '0 Days - 6 Days',
    },
    {
        icon: icons.category,
        title: 'Choose Category',
    },
    {
        icon: icons.dollar,
        title: 'Select budget',
    },
];

function SearchTour() {
    const [visibleIndex, setVisibleIndex] = useState(null);
    const [searchTitles, setSearchTitles] = useState(SEARCH_ITEMS.map((item) => item.title));

    const handleToggle = (index) => {
        setVisibleIndex((prev) => (prev === index ? null : index));
    };
    const handleSelect = (index, value) => {
        const updatedTitles = [...searchTitles];

        if (value instanceof Date) {
            updatedTitles[index] = format(value, 'MMM d, yyyy');
        } else {
            updatedTitles[index] = value;
        }
        setSearchTitles(updatedTitles);
        setVisibleIndex(null);
    };

    const renderDropdown = (index) => {
        const BoxComponent = boxMapping[index];
        return BoxComponent ? <BoxComponent onSelect={(value) => handleSelect(index, value)} /> : null;
    };

    return (
        <div className={cx('wrapper')}>
            <Menu>
                {SEARCH_ITEMS.map((item, index) => (
                    <Tippy
                        key={index}
                        interactive
                        visible={visibleIndex === index}
                        placement="bottom-start"
                        render={(attrs) => (
                            <div className={cx('popover')} tabIndex="-1" {...attrs}>
                                {renderDropdown(index)}
                            </div>
                        )}
                        onClickOutside={() => setVisibleIndex(null)}
                    >
                        <div className={cx('menu-wrapper')} onClick={() => handleToggle(index)}>
                            <MenuItem icon={item.icon} title={searchTitles[index]} />
                        </div>
                    </Tippy>
                ))}
            </Menu>

            <Button rounded>Search</Button>
        </div>
    );
}

export default SearchTour;
