import { useCallback, useEffect, useState } from 'react'
import { ExternallLink, ListIcons, Spinner } from '../../../../components'
import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { api } from '../../../../lib/axios'

import {
  ProfileContainer,
  ProfileDescription,
  ProfileDetails,
  ProfileHeader,
  ProfilePicture,
  ProfileTitle,
} from './styles'

const username = import.meta.env.VITE_GITHUB_USERNAME

export interface ProfileProps {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: number
}

interface IconsListProps {
  icon: IconDefinition
  text: string
  id: string | number
}

export const Profile = () => {
  const [profileData, setProfileData] = useState<ProfileProps>(
    {} as ProfileProps,
  )
  const [isLoading, setisLoading] = useState(true)

  const getProfileData = useCallback(async () => {
    try {
      setisLoading(true)
      const response = await api.get(`/users/${username}`)
      setProfileData(response.data)
    } finally {
      setisLoading(false)
    }
  }, [])

  const iconsList: IconsListProps[] = [
    {
      icon: faGithub,
      text: profileData.login,
      id: `${profileData.login}-github`,
    },
    {
      icon: faBuilding,
      text: profileData.company ?? 'Sem companhia',
      id: `${profileData.login}-company`,
    },
    {
      icon: faUserGroup,
      text: `${profileData.followers} seguidores`,
      id: `${profileData.login}-followers`,
    },
  ]

  useEffect(() => {
    getProfileData()
  }, [])

  return (
    <ProfileContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ProfilePicture src={profileData.avatar_url} />

          <ProfileDetails>
            <ProfileHeader>
              <ProfileTitle>{profileData.name}</ProfileTitle>

              <ExternallLink
                text="GitHub"
                href={profileData.html_url}
                taget="_blank"
              />
            </ProfileHeader>

            <ProfileDescription>{profileData.bio}</ProfileDescription>

            <ListIcons iconsList={iconsList} />
          </ProfileDetails>
        </>
      )}
    </ProfileContainer>
  )
}
