import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const currentRoute = window.location.pathname;
  console.log("🚀 ~ file: Navbar.jsx:6 ~ Navbar ~ currentRoute:", currentRoute);
  return (
    <nav className={styles.nav}>
      <ul className={styles.navigation}>
        <li className={currentRoute === "/" ? styles.activeLink : ""}>
          <Link to={`/`}>Accueil</Link>
        </li>

        <li className={currentRoute === "/about" ? styles.activeLink : ""}>
          <Link to={`/about`}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
