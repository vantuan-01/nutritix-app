import clsx from 'clsx';
import styles from './Loading.module.scss'

function Loading() {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.ui_loader, styles.loader_blk)}>
        <svg viewBox='22 22 44 44' className={styles.multiColor_loader}>
          <circle
            cx='44'
            cy='44'
            r='20.2'
            fill='none'
            strokeWidth='3.6'
            className={clsx(styles.loader_circle, styles.loader_circle_animation)}
          ></circle>
        </svg>
      </div>
    </div>
  )
}

export default Loading;