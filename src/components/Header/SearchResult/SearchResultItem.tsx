import Images from '~/assets'
import { Link } from 'react-router-dom'
import styles from './SearchResult.module.scss'

function SearchResultItem() {
  return (
    <div className={styles.search_result_item}>
      <Link to={'./'} className={styles.search_result_item_link}>
        <div className={styles.item_link_img}>
          <img src={Images.product_1} alt='search_result_img' />
        </div>
        <div className={styles.item_link_content}>
          <h4>Optimum Nutrition Gold Standard 100% Whey Protein</h4>
          <div className={styles.item_link_content_price}>
            <span className={styles.old_price}>$15.44</span>
            <span className={styles.sale_price}>$13.24</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SearchResultItem
