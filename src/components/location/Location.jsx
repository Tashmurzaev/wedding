import React, { useRef } from "react";
import Title from "../title/Title";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./Location.module.css";
import { motion } from "framer-motion";

const Location = () => {
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
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={styles.container}
    >
      <motion.div variants={componentAnimationRef.current} custom={1}>
        <Title h2="Расположение" />
      </motion.div>
      <motion.div
        variants={componentAnimationRef.current}
        custom={2}
        className={styles.mapContainer}
      >
        <YMaps>
          <Map
            // onLoad={() => setIsLoadingMap(true)}
            className={styles.map}
            defaultState={{
              center: [41.264139, 74.955991],
              zoom: 15,
            }}
            style={{ border: "1px solid silver" }}
          >
            {/* <Placemark
              // geometry={[41.264139, 74.955991]}
              // properties={{
              //   iconContent: "Kaynar Banquet Hall",
              // }}
              // options={{
              //   preset: "islands#blackStretchyIcon",
              //   // draggable: false,
              // }}
            /> */}
          </Map>
        </YMaps>
      </motion.div>
    </motion.section>
  );
};

export default Location;
