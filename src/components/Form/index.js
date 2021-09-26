import TextField from '~/components/Fields/Text'
import Button from '~/components/Button'
import ProgressBar from '~/components/ProgressBar'
import ChevronRightIcon from '~/components/Icon/ChevronRight'
import { Title, FieldsWrapper, FormNavigation } from './styles'

const Form = () => {
  return (
    <form>
      <ProgressBar percentage={33} />
      <Title>Personal info</Title>
      <FieldsWrapper>
        <TextField name="first_name" label="First name" />
        <TextField name="last_name" label="Last name" />
        <TextField name="email" label="Email" type="email" required />
        <TextField name="country" label="Country" />
      </FieldsWrapper>
      <FormNavigation>
        <Button icon={ChevronRightIcon}>Submit</Button>
      </FormNavigation>
    </form>
  )
}

export default Form
