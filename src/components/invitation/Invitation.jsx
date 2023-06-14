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
          <img src={invitation} alt="invitation" />
          <p>Save </p>
          <span> THE</span>
          <p>Date</p>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
