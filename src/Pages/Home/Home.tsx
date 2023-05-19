import Button from '~/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Images from '~/assets'
import Slider from '~/components/Slider'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styles from './Home.module.scss'

function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.slider}>
          <div className={styles.slider_container}>
            <Slider />
          </div>
        </div>
        <div className={styles.category_ads}>
          <div className={styles.category_ads_container}>
            <div className={styles.header}>
              <h2>
                find your goal <FontAwesomeIcon icon={faChevronRight} />
              </h2>
            </div>
            <div className={styles.category}>
              <div className={styles.category_container}>
                <div className={styles.category_item}>
                  <div className={styles.item_caption}>
                    <h2>build your strength</h2>
                    <p>get muscles</p>
                  </div>
                  <div className={styles.item_img}>
                    <img src={Images.home_categories_1} alt='img_item' />
                  </div>
                </div>
                <div className={styles.category_item}>
                  <div className={styles.item_caption}>
                    <h2>build your burn</h2>
                    <p>get cut</p>
                  </div>
                  <div className={styles.item_img}>
                    <img src={Images.home_categories_2} alt='img_item' />
                  </div>
                </div>
                <div className={styles.category_item}>
                  <div className={styles.item_caption}>
                    <h2>build your fitness</h2>
                    <p>get fit</p>
                  </div>
                  <div className={styles.item_img}>
                    <img src={Images.home_categories_3} alt='img_item' />
                  </div>
                </div>
                <div className={styles.category_item}>
                  <div className={styles.item_caption}>
                    <h2>build your performance</h2>
                    <p>get powerful</p>
                  </div>
                  <div className={styles.item_img}>
                    <img src={Images.home_categories_4} alt='img_item' />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ads}>
              <div className={styles.ads_container}>
                <div className={styles.ads_item}>
                  <div className={styles.item_content}>
                    <p>top products</p>
                    <h4>true strength of whey</h4>
                    <Button padding='1rem 2rem'>shop now</Button>
                  </div>
                  <div className={styles.item_bg}>
                    <img src={Images.home_ads_1} alt='ads_img' />
                  </div>
                </div>
                <div className={styles.ads_item}>
                  <div className={styles.item_content}>
                    <p>saving plan</p>
                    <h4>15% of all products</h4>
                    <Button padding='1rem 2rem'>shop now</Button>
                  </div>
                  <div className={styles.item_bg}>
                    <img src={Images.home_ads_2} alt='ads_img' />
                  </div>
                </div>
                <div className={styles.ads_item}>
                  <div className={styles.item_bg}>
                    <img src={Images.home_ads_3} alt='ads_img' />
                  </div>
                  <div className={styles.item_content}>
                    <p>build up muscle</p>
                    <h4>protein powder collection</h4>
                    <Button padding='1rem 2rem'>shop now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
