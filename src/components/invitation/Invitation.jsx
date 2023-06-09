import React from "react";
import cl from "./Invitation.module.css";
import Title from "../title/Title";

const Invitation = () => {
  return (
    <section className={cl.container}>
      <div className={cl.overlay} />
      <Title style={{ color: "#fff" }} h2="Приглашение" />
    </section>
  );
};

export default Invitation;
