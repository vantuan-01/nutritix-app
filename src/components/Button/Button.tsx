import { handleChangeSlide, selectCartSlice } from '~/features/CartSlide/CartSlideSlice'
import { useAppDispatch, useAppSelector } from '~/app/hooks'

import { Link } from 'react-router-dom'
import clsx from 'clsx'
import styles from './Button.module.scss'

interface ButtonProp {
  children: any
  style?: any
  static_btn?: boolean
  static_btn_no_color?: boolean
  action_btn?: boolean
  no_skew?: boolean
  link_to?: string
}

function Button({ children, style, static_btn, static_btn_no_color, action_btn, no_skew, link_to }: ButtonProp) {
  const isCartSlide = useAppSelector(selectCartSlice)
  const dispatch = useAppDispatch()

  const checkCartSlide = () => {
    if (isCartSlide) {
      dispatch(handleChangeSlide(false))
    } else {
      return
    }
  }

  return (
    <>
      <Link
        onClick={checkCartSlide}
        to={`${link_to}`}
        className={clsx(styles.btn, {
          [styles.static_btn]: static_btn,
          [styles.static_btn_no_color]: static_btn_no_color,
          [styles.action_btn]: action_btn,
          [styles.no_skew]: no_skew
        })}
        style={style}
      >
        <span>{children}</span>
      </Link>
    </>
  )
}

export default Button
