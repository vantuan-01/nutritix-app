import { ReactNode, useState } from 'react'

import Portal from '../Portal'
import styles from './Modal.module.scss'

interface ModalProps {
  children: ReactNode
}

function Modal({ children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Portal id='modal'>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.modal_overlay} onClick={() => setIsOpen(false)} aria-hidden='true'></div>
          <div className={styles.modal}>{children}</div>
        </div>
      </div>
    </Portal>
  )
}

export default Modal
