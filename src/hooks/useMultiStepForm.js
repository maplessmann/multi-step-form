import { useState } from 'react'

import { steps } from '~/utils/form/fields'

const useMultiStepForm = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const currentStep = steps[currentStepIndex]
  const percentageComplete = (100 / steps.length) * (currentStepIndex + 1)
  const canRetreatStep = currentStepIndex > 0
  const canAdvanceStep = currentStepIndex < steps.length - 1

  const onSubmit = (data) => {
    if (canAdvanceStep) {
      setCurrentStepIndex((prev) => prev + 1)
    } else {
      // Submit form
    }

    console.log(data)
  }

  const onPrevStep = () => {
    if (canRetreatStep) {
      setCurrentStepIndex((prev) => prev - 1)
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
