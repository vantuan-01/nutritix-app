import Button from '../Button';
import Logo from '~/assets/Logo';
import React from 'react';
import styles from './Footer.module.scss'

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.news}>
          <h4>sign up for newsletter</h4>
          <p>Stay up to date with recent news, advice and weekly offers</p>
          <div>
            <input type='email' />
            <Button>subscribe</Button>
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
          </div>
        </div>
        <div className={styles.contacts}>
          <div className={styles.row}>
            <div className={styles.col_4}>
              <p>need help?</p>
              <span>+(40)800 0246 888</span>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>Copyright © 2022 Nutritix. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;