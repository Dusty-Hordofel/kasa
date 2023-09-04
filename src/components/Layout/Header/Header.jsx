import { Link } from "react-router-dom";
import Logo from "../../../assets/kasa.svg";
import Navbar from "../../navbar/Navbar";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <img loading="lazy" src={Logo} className={styles.image} />
      </a>
      <Navbar />
    </header>
  );
};

export default Header;
