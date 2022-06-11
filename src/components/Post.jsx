import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://avatars.githubusercontent.com/u/72226013?v=4" />
          <div className={styles.authorInfo}>
            <strong>Rafael Manfrim</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="06 de junho às 21:06h" dateTime="08-06-2022 21:06:30">Publicado a 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi earum architecto eligendi vero autem facilis voluptatem placeat excepturi vel tempore inventore minus, incidunt, a consequatur delectus rem hic sapiente quos!</p>
        <p><a href="https://www.linkedin.com/in/rafael-manfrim/">Rafael Manfrim</a></p>
        <p>Até mais</p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Escreva um comentário..." />
        <footer>
          <button>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}