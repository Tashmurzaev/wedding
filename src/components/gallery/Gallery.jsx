import React, { useRef } from "react";
import cl from "./Gallery.module.css";
import slide1 from "../../assets/img/flower.jpeg";
import slide4 from "../../assets/img/flower4.webp";
import slide2 from "../../assets/img/gallery-img2.jpeg";
// import slide5 from "../../assets/img/gallery-img2.jpeg";
import slide5 from "../../assets/img/3.png";
// import slide3 from "../../assets/img/gallery-img3.jpeg";
import slide3 from "../../assets/img/1.jpg";
// import slide6 from "../../assets/img/gallery-img3.jpeg";
import slide6 from "../../assets/img/1.jpg";
import image from "../../assets/icons/flower-large.svg";
import Title from "../title/Title";
import { motion } from "framer-motion";

const Gallery = ({ refOf }) => {
  const componentAnimationRef = useRef({
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      // variants={componentAnimationRef.current}
      // viewport={{ once: false }}
      // custom={1}
    >
      <motion.div
        variants={componentAnimationRef.current}
        custom={2}
        ref={refOf}
        style={{ marginTop: "130px", marginBottom: "100px" }}
      >
        <Title h2="Свадебная галерея" />
        <img className={cl.icon} src={image} alt="flower" />
      </motion.div>
      <section className={cl.slider}>
        <div className={cl.slideTrack}>
          <motion.div
            variants={componentAnimationRef.current}
            custom={3}
            className={cl.slide}
          >
            <img className={cl.img} src={slide1} alt="img" />
          </motion.div>
          <motion.div
            variants={componentAnimationRef.current}
            custom={4}
            className={cl.slide}
          >
            <img className={cl.img} src={slide2} alt="img" />
          </motion.div>
          <motion.div
            variants={componentAnimationRef.current}
            custom={5}
            className={cl.slide}
          >
            <img className={cl.img} src={slide3} alt="img" />
          </motion.div>
          <motion.div
            variants={componentAnimationRef.current}
            custom={6}
            className={cl.slide}
          >
            <img className={cl.img} src={slide4} alt="img" />
          </motion.div>
          <motion.div
            variants={componentAnimationRef.current}
            custom={7}
            className={cl.slide}
          >
            <img className={cl.img} src={slide5} alt="img" />
          </motion.div>
          <motion.div
            variants={componentAnimationRef.current}
            custom={8}
            className={cl.slide}
          >
            <img className={cl.img} src={slide6} alt="img" />
          </motion.div>
          {/* <div className={cl.slide}>
            <img className={cl.img} src={slide7} alt="img" />
          </div> */}
          <motion.div
            variants={componentAnimationRef.current}
            custom={9}
            className={cl.slide}
          >
            <img className={cl.img} src={slide1} alt="img" />
          </motion.div>
          <motion.div
            variants={componentAnimationRef.current}
            custom={10}
            className={cl.slide}
          >
            <img className={cl.img} src={slide2} alt="img" />
          </motion.div>
          <motion.div
            variants={componentAnimationRef.current}
            custom={11}
            className={cl.slide}
          >
            <img className={cl.img} src={slide3} alt="img" />
          </motion.div>
          <motion.div
            variants={componentAnimationRef.current}
            custom={12}
            className={cl.slide}
          >
            <img className={cl.img} src={slide4} alt="img" />
          </motion.div>
          <motion.div
            variants={componentAnimationRef.current}
            custom={13}
            className={cl.slide}
          >
            <img className={cl.img} src={slide5} alt="img" />
          </motion.div>
          <motion.div
            variants={componentAnimationRef.current}
            custom={14}
            className={cl.slide}
          >
            <img className={cl.img} src={slide6} alt="img" />
          </motion.div>
          {/* <div className={cl.slide}>
            <img className={cl.img} src={slide7} alt="img" />
          </div> */}
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;
