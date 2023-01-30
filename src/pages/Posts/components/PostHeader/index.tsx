import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { faCalendar, faComment } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { ExternallLink, ListIcons, Spinner } from '../../../../components'
import { relativeDataFormatter } from '../../../../utils/formatter'
import { IPost } from '../../../Blog'
import { PostHeaderContainer } from './styles'

interface PostHeaderProps {
  postData: IPost
  isLoading: boolean
}

interface IconsListProps {
  icon: IconDefinition
  text: string
  id: string | number
}

export const PostHeader = ({ postData, isLoading }: PostHeaderProps) => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
    // window.history.back()
  }

  const formattedDate = relativeDataFormatter(postData?.created_at)

  const iconsList: IconsListProps[] = [
    {
      icon: faGithub,
      text: postData.user.login,
      id: `${postData.user.login}-github`,
    },
    {
      icon: faCalendar,
      text: formattedDate,
      id: `${postData.created_at}-calendar`,
    },
    {
      icon: faComment,
      text: `${postData.comments} comentários`,
      id: `${postData.comments}-comments`,
    },
  ]

  return (
    <PostHeaderContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <ExternallLink
              as="button"
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="Voltar"
              onClick={goBack}
              variant="iconLeft"
            />
            <ExternallLink
              text="Ver no Github"
              href={postData.html_url}
              target="_blank"
            />
          </header>

          <h1>{postData.title}</h1>

          <ListIcons iconsList={iconsList} variant="secondary" />
        </>
      )}
    </PostHeaderContainer>
  )
}
