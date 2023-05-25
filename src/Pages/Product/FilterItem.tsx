import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styles from './Product.module.scss'

interface FilterItemProps {
  children: any
  title: string
}

function FilterItem({ children, title }: FilterItemProps) {
  return (
    <div className={styles.filter_item}>
      <div className={styles.header}>
        <p>
          {title} <FontAwesomeIcon icon={faChevronRight} size='lg' />
        </p>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  )
}

export default FilterItem
