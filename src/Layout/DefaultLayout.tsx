import BreadCrumb from '~/components/BreadCrumb/BreadCrumb'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import styles from '~/components/GlobalStyles/GlobalStyles.module.scss'

interface DefaultLayoutProps {
  children?: any
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className={styles.wrappers}>
      <Header />
      <BreadCrumb />
      <div id='container' className={styles.containers}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
