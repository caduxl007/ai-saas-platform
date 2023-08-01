import { create } from 'zustand'

interface UseProModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useProModal = create<UseProModalStore>((set) => {
  return {
    isOpen: false,
    onOpen: () =>
      set({
        isOpen: true,
      }),
    onClose: () =>
      set({
        isOpen: false,
      }),
  }
})
