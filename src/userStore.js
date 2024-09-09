import { create } from 'zustand'

const useStore = create((set) => ({
  userData: {},
  updateUserData: (data) => set((state) => {
    return { userData: { ...state.userData, ...data } }
  }),
  clearUserData: (data) => set((state) => {
    return { userData: {} }
  }),
}))

export default useStore;