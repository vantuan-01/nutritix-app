/* eslint-disable react/no-unescaped-entities */

import Images from '~/assets'
import { Link } from 'react-router-dom'
import styles from './NotFound404.module.scss'

function NotFound404() {
  return (
    <div className={styles.notfound404_wrapper}>
      <div className={styles.notfound404_img}>
        <img src={Images.notfound_404} alt='404_image' />
      </div>
      <div className={styles.notfound404_text}>
        <h1>Oops! That Page Can’t Be Found.</h1>
        <p>
          The Page you are looking for doesn't exitst or an other error occured.
          <br /> Go to <Link to={'/'}>Home page</Link>
        </p>
      </div>
    </div>
  )
}

export default NotFound404
