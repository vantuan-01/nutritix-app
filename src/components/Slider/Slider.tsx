import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SliderItem from './SliderItem'
import styles from './Slider.module.scss'

function Slider() {
  const [num, setNum] = useState(1)

  useEffect(() => {
    const autoUp = setTimeout(() => {
      setNum(num + 1)
    }, 10000)
    return () => {
      clearTimeout(autoUp)
    }
  }, [num])

  useEffect(() => {
    if (num > 3) {
      setNum(1)
    } else if (num < 1) {
      setNum(3)
    } else {
      return
    }
  }, [num])

  const handleNextPage = () => {
    setNum(num + 1)
  }
  const handlePreviousPage = () => {
    setNum(num - 1)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button className={styles.left_btn} onClick={handlePreviousPage}>
          <FontAwesomeIcon icon={faChevronLeft} size='lg' />
        </button>
        <SliderItem slideNums={num} />
        <button className={styles.right_btn} onClick={handleNextPage}>
          <FontAwesomeIcon icon={faChevronRight} size='lg' />
        </button>
      </div>
    </div>
  )
}

export default Slider
