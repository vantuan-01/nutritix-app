import SearchResultItem from './SearchResultItem'
import { Tooltip } from '~/components/Portal'
import styles from './SearchResult.module.scss'

function SearchResult() {
  return (
    <div className={styles.wrapper_search}>
      <div className={styles.container_search}>
        {Array(10)
          .fill(true)
          .map((_, key) => (
            <SearchResultItem key={key} />
          ))}
      </div>
    </div>
  )
}

export default SearchResult
