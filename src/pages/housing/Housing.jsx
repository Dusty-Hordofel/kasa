import { useEffect, useState } from "react";
import styles from "./housing.module.scss";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import Slider from "../../components/Slider/Slider";
import greyStar from "../../assets/grey_star.png";
import redStar from "../../assets/red_star.png";
import Accordion from "../../components/accordion/Accordion";
import Avatar from "../../components/avatar/Avatar";
import Tags from "../../components/tag/Tags";
import Stars from "../../components/stars/Stars";

const Housing = ({ data }) => {
  const [sliderImages, setSliderImages] = useState([]);

  const { id } = useParams();

  const currentHomeData = data.find((home) => home.id === id);
  const {
    description,
    equipments,
    title,
    location,
    tags,
    host,
    pictures,
    rating,
  } = currentHomeData;

  useEffect(() => {
    setSliderImages(pictures);
  }, [id]);

  return (
    <div className={styles.housing}>
      <Slider sliderImages={sliderImages} />
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.title}>
            <h1>{title}</h1>
            <p>{location}</p>
          </div>
          <Tags tags={tags} />
        </div>

        <div className={styles.right}>
          <Avatar name={host.name} picture={host.picture} />
          <Stars rating={rating} />
        </div>
      </div>

      <div className={styles.accordion}>
        <Accordion title={"Description"} content={description} />
        <Accordion title={"Équipements"} content={equipments} />
      </div>
    </div>
  );
};

export default Housing;
