import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Images from '~/assets'
import QuantityBtn from '../QuantityBtn/QuantityBtn'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from './CartItem.module.scss'

function CartItem() {
  return (
    <table className={styles.cartItem_table}>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>product</th>
          <th>price</th>
          <th>quantity</th>
          <th>subtotal</th>
        </tr>
      </thead>
      <tbody>
        {Array(5)
          .fill(true)
          .map((_, key) => (
            <tr key={key}>
              <td>
                <button className={styles.item_del_btn}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </td>
              <td>
                <div className={styles.item_img}>
                  <img src={Images.product_1} alt='item_img' />
                </div>
              </td>
              <td>
                <p className={styles.item_name}>Naturally Flavored Gold Standard 100% Whey</p>
              </td>
              <td>
                <p className={styles.item_price}>
                  $ <span>13.24</span>
                </p>
              </td>
              <td>
                <QuantityBtn />
              </td>
              <td>
                <p className={styles.item_subtotal}>
                  $ <span>13.24</span>
                </p>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default CartItem
