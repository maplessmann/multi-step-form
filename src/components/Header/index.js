import Image from 'next/image'
import { Root } from './styles'

const Header = () => {
  return (
    <Root className="container">
      <Image
        src="/logo-multi-step-form.svg"
        alt="Multi Step Form Logo"
        width={32}
        height={28}
      />
      <h1>Multi Step Form</h1>
    </Root>
  )
}

export default Header
