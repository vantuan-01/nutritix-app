import Footer from '~/components/Footer';
import Header from '~/components/Header';
import styles from '~/components/GlobalStyles/GlobalStyles.module.scss'

function DefaultLayout({ children }: any) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

export default DefaultLayout;