import Portal from './Portal'
import styles from './Tooltip.module.scss'

interface TooltipProps {
  children: React.ReactNode
  id: string
  top?: string
  right?: string
  bottom?: string
  left?: string
}

function Tooltip({ children, id, top, right, bottom, left }: TooltipProps) {
  return (
    <Portal id={id}>
      <div className={styles.wrapper} style={{ top: top, right: right, bottom: bottom, left: left }}>
        {children}
      </div>
    </Portal>
  )
}

export default Tooltip
