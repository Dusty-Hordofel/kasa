import React from "react";
import styles from "./avatar.module.scss";

const Avatar = ({ name, picture }) => {
  return (
    <div className={styles.host}>
      <p>{name}</p>
      <img loading="lazy" src={picture} alt="host" />
    </div>
  );
};

export default Avatar;
