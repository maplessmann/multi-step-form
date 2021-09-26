import classNames from 'classnames'
import { ButtonRoot } from './styles'

const Button = ({ children, icon: Icon, variant, ...rest }) => {
  return (
    <ButtonRoot
      className={classNames('button', { [variant]: variant })}
      {...rest}
    >
      {children}
      {Icon && <Icon />}
    </ButtonRoot>
  )
}

export default Button
