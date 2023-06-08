import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Pagination.module.scss'

function Pagination() {
  const pageNums = [];

  for(let i = 1; i <= 5; i++){
    pageNums.push(i)
  }

  return (
    <div className={styles.pagination}>
      <button className={styles.pagination_left_btn}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {pageNums.map((num, key) => (
        <button key={key}>{num}</button>
      ))}
      <button className={styles.pagination_right_btn}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  )
}

export default Pagination;