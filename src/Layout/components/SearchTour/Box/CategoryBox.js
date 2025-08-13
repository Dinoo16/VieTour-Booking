import classNames from 'classnames/bind';
import styles from './Box.module.scss';
import { useCategories } from '~/hooks/useCategories';

const cx = classNames.bind(styles);

function CategoryBox({ onSelect }) {
    const { data: categories = [], isCategoriesLoading } = useCategories();
    if (isCategoriesLoading) {
        return <p>Loading Category...</p>;
    }
    return (
        <div className={cx('dropdown')}>
            <p className={cx('dropdown-title')}>Choose category</p>
            {categories.map((category, index) => (
                <div key={index} className={cx('dropdown-item')} onClick={() => onSelect && onSelect(category.name)}>
                    <img src={category.image} alt={category.name} />
                    <div>
                        <p className={cx('dropdown-title')}>{category.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CategoryBox;
