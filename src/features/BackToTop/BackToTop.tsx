import { selectPagination } from '../Pagination/PaginationSlice'
import { useAppSelector } from '~/app/hooks'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function BackToTop({ children }: any) {
  const location = useLocation()
  const currentPage = useAppSelector(selectPagination)
  useEffect(() => {
    // when change route
    window.scrollTo(0, 0)
    // when refresh page
    window.onbeforeunload = () => {
      window.scrollTo(0, 0)
    }
  }, [location, currentPage])

  return <>{children}</>
}

export default BackToTop
