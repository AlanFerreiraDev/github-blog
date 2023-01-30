import { HeaderContainer } from './styles'
import logoSrc from '../../assets/logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <img
        src={logoSrc}
        alt="Imagem de fundo com logo de caracteres > e _ com o nome GitHub Blog"
      />
    </HeaderContainer>
  )
}
