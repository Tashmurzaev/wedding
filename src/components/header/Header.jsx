import React from "react";
import styles from "./Header.module.css";
import video from "../../assets/video/videoCompress.mp4";

const Header = () => {
  return (
    <main className={styles.main}>
      <video className={styles.main} src={video} autoPlay loop muted />
      <div className={styles.content}>
        <h1>Isabella & Andrew</h1>
        <p>Are getting Married in Event Started!</p>
      </div>
    </main>
  );
};

export default Header;
