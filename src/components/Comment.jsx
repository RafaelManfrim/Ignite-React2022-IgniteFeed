import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/72226013?v=4" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Manfrim</strong>
              <time title="06 de junho às 21:06h" dateTime="08-06-2022 21:06:30">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom dev, parabéns!!!</p>
        </div>
        <footer>
          <button><ThumbsUp /> Aplaudir <span>10</span></button>
        </footer>
      </div>
    </div>
  )
}