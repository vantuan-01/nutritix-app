import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Images from '~/assets'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import styles from '../DetailItem.module.scss'

function Review_tab() {
  return (
    <div className={styles.review_tab}>
      <div className={styles.review_tab_item}>
        <div className={styles.review_tab_item_img}>
          <img src={Images.product_1} alt='user_img' />
        </div>
        <div className={styles.review_tab_item_comment}>
          <div className={styles.comment_rate}>
            <FontAwesomeIcon icon={faStar} style={{ color: '#F65000' }} />
          </div>
          <div className={styles.comment_meta}>
            <strong className={styles.comment_author}>I am Batman</strong>
            <span className={styles.comment_date}>month 3, year</span>
          </div>
          <div className={styles.comment_text}>
            I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is
            that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I
            wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by
            the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts,
            and this one is by far the longest. I dont understand why.
          </div>
        </div>
      </div>
      <div className={styles.review_tab_item}>
        <div className={styles.review_tab_item_img}>
          <img src={Images.product_1} alt='user_img' />
        </div>
        <div className={styles.review_tab_item_comment}>
          <div className={styles.comment_rate}>
            <FontAwesomeIcon icon={faStar} style={{ color: '#F65000' }} />
          </div>
          <div className={styles.comment_meta}>
            <strong className={styles.comment_author}>user name</strong>
            <span className={styles.comment_date}>month 3, year</span>
          </div>
          <div className={styles.comment_text}>
            I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is
            that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I
            wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by
            the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts,
            and this one is by far the longest. I dont understand why.
          </div>
        </div>
      </div>
      <div className={styles.review_tab_item}>
        <div className={styles.review_tab_item_img}>
          <img src={Images.product_1} alt='user_img' />
        </div>
        <div className={styles.review_tab_item_comment}>
          <div className={styles.comment_rate}>
            <FontAwesomeIcon icon={faStar} style={{ color: '#F65000' }} />
          </div>
          <div className={styles.comment_meta}>
            <strong className={styles.comment_author}>user name</strong>
            <span className={styles.comment_date}>month 3, year</span>
          </div>
          <div className={styles.comment_text}>
            I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is
            that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I
            wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by
            the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts,
            and this one is by far the longest. I dont understand why.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review_tab
