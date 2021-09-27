import { useForm } from 'react-hook-form'
import useMultiStepForm from '~/hooks/useMultiStepForm'
import Button from '~/components/Button'
import ProgressBar from '~/components/ProgressBar'
import ChevronRightIcon from '~/components/Icon/ChevronRight'
import { FormRoot, Title, FieldsWrapper, FormNavigation } from './styles'

const Form = () => {
  const { register, handleSubmit } = useForm()
  const {
    currentStep,
    percentageComplete,
    onSubmit,
    onPrevStep,
    canAdvanceStep,
    canRetreatStep,
  } = useMultiStepForm()

  const { title, fields } = currentStep

  return (
    <FormRoot onSubmit={handleSubmit(onSubmit)}>
      <ProgressBar percentage={percentageComplete} />
      <Title>{title}</Title>
      <FieldsWrapper>
        {fields.map(({ component: Field, name, ...rest }) => (
          <Field key={name} name={name} register={register} {...rest} />
        ))}
      </FieldsWrapper>
      <FormNavigation>
        {canRetreatStep && (
          <Button
            type="button"
            variant="secondary"
            onClick={onPrevStep}
            icon={ChevronRightIcon}
          />
        )}
        <Button icon={ChevronRightIcon}>
          {canAdvanceStep ? 'Next' : 'Submit'}
        </Button>
      </FormNavigation>
    </FormRoot>
  )
}

export default Form
