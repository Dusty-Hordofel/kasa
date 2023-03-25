import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./banner.module.css";

const Banner = () => {
  const [homePage, setHomePage] = useState(false);

  const location = useLocation();
  console.log("🚀 ~ file: Banner.jsx:9 ~ Banner ~ location:", location);

  useEffect(() => {
    if (location.pathname === "/") {
      setHomePage(true);
    }
  }, []);

  return (
    <section className={homePage ? styles.homeBanner : aboutBanner}>
      {homePage && <p>Chez vous, partout et ailleurs</p>}
    </section>
  );
};

export default Banner;
