import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './QuantityBtn.module.scss'

function QuantityBtn() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span>1</span>
        <button>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  )
}

export default QuantityBtn
