import React, { useCallback, useContext, useState } from "react";

import styles from "./collapse.module.scss";
import arrow from "../../assets/arrow.svg";
import { DataAvailabilityContext } from "../DataAvailabilityContext";
import classNames from "classnames";

const Collapse = () => {
  const [isClicked, setIsClicked] = useState(null);
  const { accordionData } = useContext(DataAvailabilityContext);

  const revealDetails = useCallback(
    (index) => {
      if (index === isClicked) {
        return setIsClicked(null);
      }
      setIsClicked(index);
    },
    [isClicked]
  );

  return (
    <ul className={styles.Collapse}>
      {accordionData.map(({ title, content }, index) => (
        <li className={styles.collapse_list_item}>
          <div className={classNames(styles.collapse_description)}>
            <h3 className={styles.collapse_title}>{title}</h3>
            <img
              src={arrow}
              onClick={() => revealDetails(index)}
              className={
                isClicked === index
                  ? styles.collapsed_arrow
                  : styles.collapse_arrow
              }
            />
          </div>
          <div
            className={
              isClicked === index ? styles.show_content : styles.hide_content
            }
          >
            <p>{content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Collapse;
