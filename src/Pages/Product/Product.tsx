import { faList, faTableCellsLarge } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

import FilterBar from './FilterBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Pagination from '~/features/Pagination/Pagination'
import ProductItem from './ProductItem'
import productsApi from '~/api/productsApi'
import styles from './Product.module.scss'

function Product() {
  const [isActive, setIsActive] = useState('grid')
  const [listProducts, setListProducts] = useState([])
  useEffect(() => {
    fetchProduct()
  }, [])

  const fetchProduct = async () => {
    const list = await productsApi.getAll()
    setListProducts(list)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left_side}>
          <FilterBar />
        </div>
        <div className={styles.right_side}>
          <div className={styles.right_side_container}>
            <div className={styles.right_side_filter}>
              <div className={styles.filter_gridlist_sort}>
                <button className={isActive === 'grid' ? styles.active : ''} onClick={() => setIsActive('grid')}>
                  <FontAwesomeIcon icon={faTableCellsLarge} size='lg' />
                </button>
                <button className={isActive === 'list' ? styles.active : ''} onClick={() => setIsActive('list')}>
                  <FontAwesomeIcon icon={faList} size='lg' />
                </button>
                <select className={styles.filter_sort}>
                  <option value='default sorting'>default sorting</option>
                  <option value='low to high'>low to hight</option>
                  <option value='high to low'>high to low</option>
                  <option value='popular'>popular</option>
                  <option value='most rating'>most rating</option>
                </select>
              </div>
              <p className={styles.result}>Showing 1–12 of 27 results</p>
            </div>
            <ul className={styles.right_side_products}>
              {/* {Array(12)
                .fill(true)
                .map((_, index) => (
                  <ProductItem key={index} />
                ))} */}
              {listProducts && listProducts.map((product, index) => <ProductItem product={product} key={index} />)}
            </ul>
            <div className={styles.pagination_row}>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
