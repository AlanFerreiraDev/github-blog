import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileListDescription, ProfileListItem } from './styles'

type IconsListProps = {
  icon: IconDefinition
  text: string
  id: string | number
}

interface ListIconProps {
  iconsList: IconsListProps[]
  variant?: 'primary' | 'secondary'
}

export const ListIcons = ({
  iconsList,
  variant = 'primary',
}: ListIconProps) => {
  return (
    <ProfileListDescription>
      {iconsList.map(({ icon, text, id }) => (
        <ProfileListItem key={id} variant={variant}>
          <FontAwesomeIcon icon={icon} />
          <span>{text}</span>
        </ProfileListItem>
      ))}
    </ProfileListDescription>
  )
}
