import { ButtonRoot } from './styles'

const Button = ({ children, icon: Icon, ...rest }) => {
  return (
    <ButtonRoot {...rest}>
      {children}
      {Icon && <Icon />}
    </ButtonRoot>
  )
}

export default Button
