import Button from '~/components/Button/Button'
import styles from './Bill.module.scss'

function Bill() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>cart totals</h2>
        </div>
        <div className={styles.body}>
          <div className={styles.subtotal}>
            <p>
              subtotal <span>$112.24</span>
            </p>
          </div>
          <div className={styles.total}>
            <p>
              total <span>$112.24</span>
            </p>
          </div>
        </div>
        <div className={styles.footer}>
          <Button link_to={'/'} static_btn no_skew style={{ padding: '1.5rem 0'}}>
            proceed to checkout
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Bill
