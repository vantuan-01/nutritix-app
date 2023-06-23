import Bill from './Bill/Bill'
import CartItem from './CartItem/CartItem'
import styles from './Cart.module.scss'

function Cart() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.cart_left}>
          <div className={styles.cart_left_list}>
            <CartItem />
          </div>
        </div>
        <div className={styles.cart_right}>
          <Bill />
        </div>
      </div>
    </div>
  )
}

export default Cart
