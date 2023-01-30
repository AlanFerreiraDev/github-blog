import { PostContentContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighLighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface PostContentProps {
  content: string
}

export const PostContent = ({ content }: PostContentProps) => {
  return (
    <PostContentContainer>
      <ReactMarkdown
        children={content}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighLighter
                children={String(children).replace(/\n$/, '')}
                style={dracula as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      />
    </PostContentContainer>
  )
}
