import { Link } from "react-router-dom";
import styles from "./card.module.scss";

const Card = ({ id, title, cover }) => {
  return (
    <div className={styles.card}>
      <Link to={`/housing/${id}`}>
        <img loading="lazy" src={cover} alt={title} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
      </Link>
    </div>
  );
};

export default Card;
