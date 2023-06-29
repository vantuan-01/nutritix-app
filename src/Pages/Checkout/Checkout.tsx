import Bill from '../Cart/Bill/Bill'
import clsx from 'clsx'
import styles from './Checkout.module.scss'

function Checkout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ul className={styles.checkout_error}>
          <li>Billing First name is a required field.</li>
        </ul>
        <div className={styles.checkout_form}>
          <div className={styles.checkout_left}>
            <div className={styles.checkout_header}>
              <p>billing details</p>
            </div>
            <div className={styles.checkout_input_block}>
              <label htmlFor='fullname'>
                full name <abbr title='required'>*</abbr>
              </label>
              <input className={styles.input_filled} type='text' id='fullname' />
            </div>
            <div className={styles.checkout_input_block}>
              <label htmlFor='phone'>
                phone<abbr title='required'>*</abbr>
              </label>
              <input type='text' id='phone' />
            </div>
            <div className={styles.checkout_input_block}>
              <label htmlFor='email address'>
                email address<abbr title='required'>*</abbr>
              </label>
              <input type='email' id='email address' />
            </div>
            <div className={styles.checkout_input_block}>
              <label htmlFor='city'>
                province, city<abbr title='required'>*</abbr>
              </label>
              <input type='text' id='city' />
            </div>
            <div className={styles.checkout_input_block}>
              <label htmlFor='district'>
                district<abbr title='required'>*</abbr>
              </label>
              <input type='text' id='district' />
            </div>
            <div className={styles.checkout_input_block}>
              <label htmlFor='address'>
                address<abbr title='required'>*</abbr>
              </label>
              <input type='text' id='address' />
            </div>
            <div className={styles.checkout_header}>
              <p>additional information</p>
            </div>
            <div className={styles.checkout_input_block}>
              <label htmlFor='notes'>Order notes (optional)</label>
              <textarea className={styles.input_filled} name='notes' id='notes'></textarea>
            </div>
          </div>
          <div className={styles.checkout_right}>
            <Bill />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
