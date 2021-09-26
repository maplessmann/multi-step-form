import { FieldGroup, Label, Input } from './styles'

const Text = ({ label, name, register, ...rest }) => {
  return (
    <FieldGroup>
      <Input name={name} id={name} {...register(name)} {...rest} />
      <Label htmlFor={name}>{label}</Label>
    </FieldGroup>
  )
}

export default Text
