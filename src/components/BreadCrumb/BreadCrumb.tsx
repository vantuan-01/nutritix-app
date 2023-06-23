import { Link, useLocation } from 'react-router-dom'
import { configroutes, publicRoutes } from '~/routes'

import { log } from 'console'
import styles from './BreadCrumb.module.scss'

function BreadCrumb() {
  const location = useLocation()

  let currentLink = ''

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`

      return (
        <li className={styles.breadcrumb_item} key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </li>
      )
    })

  return (
    <div className={styles.breadcrumb_wrapper}>
      <ul className={styles.breadcrumb_container}>
        <li className={styles.breadcrumb_item}>
          <Link to={'/'}>home</Link>
        </li>
        {crumbs}
      </ul>
    </div>
  )
}

export default BreadCrumb
