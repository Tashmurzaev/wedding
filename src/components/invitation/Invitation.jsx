import React from "react";
import cl from "./Invitation.module.css";
import Title from "../title/Title";
import invitation from "../../assets/icons/invitation.svg";

const Invitation = () => {
  return (
    <section className={cl.container}>
      <div className={cl.overlay} />
      <Title style={{ color: "#fff" }} h2="Invitation" />
      <div className={cl.innerContainer}>
        <div className={cl.rightSide}>
          <img className={cl.img} src={invitation} alt="invitation" />
          <p>Save </p>
          <span> THE</span>
          <p>Date</p>
          <img className={cl.img2} src={invitation} alt="invitation" />
        </div>
        <div className={cl.leftSide}>
          <h2>
            Kurapika <small>&amp;</small> Alluka
          </h2>
          <p>Request the honor of your presence on their wedding day</p>

          <div className={cl.date}>
            Jule 24, 2023<small>at 06:00 pm</small>
          </div>
          <div className={cl.uppercase}>
            Kaynar, банкетный <br /> зал, Сухэ-Батора, 1/2, Бишкек
          </div>
          <h5>Reception to follow</h5>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
