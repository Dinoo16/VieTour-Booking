import React from 'react';
import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];

  // Show up to 3 pages at the start
  for (let i = 1; i <= Math.min(3, totalPages); i++) {
    pages.push(i);
  }

  // Add ellipsis if needed
  if (totalPages > 4) {
    pages.push('...');
    pages.push(totalPages);
  }

  const handleClick = (page) => {
    if (page !== '...') {
      onPageChange(page);
    }
  };

  return (
    <div className={cx('pagination')}>
      <button
        className={cx('navButton')}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        ← Previous
      </button>

      {pages.map((page, index) => (
        <button
          key={index}
          className={cx('pageButton', {
            active: page === currentPage,
            dots: page === '...',
          })}
          onClick={() => handleClick(page)}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}

      <button
        className={cx('navButton')}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        Next →
      </button>
    </div>
  );
}
