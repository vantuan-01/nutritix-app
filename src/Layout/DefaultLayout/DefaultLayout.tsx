import Footer from '~/components/Footer';
import Header from '~/components/Header';
import React from 'react';
import styles from '~/components/GlobalStyles/GlobalStyles.module.scss'

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

export default DefaultLayout;