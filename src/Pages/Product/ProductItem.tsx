import { selectPagination, storeProductItem } from '~/features/Product/ProductSlice'
import { useAppDispatch, useAppSelector } from '~/app/hooks'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { Rate } from 'antd'
import styles from './Product.module.scss'

interface ProductItemsProps {
  product: any
}

function ProductItem({ product }: ProductItemsProps) {
  const [onSale, setOnSale] = useState(false)
  const dispatch = useAppDispatch()
  const selectPage = useAppSelector(selectPagination)
  useEffect(() => {
    product.sale != 0 && setOnSale(true)
  })
  return (
    <li className={styles.right_side_item}>
      {product && (
        <div className={styles.item_block}>
          {onSale && (
            <span className={styles.item_onsale}>
              {(((product.price - product.sale) * 100) / product.price).toFixed()}% off
            </span>
          )}
          <Link to={`/shop/${selectPage._page}/${product.id}`}>
            <div className={styles.item_img}>
              <img src={product.imageUrl} alt='item_img' />
            </div>
          </Link>
          <div className={styles.item_content}>
            <Link to={'/'} className={styles.item_brand}>
              {product.brand}
            </Link>
            <Link to={`/shop/${selectPage._page}/${product.id}`} className={styles.item_name}>
              {product.name}
            </Link>
            <div className={styles.item_rating}>
              <Rate disabled defaultValue={5} className={styles.item_rating_star} />
              <span className={styles.item_rating_number}>(5)</span>
            </div>
            <div className={styles.item_price}>
              <span className={onSale ? styles.is_sale : styles.normal_rice}>{product.price}</span>
              {onSale && <span className={styles.sale_price}>{product.sale}</span>}
            </div>
          </div>
          <button className={styles.item_add_btn}>
            <span>add to cart</span>
          </button>
        </div>
      )}
    </li>
  )
}

export default ProductItem
