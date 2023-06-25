import React from "react";
import styles from "./Title.module.css";
import icon from "../../assets/icons/titleIcon.svg";

const Title = ({ h2, style }) => {
  return (
    <div className={styles.cont}>
      <h2 style={style} className={styles.title}>
        {h2}
      </h2>
      <img src={icon} alt="icon" />
    </div>
  );
};

export default Title;
