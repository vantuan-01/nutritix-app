import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './QuantityBtn.module.scss'
import { useState } from 'react'

function QuantityBtn() {
  const [num, setNum] = useState(1)
  
  const increase = () => {
    setNum(num + 1)
  }

  const decrease = () => {
    setNum(num - 1)
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button onClick={decrease} disabled={num == 1}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span>{num}</span>
        <button onClick={increase}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  )
}

export default QuantityBtn
