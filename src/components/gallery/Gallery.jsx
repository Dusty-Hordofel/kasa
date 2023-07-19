import { useContext } from "react";
// import datas from "../../data/data.json";
import Card from "../card/Card";
import styles from "./gallery.module.scss";
import { DataAvailabilityContext } from "../DataAvailabilityContext";

const Gallery = ({ data }) => {
  return (
    <section className={styles.gallery}>
      {data.map((content) => {
        return (
          <Card
            key={content.id}
            id={content.id}
            title={content.title}
            cover={content.cover}
          />
        );
      })}
    </section>
  );
};

export default Gallery;
