import { useState, useEffect, useRef } from 'react'

interface UseModalProps {
  isOpen: boolean
  onClose: () => void
}

export const useModal = ({ isOpen = false, onClose }: UseModalProps) => {
  const [isModalOpen, setModalOpen] = useState(isOpen)
  const modalRef = useRef<HTMLDialogElement | null>(null)

  const handleCloseModal = () => {
    if (onClose) {
      onClose()
    }
    setModalOpen(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      handleCloseModal()
    }
  }

  useEffect(() => {
    setModalOpen(isOpen)
  }, [isOpen])

  useEffect(() => {
    const modalElement = modalRef.current
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal()
      } else {
        modalElement.close()
      }
    }
  }, [isModalOpen])

  return { modalRef, handleKeyDown, handleCloseModal }
}
