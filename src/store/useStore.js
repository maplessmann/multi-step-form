import create from 'zustand'
import { devtools } from 'zustand/middleware'

const store = (set) => ({
  formData: {},
  setFormData: (formData) => set({ formData }),
  step: {
    count: 0,
    increase: () => {
      set((state) => ({ step: { ...state.step, count: state.step.count + 1 } }))
    },
    decrease: () => {
      set((state) => ({ step: { ...state.step, count: state.step.count - 1 } }))
    },
    reset: () => set((state) => ({ step: { ...state.step, count: 0 } })),
  },
})

export default create(devtools(store, 'Store'))
