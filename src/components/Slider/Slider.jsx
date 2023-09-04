// import "./slider.scss";
// import ArrowRight from "../../assets/chevron_carousel_right.png";
// import ArrowLeft from "../../assets/chevron_carousel_left.png";
import { useContext, useState } from "react";
import { DataAvailabilityContext } from "../DataAvailabilityContext";
import Arrow from "../../icons/Arrow";
import styles from "./slider.module.scss";

export default function Slider({ sliderImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === sliderImages.length - 1) setCurrentIndex(0);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) setCurrentIndex(sliderImages.length - 1);
  };

  return (
    <section
      style={{
        backgroundImage: `url(${sliderImages[currentIndex]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "25px",
      }}
      className={styles.slider}
    >
      {sliderImages.length > 1 && (
        <div className={styles.slider_direction}>
          <div onClick={prevSlide}>
            <Arrow className={styles.slider_arrow_left} fill="white" />
          </div>
          <div onClick={nextSlide}>
            <Arrow className={styles.slider_arrow_right} fill="white" />
          </div>
          <p className={styles.sliderCount}>
            {currentIndex + 1} / {sliderImages.length}
          </p>
        </div>
      )}
    </section>
  );
}
