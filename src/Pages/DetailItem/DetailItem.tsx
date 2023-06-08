import styles from './DetailItem.module.scss'

function DetailItem() {
  return (
    <div className={styles.DetailItem_wrapper}>
      <div className={styles.DetailItem_container}>
        <div className={styles.DetailItem_left}>
          <div className={styles.left_main_img}></div>
          <div className={styles.left_sub_img}></div>
        </div>
        <div className={styles.DetailItem_right}>
          <div className={styles.item_available}>in stock</div>
          <div className={styles.item_name}>Essential Amin.o. Energy + Uc-ii Collagen</div>
          <div className={styles.item_after_name}>review, brand, sku</div>
          <div className={styles.item_price}>
            <p>normal price</p>
            <p>sale price</p>
          </div>
          <div className={styles.item_fast_info}>
            Nisi aspernatur facere excepturi. Iste molestias voluptatum est sit minus officia nostrum esse. Tenetur
            vitae qui voluptas iste recusandae.
          </div>
          <div className={styles.item_btns}></div>
          <div className={styles.item_category}>Apparel</div>
          <div className={styles.item_tag}> Energy</div>
          <div className={styles.item_share}>face, twitter</div>
        </div>
      </div>
    </div>
  )
}

export default DetailItem
