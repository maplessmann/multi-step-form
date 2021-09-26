import TextField from '~/components/Fields/Text'
import Button from '~/components/Button'
import ChevronRightIcon from '~/components/Icon/ChevronRight'
import { FormNavigation } from './styles'

const Form = () => {
  return (
    <form>
      <h2>Personal info</h2>
      <TextField name="first_name" label="First name" />
      <TextField name="last_name" label="Last name" />
      <TextField name="email" label="Email" type="email" required />
      <TextField name="country" label="Country" />
      <FormNavigation>
        <Button icon={ChevronRightIcon}>Submit</Button>
      </FormNavigation>
    </form>
  )
}

export default Form
