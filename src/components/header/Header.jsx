import React, { useRef } from "react";
import styles from "./Header.module.css";
import video from "../../assets/video/video3.mp4";
import headerIcon from "../../assets/icons/headerIcon.svg";
import { motion } from "framer-motion";

const Header = ({ refOf }) => {
  const animationRef = useRef({
    hidden: {
      x: -100,
      opacity: 0,
      transition: { y: { stiffness: 1000 } },
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        y: { stiffness: 1000, velocity: -100 },
      },
    }),
  });

  return (
    <motion.main
      initial="hidden"
      whileInView="visible"
      variants={animationRef.current}
      viewport={{ once: true }}
      custom={3.1}
      ref={refOf}
      className={styles.main}
    >
      <video className={styles.main} src={video} autoPlay loop muted />
      <motion.div className={styles.content}>
        <motion.img
          variants={animationRef.current}
          custom={5}
          className={styles.icon2}
          src={headerIcon}
          alt="icon"
        />
        <motion.h1 variants={animationRef.current} custom={6}>
          Ийгилик <span>&</span> Гулбарчын
        </motion.h1>
        <motion.img
          variants={animationRef.current}
          custom={7}
          className={styles.icon}
          src={headerIcon}
          alt="icon"
        />
        <motion.p variants={animationRef.current} custom={8}>
          Мы с радостью приглашаем вас разделить с нами наш
        </motion.p>
        <motion.span variants={animationRef.current} custom={9}>
          самый особый день - день нашей свадьбы!
        </motion.span>
      </motion.div>
    </motion.main>
  );
};

export default Header;
