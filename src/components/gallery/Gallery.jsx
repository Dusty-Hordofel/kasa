import datas from "../../data/data.json";
import Card from "../card/Card";
import styles from "./gallery.module.scss";

console.log("🚀 ~ file: Gallery.js:2 ~ datas:", datas);

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      {datas.map((data) => {
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
