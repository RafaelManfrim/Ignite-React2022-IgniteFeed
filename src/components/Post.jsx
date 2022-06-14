import { format, formatDistanceToNow } from 'date-fns'
import { useState } from 'react'
import { ptBR } from 'date-fns/locale'

import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(['Post muito top!'])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleSubmitComment() {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function deleteComment(commentToDelete) {
    const newComments = comments.filter(comment => comment !== commentToDelete)
    setComments(newComments)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(line => {
          if (line.type === "paragraph") {
            return <p key={line}>{line.content}</p>
          } else if (line.type === "link") {
            return <p key={line}><a>{line.content}</a></p>
          }
        })}
      </div>
      <form onSubmit={handleSubmitComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Escreva um comentário..."
          value={newCommentText}
          onChange={e => setNewCommentText(e.target.value)}
        />
        <footer>
          <button disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment content={comment} key={comment} onDeleteComment={deleteComment} />
        ))}
      </div>
    </article>
  )
}