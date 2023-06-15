import { faFacebookF, faLinkedinIn, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Images from '~/assets'
import { Link } from 'react-router-dom'
import Tabs from './Tabs'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import styles from './DetailItem.module.scss'

function DetailItem() {
  return (
    <div className={styles.DetailItem_wrapper}>
      <div className={styles.DetailItem_container}>
        <div className={styles.DetailItem_container_item}>
          <div className={styles.DetailItem_left}>
            <div className={styles.left_main_img}>
              <img src={Images.home_categories_1} alt='item_img' />
            </div>
            <ul className={styles.left_sub_img}>
              <li>
                <img src={Images.home_categories_1} alt='item_sub_img' />
              </li>
              <li>
                <img src={Images.home_categories_2} alt='item_sub_img' />
              </li>
              <li>
                <img src={Images.home_categories_3} alt='item_sub_img' />
              </li>
              <li>
                <img src={Images.home_categories_4} alt='item_sub_img' />
              </li>
            </ul>
          </div>
          <div className={styles.DetailItem_right}>
            <span className={styles.item_available}>
              <span>in stock</span>
            </span>
            <h1 className={styles.item_name}>Naturally Flavored Gold Standard 100% Casein</h1>
            <div className={styles.item_after_name}>
              <div className={styles.item_after_name_content}>
                star star star star star <Link to={'/'}>(5 reviews)</Link>
              </div>
              <div className={styles.item_after_name_content}>
                brands:
                <Link to={'/'}>healthy</Link>
              </div>
              <div className={styles.item_after_name_content}>
                sku: <Link to={'/'}>def689</Link>
              </div>
            </div>
            <div className={styles.item_price}>
              <p className={styles.normal_price}>
                <span>$</span>90.00
              </p>
              <p className={styles.sale_price}>
                <span>$</span>86.00
              </p>
            </div>
            <div className={styles.item_fast_info}>
              Nisi aspernatur facere excepturi. Iste molestias voluptatum est sit minus officia nostrum esse. Tenetur
              vitae qui voluptas iste recusandae.
            </div>
            <div className={styles.item_deal_sold}>
              <p>
                Sold: <span>11/25</span>
              </p>
              <div className={styles.deal_sold_progress_bar}>
                <div className={styles.deal_sold_progress_value} style={{ width: '38.8%' }}></div>
              </div>
            </div>
            <div className={styles.item_btns}></div>
            <div className={styles.item_category}>
              Category: <Link to={'/'}>Uncategorized</Link>
            </div>
            <div className={styles.item_tag}>
              Tag: <Link to={'/'}> Wellness</Link>
            </div>
            <div className={styles.item_share}>
              Share: <FontAwesomeIcon icon={faFacebookF} color={'#3b5998'} />
              <FontAwesomeIcon icon={faTwitter} color={'#1da1f2'} />
              <FontAwesomeIcon icon={faLinkedinIn} color={'#0077b5'} />
              <FontAwesomeIcon icon={faPinterestP} color={'#e60023'} />
            </div>
          </div>
        </div>
        <div className={styles.DetailItem_container_tabs}>
          <Tabs/>
        </div>
      </div>
    </div>
  )
}

export default DetailItem
