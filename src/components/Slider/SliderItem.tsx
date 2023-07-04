import Button from '../Button/Button'
import Images from '~/assets'
import { SliderText } from './SliderText'
import styles from './Slider.module.scss'

function SliderItem({ slideNums }: any) {
  return (
    <div className={styles.slide}>
      {slideNums === 1 ? (
        <div className={styles.slide_1}>
          <img className={styles.slide_bg_img} src={Images.home_slider_1} alt='slide_bg_img' />
          <div className={styles.content}>
            <h1 className={styles.title}>100% authentic products</h1>
            <img className={styles.img} src={Images.home_slider_2} alt='slide_img' />
          </div>
        </div>
      ) : slideNums === 2 ? (
        <div className={styles.slide_2}>
          <img className={styles.slide_bg_img} src={Images.home_slider_4} alt='slide_bg_img' />
          <div className={styles.content}>
            <div className={styles.left}>
              <img src={Images.home_slider_3} alt='slide_img' />
            </div>
            <div className={styles.right}>
              <p>online supplement store</p>
              <h2>power your workout</h2>
              <Button link_to={'/shop'} action_btn style={{ padding: '1.5rem 5rem' }}>
                get bundle
              </Button>
            </div>
          </div>
        </div>
      ) : slideNums === 3 ? (
        <div className={styles.slide_3}>
          <img className={styles.slide_bg_img} src={Images.home_slider_6} alt='slide_bg_img' />
          <div className={styles.content}>
            <p>online supplement store</p>
            <h1 className={styles.title}>best quality, best price</h1>
            <span className={styles.subtitle}>member save an extra 10% off</span>
            <img className={styles.img} src={Images.home_slider_5} alt='slide_img' />
            <Button link_to={'/shop'} action_btn style={{ padding: '1.5rem 5rem' }}>
              shop now
            </Button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default SliderItem
