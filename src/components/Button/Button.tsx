import styles from './Button.module.scss'

interface ButtonProp {
  children: any
  padding?: string
  width?: string
  height?: string
  static_btn?: boolean
}

function Button({ children, padding, width, height, static_btn }: ButtonProp) {
  return (
    <>
      <button
        className={static_btn ? styles.static_btn : styles.btn}
        style={{ padding: padding, width: width, height: height }}
      >
        <span>{children}</span>
      </button>
    </>
  )
}

export default Button
