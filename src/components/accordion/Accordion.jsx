import { useState } from "react";

import styles from "./accordion.module.scss";
import arrow from "../../assets/arrow.svg";
import classNames from "classnames";

const Accordion = ({ title, content }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={styles.Collapse}>
      <div className={classNames(styles.collapse_description)}>
        <h3 className={styles.collapse_title}>{title}</h3>
        <img
          src={arrow}
          onClick={handleClicked}
          className={isClicked ? styles.collapsed_arrow : styles.collapse_arrow}
        />
      </div>
      <div className={isClicked ? styles.show_content : styles.hide_content}>
        {Array.isArray(content)
          ? content.map((item, index) => <p key={index}>{item}</p>)
          : content}
        {/* if content is Array we map that array and display each item , else we just  display it} */}
      </div>
    </div>
  );
};
export default Accordion;
