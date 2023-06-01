import { handleChangeSlide, selectCartSlice } from '~/features/CartSlide/CartSlideSlice'
import { useAppDispatch, useAppSelector } from '~/app/hooks'

import Portal from '../Portal/Portal'
import { ReactNode } from 'react'
import styles from './Modal.module.scss'

interface ModalProps {
  children: ReactNode
}

function Modal({ children }: ModalProps) {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(selectCartSlice)

  return (
    <Portal id='modal'>
      <div
        className={isOpen ? styles.modal : styles.modal_slice}
        aria-hidden
        onClick={() => dispatch(handleChangeSlide(false))}
      ></div>
      <div className={styles.modal_content }>{children}</div>
    </Portal>
  )
}

export default Modal
