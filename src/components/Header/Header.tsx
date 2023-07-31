import { Link, NavLink } from 'react-router-dom'
import {
  faBagShopping,
  faBox,
  faHeadphones,
  faHeart,
  faLocationArrow,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'

import CartSlide from '~/features/CartSlide/CartSlide'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoginForm from '~/components/LoginForm'
import Logo from '~/assets/Logo'
import Tooltip from '../Portal/Tooltip'
import { configroutes as config } from '~/routes/routes'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { handleChangeSlide } from '~/features/CartSlide/CartSlideSlice'
import { navlink as nlink } from '~/config/navlink'
import styles from './Header.module.scss'
import { useAppDispatch } from '~/app/hooks'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()
  const ref = useRef<HTMLElement>()
  useEffect(() => {
    const handleClickOutSide = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutSide)
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide)
    }
  }, [ref])
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.top_header}>
          <Link to={config.home} className={styles.logo}>
            <Logo />
          </Link>
          <div className={styles.nav_link}>
            {nlink &&
              nlink.map((link, index) => (
                <li key={index}>
                  <NavLink
                    end
                    reloadDocument
                    to={link.path}
                    className={(nav) =>
                      nav.isActive
                        ? `${styles.nav_link_selected} ${styles.nav_link_default}`
                        : `${styles.nav_link_default}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
          </div>
          <div className={styles.search_bar}>
            <form className={styles.search_bar_form}>
              <input type='search' placeholder='Search products...' />
              <button type='submit'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
            {/* <SearchResult /> */}
          </div>
          <div className={styles.user_group}>
            <div className={styles.user_account}>
              <button onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faUser} size='lg' />
                <span>Sign In / Register </span>
              </button>
              {isOpen && (
                <Tooltip id='signin' top='8rem' right='12rem' ref={ref}>
                  <LoginForm />
                </Tooltip>
              )}
            </div>
            <div className={styles.love}>
              <FontAwesomeIcon icon={faHeart} size='lg' />
              <span className={styles.circle}>1</span>
            </div>
            <div className={styles.cart} onClick={() => dispatch(handleChangeSlide(true))} aria-hidden>
              <FontAwesomeIcon icon={faBagShopping} size='lg' />
              <span className={styles.circle}>2</span>
            </div>
          </div>
        </div>
        <div className={styles.bot_header}>
          <div className={styles.bot_header_overlay}></div>
          <div className={styles.container}>
            <div className={styles.content}>
              <FontAwesomeIcon icon={faLocationArrow} size='lg' />
              <span>Free shipping on orders over $75</span>
            </div>
            <div className={styles.content}>
              <FontAwesomeIcon icon={faBox} size='lg' />
              <span>Easy returns on all orders</span>
            </div>
            <div className={styles.content}>
              <FontAwesomeIcon icon={faHeadphones} size='lg' />
              <span>24/7 Customer support</span>
            </div>
          </div>
        </div>
      </div>
      <CartSlide />
    </>
  )
}

export default Header
