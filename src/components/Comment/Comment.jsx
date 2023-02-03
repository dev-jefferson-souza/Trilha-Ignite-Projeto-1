import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  function handleDeleComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        src="https://github.com/dev-jefferson-souza.png"
        hasBorder={false}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jefferson Souza</strong>
              <time
                title="03 de Fevereiro às 08:13h"
                dateTime="2023-02-03 08:13:30"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button
              title="Deletar comentário"
              onClick={() => handleDeleComment()}
            >
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button title="Aplaudir comentário">
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
