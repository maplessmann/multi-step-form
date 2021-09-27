import { useRouter } from 'next/router'
import useStore from '~/store/useStore'
import { steps } from '~/utils/form/fields'

const useMultiStepForm = () => {
  const router = useRouter()

  const setFormData = useStore((state) => state.setFormData)
  const step = useStore((state) => state.step)

  const currentStep = steps[step.count]
  const percentageComplete = (100 / steps.length) * (step.count + 1)
  const canRetreatStep = step.count > 0
  const canAdvanceStep = step.count < steps.length - 1

  const onSubmit = (data) => {
    setFormData(data)

    if (canAdvanceStep) {
      step.increase()
    } else {
      step.reset()
    }
  }

  const onPrevStep = () => {
    if (canRetreatStep) {
      step.decrease()
    }
  }

  return {
    currentStep,
    percentageComplete,
    onSubmit,
    onPrevStep,
    canAdvanceStep,
    canRetreatStep,
  }
}

export default useMultiStepForm
