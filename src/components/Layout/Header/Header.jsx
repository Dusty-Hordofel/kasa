import Logo from "../../../assets/kasa.svg";
import Navbar from "../../navbar/Navbar";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} className={styles.image} />
      <Navbar />
    </header>
  );
};

export default Header;
