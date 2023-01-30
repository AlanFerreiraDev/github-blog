import styled from 'styled-components'

export const PostsListContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));

  gap: 2rem;
  margin-bottom: 14rem;

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`
