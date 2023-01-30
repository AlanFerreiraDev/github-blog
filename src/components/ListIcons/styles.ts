import styled from 'styled-components'

export const ProfileListDescription = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: auto;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0.5rem;
  }
`

interface ProfileListItemProps {
  variant?: 'primary' | 'secondary'
}

export const ProfileListItem = styled.li<ProfileListItemProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 0px;

  color: ${({ theme, variant }) =>
    variant === 'primary'
      ? theme.colors['base-subtitle']
      : theme.colors['base-span']};

  svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${({ theme, variant }) =>
      variant === 'primary'
        ? theme.colors['base-label']
        : theme.colors['base-span']};
  }
`
