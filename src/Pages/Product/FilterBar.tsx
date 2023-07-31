import {
  selectFilterString,
  selectLoading,
  selectProductItem,
  setFilter,
  setLoading,
  setProductList
} from '~/features/Product/ProductSlice'
import { selectPagination, setPagination } from '~/features/Pagination/PaginationSlice'
import { useAppDispatch, useAppSelector } from '~/app/hooks'
import { useEffect, useState } from 'react'

import FilterItem from './FilterItem'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import productsApi from '~/api/productsApi'
import styles from './Product.module.scss'
import { useSelector } from 'react-redux'

function FilterBar() {
  const [list, setList] = useState([])
  const dispatch = useAppDispatch()
  const getPage = useAppSelector(selectPagination)
  const pagination = useAppSelector(selectPagination)
  const filterString = useAppSelector(selectFilterString)
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
  const filterBrand = () => {
    const listBrand: any[] = [...new Set(list.map((item) => item['brand']))]
    return listBrand
  }
  const fetchFilterByCate = async (filterName: string) => {
    dispatch(setLoading(true))
    try {
      const list = await productsApi.getFilterByCategory(filterString.type, filterName, getPage._page)
      if (list) {
        dispatch(setLoading(false))
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleClickFilter = (type: string, item: string) => {
    if (item === filterString.name) {
      return
    } else {
      dispatch(
        setPagination({
          ...pagination,
          _page: 1
        })
      )
      fetchFilterByCate(item)
      dispatch(setFilter({ type: type, name: item }))
    }
  }
  return (
    <div className={styles.filter_bar}>
      <FilterItem title='Product Categories'>
        <ul className={styles.list}>
          {filterCate().map((item, key) => (
            <li className={clsx(styles.item, { [styles.item_clicked]: item === filterString.name })} key={key}>
              <button
                onClick={() => {
                  handleClickFilter('category', item)
                }}
              >{`${item}`}</button>
              {/* <span>(12)</span> */}
            </li>
          ))}
        </ul>
      </FilterItem>
      <FilterItem title='filter by brand'>
        <ul className={styles.list}>
          {filterBrand().map((item, key) => (
            <li className={clsx(styles.item, { [styles.item_clicked]: item === filterString.name })} key={key}>
              <button
                onClick={() => {
                  handleClickFilter('brand', item)
                }}
              >{`${item}`}</button>
              {/* <span>(2)</span> */}
            </li>
          ))}
        </ul>
      </FilterItem>
    </div>
  )
}

export default FilterBar
