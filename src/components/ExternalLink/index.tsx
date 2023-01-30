import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentProps, ReactNode } from 'react'
import { ExternalLinkContainer } from './styles'

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string
  icon?: ReactNode
  variant?: 'iconLeft'
}

export const ExternallLink = ({
  text,
  icon,
  variant,
  ...rest
}: ExternalLinkProps) => {
  return (
    <ExternalLinkContainer {...rest} variant={variant}>
      {text}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </ExternalLinkContainer>
  )
}
