import styles from "./notFound.module.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.infos}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.content}>
          La page que vous recherchez n'existe pas.
        </p>
      </div>
      <Link className={styles.home} to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default NotFound;
