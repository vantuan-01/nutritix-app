import Button from '~/components/Button/Button'
import styles from './Bill.module.scss'
import { useLocation } from 'react-router-dom'

function Bill() {
  const location = useLocation().pathname

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>{location === '/checkout' ? 'your order' : 'cart totals'}</h2>
        </div>
        <div className={styles.body}>
          <table>
            {location === '/checkout' && (
              <>
                <thead>
                  <tr>
                    <th>product</th>
                    <th>subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Naturally Flavored Gold Standard 100% Whey × <span>1</span>
                    </td>
                    <td>13.24</td>
                  </tr>
                </tbody>
              </>
            )}
            <tfoot>
              <tr>
                <th>subtotal</th>
                <td>$112.24</td>
              </tr>
              <tr>
                <th>total</th>
                <td className={styles.total_price}>$112.24</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className={styles.footer}>
          <Button
            link_to={location === '/checkout' ? '/thankyou' : '/checkout'}
            static_btn
            no_skew
            style={{ padding: '1.5rem 4.4rem' }}
          >
            {location === '/checkout' ? 'place order' : ' proceed to checkout'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Bill
