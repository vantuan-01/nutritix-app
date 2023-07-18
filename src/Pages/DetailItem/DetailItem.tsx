import { Link, useParams } from 'react-router-dom'
import { faFacebookF, faLinkedinIn, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'

import Button from '~/components/Button/Button'
import DropDownBtn from '~/components/DropDownBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Portal } from '~/components/Portal'
import PromoIcon from './icons/PromoIcon'
import QuantityBtn from '~/components/QuantityBtn/QuantityBtn'
import { Rate } from 'antd'
import Tabs from './Tabs'
import clsx from 'clsx'
import productsApi from '~/api/productsApi'
import styles from './DetailItem.module.scss'

// interface DetailItemDrops {
//   id: number
//   brand: string
//   category: string
//   name: string
//   price: number
//   sale: number
//   flavor: []
//   description: string
//   ingredients: []
//   subImages: []
// }

function DetailItem() {
  const itemId = useParams()
  const [isShrink, setIsShrink] = useState(false)
  const [itemInfo, setItemInfo] = useState<any>()
  useEffect(() => {
    fetchProductItems()
  }, [])

  useEffect(() => {
    const listenToScroll = () => {
      setIsShrink(() => {
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
          return true
        }

        if (document.body.scrollTop < 700 && document.documentElement.scrollTop < 700) {
          return false
        }

        return isShrink
      })
    }
    window.addEventListener('scroll', listenToScroll)
    return () => {
      document.removeEventListener('scroll', listenToScroll)
    }
  }, [])

  const fetchProductItems = async () => {
    const data = await productsApi.getSingle(itemId.id)
    setItemInfo(data)
  }

  const subImg = () => {
    const arrImg = [...itemInfo.subImages]
    for (const i in itemInfo.flavor) {
      arrImg.push(itemInfo.flavor[i].imageUrl)
    }
    return arrImg
  }

  return (
    <>
      {itemInfo && (
        <div className={styles.DetailItem_wrapper}>
          <div className={styles.DetailItem_container}>
            <div className={styles.DetailItem_container_item}>
              <div className={styles.DetailItem_left}>
                <div className={styles.left_main_img}>
                  <img src={itemInfo.imageUrl} alt='item_img' />
                </div>
                <ul className={styles.left_sub_img}>
                  {subImg().map((img: string, key: any) => (
                    <li key={key}>
                      <img src={img} alt='item_sub_img' />
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.DetailItem_right}>
                <span className={styles.item_available}>
                  <span>in stock</span>
                </span>
                <h1 className={styles.item_name}>{itemInfo.name}</h1>
                <div className={styles.item_after_name}>
                  <div className={styles.item_after_name_content}>
                    <Rate disabled defaultValue={5} /> <Link to={'/'}>(5 reviews)</Link>
                  </div>
                  <div className={styles.item_after_name_content}>
                    brands:
                    <Link to={'/'}>{itemInfo.brand}</Link>
                  </div>
                  {/* <div className={styles.item_after_name_content}>
                    sku: <Link to={'/'}>def689</Link>
                  </div> */}
                </div>
                <div className={styles.item_fast_info}>
                  {itemInfo.sale !== 0 && (
                    <>
                      <PromoIcon /> Sale {(((itemInfo.price - itemInfo.sale) * 100) / itemInfo.price).toFixed()}% in
                      cart
                    </>
                  )}
                </div>
                <div className={styles.item_price}>
                  <p className={itemInfo.sale !== 0 ? styles.is_sale : styles.normal_price}>
                    <span>$</span>
                    {itemInfo.price}
                  </p>
                  {itemInfo.sale !== 0 && (
                    <p className={styles.sale_price}>
                      <span>$</span>
                      {itemInfo.sale}
                    </p>
                  )}
                </div>
                {/* <div className={styles.item_deal_sold}>
                <p>
                  Sold: <span>11/25</span>
                </p>
                <div className={styles.deal_sold_progress_bar}>
                  <div className={styles.deal_sold_progress_value} style={{ width: '38.8%' }}></div>
                </div>
              </div> */}
                <div className={styles.item_btns}>
                  <div className={styles.item_btns_form}>
                    <p>Quantity</p>
                    <QuantityBtn />
                  </div>
                  <div className={styles.item_btns_form}>
                    <p>Flavor</p>
                    <DropDownBtn value={itemInfo.flavor} />
                  </div>
                </div>
                <div>
                  <Button static_btn style={{ padding: '1.2rem 0rem', fontSize: '1.6rem', marginBottom: '2rem' }}>
                    add to cart
                  </Button>
                </div>
                <div className={styles.item_category}>
                  Category: <Link to={'/'}>{itemInfo.category}</Link>
                </div>
                {/* <div className={styles.item_tag}>
                Tag: <Link to={'/'}> Wellness</Link>
              </div> */}
                <div className={styles.item_share}>
                  Share: <FontAwesomeIcon icon={faFacebookF} color={'#3b5998'} />
                  <FontAwesomeIcon icon={faTwitter} color={'#1da1f2'} />
                  <FontAwesomeIcon icon={faLinkedinIn} color={'#0077b5'} />
                  <FontAwesomeIcon icon={faPinterestP} color={'#e60023'} />
                </div>
              </div>
            </div>
            <div className={styles.DetailItem_container_tabs}>
              <Tabs itemInfo={itemInfo} />
            </div>
          </div>
          <Portal id='slideOutUp'>
            <div
              className={clsx(styles.DetailItem_popup, {
                [styles.DetailItem_slide_out]: isShrink,
                [styles.DetailItem_slide_in]: !isShrink
              })}
            >
              <div className={styles.DetailItem_popup_content}>
                <div className={styles.DetailItem_popup_img}>
                  <img src={itemInfo.imageUrl} alt='item#' />
                </div>
                <div className={styles.DetailItem_popup_text}>
                  <div className={styles.DetailItem_popup_text_header}>
                    You are viewing: <span>{itemInfo.name}</span>
                  </div>
                  <div className={styles.DetailItem_popup_text_price}>
                    <p className={itemInfo.sale == 0 ? styles.normal_price : styles.is_sale}>{itemInfo.price}</p>
                    {itemInfo.sale !== 0 && <span className={styles.sale_price}>{itemInfo.sale}</span>}
                  </div>
                </div>
                <div className={styles.DetailItem_popup_btn}>
                  <Button style={{ padding: '1.5rem 2.5rem' }} static_btn>
                    add to cart
                  </Button>
                </div>
              </div>
            </div>
          </Portal>
        </div>
      )}
    </>
  )
}

export default DetailItem
