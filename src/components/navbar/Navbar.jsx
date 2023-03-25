import styles from "./navbar.module.scss";

const Navbar = () => {
  const currentRoute = window.location.pathname;
  console.log("🚀 ~ file: Navbar.jsx:6 ~ Navbar ~ currentRoute:", currentRoute);
  return (
    <nav className={styles.nav}>
      <ul className={styles.navigation}>
        <li className={currentRoute === "/" ? styles.activeLink : ""}>
          <a href={`/`}> Accueil</a>
        </li>

        <li className={currentRoute === "/about" ? styles.activeLink : ""}>
          <a href={`/about`}> A Propos</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
