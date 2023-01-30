import { IPost } from '../..'
import { relativeDataFormatter } from '../../../../utils/formatter'
import {
  PostContainer,
  PostContent,
  PostDate,
  PostHeader,
  PostTitle,
} from './styles'

interface PostProps {
  post: IPost
}

export const Post = ({ post }: PostProps) => {
  const formattedDate = relativeDataFormatter(post.created_at)

  return (
    <PostContainer to={`/post/${post.number}`}>
      <PostHeader>
        <PostTitle>{post.title}</PostTitle>
        <PostDate>{formattedDate}</PostDate>
      </PostHeader>

      <PostContent>{post.body}</PostContent>
    </PostContainer>
  )
}
