import styles from './Button.module.scss'

function Button({ children, padding }: any) {
  return (
    <button className={styles.btn} style={{ padding: padding }}>
      <span>{children}</span>
    </button>
  )
}

export default Button
