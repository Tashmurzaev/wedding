import React, { useRef } from "react";
import cl from "./Invitation.module.css";
import Title from "../title/Title";
import invitation from "../../assets/icons/invitation.svg";
import { motion } from "framer-motion";

const Invitation = ({ refOf }) => {
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
      className={cl.container}
      ref={refOf}
    >
      <div className={cl.overlay} />
      <motion.div variants={componentAnimationRef.current} custom={1}>
        <Title style={{ color: "#fff" }} h2="Приглашение" />
      </motion.div>
      <div className={cl.innerContainer}>
        <motion.div
          variants={componentAnimationRef.current}
          custom={2}
          className={cl.rightSide}
        >
          <img className={cl.img} src={invitation} alt="invitation" />
          <p>Сохраните </p>
          <span> эту</span>
          <p>Дату! </p>
          <img className={cl.img2} src={invitation} alt="invitation" />
        </motion.div>
        <motion.div
          variants={componentAnimationRef.current}
          custom={3}
          className={cl.leftSide}
        >
          <h2>
            Ийгилик <small>&amp;</small> Гулбарчын
          </h2>
          <p> приглашаем вас на нашу свадьбу!</p>

          <div className={cl.date}>
            22-июль, 2023<small>в 18:00</small>
          </div>
          <div className={cl.uppercase}>
            Карабагыш-Ата ресторан, <br />
            Село Баетово, Нарын
          </div>
          {/* <h5>Последующий прием</h5> */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Invitation;
