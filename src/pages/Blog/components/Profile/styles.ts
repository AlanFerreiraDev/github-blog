import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  min-height: 13.25rem;
  margin-top: -5.5rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ProfilePicture = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;
`

export const ProfileDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
export const ProfileHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

export const ProfileTitle = styled.h1`
  font-size: ${({ theme }) => theme.textSizes['title-title-l']};
  color: ${({ theme }) => theme.colors['base-title']};
  line-height: 1.3;
`

export const ProfileDescription = styled.p``
