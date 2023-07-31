import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { selectPagination, setPagination } from './PaginationSlice'
import { useAppDispatch, useAppSelector } from '~/app/hooks'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import productsApi from '~/api/productsApi'
import { selectFilterString } from '../Product/ProductSlice'
import styles from './Pagination.module.scss'
import { useEffect } from 'react'

function Pagination() {
  const dispatch = useAppDispatch()
  const pagination = useAppSelector(selectPagination)
  const pageNums = []
  const totalPages = Math.ceil(pagination._totalRows / pagination._limit)
  const filterString = useAppSelector(selectFilterString)
  useEffect(() => {
    const fetchPaginate = async () => {
      if (filterString.name === '') {
        const data = await productsApi.getByPage(pagination._page)
        // console.log("run no filter");
        dispatch(setPagination(data.pagination))
      } else if (filterString.name !== '') {
        const data = await productsApi.getFilterByCategory(filterString.type, filterString.name, pagination._page)
        // console.log('run có filter')
        dispatch(setPagination(data.pagination))
      }
    }
    fetchPaginate()
  }, [])

  const handlePageChange = (newPage: number) => {
    dispatch(
      setPagination({
        ...pagination,
        _page: newPage
      })
    )
  }

  for (let i = 1; i <= totalPages; i++) {
    pageNums.push(i)
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.pagination_left_btn}
        disabled={pagination._page <= 1}
        onClick={() => handlePageChange(pagination._page - 1)}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {pageNums.map((num, key) => (
        <button
          className={num == pagination._page ? styles.button_active : ''}
          key={key}
          disabled={pagination._page === num}
          onClick={() => handlePageChange(num)}
        >
          {num}
        </button>
      ))}
      <button
        className={styles.pagination_right_btn}
        disabled={pagination._page === totalPages}
        onClick={() => handlePageChange(pagination._page + 1)}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  )
}

export default Pagination
