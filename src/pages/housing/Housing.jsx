import { useEffect, useState } from "react";
import styles from "./housing.module.scss";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import Slider from "../../components/Slider/Slider";
// import { DataAvailabilityContext } from "../../components/DataAvailabilityContext";
import greyStar from "../../assets/grey_star.png";
import redStar from "../../assets/red_star.png";
import Accordion from "../../components/accordion/Accordion";

const Housing = ({ data }) => {
  const [sliderImages, setSliderImages] = useState([]);

  // const { homesData } = useContext(DataAvailabilityContext);
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
          <div className={styles.tags}>
            {tags.map((tag, index) => {
              return <button key={index}>{tag}</button>;
            })}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.host}>
            <p>{host.name}</p>
            <img loading="lazy" src={host.picture} alt="host" />
          </div>
          <div className={styles.housing_stars}>
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <img
                  key={index}
                  src={ratingValue <= rating ? redStar : greyStar}
                  alt="star"
                />
              );
            })}
          </div>
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
