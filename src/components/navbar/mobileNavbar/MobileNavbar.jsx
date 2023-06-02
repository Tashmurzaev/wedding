import React, { useState } from "react";
import styles from "./MobileNavbar.module.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ModalWindow } from "../../modal/Modal";

export const MobileNavbar = ({ openHandler, closeHandler, scroll }) => {
  const [isModal, setIsModal] = useState(false);
  const modalHandler = () => {
    setIsModal((prevState) => !prevState);
    closeHandler();
  };
  return (
    <div style={{ color: "white" }}>
      <ModalWindow
        onClose={modalHandler}
        open={isModal}
        className={styles.modal}
      ></ModalWindow>
      {openHandler && (
        <Modal
          open={openHandler}
          onClose={closeHandler}
          classNames={{
            overlay: "customOverlay",
            modal: styles.customModal,
            modalAnimationIn: styles.customEnterModalAnimation,
            modalAnimationOut: styles.customLeaveModalAnimation,
          }}
          animationDuration="250"
          closeIcon
        >
          <div className={styles.burgerIcon}>
            <div
              onClick={closeHandler}
              className={`${styles.burger} ${openHandler && styles.active}`}
            >
              <span></span>
              <span className={styles.shortLine}></span>
              <span></span>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.linkBox}>
              <div className={styles.links_title}>
                <p onClick={() => scroll("component1")}> Main</p>
              </div>
              <div className={styles.links_title}>
                <p onClick={() => scroll("component2")}> About</p>
              </div>
              <div className={styles.links_title}>
                <p onClick={() => scroll("component3")}>Contacts</p>
              </div>
              <div className={styles.links_title}>
                <p onClick={() => scroll("component4")}>Photos</p>
              </div>
              <div className={styles.links_title}>
                <p onClick={() => scroll("component5")}>Videos</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
