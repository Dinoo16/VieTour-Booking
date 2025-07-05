import classNames from 'classnames/bind';
import styles from './Table.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Table({ columns, data }) {
    return (
        <div className={cx('wrapper')}>
            <table className={cx('table')}>
                <thead>
                    <tr>
                        {columns.map((col, idx) => (
                            <th key={idx} className={cx('th')}>
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIdx) => (
                        <tr key={rowIdx} className={cx('tr')}>
                            {columns.map((col, colIdx) => (
                                <td key={colIdx} className={cx('td')}>
                                    {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

Table.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string.isRequired,
            accessor: PropTypes.string.isRequired,
            render: PropTypes.func,
        }),
    ).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
