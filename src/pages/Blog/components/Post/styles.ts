import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostContainer = styled(Link)`
  width: 100%;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors['base-post']};
  border: 2px solid ${({ theme }) => theme.colors['base-post']};
  padding: 2rem;
  transition: 0.4s;

  &:hover {
    border-color: ${({ theme }) => theme.colors['base-label']};
  }
`

export const PostHeader = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.25rem;
`
export const PostTitle = styled.strong`
  flex: 1;
  font-size: ${({ theme }) => theme.textSizes['title-title-m']};
  color: ${({ theme }) => theme.colors['base-title']};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`

export const PostDate = styled.span`
  width: max-content;
  font-size: ${({ theme }) => theme.textSizes['text-text-s']};
  color: ${({ theme }) => theme.colors['base-span']};
`

export const PostContent = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`
