import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);

function Menu({ guides, activeGuide, onGuideSelect }) {
    return (
        <div className={cx('menu')}>
            {guides.map((guide, index) => (
                <MenuItem
                    key={index}
                    guide={guide}
                    isActive={activeGuide === guide}
                    onClick={() => onGuideSelect(guide)}
                />
            ))}
        </div>
    );
}

export default Menu;
