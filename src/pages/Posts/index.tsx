import { useCallback, useEffect, useState } from 'react'
import { PostHeader } from './components/PostHeader'
import { IPost } from '../Blog'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'
import { Spinner } from '../../components'
import { PostContent } from './components/PostContent'

const username = import.meta.env.VITE_GITHUB_USERNAME
const reponame = import.meta.env.VITE_GITHUB_REPONAME

export const Posts = () => {
  const [postData, setPostData] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/repos/${username}/${reponame}/issues/${id}`
      )

      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [postData])

  useEffect(() => {
    getPostDetails()
  }, [])

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <PostHeader postData={postData} isLoading={isLoading} />
          {!isLoading && <PostContent content={postData.body} />}
        </>
      )}
    </>
  )
}
