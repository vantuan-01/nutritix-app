import Footer from '~/components/Footer/Footer'
import Header from '~/components/Header/Header'
import styles from '~/components/GlobalStyles/GlobalStyles.module.scss'

interface HomeLayoutProps {
  children?: any
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

export default HomeLayout
