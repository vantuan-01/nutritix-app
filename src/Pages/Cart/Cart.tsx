import Bill from './Bill/Bill'
import CartList from './CartList/CartList'
import styles from './Cart.module.scss'

function Cart() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.cart_left}>
          <div className={styles.cart_left_list}>
            <CartList />
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
