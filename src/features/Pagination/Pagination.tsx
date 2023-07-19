import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { selectPagination, setPagination } from '../Product/ProductSlice'
import { useAppDispatch, useAppSelector } from '~/app/hooks'
import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import productsApi from '~/api/productsApi'
import styles from './Pagination.module.scss'

function Pagination() {
  const dispatch = useAppDispatch()
  const pagination = useAppSelector(selectPagination)
  const pageNums = []
  const totalPages = Math.ceil(pagination._totalRows / pagination._limit)

  useEffect(() => {
    const fetchPaginate = async () => {
      const data = await productsApi.getByPage(pagination._page)
      dispatch(setPagination(data.pagination))
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
