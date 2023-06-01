import Modal from '../../components/Modal'
import { selectCartSlice } from './CartSlideSlice'
import styles from './CartSlide.module.scss'
import { useAppSelector } from '~/app/hooks'

function CartSlide() {
  const isOpen = useAppSelector(selectCartSlice)

  return (
    <Modal>
      <div className={isOpen ? styles.cart_side_active : styles.cart_side_close}>asd</div>
    </Modal>
  )
}

export default CartSlide
