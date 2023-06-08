import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets'
import { Link } from 'react-router-dom';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import styles from './Product.module.scss'
import { useState } from 'react';

function ProductItem() {
  const [onSale, setOnSale] = useState(true)
  return (
    <li className={styles.right_side_item}>
      <div className={styles.item_block}>
        {onSale && <span className={styles.item_onsale}>14% off</span>}
        <Link to={'/shops/*'}>
          <div className={styles.item_img}>
            <img width={'30rem'} height={'30rem'} src={Images.product_1} alt='item_img' />
          </div>
        </Link>
        <div className={styles.item_content}>
          <Link to={'/home'} className={styles.item_brand}>
            Apparel
          </Link>
          <Link to={'/shops/*'} className={styles.item_name}>
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
      </div>
    </li>
  )
}

export default ProductItem;