import React from "react";
import styles from "./Header.module.css";
import video from "../../assets/video/video3.mp4";
import headerIcon from "../../assets/icons/headerIcon.svg";

const Header = ({ refOf }) => {
  return (
    <main ref={refOf} className={styles.main}>
      <video className={styles.main} src={video} autoPlay loop muted />
      <div className={styles.content}>
        <img className={styles.icon2} src={headerIcon} alt="icon" />
        <h1>
          Kurapika <span>&</span> Alluka
        </h1>
        <img className={styles.icon} src={headerIcon} alt="icon" />
        <p>Are getting Married</p>
        <span> in Event Started!</span>
      </div>
    </main>
  );
};

export default Header;
