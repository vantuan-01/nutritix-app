import clsx from 'clsx'
import styles from './Button.module.scss'

interface ButtonProp {
  children: any
  style?: any
  static_btn?: boolean
  static_btn_no_color?: boolean
  action_btn?: boolean
}

function Button({ children, style, static_btn, static_btn_no_color, action_btn }: ButtonProp) {
  return (
    <>
      <button
        className={clsx(styles.btn, {
          [styles.static_btn]: static_btn,
          [styles.static_btn_no_color]: static_btn_no_color,
          [styles.action_btn]: action_btn
        })}
        style={style}
      >
        <span>{children}</span>
      </button>
    </>
  )
}

export default Button
