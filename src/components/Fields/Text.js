import { FieldGroup, Label, Input } from './styles'

const Text = ({ label, name, ...rest }) => {
  return (
    <FieldGroup>
      <Input name={name} id={name} {...rest} />
      <Label htmlFor={name}>{label}</Label>
    </FieldGroup>
  )
}

export default Text
