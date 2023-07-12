import React from "react";
import styles from "./Footer.module.css";
import invitation from "../../assets/icons/invitationFooter.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.text}>
          22-июль, 2023 в 18:00, Карабагыш-Ата ресторан, <br /> Село Баетово,
          Нарын
        </div>
        <div className={styles.names}>
          <img className={styles.img} src={invitation} alt="invitation" />
          <p>Ийгилик </p>
          <small> & </small>
          <p>Гулбарчын </p>
          <img className={styles.img2} src={invitation} alt="invitation" />
        </div>
        <div>
          <p>Tel.: +996 707 243 734</p>
          {/* <p>E-mail: isabella.andrew@example.com</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
