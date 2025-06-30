import classNames from 'classnames/bind';
import styles from './Box.module.scss';
import images from '~/assets/images';
import { CATEGORIES } from '~/data/Category/Category';
const cx = classNames.bind(styles);

function CategoryBox({ onSelect }) {
   
    return (
        <div className={cx('dropdown')}>
            <p className={cx('dropdown-title')}>Choose category</p>
            {CATEGORIES.map((category) => (
                <div key={category.name} className={cx('dropdown-item')} onClick={() => onSelect && onSelect(category.title)}>
                    <img src={category.image} alt={category.title} />
                    <div>
                        <p className={cx('dropdown-title')}>{category.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CategoryBox;
