import Images from '~/assets'
import styles from '../DetailItem.module.scss'

function Info_tab({ info }: any) {
  return (
    <div className={styles.info_tab}>{info && info.map((text: string, key: any) => <li key={key}>{text}</li>)}</div>
  )
}

export default Info_tab
