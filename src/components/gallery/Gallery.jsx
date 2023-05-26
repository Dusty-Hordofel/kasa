import { useContext } from "react";
// import datas from "../../data/data.json";
import Card from "../card/Card";
import styles from "./gallery.module.scss";
import { DataAvailabilityContext } from "../DataAvailabilityContext";

const Gallery = () => {
  const { homesData } = useContext(DataAvailabilityContext);

  return (
    <section className={styles.gallery}>
      {homesData.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        );
      })}
    </section>
  );
};

export default Gallery;
