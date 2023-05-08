import { Link, NavLink } from 'react-router-dom'
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '~/assets/Logo'
import {configroutes as config} from '~/routes/routes'
import { navlink as nlink } from '~/config/navlink'
import styles from './Header.module.scss'

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top_header}>
        <Link to={config.home} className={styles.logo}  >
          <Logo />
        </Link>
        <div className={styles.nav_link}>
          {nlink &&
            nlink.map((link, index) => (
              <li key={index}>
                <NavLink
                  end
                  to={link.path}
                  className={(nav) =>
                    nav.isActive
                      ? `${styles.nav_link_selected} ${styles.nav_link_default}`
                      : `${styles.nav_link_default}`
                  }
                >
                  {link.name}
                </NavLink>
                {/* <span className={styles.nav_link_square}></span> */}
              </li>
            ))}
        </div>
        <div className={styles.search_bar}>
          <input type='search' placeholder='Search products...' />
          <button type='submit'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={styles.user_group}>
          <div className={styles.user_account}>
            <FontAwesomeIcon icon={faUser} size='lg' />
            <span>Sign In / Register </span>
          </div>
          <div className={styles.love}>
            <FontAwesomeIcon icon={faHeart} size='lg' />
            <span className={styles.circle}>1</span>
          </div>
          <div className={styles.cart}>
            <FontAwesomeIcon icon={faBagShopping} size='lg'/>
            <span className={styles.circle}>2</span>
          </div>
        </div>
      </div>
      <div className={styles.bot_header}>a</div>
    </div>
  )
}

export default Header
