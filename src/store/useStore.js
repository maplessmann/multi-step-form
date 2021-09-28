import create from 'zustand'
import { devtools } from 'zustand/middleware'
import produce from 'immer'

const mutation = {
  increaseStep: (state) => {
    state.step.count += 1
  },
  decreaseStep: (state) => {
    state.step.count -= 1
  },
  resetStep: (state) => {
    state.step.count = 0
  },
}

const store = (set) => ({
  formData: {},
  setFormData: (formData) => set({ formData }),
  step: {
    count: 0,
    increase: () => set(produce(mutation.increaseStep)),
    decrease: () => set(produce(mutation.decreaseStep)),
    reset: () => set(produce(mutation.resetStep)),
  },
})

export default create(devtools(store, 'Store'))
