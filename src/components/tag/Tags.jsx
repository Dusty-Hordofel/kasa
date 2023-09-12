import React from "react";
import styles from "./tags.module.scss";

const Tags = ({ tags }) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag, index) => {
        return <button key={index}>{tag}</button>;
      })}
    </div>
  );
};

export default Tags;
