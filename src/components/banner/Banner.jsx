import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./banner.module.scss";

const Banner = () => {
  const [homePage, setHomePage] = useState(false);

  const location = useLocation(); //useLocation() is a hook that returns the location object that represents the current URL. It's useful for accessing the information about the current URL without having to pass props through several components.

  useEffect(() => {
    if (location.pathname === "/") {
      setHomePage(true);
    }
  }, []);

  return (
    <section className={homePage ? styles.homeBanner : styles.aboutBanner}>
      {homePage && (
        <p className={styles.message}>Chez vous, partout et ailleurs</p>
      )}
    </section>
  );
};

export default Banner;
