import React from "react";
import greyStar from "../../assets/grey_star.png";
import redStar from "../../assets/red_star.png";
import styles from "./stars.module.scss";

const Stars = ({ rating }) => {
  return (
    <div className={styles.housing_stars}>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1; // définit la notation de chaque étoile
        return (
          <img
            key={index}
            src={ratingValue <= rating ? redStar : greyStar}
            alt="star"
          />
        );
      })}
    </div>
  );
};

export default Stars;
