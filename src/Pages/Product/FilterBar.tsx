import FilterItem from './FilterItem'
import { Link } from 'react-router-dom'
import styles from './Product.module.scss'

function FilterBar() {
  return (
    <div className={styles.filter_bar}>
      <FilterItem title='Product Categories'>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to='/'>Apparel</Link>
            <span>(12)</span>
          </li>
        </ul>
      </FilterItem>
      <FilterItem title='filter by brand'>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to='/'>energy gym</Link>
            <span>(2)</span>
          </li>
        </ul>
      </FilterItem>
    </div>
  )
}

export default FilterBar
