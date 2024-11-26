import { useModal } from './useModal'
import classNames from 'classnames'
import { IconCrossDark, IconEdit, IconTrashDark } from '../icons'

import styles from './Modal.module.css'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  text?: string
  title: string
  children?: React.ReactNode
  maxWidth?: string
  isCrud?: boolean
  deleteItem?: () => void
  editItem?: () => void
  openDeleteModal?: () => void
  openEditModal?: () => void
  idItem?: string
}

export const Modal = ({
  title,
  text,
  children,
  isOpen,
  onClose,
  maxWidth = '488px',
  isCrud = false,
  openDeleteModal,
  openEditModal,
}: ModalProps) => {
  const { modalRef, handleKeyDown, handleCloseModal } = useModal({ isOpen, onClose })
  const stylesModal = classNames(styles.modalWrapper, { [styles.modalHide]: !isOpen })

  return (
    <>
      <dialog
        className={stylesModal}
        style={{ maxWidth: maxWidth }}
        ref={modalRef}
        data-testid="modal"
        onKeyDown={handleKeyDown}>
        <div className={styles.modalMainContent}>
          <div className={styles.modalTitleClose}>
            <h3 className={styles.modalTitle}>{title}</h3>
            <div className={styles.modalControl}>
              {isCrud && (
                <div className={styles.modalCrud}>
                  <button
                    onClick={openEditModal}
                    className={styles.modalCrudButton}>
                    <IconEdit />
                  </button>
                  <button
                    onClick={openDeleteModal}
                    className={styles.modalCrudButton}>
                    <IconTrashDark />
                  </button>
                </div>
              )}
              <button
                role="button"
                className={styles.modalClose}
                data-testid="modal-close-button"
                onClick={() => {
                  handleCloseModal()
                }}>
                <IconCrossDark />
              </button>
            </div>
          </div>
          <div className={styles.modalContent}>
            {text && <p>{text}</p>} {children}
          </div>
        </div>
      </dialog>
    </>
  )
}
