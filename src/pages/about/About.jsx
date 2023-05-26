import { useContext } from "react";
import { DataAvailabilityContext } from "../../components/DataAvailabilityContext";
import Banner from "../../components/banner/Banner";
import Collapse from "../../components/collapse/Collapse";
import styles from "./about.module.scss";

const About = () => {
  return (
    <div>
      <Banner />
      <main className={styles.main}>
        <div>
          <Collapse />
        </div>
      </main>
    </div>
  );
};

export default About;
