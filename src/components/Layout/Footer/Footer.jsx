import Logo from "../../../assets/kasa-footer.svg";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img
        src={Logo}
        className={styles.image}
        alt="Kasa - agence de location d'appartements entre particuliers"
      />
      <p className={styles.copyright}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
