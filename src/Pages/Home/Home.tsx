import Button from '~/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Images from '~/assets'
import { Link } from 'react-router-dom'
import Slider from '~/components/Slider'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { setFilter } from '~/features/Product/ProductSlice'
import styles from './Home.module.scss'
import { useAppDispatch } from '~/app/hooks'

function Home() {
  const dispatch = useAppDispatch()
  const handleFilter = (value: string) => {
    dispatch(setFilter({ type: 'category', name: value }))
  }
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
              <h1>
                find your goal <FontAwesomeIcon icon={faChevronRight} />
              </h1>
            </div>
            <div className={styles.category}>
              <div className={styles.category_container}>
                <Link to={`/shop`} className={styles.category_item} onClick={() => handleFilter('whey protein')}>
                  <div className={styles.item_caption}>
                    <h1>build your strength</h1>
                    <p>get muscles</p>
                  </div>
                  <div className={styles.item_img}>
                    <img src={Images.home_categories_1} alt='img_item' />
                  </div>
                </Link>
                <Link to={`/shop`} className={styles.category_item} onClick={() => handleFilter('fat burners')}>
                  <div className={styles.item_caption}>
                    <h1>build your burn</h1>
                    <p>get cut</p>
                  </div>
                  <div className={styles.item_img}>
                    <img src={Images.home_categories_2} alt='img_item' />
                  </div>
                </Link>
                <Link to={`/shop`} className={styles.category_item} onClick={() => handleFilter('vitamin')}>
                  <div className={styles.item_caption}>
                    <h1>build your fitness</h1>
                    <p>get fit</p>
                  </div>
                  <div className={styles.item_img}>
                    <img src={Images.home_categories_3} alt='img_item' />
                  </div>
                </Link>
                <Link to={`/shop`} className={styles.category_item} onClick={() => handleFilter('bcaa')}>
                  <div className={styles.item_caption}>
                    <h1>build your performance</h1>
                    <p>get powerful</p>
                  </div>
                  <div className={styles.item_img}>
                    <img src={Images.home_categories_4} alt='img_item' />
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.ads}>
              <div className={styles.ads_container}>
                <div className={styles.ads_item}>
                  <div className={styles.item_content}>
                    <p>top products</p>
                    <h2>true strength of whey</h2>
                    <Button link_to='/shop' action_btn style={{ padding: '1rem 3rem' }}>
                      shop now
                    </Button>
                  </div>
                  <div className={styles.item_bg}>
                    <img src={Images.home_ads_1} alt='ads_img' />
                  </div>
                </div>
                <div className={styles.ads_item}>
                  <div className={styles.item_content}>
                    <p>saving plan</p>
                    <h2>15% of all products</h2>
                    <Button link_to='/shop' action_btn style={{ padding: '1rem 3rem' }}>
                      shop now
                    </Button>
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
                    <h2>protein powder collection</h2>
                    <Button link_to='/shop' action_btn style={{ padding: '1rem 3rem' }}>
                      shop now
                    </Button>
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
