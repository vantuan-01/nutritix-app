import FilterBar from './FilterBar'
import Images from '~/assets'
import { Link } from 'react-router-dom'
import styles from './Product.module.scss'

function Product() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left_side}>
          <FilterBar />
        </div>
        <div className={styles.right_side}>
          <div className={styles.right_side_container}>
            <div className={styles.right_side_filter}>this is filter</div>
            <ul className={styles.right_side_products}>
              <li className={styles.right_side_item}>
                <img src={Images.product_1} alt='item_img' />
                <div className={styles.item_content}>
                  <Link to='/' className={styles.item_brand}>
                    Apparel
                  </Link>
                  <Link to='/' className={styles.item_name}>
                    Naturally Flavored Gold Standard 100% Whey
                  </Link>
                  <div className={styles.item_rating}>
                    stars <span>(5)</span>
                  </div>
                  <span className={styles.item_price}>123</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
