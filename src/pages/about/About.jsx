import Banner from "../../components/banner/Banner";
import styles from "./about.module.scss";
import Accordion from "../../components/accordion/Accordion";
import { useContext } from "react";
import { DataAvailabilityContext } from "../../components/DataAvailabilityContext";

const About = () => {
  const { accordionData } = useContext(DataAvailabilityContext);

  return (
    <div className={styles.about}>
      <Banner />
      <main className={styles.main}>
        {accordionData.map((data, index) => {
          const { id, title, content } = data;
          return (
            <Accordion key={id} title={title} content={content} index={index} />
          );
        })}
      </main>
    </div>
  );
};

export default About;
