import FilterBar from './FilterBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Images from '~/assets'
import { Link } from 'react-router-dom'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import styles from './Product.module.scss'
import { useState } from 'react'

function Product() {
  const [onSale, setOnSale] = useState(true)

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
                {onSale && <span className={styles.item_onsale}>14% off</span>}
                <div className={styles.item_img}>
                  <img src={Images.product_1} alt='item_img' />
                </div>
                <div className={styles.item_content}>
                  <Link to='/' className={styles.item_brand}>
                    Apparel
                  </Link>
                  <Link to='/' className={styles.item_name}>
                    Naturally Flavored Gold Standard 100% Whey
                  </Link>
                  <div className={styles.item_rating}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <span>(5)</span>
                  </div>
                  <div className={styles.item_price}>
                    <span className={onSale ? styles.is_sale : styles.normal_rice}>$ 123</span>
                    {onSale && <span className={styles.sale_price}>$ 99</span>}
                  </div>
                </div>
                <button className={styles.item_add_btn}>
                  <span>add to cart</span>
                </button>
              </li>
              <li className={styles.right_side_item}>
                {onSale && <span className={styles.item_onsale}>14% off</span>}
                <div className={styles.item_img}>
                  <img src={Images.product_1} alt='item_img' />
                </div>
                <div className={styles.item_content}>
                  <Link to='/' className={styles.item_brand}>
                    Apparel
                  </Link>
                  <Link to='/' className={styles.item_name}>
                    Naturally Flavored Gold Standard 100% Whey
                  </Link>
                  <div className={styles.item_rating}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <span>(5)</span>
                  </div>
                  <div className={styles.item_price}>
                    <span className={onSale ? styles.is_sale : styles.normal_rice}>$ 123</span>
                    {onSale && <span className={styles.sale_price}>$ 99</span>}
                  </div>
                </div>
                <button className={styles.item_add_btn}>
                  <span>add to cart</span>
                </button>
              </li><li className={styles.right_side_item}>
                {onSale && <span className={styles.item_onsale}>14% off</span>}
                <div className={styles.item_img}>
                  <img src={Images.product_1} alt='item_img' />
                </div>
                <div className={styles.item_content}>
                  <Link to='/' className={styles.item_brand}>
                    Apparel
                  </Link>
                  <Link to='/' className={styles.item_name}>
                    Naturally Flavored Gold Standard 100% Whey
                  </Link>
                  <div className={styles.item_rating}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <span>(5)</span>
                  </div>
                  <div className={styles.item_price}>
                    <span className={onSale ?  styles.is_sale : styles.normal_rice}>$ 123</span>
                    {onSale && <span className={styles.sale_price}>$ 99</span>}
                  </div>
                </div>
                <button className={styles.item_add_btn}>
                  <span>add to cart</span>
                </button>
              </li><li className={styles.right_side_item}>
                {onSale && <span className={styles.item_onsale}>14% off</span>}
                <div className={styles.item_img}>
                  <img src={Images.product_1} alt='item_img' />
                </div>
                <div className={styles.item_content}>
                  <Link to='/' className={styles.item_brand}>
                    Apparel
                  </Link>
                  <Link to='/' className={styles.item_name}>
                    Naturally Flavored Gold Standard 100% Whey
                  </Link>
                  <div className={styles.item_rating}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <span>(5)</span>
                  </div>
                  <div className={styles.item_price}>
                    <span className={onSale ?  styles.is_sale : styles.normal_rice}>$ 123</span>
                    {onSale && <span className={styles.sale_price}>$ 99</span>}
                  </div>
                </div>
                <button className={styles.item_add_btn}>
                  <span>add to cart</span>
                </button>
              </li><li className={styles.right_side_item}>
                {onSale && <span className={styles.item_onsale}>14% off</span>}
                <div className={styles.item_img}>
                  <img src={Images.product_1} alt='item_img' />
                </div>
                <div className={styles.item_content}>
                  <Link to='/' className={styles.item_brand}>
                    Apparel
                  </Link>
                  <Link to='/' className={styles.item_name}>
                    Naturally Flavored Gold Standard 100% Whey
                  </Link>
                  <div className={styles.item_rating}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <span>(5)</span>
                  </div>
                  <div className={styles.item_price}>
                    <span className={onSale ?  styles.is_sale : styles.normal_rice}>$ 123</span>
                    {onSale && <span className={styles.sale_price}>$ 99</span>}
                  </div>
                </div>
                <button className={styles.item_add_btn}>
                  <span>add to cart</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
