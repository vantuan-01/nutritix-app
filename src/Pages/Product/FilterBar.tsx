import { selectLoading, setFilter, setLoading, setProductList } from '~/features/Product/ProductSlice'
import { selectPagination, setPagination } from '~/features/Pagination/PaginationSlice'
import { useAppDispatch, useAppSelector } from '~/app/hooks'
import { useEffect, useState } from 'react'

import FilterItem from './FilterItem'
import { Link } from 'react-router-dom'
import productsApi from '~/api/productsApi'
import styles from './Product.module.scss'
import { useSelector } from 'react-redux'

function FilterBar() {
  const [list, setList] = useState([])
  const dispatch = useAppDispatch()
  const isLoading = useSelector(selectLoading)
  const getPage = useAppSelector(selectPagination)
  const pagination = useAppSelector(selectPagination)
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const list = await productsApi.getAll()
    setList(list)
  }
  const filterCate = () => {
    const listCate: any[] = [...new Set(list.map((item) => item['category']))]
    return listCate
  }
  const fetchFilterByCate = async (filterName: string) => {
    dispatch(setLoading(true))
    try {
      const list = await productsApi.getFillterByCategory(filterName, getPage._page)
      dispatch(setProductList(list.data))
      dispatch(setLoading(false))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={styles.filter_bar}>
      <FilterItem title='Product Categories'>
        <ul className={styles.list}>
          {filterCate().map((item, key) => (
            <li className={styles.item} key={key}>
              <button
                onClick={() => {
                  dispatch(
                    setPagination({
                      ...pagination,
                      _page: 1
                    })
                  )
                  fetchFilterByCate(item)
                  dispatch(setFilter(item))
                }}
              >{`${item}`}</button>
              {/* <span>(12)</span> */}
            </li>
          ))}
        </ul>
      </FilterItem>
      <FilterItem title='filter by brand'>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to={'/'}>energy gym</Link>
            <span>(2)</span>
          </li>
        </ul>
      </FilterItem>
    </div>
  )
}

export default FilterBar
