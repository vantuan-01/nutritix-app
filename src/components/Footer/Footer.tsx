import { faFacebookF, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'

import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Images from '~/assets'
import { Link } from 'react-router-dom'
import Logo from '~/assets/Logo'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.news}>
          <h2>
            sign up for newsletter <FontAwesomeIcon icon={faChevronRight} size='sm' />
          </h2>
          <p>Stay up to date with recent news, advice and weekly offers</p>
          <div className={styles.email}>
            <input type='email' placeholder='Email address' required />
            <Button static_btn style={{ padding: '.6rem 2rem'}}>
              subscribe
            </Button>
          </div>
        </div>
        <div className={styles.all_links}>
          <div className={styles.row}>
            <div className={styles.col_2_4}>
              <Logo />
            </div>
            <div className={styles.col_2_4}>
              <p>customer service</p>
              <ul>
                <li>help center</li>
                <li>my account</li>
                <li>track my order</li>
                <li>return policy</li>
                <li>gift cards</li>
              </ul>
            </div>
            <div className={styles.col_2_4}>
              <p>about us</p>
              <ul>
                <li>company info</li>
                <li>Press Releases</li>
                <li>Careers</li>
                <li>Reviews</li>
                <li>Investor Relations</li>
              </ul>
            </div>
            <div className={styles.col_2_4}>
              <p>Quick Links</p>
              <ul>
                <li>Search</li>
                <li>Become a Reseller</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div className={styles.col_2_4}>
              <p>Catalogs</p>
              <ul>
                <li>Protein</li>
                <li>my account</li>
                <li>Performance</li>
                <li>Weight Management</li>
                <li>Vitamins & Health</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.contacts}>
          <div className={styles.row}>
            <div className={styles.col_4}>
              <p>need help?</p>
              <span>+(40)800 0246 888</span>
            </div>
            <div className={styles.col_4}>
              <p>FOLLOW US</p>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faFacebookF} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faPinterest} />
                </li>
              </ul>
            </div>
            <div className={styles.col_4}>
              <p>WE ACCEPT</p>
              <img src={Images.footer1_img} alt='footer_img' />
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>
            Copyright © 2022 <Link to={'/'}>Nutritix</Link>. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
