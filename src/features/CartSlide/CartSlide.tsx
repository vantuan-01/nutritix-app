import { handleChangeSlide, selectCartSlice } from './CartSlideSlice'
import { useAppDispatch, useAppSelector } from '~/app/hooks'

import Button from '~/components/Button/Button'
import CartSlideItem from './CartSlideItem'
import { Link } from 'react-router-dom'
import Modal from '../../components/Modal'
import clsx from 'clsx'
import styles from './CartSlide.module.scss'

function CartSlide() {
  const isOpen = useAppSelector(selectCartSlice)
  const dispatch = useAppDispatch()

  return (
    <Modal>
      <div className={clsx(styles.cart_slide_close, { [styles.cart_slide_active]: isOpen })}>
        <div className={styles.header}>
          <span>shopping cart</span>
          <button onClick={() => dispatch(handleChangeSlide(false))}>close</button>
        </div>
        <div className={styles.body}>
          <p className={styles.empty_cart}>No products in cart</p>
          {/* <CartSlideItem/> */}
        </div>
        <div className={styles.footer}>
          <p className={styles.footer_total_price}>
            subtotal: <span>$870.33</span>
          </p>
          <Button static_btn_no_color style={{ width: '100%', padding: '1.8rem 0', margin: '1rem 0' }}>
            view cart
          </Button>
          <Button static_btn style={{ width: '100%', padding: '1.8rem 0' }}>
            checkout
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default CartSlide
