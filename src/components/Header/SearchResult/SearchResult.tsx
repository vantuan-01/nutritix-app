import SearchResultItem from './SearchResultItem'
import styles from './SearchResult.module.scss'

function SearchResult() {
  return (
    <div className={styles.wrapper_search}>
      <div className={styles.container_search}>
        {Array(3)
          .fill(true)
          .map((_, key) => (
            <SearchResultItem key={key} />
          ))}
      </div>
    </div>
  )
}

export default SearchResult
