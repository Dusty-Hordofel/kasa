import { Link } from "react-router-dom";
import styles from "./card.module.scss";

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/housing/${id}`} className={styles.cards}>
      <img src={cover} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
    </Link>
  );
};

export default Card;
