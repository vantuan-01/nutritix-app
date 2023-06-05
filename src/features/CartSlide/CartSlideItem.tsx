import Images from '~/assets'
import { Link } from 'react-router-dom'
import styles from './CartSlide.module.scss'

function CartSlideItem() {
  return (
    <div className={styles.cart_slide_item}>
      <div className={styles.item}>
        <Link to='/' onClick={() => console.log('btn item')}>
          <div className={styles.item_img}>
            <img src={Images.product_1} alt='cart_slide_item' />
          </div>
          <div className={styles.item_content}>
            <p className={styles.item_content_name}>Naturally Flavored Gold Standard 100% Whey</p>
            <p className={styles.item_content_quantity}>
              1 x <span>$13.24</span>
            </p>
          </div>
        </Link>
        <button className={styles.item_delbtn} onClick={() => console.log('btn clicked')}></button>
      </div>
    </div>
  )
}

export default CartSlideItem
